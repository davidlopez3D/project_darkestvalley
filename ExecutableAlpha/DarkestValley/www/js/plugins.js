// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"816","changeWindowHeightTo":"624","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"WeaponSkill","status":true,"description":"Change skill id of attack for each weapon.","parameters":{}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1110","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"true","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"false","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_AdvancedSwVar","status":false,"description":"v1.02 Make advanced switches and variables that are\nable to utilize JavaScript for enhanced usage.","parameters":{}},
{"name":"YEP_MessageCore","status":false,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.51 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.20 (Requires YEP_BattleEngineCore.js) This plugin lets\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1.0","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---Shadows---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.020","HP Link Breathing":"false","---Floating---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","Floating Death":"true","---Motions---":"","Attack Motion":"thrust","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon Image Index":"0","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"false","Defeat First":"false","Always Visible":"true","---Appearance---":"","Minimum Gauge Width":"50","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"true","Show Value":"true","Show Max":"false"}},
{"name":"YEP_BattleStatusWindow","status":true,"description":"v1.09 A simple battle status window that shows the\nfaces of your party members in horizontal format.","parameters":{"---Visual---":"","No Action Icon":"16","Name Font Size":"20","Param Font Size":"20","Param Y Buffer":"7","Param Current Max":"false","Adjust Columns":"false","State Icons Row":"1","---Actor Switching---":"","Left / Right":"true","PageUp / PageDown":"true","Allow Turn Skip":"true","---Front View---":"","Show Animations":"true","Show Sprites":"false","Align Animations":"true","X Offset":"24","Y Offset":"30"}},
{"name":"YEP_VictoryAftermath","status":false,"description":"v1.07 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Battle Results","Battle Drops Text":"Battle Spoils","---EXP Window---":"","Font Size":"28","Level Up Text":"LEVEL UP!","Max Level Text":"MAX LEVEL","Show Skills Learned":"false","Gained EXP Text":"Gained EXP","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_ItemCore","status":false,"description":"v1.30 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_SkillCore","status":false,"description":"v1.13 Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_X_LimitedSkillUses","status":false,"description":"v1.06 (Requires YEP_SkillCore.js) Make certain skills have\na limited amount of times they can be used in battle.","parameters":{"---General---":"","Limited Use Icon":"160","Font Size":"20","Text Color":"0","Cost Format":"%1/%2","Empty Icon":"168","Empty Text":"Empty","Absolute Max":"100","Bypass Limits":"1 2 3 4 5 6 7","Bypass List":"[]","---Defaults---":"","Limit All Skills":"false","Limit Charges":"2","Recover All":"true","Victory Recover":"10","Escape Recover":"5","Lose Recover":"5"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_StatusMenuCore","status":false,"description":"v1.04 Changes the Status menu for your characters into\na hub that displays more character information.","parameters":{"---Settings---":"","Command Order":"General Parameters Elements States Attributes Custom Cancel","Command Window Width":"240","Command Window Rows":"4","Command Alignment":"center","---General---":"","General Command":"General","Parameters Text":"Parameters","Experience Text":"Experience","Total Format":"Total %1 for Next %2","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","---Parameters---":"","Parameters Command":"Parameters","Graph Text":"Parameter Graph","ATK Color":"#ed1c24 #f26c4f","DEF Color":"#f7941d #fdc689","MAT Color":"#605ca8 #bd8cbf","MDF Color":"#448ccb #a6caf4","AGI Color":"#39b54a #82ca9c","LUK Color":"#fff568 #fffac3","---Resist Colors---":"","Above 300%":"10","200% to 300%":"20","150% to 200%":"14","120% to 150%":"6","100% to 120%":"0","80% to 100%":"24","50% to 80%":"29","1% to 50%":"23","Exactly 0%":"31","Below 0%":"27","---Elements---":"","Elements Command":"Elements","Elements Decimal":"2","Element Column 1":"1","Element Column 2":"2 3 4 5 6 7 8 9","Element Column 3":"","Element Column 4":"","---States---":"","States Command":"States","States Decimal":"2","States Column 1":"1 4 5 6","States Column 2":"7 8 9 10","States Column 3":"","States Column 4":"","---Attributes---":"","Attributes Command":"Attributes","Attribute Font Size":"20","Attribute Decimal":"0","Attributes Column 1":"exr hit eva cri cev mev mrf cnt","Attributes Column 2":"mcr tcr pdr mdr fdr grd rec pha","Attributes Column 3":"hrg mrg trg tgr","Attributes Column 4":"","---XParam Names---":"","hit Name":"Hit Rate","eva Name":"Evasion Rate","cri Name":"Critical Hit Rate","cev Name":"Critical Evasion Rate","mev Name":"Magic Evasion Rate","mrf Name":"Magic Reflect Rate","cnt Name":"Counter Rate","hrg Name":"HP Regen Rate","mrg Name":"MP Regen Rate","trg Name":"TP Regen Rate","tgr Name":"Aggro Rate","grd Name":"Guard Effect","rec Name":"Recovery Effect","pha Name":"Pharmacology Effect","mcr Name":"MP Cost Rate","tcr Name":"TP Charge Rate","pdr Name":"Physical Damage Rate","mdr Name":"Magical Damage Rate","fdr Name":"Floor Damage Rate","exr Name":"Experience Rate"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_RegionEvents","status":false,"description":"v1.03 Make it so that whenever players step on certain\nRegion ID's, the game will play certain common events.","parameters":{"---Regions 1 to 20---":"","Region 1":"1","Region 2":"0","Region 3":"0","Region 4":"0","Region 5":"0","Region 6":"0","Region 7":"0","Region 8":"0","Region 9":"0","Region 10":"0","Region 11":"0","Region 12":"0","Region 13":"0","Region 14":"0","Region 15":"0","Region 16":"0","Region 17":"0","Region 18":"0","Region 19":"0","Region 20":"0","---Regions 21 to 40---":"","Region 21":"0","Region 22":"0","Region 23":"0","Region 24":"0","Region 25":"0","Region 26":"0","Region 27":"0","Region 28":"0","Region 29":"0","Region 30":"0","Region 31":"0","Region 32":"0","Region 33":"0","Region 34":"0","Region 35":"0","Region 36":"0","Region 37":"0","Region 38":"0","Region 39":"0","Region 40":"0","---Regions 41 to 60---":"","Region 41":"0","Region 42":"0","Region 43":"0","Region 44":"0","Region 45":"0","Region 46":"0","Region 47":"0","Region 48":"0","Region 49":"0","Region 50":"0","Region 51":"0","Region 52":"0","Region 53":"0","Region 54":"0","Region 55":"0","Region 56":"0","Region 57":"0","Region 58":"0","Region 59":"0","Region 60":"0","---Regions 61 to 80---":"","Region 61":"0","Region 62":"0","Region 63":"0","Region 64":"0","Region 65":"0","Region 66":"0","Region 67":"0","Region 68":"0","Region 69":"0","Region 70":"0","Region 71":"0","Region 72":"0","Region 73":"0","Region 74":"0","Region 75":"0","Region 76":"0","Region 77":"0","Region 78":"0","Region 79":"0","Region 80":"0","---Regions 81 to 100---":"","Region 81":"0","Region 82":"0","Region 83":"0","Region 84":"0","Region 85":"0","Region 86":"0","Region 87":"0","Region 88":"0","Region 89":"0","Region 90":"0","Region 91":"0","Region 92":"0","Region 93":"0","Region 94":"0","Region 95":"0","Region 96":"0","Region 97":"0","Region 98":"0","Region 99":"0","Region 100":"0","---Regions 101 to 120---":"","Region 101":"0","Region 102":"0","Region 103":"0","Region 104":"0","Region 105":"0","Region 106":"0","Region 107":"0","Region 108":"0","Region 109":"0","Region 110":"0","Region 111":"0","Region 112":"0","Region 113":"0","Region 114":"0","Region 115":"0","Region 116":"0","Region 117":"0","Region 118":"0","Region 119":"0","Region 120":"0","---Regions 121 to 140---":"","Region 121":"0","Region 122":"0","Region 123":"0","Region 124":"0","Region 125":"0","Region 126":"0","Region 127":"0","Region 128":"0","Region 129":"0","Region 130":"0","Region 131":"0","Region 132":"0","Region 133":"0","Region 134":"0","Region 135":"0","Region 136":"0","Region 137":"0","Region 138":"0","Region 139":"0","Region 140":"0","---Regions 141 to 160---":"","Region 141":"0","Region 142":"0","Region 143":"0","Region 144":"0","Region 145":"0","Region 146":"0","Region 147":"0","Region 148":"0","Region 149":"0","Region 150":"0","Region 151":"0","Region 152":"0","Region 153":"0","Region 154":"0","Region 155":"0","Region 156":"0","Region 157":"0","Region 158":"0","Region 159":"0","Region 160":"0","---Regions 161 to 180---":"","Region 161":"0","Region 162":"0","Region 163":"0","Region 164":"0","Region 165":"0","Region 166":"0","Region 167":"0","Region 168":"0","Region 169":"0","Region 170":"0","Region 171":"0","Region 172":"0","Region 173":"0","Region 174":"0","Region 175":"0","Region 176":"0","Region 177":"0","Region 178":"0","Region 179":"0","Region 180":"0","---Regions 181 to 200---":"","Region 181":"0","Region 182":"0","Region 183":"0","Region 184":"0","Region 185":"0","Region 186":"0","Region 187":"0","Region 188":"0","Region 189":"0","Region 190":"0","Region 191":"0","Region 192":"0","Region 193":"0","Region 194":"0","Region 195":"0","Region 196":"0","Region 197":"0","Region 198":"0","Region 199":"0","Region 200":"0","---Regions 201 to 220---":"","Region 201":"0","Region 202":"0","Region 203":"0","Region 204":"0","Region 205":"0","Region 206":"0","Region 207":"0","Region 208":"0","Region 209":"0","Region 210":"0","Region 211":"0","Region 212":"0","Region 213":"0","Region 214":"0","Region 215":"0","Region 216":"0","Region 217":"0","Region 218":"0","Region 219":"0","Region 220":"0","---Regions 221 to 240---":"","Region 221":"0","Region 222":"0","Region 223":"0","Region 224":"0","Region 225":"0","Region 226":"0","Region 227":"0","Region 228":"0","Region 229":"0","Region 230":"0","Region 231":"0","Region 232":"0","Region 233":"0","Region 234":"0","Region 235":"0","Region 236":"0","Region 237":"0","Region 238":"0","Region 239":"0","Region 240":"0","---Regions 241 to 255---":"","Region 241":"0","Region 242":"0","Region 243":"0","Region 244":"0","Region 245":"0","Region 246":"0","Region 247":"0","Region 248":"0","Region 249":"0","Region 250":"0","Region 251":"0","Region 252":"0","Region 253":"0","Region 254":"0","Region 255":"0"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.04 Use regions to block out Events and/or the player from\nbeing able to venture into those spots.","parameters":{"Player Restrict":"8","Event Restrict":"9","All Restrict":"10","Player Allow":"11","Event Allow":"12","All Allow":"13"}},
{"name":"YEP_EventProxActivate","status":true,"description":"v1.01 Allows events to activate by being in range of them\ninstead of needing to be exactly next to or on top of them.","parameters":{}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_PictureCommonEvents","status":false,"description":"v1.06 Causes common events to run when certain pictures\nare clicked while on the map.","parameters":{"---General---":"","Enable Touch Move":"true","Hide Message":"true","---Picture 1---":"","Picture 1 Click":"0","Picture 1 Repeat":"0","Picture 1 Hold":"0","Picture 1 Release":"0","---Picture 2---":"","Picture 2 Click":"0","Picture 2 Repeat":"0","Picture 2 Hold":"0","Picture 2 Release":"0","---Picture 3---":"","Picture 3 Click":"0","Picture 3 Repeat":"0","Picture 3 Hold":"0","Picture 3 Release":"0","---Picture 4---":"","Picture 4 Click":"0","Picture 4 Repeat":"0","Picture 4 Hold":"0","Picture 4 Release":"0","---Picture 5---":"","Picture 5 Click":"0","Picture 5 Repeat":"0","Picture 5 Hold":"0","Picture 5 Release":"0","---Picture 6---":"","Picture 6 Click":"0","Picture 6 Repeat":"0","Picture 6 Hold":"0","Picture 6 Release":"0","---Picture 7---":"","Picture 7 Click":"0","Picture 7 Repeat":"0","Picture 7 Hold":"0","Picture 7 Release":"0","---Picture 8---":"","Picture 8 Click":"0","Picture 8 Repeat":"0","Picture 8 Hold":"0","Picture 8 Release":"0","---Picture 9---":"","Picture 9 Click":"0","Picture 9 Repeat":"0","Picture 9 Hold":"0","Picture 9 Release":"0","---Picture 10---":"","Picture 10 Click":"0","Picture 10 Repeat":"0","Picture 10 Hold":"0","Picture 10 Release":"0","---Picture 11---":"","Picture 11 Click":"0","Picture 11 Repeat":"0","Picture 11 Hold":"0","Picture 11 Release":"0","---Picture 12---":"","Picture 12 Click":"0","Picture 12 Repeat":"0","Picture 12 Hold":"0","Picture 12 Release":"0","---Picture 13---":"","Picture 13 Click":"0","Picture 13 Repeat":"0","Picture 13 Hold":"0","Picture 13 Release":"0","---Picture 14---":"","Picture 14 Click":"0","Picture 14 Repeat":"0","Picture 14 Hold":"0","Picture 14 Release":"0","---Picture 15---":"","Picture 15 Click":"0","Picture 15 Repeat":"0","Picture 15 Hold":"0","Picture 15 Release":"0","---Picture 16---":"","Picture 16 Click":"0","Picture 16 Repeat":"0","Picture 16 Hold":"0","Picture 16 Release":"0","---Picture 17---":"","Picture 17 Click":"0","Picture 17 Repeat":"0","Picture 17 Hold":"0","Picture 17 Release":"0","---Picture 18---":"","Picture 18 Click":"0","Picture 18 Repeat":"0","Picture 18 Hold":"0","Picture 18 Release":"0","---Picture 19---":"","Picture 19 Click":"0","Picture 19 Repeat":"0","Picture 19 Hold":"0","Picture 19 Release":"0","---Picture 20---":"","Picture 20 Click":"0","Picture 20 Repeat":"0","Picture 20 Hold":"0","Picture 20 Release":"0","---Picture 21---":"","Picture 21 Click":"0","Picture 21 Repeat":"0","Picture 21 Hold":"0","Picture 21 Release":"0","---Picture 22---":"","Picture 22 Click":"0","Picture 22 Repeat":"0","Picture 22 Hold":"0","Picture 22 Release":"0","---Picture 23---":"","Picture 23 Click":"0","Picture 23 Repeat":"0","Picture 23 Hold":"0","Picture 23 Release":"0","---Picture 24---":"","Picture 24 Click":"0","Picture 24 Repeat":"0","Picture 24 Hold":"0","Picture 24 Release":"0","---Picture 25---":"","Picture 25 Click":"0","Picture 25 Repeat":"0","Picture 25 Hold":"0","Picture 25 Release":"0","---Picture 26---":"","Picture 26 Click":"0","Picture 26 Repeat":"0","Picture 26 Hold":"0","Picture 26 Release":"0","---Picture 27---":"","Picture 27 Click":"0","Picture 27 Repeat":"0","Picture 27 Hold":"0","Picture 27 Release":"0","---Picture 28---":"","Picture 28 Click":"0","Picture 28 Repeat":"0","Picture 28 Hold":"0","Picture 28 Release":"0","---Picture 29---":"","Picture 29 Click":"0","Picture 29 Repeat":"0","Picture 29 Hold":"0","Picture 29 Release":"0","---Picture 30---":"","Picture 30 Click":"0","Picture 30 Repeat":"0","Picture 30 Hold":"0","Picture 30 Release":"0","---Picture 31---":"","Picture 31 Click":"0","Picture 31 Repeat":"0","Picture 31 Hold":"0","Picture 31 Release":"0","---Picture 32---":"","Picture 32 Click":"0","Picture 32 Repeat":"0","Picture 32 Hold":"0","Picture 32 Release":"0","---Picture 33---":"","Picture 33 Click":"0","Picture 33 Repeat":"0","Picture 33 Hold":"0","Picture 33 Release":"0","---Picture 34---":"","Picture 34 Click":"0","Picture 34 Repeat":"0","Picture 34 Hold":"0","Picture 34 Release":"0","---Picture 35---":"","Picture 35 Click":"0","Picture 35 Repeat":"0","Picture 35 Hold":"0","Picture 35 Release":"0","---Picture 36---":"","Picture 36 Click":"0","Picture 36 Repeat":"0","Picture 36 Hold":"0","Picture 36 Release":"0","---Picture 37---":"","Picture 37 Click":"0","Picture 37 Repeat":"0","Picture 37 Hold":"0","Picture 37 Release":"0","---Picture 38---":"","Picture 38 Click":"0","Picture 38 Repeat":"0","Picture 38 Hold":"0","Picture 38 Release":"0","---Picture 39---":"","Picture 39 Click":"0","Picture 39 Repeat":"0","Picture 39 Hold":"0","Picture 39 Release":"0","---Picture 40---":"","Picture 40 Click":"0","Picture 40 Repeat":"0","Picture 40 Hold":"0","Picture 40 Release":"0","---Picture 41---":"","Picture 41 Click":"0","Picture 41 Repeat":"0","Picture 41 Hold":"0","Picture 41 Release":"0","---Picture 42---":"","Picture 42 Click":"0","Picture 42 Repeat":"0","Picture 42 Hold":"0","Picture 42 Release":"0","---Picture 43---":"","Picture 43 Click":"0","Picture 43 Repeat":"0","Picture 43 Hold":"0","Picture 43 Release":"0","---Picture 44---":"","Picture 44 Click":"0","Picture 44 Repeat":"0","Picture 44 Hold":"0","Picture 44 Release":"0","---Picture 45---":"","Picture 45 Click":"0","Picture 45 Repeat":"0","Picture 45 Hold":"0","Picture 45 Release":"0","---Picture 46---":"","Picture 46 Click":"0","Picture 46 Repeat":"0","Picture 46 Hold":"0","Picture 46 Release":"0","---Picture 47---":"","Picture 47 Click":"0","Picture 47 Repeat":"0","Picture 47 Hold":"0","Picture 47 Release":"0","---Picture 48---":"","Picture 48 Click":"0","Picture 48 Repeat":"0","Picture 48 Hold":"0","Picture 48 Release":"0","---Picture 49---":"","Picture 49 Click":"0","Picture 49 Repeat":"0","Picture 49 Hold":"0","Picture 49 Release":"0","---Picture 50---":"","Picture 50 Click":"0","Picture 50 Repeat":"0","Picture 50 Hold":"0","Picture 50 Release":"0","---Picture 51---":"","Picture 51 Click":"0","Picture 51 Repeat":"0","Picture 51 Hold":"0","Picture 51 Release":"0","---Picture 52---":"","Picture 52 Click":"0","Picture 52 Repeat":"0","Picture 52 Hold":"0","Picture 52 Release":"0","---Picture 53---":"","Picture 53 Click":"0","Picture 53 Repeat":"0","Picture 53 Hold":"0","Picture 53 Release":"0","---Picture 54---":"","Picture 54 Click":"0","Picture 54 Repeat":"0","Picture 54 Hold":"0","Picture 54 Release":"0","---Picture 55---":"","Picture 55 Click":"0","Picture 55 Repeat":"0","Picture 55 Hold":"0","Picture 55 Release":"0","---Picture 56---":"","Picture 56 Click":"0","Picture 56 Repeat":"0","Picture 56 Hold":"0","Picture 56 Release":"0","---Picture 57---":"","Picture 57 Click":"0","Picture 57 Repeat":"0","Picture 57 Hold":"0","Picture 57 Release":"0","---Picture 58---":"","Picture 58 Click":"0","Picture 58 Repeat":"0","Picture 58 Hold":"0","Picture 58 Release":"0","---Picture 59---":"","Picture 59 Click":"0","Picture 59 Repeat":"0","Picture 59 Hold":"0","Picture 59 Release":"0","---Picture 60---":"","Picture 60 Click":"0","Picture 60 Repeat":"0","Picture 60 Hold":"0","Picture 60 Release":"0","---Picture 61---":"","Picture 61 Click":"0","Picture 61 Repeat":"0","Picture 61 Hold":"0","Picture 61 Release":"0","---Picture 62---":"","Picture 62 Click":"0","Picture 62 Repeat":"0","Picture 62 Hold":"0","Picture 62 Release":"0","---Picture 63---":"","Picture 63 Click":"0","Picture 63 Repeat":"0","Picture 63 Hold":"0","Picture 63 Release":"0","---Picture 64---":"","Picture 64 Click":"0","Picture 64 Repeat":"0","Picture 64 Hold":"0","Picture 64 Release":"0","---Picture 65---":"","Picture 65 Click":"0","Picture 65 Repeat":"0","Picture 65 Hold":"0","Picture 65 Release":"0","---Picture 66---":"","Picture 66 Click":"0","Picture 66 Repeat":"0","Picture 66 Hold":"0","Picture 66 Release":"0","---Picture 67---":"","Picture 67 Click":"0","Picture 67 Repeat":"0","Picture 67 Hold":"0","Picture 67 Release":"0","---Picture 68---":"","Picture 68 Click":"0","Picture 68 Repeat":"0","Picture 68 Hold":"0","Picture 68 Release":"0","---Picture 69---":"","Picture 69 Click":"0","Picture 69 Repeat":"0","Picture 69 Hold":"0","Picture 69 Release":"0","---Picture 70---":"","Picture 70 Click":"0","Picture 70 Repeat":"0","Picture 70 Hold":"0","Picture 70 Release":"0","---Picture 71---":"","Picture 71 Click":"0","Picture 71 Repeat":"0","Picture 71 Hold":"0","Picture 71 Release":"0","---Picture 72---":"","Picture 72 Click":"0","Picture 72 Repeat":"0","Picture 72 Hold":"0","Picture 72 Release":"0","---Picture 73---":"","Picture 73 Click":"0","Picture 73 Repeat":"0","Picture 73 Hold":"0","Picture 73 Release":"0","---Picture 74---":"","Picture 74 Click":"0","Picture 74 Repeat":"0","Picture 74 Hold":"0","Picture 74 Release":"0","---Picture 75---":"","Picture 75 Click":"0","Picture 75 Repeat":"0","Picture 75 Hold":"0","Picture 75 Release":"0","---Picture 76---":"","Picture 76 Click":"0","Picture 76 Repeat":"0","Picture 76 Hold":"0","Picture 76 Release":"0","---Picture 77---":"","Picture 77 Click":"0","Picture 77 Repeat":"0","Picture 77 Hold":"0","Picture 77 Release":"0","---Picture 78---":"","Picture 78 Click":"0","Picture 78 Repeat":"0","Picture 78 Hold":"0","Picture 78 Release":"0","---Picture 79---":"","Picture 79 Click":"0","Picture 79 Repeat":"0","Picture 79 Hold":"0","Picture 79 Release":"0","---Picture 80---":"","Picture 80 Click":"0","Picture 80 Repeat":"0","Picture 80 Hold":"0","Picture 80 Release":"0","---Picture 81---":"","Picture 81 Click":"0","Picture 81 Repeat":"0","Picture 81 Hold":"0","Picture 81 Release":"0","---Picture 82---":"","Picture 82 Click":"0","Picture 82 Repeat":"0","Picture 82 Hold":"0","Picture 82 Release":"0","---Picture 83---":"","Picture 83 Click":"0","Picture 83 Repeat":"0","Picture 83 Hold":"0","Picture 83 Release":"0","---Picture 84---":"","Picture 84 Click":"0","Picture 84 Repeat":"0","Picture 84 Hold":"0","Picture 84 Release":"0","---Picture 85---":"","Picture 85 Click":"0","Picture 85 Repeat":"0","Picture 85 Hold":"0","Picture 85 Release":"0","---Picture 86---":"","Picture 86 Click":"0","Picture 86 Repeat":"0","Picture 86 Hold":"0","Picture 86 Release":"0","---Picture 87---":"","Picture 87 Click":"0","Picture 87 Repeat":"0","Picture 87 Hold":"0","Picture 87 Release":"0","---Picture 88---":"","Picture 88 Click":"0","Picture 88 Repeat":"0","Picture 88 Hold":"0","Picture 88 Release":"0","---Picture 89---":"","Picture 89 Click":"0","Picture 89 Repeat":"0","Picture 89 Hold":"0","Picture 89 Release":"0","---Picture 90---":"","Picture 90 Click":"0","Picture 90 Repeat":"0","Picture 90 Hold":"0","Picture 90 Release":"0","---Picture 91---":"","Picture 91 Click":"0","Picture 91 Repeat":"0","Picture 91 Hold":"0","Picture 91 Release":"0","---Picture 92---":"","Picture 92 Click":"0","Picture 92 Repeat":"0","Picture 92 Hold":"0","Picture 92 Release":"0","---Picture 93---":"","Picture 93 Click":"0","Picture 93 Repeat":"0","Picture 93 Hold":"0","Picture 93 Release":"0","---Picture 94---":"","Picture 94 Click":"0","Picture 94 Repeat":"0","Picture 94 Hold":"0","Picture 94 Release":"0","---Picture 95---":"","Picture 95 Click":"0","Picture 95 Repeat":"0","Picture 95 Hold":"0","Picture 95 Release":"0","---Picture 96---":"","Picture 96 Click":"0","Picture 96 Repeat":"0","Picture 96 Hold":"0","Picture 96 Release":"0","---Picture 97---":"","Picture 97 Click":"0","Picture 97 Repeat":"0","Picture 97 Hold":"0","Picture 97 Release":"0","---Picture 98---":"","Picture 98 Click":"0","Picture 98 Repeat":"0","Picture 98 Hold":"0","Picture 98 Release":"0","---Picture 99---":"","Picture 99 Click":"0","Picture 99 Repeat":"0","Picture 99 Hold":"0","Picture 99 Release":"0","---Picture 100---":"","Picture 100 Click":"0","Picture 100 Repeat":"0","Picture 100 Hold":"0","Picture 100 Release":"0"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"TDDP_BindPicturesToMap","status":true,"description":"1.0.7 Plugin Commands for binding pictures to the map and/or changing what layer they're drawn on.","parameters":{}}
];
