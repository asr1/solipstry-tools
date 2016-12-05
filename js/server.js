    /**
     * This is our Node.JS code, running server-side.
     */
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
var mysql = require('mysql');
var ioPort  = 5000;
var serverPort  = 4000;
	
var connection = mysql.createConnection(
    {
        host: 'us-cdbr-azure-central-a.cloudapp.net',
        user: 'b644355019a7e3',
        password: 'a49f6eaf',
        database: 'acsm_adee775353eea60',
    }
);

connection.connect();
	
	/**
         * Here you can route or process the page based on request.url,
         * or you may want to use a module such as node-router.
         */
	/*
    http.createServer(function(request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        
        
         
        response.end();
    }).listen(port);
    sys.puts('Server listening on port ' + port);
	*/
	
	//When somebody connects, add these handlers
io.sockets.on('connection', function (socket) {
    socket.On('SpecificAbilityRequest', function (abilityObject) {
        if (abilityObject == null || abilityObject.ItemID == undefined) {
            return;
        }
        querySpecificAbility(abilityObject,function(ability){socket.emit('SpecificAbilityResult', ability);});
    });
    socket.On('SpecificEquipmentRequest', function (equipmentObject) {
        if (equipmentObject == null || equipmentObject.ItemID == undefined) {
            return;
        }
        querySpecificEquipment(equipmentObject,function(equipment){socket.emit('SpecificEquipmentResult', equipment);});
    });
    socket.On('SpecificMonsterRequest', function (monsterObject) {
        if (monsterObject == null || monsterObject.ItemID == undefined) {
            return;
        }
        querySpecificMonster(monsterObject,function(monster){socket.emit('SpecificMonsterResult', monster);})
    });
    socket.On('SpecificNPCRequest', function (NPCObject) {
        if (NPCObject == null || NPCObject.ItemID == undefined) {
            return;
        }
        querySpecificNPC(NPCObject,function(NPC){socket.emit('SpecificNPCResult', NPC);})
    });
    socket.On('SpecificTalentRequest', function (talentObject) {
        if (talentObject == null || talentObject.ItemID == undefined) {
            return;
        }
        querySpecificTalent(talentObject,function(talent){socket.emit('SpecificTalentResult', talent);})
    });
    socket.On('ShallowQueryRequest', function (tables, tags) {
        shallowQuery(tables, tags, function (results) {
            socket.emit('ShallowQueryResult', results);
        });
    });
});

//io.listen(ioPort);
//server.listen(serverPort);
server.listen(4000);
console.log("app server readied");
io.listen(5000);
console.log("Web sockets readied");

