<?php

$val = "";
if(isset($_GET['search'])){
  $val = $_GET['search'];
}

echo "
<!doctype html>
<html>

<head>
    <meta charset='utf-8'>
    <title>Solipstry: Rogue's Gallery</title>

    <!--Stylesheet Import -->
    <link rel='stylesheet' href='css\style.css' />
    <!-- Bootstrap Stylesheet Import -->
    <link rel='stylesheet' href='js\bootstrap-3.3.7-dist\css\bootstrap.css' />
    <link href='js/magicsuggest/magicsuggest-min.css' rel='stylesheet'>


    <script src='https://code.jquery.com/jquery-1.11.1.js'></script>


    <!-- Javascript -->
    <script src='http://localhost:4000/socket.io/socket.io.js'></script>
    <!--  <script src='js\jquery-3.1.1.min.js'></script>-->
    <script src='js/bootstrap-3.3.7-dist/js/bootstrap.js'></script>
    <script src='js/magicsuggest/magicsuggest-min.js'></script>
    <script src='js/roguesgallery.js'></script>


</head>

<body>
    <!-- Banner -->
    </div>
    <div id='banner' class='container-fluid navbar navbar-default'>
        <div class='row'>
          <form action='query.php' method='GET' class='form-group'>
            <div class='col-xs-4'>
                <h1>Rogue's Gallery</h1>
            </div>
            <div class='col-xs-7' style='padding-right: 0px; margin-top: 22px;'>
                <input type='text' name='search' class='form-control' id='searchBar' />
            </div>
            <div class='col-xs-1' style='padding-left: 0px; margin-top: 22px;'>
                <button id='btnSearch' type='submit' class='btn btn-default'><span class='glyphicon glyphicon-search'></span></button>
            </div>
          </form>
        </div>
    </div>
    <div id='sidebar'>
        <br>
        <div class='panel-group' style='padding-left: 5px;padding-right: 5px; margin-bottom: 3px;'>
            <div class='panel panel-default'>
                <div class='panel-heading'>
                    <h4 class='panel-title'>
              <div class='checkbox filterCheckBox'>
                <label><input type='checkbox' value=''><a data-toggle='collapse' class='filter' href='#collapseMons'>Monsters</a></label>
                <button id='btnAddMonster' class='btn-default pull-right'>Add</button>
              </div>
            </h4>
                </div>
                <div id='collapseMons' class='panel-collapse collapse'>
                    <div class='panel-body filterBody'>
                        <div class='checkbox filterCheckBox'>
                            <label>
                                <input type='checkbox' value=''>
                                <a data-toggle='collapse' class='filter' href='#collapseMons'>
                    Homebrew
                  </a>
                            </label>
                            <button id='btnAdd' class='btn-default pull-right'>Add</button>
                        </div>
                    </div>
                    <div class='panel-footer'></div>
                </div>
            </div>
        </div>

        <div class='panel-group' style='padding-left: 5px;padding-right: 5px; margin-bottom: 3px;'>
            <div class='panel panel-default'>
                <div class='panel-heading'>
                    <h4 class='panel-title'>
              <div class='checkbox filterCheckBox'>
                <label><input type='checkbox' value=''><a data-toggle='collapse' class='filter' href='#collapseMaps'>
                  Maps
                </a></label>
                <button id='btnAddMaps' class='btn-default pull-right'>Add</button>
              </div>
            </h4>
                </div>
                <div id='collapseMaps' class='panel-collapse collapse'>
                    <div class='panel-body filterBody'>
                        <div class='checkbox filterCheckBox'>
                            <label>
                                <input type='checkbox' value=''>
                                <a data-toggle='collapse' class='filter' href='#collapseMaps'>
                    Homebrew
                  </a>
                            </label>
                        </div>
                    </div>
                    <div class='panel-footer'></div>
                </div>
            </div>
        </div>

        <div class='panel-group' style='padding-left: 5px;padding-right: 5px; margin-bottom: 3px;'>
            <div class='panel panel-default'>
                <div class='panel-heading'>
                    <h4 class='panel-title'>
              <div class='checkbox filterCheckBox'>
                <label><input type='checkbox' value=''><a data-toggle='collapse' class='filter' href='#collapseSpells'>
                  Spells
                </a></label>
                <button id='btnAddSpells' class='btn-default pull-right'>Add</button>
              </div>
            </h4>
                </div>
                <div id='collapseSpells' class='panel-collapse collapse'>
                    <div class='panel-body filterBody'>
                        <div class='checkbox filterCheckBox'>
                            <label>
                                <input type='checkbox' value=''>
                                <a data-toggle='collapse' class='filter' href='#collapseSpells'>
                    Homebrew
                  </a>
                            </label>
                        </div>
                    </div>
                    <div class='panel-footer'></div>
                </div>
            </div>
        </div>

        <div class='panel-group' style='padding-left: 5px;padding-right: 5px; margin-bottom: 3px;'>
            <div class='panel panel-default'>
                <div class='panel-heading'>
                    <h4 class='panel-title'>
              <div class='checkbox filterCheckBox'>
                <label><input type='checkbox' value=''><a data-toggle='collapse' class='filter' href='#collapseCamp'>
                  Campaigns
                </a></label>
                <button id='btnAddCampaign' class='btn-default pull-right'>Add</button>
              </div>
            </h4>
                </div>
                <div id='collapseCamp' class='panel-collapse collapse'>
                    <div class='panel-body filterBody'>
                        <div class='checkbox filterCheckBox'>
                            <label>
                                <input type='checkbox' value=''>
                                <a data-toggle='collapse' class='filter' href='#collapseCamp'>
                    Homebrew
                  </a>
                            </label>
                        </div>
                    </div>
                    <div class='panel-footer'></div>
                </div>
            </div>
        </div>

        <div class='panel-group' style='padding-left: 5px;padding-right: 5px; margin-bottom: 3px;'>
            <div class='panel panel-default'>
                <div class='panel-heading'>
                    <h4 class='panel-title'>
              <div class='checkbox filterCheckBox'>
                  <label><input type='checkbox' value=''>
                    <a data-toggle='collapse' class='filter' href='#collapseEquip'>Equipment</a></label>
                    <button id='btnAddEquipment' class='btn-default pull-right'>Add</button>
              </div>
            </h4>
                </div>
                <div id='collapseEquip' class='panel-collapse collapse'>
                    <div class='panel-body filterBody'>
                        <div class='checkbox filterCheckBox'>
                            <label>
                                <input type='checkbox' value=''>
                                <a data-toggle='collapse' class='filter' href='#collapseEquip'>
                    Homebrew
                  </a>
                            </label>
                        </div>
                    </div>
                    <div class='panel-footer'></div>
                </div>
            </div>
        </div>


    </div>
    <!-- End Banner -->
    <!-- Content -->
    <div class='container-fluid' id='content'>
      <div class='row no-pad'>
        <h2>Heeghog</h2>
      </div>
      <div class='col-md-3 no-pad'>
        <img class='img-responsive' src='images\baby-hedgehog.jpg' id='icon'/>
      </div>
        <div id='statsTable' class='col-md-2 table-responsive'>
            <table class='table table-striped'>
                <tr>
                    <th>Hit Points:</th>
                    <td>20</td>
                </tr>
                <tr>
                    <th>Armor Class:</th>
                    <td>16</td>
                </tr>
                <tr>
                    <th>Reflex:</th>
                    <td>12</td>
                </tr>
                <tr>
                    <th>Fortitude:</th>
                    <td>12</td>
                </tr>
                <tr>
                    <th>Will:</th>
                    <td>12</td>
                </tr>
                <tr>
                    <th>Movement:</th>
                    <td>6</td>
                </tr>
                <tr>
                    <th>Initiative:</th>
                    <td>+2</td>
                </tr>
                <tr>
                    <th>Attack:</th>
                    <td>+4</td>
                </tr>
                <tr>
                    <th>Damage:</th>
                    <td>1d6 * 7</td>
                </tr>
            </table>

        </div>
        <div id='spellTable' class='col-lg-3 table-responsive no-pad'>
            <table class='table table-striped'>
                <tr>
                    <th>Ability Name</th>
                    <th>Cost</th>
                    <th>School</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Pulse</td>
                    <td>20</td>
                    <td>Destruction</td>
                    <td>Sends out an unavoidable missle at a target dealing 1d4 damage.</td>
                </tr>
            </table>
          </div>
          <div id='equipTable' class='col-lg-3 table-responsive no-pad'>
              <table class='table table-striped'>
                  <tr>
                      <th>Equipment Name</th>
                      <th>Type</th>
                      <th>Value</th>
                      <th>Description</th>
                  </tr>
                  <tr>
                      <td>Blade of Woah</td>
                      <td>Dagger</td>
                      <td>4000</td>
                      <td>1d100 change to kill instantly</td>
                  </tr>
              </table>
            </div>
        <div class='col-sm-12'>

              <h4>Description</h4>
              The Heeghog is a primal beast of nature. It uses its barbed quills to inject its venom into unsuspecting prey. Heed its majestic cry, for when it roars, it pounces.
              The Heeghog's teeth are built for ripping flesh from bones, which allows it to devour it's prey piece by piece. By using its quills, the Heeghog may roll into a unsuspecting
              victim, allowing little time for escape.
        </div>

    </div><div id='query' style='display = none;'>";
echo implode(" ",$val);
echo "</div></html>";
?>
