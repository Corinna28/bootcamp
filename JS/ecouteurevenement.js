<!DOCTYPE html>
<!-- saved from url=(0026)https://sharemycode.fr/3ui -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Share live code snippets with anyone, anywhere. Aand keep control of it.">

      <title _msttexthash="298246" _msthash="0">3ui :: Sharemycode</title>

      <link rel="icon" type="image/png" href="https://sharemycode.fr/res/img/favicon.png">
      
      <link rel="stylesheet" href="./ecouteurevenement_files/reset.css">
      <link rel="stylesheet" href="./ecouteurevenement_files/codemirror.css">
      <link rel="stylesheet" href="./ecouteurevenement_files/monokai-sublime.css">
      <link rel="stylesheet" href="./ecouteurevenement_files/vscode.css">
      <!-- <link rel="stylesheet" href="node_modules/codemirror/theme/material-ocean.css"> -->
      <link rel="stylesheet" href="./ecouteurevenement_files/mdn-like.css">
      <link rel="stylesheet" href="./ecouteurevenement_files/main.css">
  </head>

  <body>
    
  <div class="flexbox">
    <textarea id="code" name="code" style="display: none;"></textarea><div class="CodeMirror cm-s-vscode-dark CodeMirror-wrap" style="font-size: 17px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 198.387px; left: 110.547px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 36px; margin-bottom: -4px; border-right-width: 26px; min-height: 920px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><span _msttexthash="185055" _msthash="1"><span _istranslated="1"></span>x (en anglais)</span><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div _msttexthash="9737" _msthash="75">31</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style="visibility: hidden;"><div class="CodeMirror-cursor" style="left: 74.5469px; top: 190.387px; height: 23.7969px;">&nbsp;</div></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="4459" _msthash="74">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">// Écouteur qui permet d'attendre que le dom complet soit chargé avant d'éxécuter ce qui se trouve entre les {} de function()</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="4550" _msthash="73">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">document.addEventListener('DOMContentLoaded', function(){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="4641" _msthash="72">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="4732" _msthash="71">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  // Écouteur placé sur mon élément h1, de type clic qui me permet de changer la couleur du h2 en rouge lors de l'écoute au clic de mon h1</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="4823" _msthash="70">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  document.querySelector('h1').addEventListener('click', function(){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="4914" _msthash="69">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;  document.querySelector('h2').style.color = 'red';</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="5005" _msthash="68">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  });</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="5096" _msthash="67">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="5187" _msthash="66">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  // Écouteur placé sur mon élément h2, de type clic qui me permet de souligner le h2 lors de l'écoute au clic de mon h2 (pour éviter une répétition lors de la selection de mon h2 je peux utiliser le mot clée this)</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="9451" _msthash="65">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  document.querySelector('h2').addEventListener('click', function(){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="9555" _msthash="64">11</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;  this.style.textDecoration = 'underline';</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="9659" _msthash="63">12</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  });</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="9763" _msthash="62">13</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="9867" _msthash="61">14</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  // le petit "e" de ma fonction me permet d'avoir accès à .preventDefault() me permettant de stopper le comportement par défault de mon lien "a"</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="9971" _msthash="60">15</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  document.querySelector('a').addEventListener('click', function(e){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="10075" _msthash="59">16</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;  e.preventDefault();</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="10179" _msthash="58">17</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  })</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="10283" _msthash="57">18</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="10387" _msthash="56">19</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  // Dans le cas où je voudrais supprimer un écouteur d'évènement de façon précise (en utilisant "removeEventListener"), il faut que ma fonction ne soit pas anonyme, ici ma fonction porte le nom test</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="9542" _msthash="55">20</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="9646" _msthash="54">21</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  function test(){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="9750" _msthash="53">22</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;  alert('Hello !');</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="9854" _msthash="52">23</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  }</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="9958" _msthash="51">24</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="10062" _msthash="50">25</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  document.querySelector('.link-cat').addEventListener('click', test);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="10166" _msthash="49">26</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="10270" _msthash="48">27</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  document.querySelector('.link-cat').removeEventListener('click', test);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="10374" _msthash="47">28</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -36px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" _msttexthash="10478" _msthash="46">29</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">});</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 26px; width: 1px; border-bottom: 0px solid transparent; top: 920px;"></div><div class="CodeMirror-gutters" style="height: 946px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div></div></div></div>
    <div class="actionbar" style="background: rgb(15, 17, 26);">
      <select id="langage">
        <option value="application/x-httpd-php" _msttexthash="219856" _msthash="3">Mode HTML mixte</option>
        <option value="javascript" _msttexthash="159471" _msthash="4">Javascript (en anglais)</option>
        <option value="php" _msttexthash="24128" _msthash="5">.PHP</option>
        <option value="css" _msttexthash="24440" _msthash="6">.CSS</option>
        <option value="dart" _msttexthash="44694" _msthash="7">Dard</option>
      </select>
      <button title="ouvrir/fermer la sidebar" class="openclosesidebar-icon close">
        <svg class="icon icon-openclosesidebar">
          <use xlink:href="res/css/icon.svg#icon-chevron-right"></use>
        </svg>
      </button>
    </div>

    <div class="sidebarRight" style="transform: translateX(250px); width: 0px; opacity: 0;">
    <div id="copyright">
      <p><font _mstmutation="1" _msttexthash="617578" _msthash="8">©2020 Sharemycode - <a onclick="littleabout(event)" href="https://sharemycode.fr/3ui" _mstmutation="1" _istranslated="1">à propos</a></font>
    </p>
    </div>
    <div class="tabs">
      <div class="tab playlist selected" _msttexthash="203177" _msthash="9">Liste de codes</div>
      <div class="tab notes" _msttexthash="61789" _msthash="10">Notes</div> 
      <div class="tab about" title="a propos">
        <svg class="icon icon-question">
          <use xlink:href="res/css/icon.svg#icon-question"></use>
        </svg>
      </div> 
      <div class="tab settings" title="paramètres">
        <svg class="icon icon-cog">
          <use xlink:href="res/css/icon.svg#icon-cog"></use>
        </svg>
      </div> 
    </div>
    <!-- NotesSection -->
    <div class="NotesSection tabsection" _msthidden="1">
    <p _msttexthash="2793596" _msthidden="1" _msthash="11">Bientôt... Ici vous pourrez laisser une explication liée au code...</p>
    </div>


    <!-- CodelistSection -->
    <div class="CodelistSection tabsection selected">
      <p _msttexthash="82999358" _msthash="12">Historique des sharecodes consultés. Oh trop cool Fred ! 🙂</p>
      <!-- <input placeholder="rechercher un slug..." type="text"> -->
      <hr>
      <h2 class="news" _msttexthash="11157978" _msthash="13">📣 <span>2</span> actualités</h2>
      <ul class="admincodeslist">
      <li onclick="window.location.href=&#39;http://sharemycode.fr/25d&#39;">
      <span>
       <svg class="icon icon-point">
       <use xlink:href="res/css/icon.svg#icon-point"></use>
       </svg>
      </span><font _mstmutation="1" _msttexthash="118235" _msthash="14">
        Joyeuses</font><span _msttexthash="73853" _msthash="15"> Fêtes</span>
      </li>
      <li onclick="window.location.href=&#39;http://sharemycode.fr/v20&#39;">
      <span>
       <svg class="icon icon-point">
       <use xlink:href="res/css/icon.svg#icon-point"></use>
       </svg>
      </span><font _mstmutation="1" _msttexthash="259103" _msthash="16"> Quoi de neuf dans</font><span _msttexthash="24648" _msthash="17">V2.0</span>
      </li>
      </ul>
       <!-- Dans div.codelist on injecte la liste de shares depuis locastorage.js  -->
      <div class="codelist"><h2 _msttexthash="73840" _msthash="18">07/11/2023</h2><ul>
     <li data-slug="3ui">
      <span>
       <svg class="icon icon-point same">
       <use xlink:href="res/css/icon.svg#icon-point"></use>
       </svg>
      </span><font _mstmutation="1" _msttexthash="260559" _msthash="19">
      sharemycode.fr/</font><span _msttexthash="493766" _msthash="20">3Interface utilisateur</span>
      <button data-slug="3ui" class="deletecode">
       <svg class="icon icon-bin">
        <use xlink:href="res/css/icon.svg#icon-bin"></use>
       </svg>
      </button>
     </li></ul></div>
    </div>

    <!-- AboutSection -->
    <div class="AboutSection tabsection" _msthidden="13">
    <div class="author" _msthidden="6">
    <p _msttexthash="3627494" _msthidden="1" _msthash="21">J'ai créé sharemycode pour faciliter la vie des apprenants pendant les cours.</p>
        <span class="avatar" style="background-image: url(https://frederic-lossignol.com/fred-100.png);"></span>
        
        <div class="h3 sm name" _msthidden="1">
          <a target="blank" href="https://frederic-lossignol.com/" _msttexthash="348049" _msthidden="1" _msthash="22">Frederic Lossignol</a>
        </div>
        <ul class="bullets social details muted" _msthidden="2">
          <li _msthidden="1">
            <a data-icon="mail4" target="blank" href="https://forms.gle/aspB4sXo7wkpeX4o8" _msthidden="1">
              <svg class="icon icon-mail4">
                <use xlink:href="res/css/icon.svg#icon-mail4"></use>
              </svg><font _mstmutation="1" _msttexthash="97422" _msthidden="1" _msthash="23">contact</font></a>
          </li>
          <li _msthidden="1">
            <a data-icon="twitter" target="blank" href="https://twitter.com/FredLossignol" _msthidden="1">
              <svg class="icon icon-twitter">
                <use xlink:href="res/css/icon.svg#icon-twitter"></use>
              </svg><font _mstmutation="1" _msttexthash="257010" _msthidden="1" _msthash="24">@fredLossignol
            </font></a>
          </li>
        </ul>
        <p class="job" _msthidden="2"><font _mstmutation="1" _msttexthash="108004" _msthidden="1" _msthash="25">ITeacher 
          </font><span style="display:block" _msttexthash="628485" _msthidden="1" _msthash="26">JS Angular Ionic Flutter Node</span>
        </p>
        </div>
        <hr>
        <div class="description" _msthidden="7">
        
        <h2 _msttexthash="438685" _msthidden="1" _msthash="27">Pourquoi Sharemycode ?</h2>
        <p _msttexthash="3284398" _msthidden="1" _msthash="28">Pour que les apprenants ne perdent jamais le "fil du code" pendant les cours.</p>
        <!-- <p><u>Pour qui</u> : les ecoles qui veulent donner les meilleures chances aux apprenants.</p>  -->
        <p class="mb-0" _msttexthash="2146235" _msthidden="1" _msthash="29"><u>Solution</u> : j'ai crée sharemycode. Les apprenants peuvent : </p>
        <ul class="likep" _msthidden="3">
          <li _msttexthash="950469" _msthidden="1" _msthash="30">suivre le code du formateur en direct</li>
          <li _msttexthash="938730" _msthidden="1" _msthash="31">revenir en arrière pendant le cours</li>
          <li _msttexthash="979173" _msthidden="1" _msthash="32">et revoir le code plus tard de chez eux.</li>
        </ul>
        <p _msttexthash="34817458" _msthidden="1" _msthash="33">Bon Live Code à tous 🙂. Fred.</p>
      </div>
    </div> <!-- fin .AboutSection -->

    <!-- SettingsSection -->
    <div class="SettingsSection tabsection" _msthidden="12">
      <p _msttexthash="213577" _msthidden="1" _msthash="34">
        Préférences
      </p>
        <hr>
        <p _msttexthash="593021" _msthidden="1" _msthash="35">Choix du theme de l'éditeur</p>
        <select id="theme" _msthidden="3">
          <option value="vscode-dark" _msttexthash="154310" _msthidden="1" _msthash="36">Dark Visual</option>
          <option value="monokai-sublime" _msttexthash="175331" _msthidden="1" _msthash="37">Dark Sublime</option>
          <option value="mdn-like" _msttexthash="59995" _msthidden="1" _msthash="38">Light</option>
        </select>

        <hr class="invisible">
        <p _msttexthash="113113" _msthidden="1" _msthash="39">Font Size</p>
        <select id="selectfontsize" _msthidden="6">
          <option value="16px" _msttexthash="38779" _msthidden="1" _msthash="40">16px</option>
          <option value="18px" _msttexthash="38987" _msthidden="1" _msthash="41">18px</option>
          <option value="20px" _msttexthash="38246" _msthidden="1" _msthash="42">20px</option>
          <option value="24px" _msttexthash="38662" _msthidden="1" _msthash="43">24px</option>
          <option value="28px" _msttexthash="39078" _msthidden="1" _msthash="44">28px</option>
          <option value="30px" _msttexthash="38337" _msthidden="1" _msthash="45">30px</option>
        </select>
    </div>

    

    </div> <!-- Fin .sidebarRight  -->
  </div> <!-- Fin .flexbox -->
     
    <!-- Code Mirror -->
    <script src="./ecouteurevenement_files/codemirror.js.télécharger"></script>
    <script src="./ecouteurevenement_files/closebrackets.js.télécharger"></script>
    <script src="./ecouteurevenement_files/closetag.js.télécharger"></script>
    <script src="./ecouteurevenement_files/matchbrackets.js.télécharger"></script>
    <script src="./ecouteurevenement_files/clike.js.télécharger"></script>
    <script src="./ecouteurevenement_files/htmlmixed.js.télécharger"></script>
    <script src="./ecouteurevenement_files/javascript.js.télécharger"></script>
    <script src="./ecouteurevenement_files/php.js.télécharger"></script>
    <script src="./ecouteurevenement_files/xml.js.télécharger"></script>
    <script src="./ecouteurevenement_files/css.js.télécharger"></script>
    <script src="./ecouteurevenement_files/dart.js.télécharger"></script>
    

    <!-- jQuery -->
    <script src="./ecouteurevenement_files/jquery.min.js.télécharger"></script>

    <!-- Functions -->
    <script src="./ecouteurevenement_files/checkCode.function.js.télécharger"></script>
    <script src="./ecouteurevenement_files/getCode.function.js.télécharger"></script>
    <script src="./ecouteurevenement_files/localstorage.js.télécharger"></script>
    <script src="./ecouteurevenement_files/loadCodeMirror.function.js.télécharger"></script>
    <script src="./ecouteurevenement_files/updateCode.function.js.télécharger"></script>
    <script src="./ecouteurevenement_files/tabs.js.télécharger"></script>
    

    <!-- Main script -->
    <script src="./ecouteurevenement_files/main.js.télécharger"></script>

    <script>
      // PHP to JS URL slug
      var urlSlug = '3ui';
      function littleabout(e) {
        e.preventDefault();
        alert("Sharemycode V2.0 \nApplication de partage de code en live pour les écoles du web. \n\nAide les jeunes Padawan du dev à suivre le code du formateur Jedi pendant la journée. Du côté obscur tu ne sombrera point. \n\n+ d'infos sur sharemycode.fr/v20")
      }
    </script>

  


</body></html>