//PostObject Methods
function postAbility(abilityObject){
    if(abilityObject.ItemID==undefined||abilityObject.ItemID==null){
        //insert
        connection.query("INSERT INTO ABILITIES")
    }
    else{
        //update
    }
}
//QuerySpecific Methods
function querySpecificAbility(abilityObject,callback) {
        connection.query("SELECT * FROM ABILITIES WHERE ITEM_ID = "+abilityObject.ItemID+";", function(err,rows){
            if(err){
                console.log("QuerySpecificAbility SQL ERROR: " + err);
            }
            else{
                var rowComplete = function (ability) {
                    callback(ability);
                }
                toAbility(rows[0], true, rowComplete);
            }
        });
}
function querySpecificEquipment(equipmentObject,callback) {
        connection.query("SELECT * FROM EQUIPMENT WHERE ITEM_ID = "+equipmentObject.ItemID+";", function(err,rows){
            if(err){
                console.log("querySpecificEquipment SQL ERROR: " + err);
            }
            else{
                var rowComplete = function (equipment) {
                    callback(equipment);
                }
                toEquipment(rows[0], true, rowComplete);
            }
        });
}
function querySpecificMonster(monsterObject,callback) {
        connection.query("SELECT * FROM MONSTERS WHERE ITEM_ID = "+monsterObject.ItemID+";", function(err,rows){
            if(err){
                console.log("querySpecificMonster SQL ERROR: " + err);
            }
            else{
                var rowComplete = function (monster) {
                    callback(monster);
                }
                toMonster(rows[0], true, rowComplete);
            }
        });
}
function querySpecificNPC(NPCObject,callback) {
        connection.query("SELECT * FROM NPCS WHERE ITEM_ID = "+NPCObject.ItemID+";", function(err,rows){
            if(err){
                console.log("querySpecificNPC SQL ERROR: " + err);
            }
            else{
                var rowComplete = function (NPC) {
                    callback(NPC);
                }
                toNPC(rows[0], true, rowComplete);
            }
        });
}
function querySpecificTalent(talentObject,callback) {
        connection.query("SELECT * FROM ABILITIES WHERE ITEM_ID = "+talentObject.ItemID+";", function(err,rows){
            if(err){
                console.log("querySpecificTalent SQL ERROR: " + err);
            }
            else{
                var rowComplete = function (talent) {
                    callback(talent);
                }
                toTalent(rows[0], true, rowComplete);
            }
        });
}
//ShallowQuery Methods
function shallowQuery(tables, tags, callback) {
    if (tables == null || tables.length == 0) {
        return;
    }
    var queriesActive = 0;
    var abilities = [];
    var equipment = [];
    var monsters = [];
    var npcs = [];
    var talents = [];
    for (var i in tables) {
        var table = tables[i];
        if (table == "ABILITIES" || table == "EQUIPMENT" || table == "MONSTERS" || table == "NPCS" || table == "TALENTS") {
            queriesActive++;
            var itemName = "";
            var queryFunction;
            var finishQuery = function () {
                queriesActive--;
                if (queriesActive == 0) {
                    callback([abilities, equipment, monsters, npcs, talents]);
                }
            }
            var queryAblities = function () {
                connection.query(sql, function (err, rows) {
                    if (err) {
                        console.log("shallowQuery ABILITY SQL ERROR: " + err)
                    }
                    else {
                        if (rows.length == 0) {
                            finishQuery();
                        }
                        var rowsProcessed = 0;
                        var processRow = function (input) {
                            abilities.push(input);
                            rowsProcessed++;
                            if (rowsProcessed == rows.length) {
                                finishQuery();
                            }
                        }
                        for (var i of rows) {
                            toAbility(i, false, processRow);
                        }
                    }
                });
            }
            var queryEquipment = function () {
                connection.query(sql, function (err, rows) {
                    if (err) {
                        console.log("shallowQuery ABILITY SQL ERROR: " + err)
                    }
                    else {
                        if (rows.length == 0) {
                            finishQuery();
                        }
                        var rowsProcessed = 0;
                        var processRow = function (input) {
                            equipment.push(input);
                            rowsProcessed++;
                            if (rowsProcessed == rows.length) {
                                finishQuery();
                            }
                        }
                        for (var i of rows) {
                            toEquipment(i, false, processRow);
                        }
                    }
                });
            }
            var queryMonsters = function () {
                connection.query(sql, function (err, rows) {
                    if (err) {
                        console.log("shallowQuery ABILITY SQL ERROR: " + err)
                    }
                    else {
                        if (rows.length == 0) {
                            finishQuery();
                        }
                        var rowsProcessed = 0;
                        var processRow = function (input) {
                            monsters.push(input);
                            rowsProcessed++;
                            if (rowsProcessed == rows.length) {
                                finishQuery();
                            }
                        }
                        for (var i of rows) {
                            toMonster(i, false, processRow);
                        }
                    }
                });
            }
            var queryNPCs = function () {
                connection.query(sql, function (err, rows) {
                    if (err) {
                        console.log("shallowQuery ABILITY SQL ERROR: " + err)
                    }
                    else {
                        if (rows.length == 0) {
                            finishQuery();
                        }
                        var rowsProcessed = 0;
                        var processRow = function (input) {
                            npcs.push(input);
                            rowsProcessed++;
                            if (rowsProcessed == rows.length) {
                                finishQuery();
                            }
                        }
                        for (var i of rows) {
                            toNPC(i, false, processRow);
                        }
                    }
                });
            }
            var queryTalents = function () {
                connection.query(sql, function (err, rows) {
                    if (err) {
                        console.log("shallowQuery ABILITY SQL ERROR: " + err)
                    }
                    else {
                        if (rows.length == 0) {
                            finishQuery();
                        }
                        var rowsProcessed = 0;
                        var processRow = function (input) {
                            talents.push(input);
                            rowsProcessed++;
                            if (rowsProcessed == rows.length) {
                                finishQuery();
                            }
                        }
                        for (var i of rows) {
                            toTalent(i, false, processRow);
                        }
                    }
                });
            }
            if (table == "ABILITIES") {
                itemName = "ABILITY_NAME";
                queryFunction = queryAblities;
            }
            else if (table == "EQUIPMENT") {
                itemName = "EQUIPMENT_NAME";
                queryFunction = queryEquipment;
            }
            else if (table == "MONSTERS") {
                itemName = "MONSTER_NAME";
                queryFunction = queryMonsters;
            }
            else if (table == "NPCS") {
                itemName = "NPC_NAME";
                queryFunction = queryNPCs;
            }
            else {
                itemName = "TALENT_NAME";
                queryFunction = queryTalents;
            }
            var sql = "SELECT O.* FROM " + table + " O";
            if (tags != null && tags.length > 0) {
                sql += ", ENTITY_TAGS T  WHERE ";
                for (var i = 0; i < tags.length; i++) {
                    var tag = mysql.escape(tags[i]);
                    if (i == 0) {
                        sql += "((O." + itemName + " LIKE '%" + tag.substr(1, tag.length - 2) + "%') OR (T.TAG = " + tag + " AND T.ENTITY_ID = O.ITEM_ID AND T.ENTITY_TYPE = '" + table + "'))"
                    }
                    else {
                        sql += "OR ((O." + itemName + " LIKE '%" + tag.substr(1, tag.length - 2) + "%') OR (T.TAG = " + tag + " AND T.ENTITY_ID = O.ITEM_ID AND T.ENTITY_TYPE = '" + table + "'))"
                    }
                }
                sql += ";";
            }
            console.log(sql);
            queryFunction();
        }
    }
}
//Cast Methods
function toAbility(RowPacket, isShallow, callback) {
    var tagsSet = false;
    var prerequisitesSet = false;
    var ability = new Ability(RowPacket.ITEM_ID,
                        RowPacket.ABILITY_NAME,
                        RowPacket.IMAGE_PATH,
                        RowPacket.SKILL,
                        RowPacket.COST,
                        RowPacket.DESCRIPTION,
                        RowPacket.FLAVOR,
                        RowPacket.IS_HOMEBREW,
                        RowPacket.CREATED_BY,
                        RowPacket.CREATED_DATE,
                        RowPacket.MODIFIED_BY,
                        RowPacket.MODIFIED_DATE,
                        null,
                        null);
    if (isShallow) {
        var processCallback = function () {
            if (prerequisitesSet && tagsSet) {
                if (callback) callback(ability);
                return ability;
            }
        }
        var addTags = function (tags, callback) {
            ability.Tags = tags;
            tagsSet = true;
            processCallback()
        }
        var addPrerequisites = function (prerequisites, callback) {
            ability.Prerequisites = prerequisites;
            prerequisitesSet = true;
            processCallback()
        }
        FetchPrerequisites(RowPacket.ITEM_ID, 'ABILITIES', addPrerequisites);
        FetchTags(RowPacket.ITEM_ID, 'ABILITIES', addTags);
    }
    else {
        if (callback) callback(ability);
        return ability;
    }
}
function toAttack(RowPacket) {
    var attack = new Attack(RowPacket.MOB_ID,
                        RowPacket.MOB_TYPE,
                        RowPacket.ATTACK_NAME,
                        RowPacket.ATTACK_BONUS,
                        RowPacket.ATTACK_RANGE,
                        RowPacket.DAMAGE,
                        RowPacket.DESCRIPTION,
                        RowPacket.FLAVOR,
                        RowPacket.IS_HOMEBREW);
    return attack;
}
function toEquipment(RowPacket, isShallow, callback) {
    var tagsSet = false;
    var equipment = new Equipment(RowPacket.ITEM_ID,
                        RowPacket.EQUIPMENT_NAME,
                        RowPacket.IMAGE_PATH,
                        RowPacket.COST,
                        RowPacket.DESCRIPTION,
                        RowPacket.FLAVOR,
                        RowPacket.IS_HOMEBREW,
                        RowPacket.CREATED_BY,
                        RowPacket.CREATED_DATE,
                        RowPacket.MODIFIED_BY,
                        RowPacket.MODIFIED_DATE,
                        null);
    if (isShallow) {
        var processCallback = function () {
            if (tagsSet) {
                if (callback) callback(equipment);
                return equipment;
            }
        }
        var addTags = function (tags, callback) {
            equipment.Tags = tags;
            tagsSet = true;
            processCallback()
        }
        FetchTags(RowPacket.ITEM_ID, 'EQUIPMENT', addTags);
    }
    else {
        if (callback) callback(equipment);
        return equipment;
    }
}
function toMonster(RowPacket, isShallow, callback) {
    var attacksSet = false;
    var skillsSet = false;
    var abilitiesSet = false;
    var talentsSet = false;
    var equipmentSet = false;
    var tagsSet = false;
    var monster = new Monster(RowPacket.ITEM_ID,
                        RowPacket.MONSTER_NAME,
                        RowPacket.IMAGE_PATH,
                        RowPacket.INITIATIVE,
                        RowPacket.MOVEMENT,
                        RowPacket.HP,
                        RowPacket.AC,
                        RowPacket.REFLEX,
                        RowPacket.FORTITUDE,
                        RowPacket.WILL,
                        RowPacket.ABILITY_POINTS,
                        RowPacket.ABILITY_REGEN,
                        RowPacket.DESCRIPTION,
                        RowPacket.FLAVOR,
                        RowPacket.IS_HOMEBREW,
                        RowPacket.CREATED_BY,
                        RowPacket.CREATED_DATE,
                        RowPacket.MODIFIED_BY,
                        RowPacket.MODIFIED_DATE,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null);
    if (isShallow) {
        var processCallback = function () {
            if (attacksSet && skillsSet && abilitiesSet && talentsSet && equipmentSet && tagsSet) {
                if (callback) callback(monster);
                return monster;
            }
        }
        var addAttacks = function (attacks, callback) {
            monster.Attacks = attacks;
            attacksSet = true;
            processCallback();
        }
        var addSkills = function (skills, callback) {
            monster.Skills = skills;
            skillsSet = true;
            processCallback();
        }
        var addAbilities = function (abilities, callback) {
            monster.Abilities = abilities;
            abilitiesSet = true;
            processCallback()
        }
        var addTalents = function (talents, callback) {
            monster.Talents = talents;
            talentsSet = true;
            processCallback()
        }
        var addEquipment = function (equipment, callback) {
            monster.Equipment = equipment;
            equipmentSet = true;
            processCallback()
        }
        var addTags = function (tags, callback) {
            monster.Tags = tags;
            tagsSet = true;
            processCallback()
        }
        FetchAttacks(RowPacket.ITEM_ID, 'MONSTERS', addAttacks);
        FetchSkills(RowPacket.ITEM_ID, 'MONSTERS', addSkills);
        FetchAbilities(RowPacket.ITEM_ID, 'MONSTERS', addAbilities);
        FetchTalents(RowPacket.ITEM_ID, 'MONSTERS', addTalents);
        FetchEquipment(RowPacket.ITEM_ID, 'MONSTERS', addEquipment);
        FetchTags(RowPacket.ITEM_ID, 'MONSTERS', addTags);
    }
    else {
        if (callback) callback(monster);
        return monster;
    }
}
function toNPC(RowPacket, isShallow, callback) {
    var attacksSet = false;
    var skillsSet = false;
    var abilitiesSet = false;
    var talentsSet = false;
    var equipmentSet = false;
    var tagsSet = false;
    var npc = new NPC(RowPacket.ITEM_ID,
                        RowPacket.NPC_NAME,
                        RowPacket.IMAGE_PATH,
                        RowPacket.NPC_LEVEL,
                        RowPacket.INITIATIVE,
                        RowPacket.MOVEMENT,
                        RowPacket.HP,
                        RowPacket.AC,
                        RowPacket.REFLEX,
                        RowPacket.FORTITUDE,
                        RowPacket.WILL,
                        RowPacket.ABILITY_POINTS,
                        RowPacket.ABILITY_REGEN,
                        RowPacket.CHARISMA,
                        RowPacket.CONSTITUTION,
                        RowPacket.DEXTERITY,
                        RowPacket.INTELLIGENCE,
                        RowPacket.LUCK,
                        RowPacket.SPEED,
                        RowPacket.STRENGTH,
                        RowPacket.WISDOM,
                        RowPacket.DESCRIPTION,
                        RowPacket.FLAVOR,
                        RowPacket.IS_HOMEBREW,
                        RowPacket.CREATED_BY,
                        RowPacket.CREATED_DATE,
                        RowPacket.MODIFIED_BY,
                        RowPacket.MODIFIED_DATE,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null);
    if (isShallow) {
        var processCallback = function () {
            if (attacksSet && skillsSet && abilitiesSet && talentsSet && equipmentSet && tagsSet) {
                if (callback) callback(npc);
                return npc;
            }
        }
        var addAttacks = function (attacks, callback) {
            npc.Attacks = attacks;
            attacksSet = true;
            processCallback();
        }
        var addSkills = function (skills, callback) {
            npc.Skills = skills;
            skillsSet = true;
            processCallback();
        }
        var addAbilities = function (abilities, callback) {
            npc.Abilities = abilities;
            abilitiesSet = true;
            processCallback();
        }
        var addTalents = function (talents, callback) {
            npc.Talents = talents;
            talentsSet = true;
            processCallback()
        }
        var addEquipment = function (equipment, callback) {
            npc.Equipment = equipment;
            equipmentSet = true;
            processCallback();
        }
        var addTags = function (tags, callback) {
            npc.Tags = tags;
            tagsSet = true;
            processCallback()
        }
        FetchAttacks(RowPacket.ITEM_ID, 'NPC', addAttacks);
        FetchSkills(RowPacket.ITEM_ID, 'NPC', addSkills);
        FetchAbilities(RowPacket.ITEM_ID, 'NPC', addAbilities);
        FetchTalents(RowPacket.ITEM_ID, 'NPC', addTalents);
        FetchEquipment(RowPacket.ITEM_ID, 'NPC', addEquipment);
        FetchTags(RowPacket.ITEM_ID, 'NPC', addTags);
    }
    else {
        if (callback) callback(npc);
        return npc;
    }
}
function toPrerequisite(RowPacket) {
    var prerequisite = new Prerequisite(RowPacket.ITEM_ID,
                        RowPacket.ITEM_TYPE,
                        RowPacket.DESCRIPTION,
                        RowPacket.IS_HOMEBREW);
    return prerequisite;
}
function toSkill(RowPacket) {
    var skill = new Skill(RowPacket.MOB_ID,
                        RowPacket.MOB_TYPE,
                        RowPacket.SKILL_NAME,
                        RowPacket.SCORE,
                        RowPacket.ATTRIBUTE,
                        RowPacket.DESCRIPTION,
                        RowPacket.FLAVOR,
                        RowPacket.IS_HOMEBREW);
    return skill;
}
function toTag(RowPacket) {
    var tag = new Tag(RowPacket.ENTITY_ID,
                        RowPacket.ENTITY_TYPE,
                        RowPacket.TAG);
    return tag;
}
function toTalent(RowPacket, isShallow, callback) {
    var tagsSet = false;
    var prerequisitesSet = false;
    var talent = new Talent(RowPacket.ITEM_ID,
                        RowPacket.TALENT_NAME,
                        RowPacket.IMAGE_PATH,
                        RowPacket.DESCRIPTION,
                        RowPacket.FLAVOR,
                        RowPacket.IS_HOMEBREW,
                        RowPacket.CREATED_BY,
                        RowPacket.CREATED_DATE,
                        RowPacket.MODIFIED_BY,
                        RowPacket.MODIFIED_DATE,
                        FetchPrerequisites(RowPacket.ITEM_ID, 'Talent'),
                        FetchTags(RowPacket.ITEM_ID, 'Talent'));
    if (isShallow) {
        var processCallback = function () {
            if (prerequisitesSet && tagsSet) {
                if (callback) callback(talent);
                return talent;
            }
        }
        var addTags = function (tags, callback) {
            talent.Tags = tags;
            tagsSet = true;
            processCallback()
        }
        var addPrerequisites = function (prerequisites, callback) {
            talent.Prerequisites = prerequisites;
            prerequisitesSet = true;
            processCallback()
        }
        FetchPrerequisites(RowPacket.ITEM_ID, 'TALENTS', addPrerequisites);
        FetchTags(RowPacket.ITEM_ID, 'TALENTS', addTags);
    }
    else {
        if (callback) callback(talent);
        return talent;
    }
}
//Fetch Methods
function FetchAbilities(MOB_ID, MOB_TYPE, callback) {
    var abilities = [];
    connection.query("SELECT A.* FROM ABILITIES A, MOB_ABILITIES M WHERE M.MOB_TYPE = '" + MOB_TYPE + "' AND M.MOB_ID = " + MOB_ID + " AND A.ITEM_ID = M.ABILITY_ID;", function (err, rows) {
        if (err)
            console.log("FetchAbilities SQL ERROR: " + err);
        else {
            var rowComplete = function (ability) {
                abilities.push(ability);
                if (abilities.length == rows.length) {
                    if (callback) callback(abilities);
                }
            }
            for (var i of rows) {
                toAbility(i, true, rowComplete);
            }
        }
    });
}
function FetchAttacks(MOB_ID, MOB_TYPE, callback) {
    var attacks = [];
    connection.query("SELECT * FROM MOB_ATTACKS WHERE MOB_ID = '" + MOB_ID + "' AND MOB_TYPE = '" + MOB_TYPE + "';", function (err, rows) {
        if (err)
            console.log("FetchAttacks SQL ERROR: " + err);
        else {
            for (var i of rows) {
                attacks.push(toAttack(i));
            }
            if (callback) callback(attacks);
        }
    });
}
function FetchEquipment(MOB_ID, MOB_TYPE, callback) {
    var equipment = [];
    connection.query("SELECT E.* FROM EQUIPMENT E, MOB_EQUIPMENT M WHERE M.MOB_TYPE = '" + MOB_TYPE + "' AND M.MOB_ID = " + MOB_ID + " AND E.ITEM_ID = M.EQUIPMENT_ID;", function (err, rows) {
        if (err)
            console.log("FetchEquipment SQL ERROR: " + err);
        else {
            var rowComplete = function (item) {
                equipment.push(item);
                if (equipment.length == rows.length) {
                    if (callback) callback(equipment);
                }
            }
            for (var i of rows) {
                toEquipment(i, true, rowComplete);
            }
        }
    });
}
function FetchPrerequisites(ITEM_ID, ITEM_TYPE, callback) {
    var prerequisites = [];
    connection.query("SELECT * FROM PREREQUISITES WHERE ITEM_ID = '" + ITEM_ID + "' AND ITEM_TYPE = '" + ITEM_TYPE + "';", function (err, rows) {
        if (err)
            console.log("FetchPrerequisites SQL ERROR: " + err);
        else {
            for (var i of rows) {
                prerequisites.push(toPrerequisite(i));
            }
            if (callback) callback(prerequisites);
        }
    });

}
function FetchSkills(MOB_ID, MOB_TYPE, callback) {
    var skills = [];
    connection.query("SELECT * FROM MOB_SKILLS WHERE MOB_ID = '" + MOB_ID + "' AND MOB_TYPE = '" + MOB_TYPE + "';", function (err, rows) {
        if (err)
            console.log("FetchSkills SQL ERROR: " + err);
        else {
            for (var i of rows) {
                skills.push(toSkill(i));
            }
            if (callback) callback(skills);
        }
    });
}
function FetchTags(ENTITY_ID, ENTITY_TYPE, callback) {
    var tags = [];
    connection.query("SELECT * FROM ENTITY_TAGS WHERE ENTITY_ID = '" + ENTITY_ID + "' AND ENTITY_TYPE = '" + ENTITY_TYPE + "';", function (err, rows) {
        if (err)
            console.log("FetchTags SQL ERROR: " + err);
        else {
            for (var i of rows) {
                tags.push(toTag(i));
            }
            if (callback) callback(tags);
        }
    });
}
function FetchTalents(MOB_ID, MOB_TYPE, callback) {
    var talents = [];
    connection.query("SELECT T.* FROM TALENTS T, MOB_TALENTS M WHERE M.MOB_TYPE = '" + MOB_TYPE + "' AND M.MOB_ID = " + MOB_ID + " AND T.ITEM_ID = M.TALENT_ID;", function (err, rows) {
        if (err)
            console.log("FetchTalents SQL ERROR: " + err);
        else {
            var rowComplete = function (talent) {
                talents.push(talent);
                if (talents.length == rows.length) {
                    if (callback) callback(talents);
                }
            }
            for (var i of rows) {
                toTalent(i, true, rowComplete);
            }
        }
    });
}
//Database Classes
var Ability = function (ITEM_ID, ABILITY_NAME, IMAGE_PATH, SKILL, COST, DESCRIPTION, FLAVOR, IS_HOMEBREW, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, PREREQUISITES, TAGS) {
    this.ItemID = ITEM_ID;
    this.AbilityName = ABILITY_NAME;
    this.ImagePath = IMAGE_PATH;
    this.Skill = SKILL;
    this.Cost = COST;
    this.Description = DESCRIPTION;
    this.Flavor = FLAVOR;
    this.IsHomebrew = IS_HOMEBREW;
    this.CreatedBy = CREATED_BY;
    this.CreatedDate = CREATED_DATE;
    this.ModifiedBy = MODIFIED_BY;
    this.ModifiedDate = MODIFIED_DATE;
    this.Prerequisites = PREREQUISITES;
    this.Tags = TAGS;
}
var Attack = function (MOB_ID, MOB_TYPE, ATTACK_NAME, ATTACK_BONUS, ATTACK_RANGE, DAMAGE, DESCRIPTION, FLAVOR, IS_HOMEBREW) {
    this.MobID = MOB_ID;
    this.MobType = MOB_TYPE;
    this.AttackName = ATTACK_NAME;
    this.AttackBonus = ATTACK_BONUS;
    this.AttackRange = ATTACK_RANGE;
    this.Damage = DAMAGE;
    this.Description = DESCRIPTION;
    this.Flavor = FLAVOR;
    this.IsHomebrew = IS_HOMEBREW;
}
var Equipment = function (ITEM_ID, EQUIPMENT_NAME, IMAGE_PATH, COST, DESCRIPTION, FLAVOR, IS_HOMEBREW, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, TAGS) {
    this.ItemID = ITEM_ID;
    this.EquipmentName = EQUIPMENT_NAME;
    this.ImagePath = IMAGE_PATH;
    this.Cost = COST;
    this.Description = DESCRIPTION;
    this.Flavor = FLAVOR;
    this.IsHomebrew = IS_HOMEBREW;
    this.CreatedBy = CREATED_BY;
    this.CreatedDate = CREATED_DATE;
    this.ModifiedBy = MODIFIED_BY;
    this.ModifiedDate = MODIFIED_DATE;
    this.Tags = TAGS;
}
var Monster = function (ITEM_ID, MONSTER_NAME, IMAGE_PATH, INITIATIVE, MOVEMENT, HP, AC, REFLEX, FORTITUDE, WILL, ABILITY_POINTS, ABILITY_REGEN, DESCRIPTION, FLAVOR, IS_HOMEBREW, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, ATTACKS, SKILLS, ABILITIES, TALENTS, EQUIPMENT, TAGS) {
    this.ItemID = ITEM_ID;
    this.MonsterName = MONSTER_NAME;
    this.ImagePath = IMAGE_PATH;
    this.Initiative = INITIATIVE;
    this.Movement = MOVEMENT;
    this.HP = HP;
    this.AC = AC;
    this.Reflex = REFLEX;
    this.Fortitude = FORTITUDE;
    this.Will = WILL;
    this.AbilityPoints = ABILITY_POINTS;
    this.AbilityRegen = ABILITY_REGEN;
    this.Description = DESCRIPTION;
    this.Flavor = FLAVOR;
    this.IsHomebrew = IS_HOMEBREW;
    this.CreatedBy = CREATED_BY;
    this.CreatedDate = CREATED_DATE;
    this.ModifiedBy = MODIFIED_BY;
    this.ModifiedDate = MODIFIED_DATE;
    this.Attacks = ATTACKS;
    this.Skills = SKILLS;
    this.Abilities = ABILITIES;
    this.Talents = TALENTS;
    this.Equipment = EQUIPMENT;
    this.Tags = TAGS;
}
var NPC = function (ITEM_ID, NPC_NAME, IMAGE_PATH, NPC_LEVEL, INITIATIVE, MOVEMENT, HP, AC, REFLEX, FORTITUDE, WILL, ABILITY_POINTS, ABILITY_REGEN, CHARISMA, CONSTITUTION, DEXTERITY, INTELLIGENCE, LUCK, SPEED, STRENGTH, WISDOM, DESCRIPTION, FLAVOR, IS_HOMEBREW, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, ATTACKS, SKILLS, ABILITIES, TALENTS, EQUIPMENT, TAGS) {
    this.ItemID = ITEM_ID;
    this.NPCName = NPC_NAME;
    this.ImagePath = IMAGE_PATH;
    this.NPCLevel = NPC_LEVEL;
    this.Initiative = INITIATIVE;
    this.Movement = MOVEMENT;
    this.HP = HP;
    this.AC = AC;
    this.Reflex = REFLEX;
    this.Fortitude = FORTITUDE;
    this.Will = WILL;
    this.AbilityPoints = ABILITY_POINTS;
    this.AbilityRegen = ABILITY_REGEN;
    this.Charisma = CHARISMA;
    this.Constitution = CONSTITUTION;
    this.Dexterity = DEXTERITY;
    this.Intelligence = INTELLIGENCE;
    this.Luck = LUCK;
    this.Speed = SPEED;
    this.Strength = STRENGTH;
    this.Wisdom = WISDOM;
    this.Description = DESCRIPTION;
    this.Flavor = FLAVOR;
    this.IsHomebrew = IS_HOMEBREW;
    this.CreatedBy = CREATED_BY;
    this.CreatedDate = CREATED_DATE;
    this.ModifiedBy = MODIFIED_BY;
    this.ModifiedDate = MODIFIED_DATE;
    this.Attacks = ATTACKS;
    this.Skills = SKILLS;
    this.Abilities = ABILITIES;
    this.Talents = TALENTS;
    this.Equipment = EQUIPMENT;
    this.Tags = TAGS;
}
var Prerequisite = function (ITEM_ID, ITEM_TYPE, DESCRIPTION, IS_HOMEBREW) {
    this.ItemID = ITEM_ID;
    this.ItemType = ITEM_TYPE;
    this.Description = DESCRIPTION;
    this.IsHomebrew = IS_HOMEBREW;
}
var Skill = function (MOB_ID, MOB_TYPE, SKILL_NAME, SCORE, ATTRIBUTE, DESCRIPTION, FLAVOR, IS_HOMEBREW) {
    this.MobID = MOB_ID;
    this.MobType = MOB_TYPE;
    this.SkillName = SKILL_NAME;
    this.Score = SCORE;
    this.Attribute = ATTRIBUTE;
    this.Description = DESCRIPTION;
    this.Flavor = FLAVOR;
    this.IsHomebrew = IS_HOMEBREW;
}
var Tag = function (ENTITY_ID, ENTITY_TYPE, TAG) {
    this.EntityID = ENTITY_ID;
    this.EntityType = ENTITY_TYPE;
    this.Tag = TAG;
}
var Talent = function (ITEM_ID, TALENT_NAME, IMAGE_PATH, DESCRIPTION, FLAVOR, IS_HOMEBREW, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, PREREQUISITES, TAGS) {
    this.ItemID = ITEM_ID;
    this.TalentName = TALENT_NAME;
    this.ImagePath = IMAGE_PATH;
    this.Description = DESCRIPTION;
    this.Flavor = FLAVOR;
    this.IsHomebrew = IS_HOMEBREW;
    this.CreatedBy = CREATED_BY;
    this.CreatedDate = CREATED_DATE;
    this.ModifiedBy = MODIFIED_BY;
    this.ModifiedDate = MODIFIED_DATE;
    this.Prerequisites = PREREQUISITES;
    this.Tags = TAGS;
}