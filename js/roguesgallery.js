var socket = io.connect('http://localhost:5000');

$(document).ready(function() {
    var suggestions = [];
    var suggest = $('#searchBar').magicSuggest({
        data: suggestions,
        placeholder: 'Search for TAGS'
    });
    var equipmentSuggest, abilitySuggest, tagSuggest, talentSuggest;

    function aeEquipment() {
        var content = "<h2 id='title'>Add New Equipment</h2>";
        var content = content + "<div class='form-group'>";
        var content = content + "<div class='row'>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='name'>Name:</label><input id='name' placeholder='Equipment Name' class='form-control' type='text'></input>";
        var content = content + "</div>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='value'>Value:</label><input id='value' placeholder='Equipment Value' class='form-control' type='number'></input>";
        var content = content + "</div>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='image'>Image:</label><input id='selectImage' class='btn btn-file btn-default form-control' type='file' name='selectImage'/>";
        var content = content + "</div>";

        var content = content + "</div>";

        var content = content + "<div class='row'>";
        var content = content + "<div class='col-sm-6'>";
        var content = content + "<label for='description'>Description:</label><textarea id='description' placeholder='Equipment Description' class='form-control' type='number'></textarea>";
        var content = content + "</div>";
        var content = content + "<div class='col-sm-6'>";
        var content = content + "<label for='flavor'>Flavor:</label><textarea id='flavor' placeholder='Flavor Description' class='form-control' type='number'></textarea>";
        var content = content + "</div>";
        var content = content + "</div>";

        var content = content + "<button id='btnSubmitEquipment' class='btn btn-default'>Submit</button>";
        $('#content').html(content);
    }

    function aeSpells() {
        var content = "<h2 id='title'>Add New Spell</h2>";
        var content = content + "<div class='form-group'>";
        var content = content + "<div class='row'>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='name'>Name:</label><input id='name' placeholder='Ability Name' class='form-control' type='text'></input>";
        var content = content + "</div>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='cost'>Cost:</label><input id='value' placeholder='Ability Cost' class='form-control' type='number'></input>";
        var content = content + "</div>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='image'>Image:</label><input id='selectImage' class='btn btn-file btn-default form-control' type='file' name='selectImage'/>";
        var content = content + "</div>";

        var content = content + "</div>";

        var content = content + "<div class='row'>";
        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='description'>Description:</label><textarea id='description' placeholder='Ability Description' class='form-control' type='text'></textarea>";
        var content = content + "</div>";
        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='school'>School:</label><input id='description' placeholder='School' class='form-control' type='text'></input>";
        var content = content + "</div>";
        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='flavor'>Flavor:</label><textarea id='flavor' placeholder='Flavor Description' class='form-control' type='text'></textarea>";
        var content = content + "</div>";
        var content = content + "</div>";

        var content = content + "<button id='btnSubmitAbility' class='btn btn-default'>Submit</button>";
        $('#content').html(content);
    }

    function aeMonster() {
        var content = "<h2 id='title'>Add New Monster</h2>";
        var content = content + "<div class='form-group'>";
        var content = content + "<div class='row'>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='name'>Name:</label><input id='name' placeholder='Monster Name' class='form-control' type='text'></input>";
        var content = content + "<label for='description'>Description:</label><textarea id='description' placeholder='Monster Description' class='form-control' type='number'></textarea>";
        var content = content + "<label for='equipment'>Equipment:</label><input type='text' name='equipment' class='form-control' id='equipment'/>";
        var content = content + "<label for='tags'>Tags:</label><input type='text' name='tags' class='form-control' id='tags'/>";
        var content = content + "</div>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='stats'>Stats:</label>";
        var content = content + "<input id='Hitpoints' placeholder='Hitpoints'   class='form-control' type='number'></input>";
        var content = content + "<input id='ac' placeholder='Armor Class' class='form-control' type='number'></input>";
        var content = content + "<input id='Reflex' placeholder='Reflex'      class='form-control' type='number'></input>";
        var content = content + "<input id='Fortitude' placeholder='Fortitude'   class='form-control' type='number'></input>";
        var content = content + "<input id='Will' placeholder='Will'        class='form-control' type='number'></input>";
        var content = content + "<input id='Movement' placeholder='Movement'    class='form-control' type='number'></input>";
        var content = content + "<input id='AbilityPoints' placeholder='AbilityPoints'    class='form-control' type='number'></input>";
        var content = content + "<input id='AbilityRegen' placeholder='AbilityRegen'    class='form-control' type='number'></input>";
        var content = content + "<input id='Initiative' placeholder='Initiative'  class='form-control' type='number'></input>";
        var content = content + "<input id='Attack' placeholder='Attack'      class='form-control' type='number'></input>";
        var content = content + "<input id='Damage' placeholder='Damage'      class='form-control' type='text'></input>";
        var content = content + "</div>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='image'>Image:</label><input id='selectImage' class='btn btn-file btn-default form-control' type='file' name='selectImage'/>";
        var content = content + "<label for='flavor'>Flavor:</label><textarea id='flavor' placeholder='Flavor Description' class='form-control' type='number'></textarea>";
        var content = content + "<label for='abilities'>Abilities:</label><input type='text' name='abilities' class='form-control' id='abilities'/>";
        var content = content + "<label for='talents'>Talents:</label><input type='text' name='talents' class='form-control' id='talents'/>";
        var content = content + "</div>";

        var content = content + "</div>";
        var content = content + "<button id='btnSubmitMonster' class='btn btn-default'>Submit</button>";

        $('#content').html(content);
        equipmentSuggest = $('#equipment').magicSuggest({
            data: ['medieval', 'steampunk', 'modern', 'post-apocolyptic', 'undead', 'chickens'],
            placeholder: 'Add Equipment'
        });
        abilitySuggest = $('#abilities').magicSuggest({
            data: ['medieval', 'steampunk', 'modern', 'post-apocolyptic', 'undead', 'chickens'],
            placeholder: 'Add Abilities'
        });
        talentSuggest = $('#talents').magicSuggest({
            data: ['medieval', 'steampunk', 'modern', 'post-apocolyptic', 'undead', 'chickens'],
            placeholder: 'Add Talents'
        });
        tagSuggest = $('#tags').magicSuggest({
            data: ['medieval', 'steampunk', 'modern', 'post-apocolyptic', 'undead', 'chickens'],
            placeholder: 'Add Talents'
        });

        $('#btnSubmitMonster').click(function() {
            addMonster();

        });
    }

    function aeNPCs() {
        var content = "<h2 id='title'>Add New Character</h2>";
        var content = content + "<div class='form-group'>";
        var content = content + "<div class='row'>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='name'>Name:</label><input id='name' placeholder='Monster Name' class='form-control' type='text'></input>";
        var content = content + "<label for='description'>Description:</label><textarea id='description' placeholder='Monster Description' class='form-control' type='number'></textarea>";
        var content = content + "<label for='equipment'>Equipment:</label><input type='text' name='equipment' class='form-control' id='equipment'/>"
        var content = content + "<label for='stats'>Stats:</label>";
        var content = content + "<input id='charisma' placeholder='Charisma'   class='form-control' type='number'></input>";
        var content = content + "<input id='Constitution' placeholder='Constitution' class='form-control' type='number'></input>";
        var content = content + "<input id='Dexterity' placeholder='Dexterity'      class='form-control' type='number'></input>";
        var content = content + "<input id='Inteligence' placeholder='Inteligence'   class='form-control' type='number'></input>";
        var content = content + "<input id='Luck' placeholder='Luck'        class='form-control' type='number'></input>";
        var content = content + "<input id='Speed' placeholder='Speed'    class='form-control' type='number'></input>";
        var content = content + "<input id='Strength' placeholder='Strength'  class='form-control' type='number'></input>";
        var content = content + "<input id='Wisdom' placeholder='Wisdom'      class='form-control' type='number'></input>";
        var content = content + "</div>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='stats'>Stats:</label>";
        var content = content + "<input id='Hitpoints' placeholder='Hitpoints'   class='form-control' type='number'></input>";
        var content = content + "<input id='ac' placeholder='Armor Class' class='form-control' type='number'></input>";
        var content = content + "<input id='Reflex' placeholder='Reflex'      class='form-control' type='number'></input>";
        var content = content + "<input id='Fortitude' placeholder='Fortitude'   class='form-control' type='number'></input>";
        var content = content + "<input id='Will' placeholder='Will'        class='form-control' type='number'></input>";
        var content = content + "<input id='Movement' placeholder='Movement'    class='form-control' type='number'></input>";
        var content = content + "<input id='Initiative' placeholder='Initiative'  class='form-control' type='number'></input>";
        var content = content + "<input id='Attack' placeholder='Attack'      class='form-control' type='number'></input>";
        var content = content + "<input id='Damage' placeholder='Damage'      class='form-control' type='text'></input>";
        var content = content + "</div>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='image'>Image:</label><input id='selectImage' class='btn btn-file btn-default form-control' type='file' name='selectImage'/>";
        var content = content + "<label for='flavor'>Flavor:</label><textarea id='flavor' placeholder='Flavor Description' class='form-control' type='number'></textarea>";
        var content = content + "<label for='abilities'>Abilities:</label><input type='text' name='abilities' class='form-control' id='abilities'/>";
        var content = content + "<label for='talents'>Talents:</label><input type='text' name='talents' class='form-control' id='talents'/>";
        var content = content + "</div>";

        var content = content + "</div>";
        var content = content + "</div>";

        var content = content + "<button id='btnSubmitNPC' class='btn btn-default'>Submit</button>";

        $('#content').html(content);
        $('#equipment').magicSuggest({
            data: ['medieval', 'steampunk', 'modern', 'post-apocolyptic', 'undead', 'chickens'],
            placeholder: 'Add Equipment'
        });

        $('#abilities').magicSuggest({
            data: ['medieval', 'steampunk', 'modern', 'post-apocolyptic', 'undead', 'chickens'],
            placeholder: 'Add Abilities'
        });
        $('#talents').magicSuggest({
            data: ['medieval', 'steampunk', 'modern', 'post-apocolyptic', 'undead', 'chickens'],
            placeholder: 'Add Talents'
        });
    }

    function aeTalent() {
        var content = "<h2 id='title'>Add New Talent</h2>";
        var content = content + "<div class='form-group'>";
        var content = content + "<div class='row'>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='name'>Name:</label><input id='name' placeholder='Talent Name' class='form-control' type='text'></input>";
        var content = content + "</div>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='Prerequisites'>Prerequisites:</label><input id='prerequisites' placeholder='Prerequisites' class='form-control' type='number'></input>";
        var content = content + "</div>";

        var content = content + "<div class='col-sm-4'>";
        var content = content + "<label for='image'>Image:</label><input id='selectImage' class='btn btn-file btn-default form-control' type='file' name='selectImage'/>";
        var content = content + "</div>";

        var content = content + "</div>";

        var content = content + "<div class='row'>";
        var content = content + "<div class='col-sm-6'>";
        var content = content + "<label for='description'>Description:</label><textarea id='description' placeholder='Talent Description' class='form-control' type='number'></textarea>";
        var content = content + "</div>";
        var content = content + "<div class='col-sm-6'>";
        var content = content + "<label for='flavor'>Flavor:</label><textarea id='flavor' placeholder='Flavor Description' class='form-control' type='number'></textarea>";
        var content = content + "</div>";
        var content = content + "</div>";

        var content = content + "<button id='btnSubmitTalent' class='btn btn-default'>Submit</button>";
        $('#content').html(content);
        $('#prerequisites').magicSuggest({
            placeholder: 'Add Prerequisites'
        });
    }

    $('#searchBar').on('input', function(e) {
        getRecs();
    });

    function getRecs() {

    }

    $("#btnSearch").click(function() {
        queryTables();
    });

    function queryTables() {
        var tables = [];
        console.log($("#chkEquipment").prop('checked'));
        if ($("#chkEquipment").prop('checked')) {
            var name = '';
            tables.push("EQUIPMENT");
        }
        if ($("#chkMonster").prop('checked')) {
            tables.push("MONSTERS");
        }
        if ($("#chkNPC").prop('checked')) {
            tables.push("NPCS");
        }
        if ($("#chkTalents").prop('checked')) {
            tables.push("TALENTS");
        }
        if ($("#chkSpells").prop('checked')) {
            tables.push("ABILITIES");
        }
        console.log(tables);
        console.log(suggest.getValue());
        socket.emit("ShallowQueryRequest", tables, suggest.getValue());
    }

    socket.on("ShallowQueryResult", function(tableList) {
        var content = "<h2>Search Result</h2>";
        var j;
        if ($("#chkMonster").prop('checked')) {
            content = content + "<div class='row' style='margin-left: 20px;'><h3>Monsters</h3>";
            for (j = 0; j < tableList[2].length; j++) {
                content = content + '<div class="row">'
                content = content + '<h4>' + tableList[2][j].MonsterName + "</h4>";
                content = content + tableList[2][j].Description + "<br>";
                content = content + tableList[2][j].Flavor + "<br>";
                content = content + '<div id="statsTable" class="col-md-2 table-responsive"><table class="table table-striped"><tr><th>Hit Points:</th><td id="hp">' + tableList[2][j].HP;
                content = content + '</tr><tr><th>Armor Class:</th><td>' + tableList[2][j].AC + '</td></tr><tr><th>Reflex:</th><td>' + tableList[2][j].Reflex;
                content = content + '</td></tr><tr><th>Fortitude:</th><td>' +tableList[2][j].Fortitude + '</td></tr><tr><th>Will:</th><td>'+tableList[2][j].Will;
                content = content + '</td></tr><tr><th>Movement:</th><td >' +tableList[2][j].Movement + '</td></tr><tr><th>Initiative:</th><td >+' +tableList[2][j].Initiative + '</td></tr></table>';
                content = content + '</div></div>';
              }
              content = content + '</div>';
        }
        if ($("#chkNPC").prop('checked')) {
            content = content + "<div class='row'><h3>Characters</h3>";
            for (j = 0; j < tableList[2].length; j++) {
                content = content + tableList[2][j].MonsterName + " ";
                content = content + tableList[2][j].AC + " ";
                content = content + tableList[2][j].Description + "<br>";
            }
        }
        if ($("#chkSpells").prop('checked')) {
            content = content + "<div class='row'><h3>Abilities</h3>";
            for (j = 0; j < tableList[2].length; j++) {
                content = content + tableList[2][j].MonsterName + " ";
                content = content + tableList[2][j].AC + " ";
                content = content + tableList[2][j].Description + "<br>";
            }
        }
        if ($("#chkTalents").prop('checked')) {
            content = content + "<div class='row'><h3>Talents</h3>";
            for (j = 0; j < tableList[2].length; j++) {
                content = content + tableList[2][j].MonsterName + " ";
                content = content + tableList[2][j].AC + " ";
                content = content + tableList[2][j].Description + "<br>";
            }
        }
        if ($("#chkEquipment").prop('checked')) {
            content = content + "<div class='row'><h3>Equipment</h3>";
            for (j = 0; j < tableList[2].length; j++) {
                content = content + tableList[2][j].MonsterName + " ";
                content = content + tableList[2][j].AC + " ";
                content = content + tableList[2][j].Description + "<br>";
            }
        }
        $('#content').html(content);
        console.log(tableList);
    });


    $("#btnAddEquipment").click(function() {
        aeEquipment();
    });

    $("#btnAddSpells").click(function() {
        aeSpells();
    });

    $("#btnAddMonster").click(function() {
        aeMonster();
    });

    $("#btnAddNPCs").click(function() {
        aeNPCs();
    });

    $("#btnAddTalent").click(function() {
        aeTalent();
    });



    function addMonster() {
        var Mon = new Monster(
            null, //this.ItemID = ITEM_ID;
            $("#name").val(), //this.MonsterName = MONSTER_NAME;
            $("#selectImage").val(), //this.ImagePath = IMAGE_PATH;
            $("#Initiative").val(), //this.Initiative = INITIATIVE;
            $("#Movement").val(), //this.Movement = MOVEMENT;
            $("#Hitpoints").val(), //this.HP = HP;
            $("#ac").val(), //this.AC = AC;
            $("#Reflex").val(), //this.Reflex = REFLEX;
            $("#Fortitude").val(), //this.Fortitude = FORTITUDE;
            $("#Will").val(), //this.Will = WILL;
            $("#AbilityPoints").val(), //this.AbilityPoints = ABILITY_POINTS;
            $("#AbilityRegen").val(), //this.AbilityRegen = ABILITY_REGEN;
            $("#description").val(), //this.Description = DESCRIPTION;
            $("#flavor").val(), //this.Flavor = FLAVOR;
            true, //this.IsHomebrew = IS_HOMEBREW;
            "Default", //this.CreatedBy = CREATED_BY;
            "12/6/2016", //this.CreatedDate = CREATED_DATE;
            null, //this.ModifiedBy = MODIFIED_BY;
            null, //this.ModifiedDate = MODIFIED_DATE;
            null, //this.Attacks = ATTACKS;
            null, //this.Skills = SKILLS;
            abilitySuggest.getValue(), //this.Abilities = ABILITIES;
            talentSuggest.getValue(), //this.Talents = TALENTS;
            equipmentSuggest.getValue(), //this.Equipment = EQUIPMENT;
            tagSuggest.getValue() //this.Tags = TAGS;
        )
        console.log(Mon);
        socket.emit("PostMonster", Mon);
    }

    $('#btnSubmitAbility').click(function() {

    });
    $('#btnSubmitNPC').click(function() {

    });
    $('#btnSubmitTalent').click(function() {

    });
    $('#btnSubmitEquipment').click(function() {

    });

    $('#btnEditMonster').click(function() {
        aeMonster();
        $("#title").html("Edit" + $("#name").text());
    });
    $('#btnEditAbility').click(function() {
        aeSpells()
        $("#title").html("Edit" + $("#name").text());
    });
    $('#btnEditNPC').click(function() {
        aeNPCs();
        $("#title").html("Edit" + $("#name").text());
    });
    $('#btnEditTalent').click(function() {
        aeTalent();
        $("#title").html("Edit" + $("#name").text());
    });
    $('#btnEditEquipment').click(function() {
        aeEquipment();
        $("#title").html("Edit" + $("#name").text());
    });
});

//Object Classes

var Ability = function(ITEM_ID, ABILITY_NAME, IMAGE_PATH, SKILL, COST, DESCRIPTION, FLAVOR, IS_HOMEBREW, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, PREREQUISITES, TAGS) {
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
var Attack = function(MOB_ID, MOB_TYPE, ATTACK_NAME, ATTACK_BONUS, ATTACK_RANGE, DAMAGE, DESCRIPTION, FLAVOR, IS_HOMEBREW) {
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
var Equipment = function(ITEM_ID, EQUIPMENT_NAME, IMAGE_PATH, COST, DESCRIPTION, FLAVOR, IS_HOMEBREW, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, TAGS) {
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
var Monster = function(ITEM_ID, MONSTER_NAME, IMAGE_PATH, INITIATIVE, MOVEMENT, HP, AC, REFLEX, FORTITUDE, WILL, ABILITY_POINTS, ABILITY_REGEN, DESCRIPTION, FLAVOR, IS_HOMEBREW, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, ATTACKS, SKILLS, ABILITIES, TALENTS, EQUIPMENT, TAGS) {
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
var NPC = function(ITEM_ID, NPC_NAME, IMAGE_PATH, NPC_LEVEL, INITIATIVE, MOVEMENT, HP, AC, REFLEX, FORTITUDE, WILL, ABILITY_POINTS, ABILITY_REGEN, CHARISMA, CONSTITUTION, DEXTERITY, INTELLIGENCE, LUCK, SPEED, STRENGTH, WISDOM, DESCRIPTION, FLAVOR, IS_HOMEBREW, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, ATTACKS, SKILLS, ABILITIES, TALENTS, EQUIPMENT, TAGS) {
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
var Prerequisite = function(ITEM_ID, ITEM_TYPE, DESCRIPTION, IS_HOMEBREW) {
    this.ItemID = ITEM_ID;
    this.ItemType = ITEM_TYPE;
    this.Description = DESCRIPTION;
    this.IsHomebrew = IS_HOMEBREW;
}
var Skill = function(MOB_ID, MOB_TYPE, SKILL_NAME, SCORE, ATTRIBUTE, DESCRIPTION, FLAVOR, IS_HOMEBREW) {
    this.MobID = MOB_ID;
    this.MobType = MOB_TYPE;
    this.SkillName = SKILL_NAME;
    this.Score = SCORE;
    this.Attribute = ATTRIBUTE;
    this.Description = DESCRIPTION;
    this.Flavor = FLAVOR;
    this.IsHomebrew = IS_HOMEBREW;
}
var Tag = function(ENTITY_ID, ENTITY_TYPE, TAG) {
    this.EntityID = ENTITY_ID;
    this.EntityType = ENTITY_TYPE;
    this.Tag = TAG;
}
var Talent = function(ITEM_ID, TALENT_NAME, IMAGE_PATH, DESCRIPTION, FLAVOR, IS_HOMEBREW, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE, PREREQUISITES, TAGS) {
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
