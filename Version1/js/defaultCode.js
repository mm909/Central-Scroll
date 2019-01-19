var defaultCodeCSS = `a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline
}

body {
  color: #24292e;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  word-wrap: break-word;
  background-color: #f5fcff
}

* {
  box-sizing: border-box
}

strong {
  font-weight: bold !important;
}

i {
  font-style: italic;
}

a, a:hover {
  color: #222;
  text-decoration: none
}

p {
  margin-bottom: 1em;
  margin-top: 0
}

h1, h2, h3, h4, h5, h6 {
  color: inherit;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 1.5em
}

h1 {
  font-size: 32px
}

h2 {
  font-size: 24px
}

h3 {
  font-size: 20px
}

h4 {
  font-size: 16px
}

h5 {
  font-size: 14px
}

h6 {
  font-size: 13.6px
}

code {
  background-color: rgba(27, 31, 35, .05);
  border-radius: 3px;
  color: inherit;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 85%;
  margin: 0;
  padding: 3.2px 6.4px
}

article:after, article:before {
  content: "";
  display: table
}

.noselect {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently supported by Chrome and Opera */
}

.button {
  border: 1px solid #222;
  border-radius: 3px;
  color: #222;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2em;
  padding: 10px;
  text-decoration: none !important;
  transition: background .3s, color .3s
}

.button:hover {
  background: #222;
  color: #fff
}

.wrapper {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px
}

.mainContainer {
  flex: 1 1 auto;
  padding: 48px 0
}

.mainContainer .wrapper .post .postHeaderTitle {
  margin-top: 0;
  padding: 0
}

.fixedHeaderContainer {
  background: #222;
  color: #fff;
  padding: 8px 0;
  position: fixed;
  width: 100%;
  z-index: 9999
}

.navPusher {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 50px);
  padding-top: 50px
}

.navigationSlider .slidingNav ul {
  list-style: none;
  background: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  width: auto
}

.navigationSlider .slidingNav a {
  border: 0;
  color: hsla(0, 0%, 100%, .8);
  display: flex;
  font-size: 16px;
  font-size: 1em;
  font-weight: 300;
  height: 32px;
  line-height: 1.2em;
  margin: 0;
  padding: 0;
  padding: 6px 10px
}

.docMainWrapper {
  width: 100%
}

.docMainWrapper {
  display: flex;
  flex-flow: row nowrap
}

.docMainWrapper .wrapper {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0
}

.edit-page-link {
  float: right;
  font-size: 10px;
  font-weight: 400;
  margin-top: 3px;
  text-decoration: none
}

.class-page-link {
  float: right;
  font-size: 10px;
  font-weight: 400;
  margin-top: 30px;
  margin-left: 30px;
  text-decoration: none
}

.docs-prevnext {
  margin: 20px 0;
  height: 40px
}

.docs-prevnext:after {
  clear: both;
  content: " ";
  display: table
}

.docs-next {
  float: right
}

.docs-prev {
  float: left
}

.docsNavContainer {
  flex: 0 0 240px;
  height: calc(100vh);
  position: -webkit-sticky;
  position: sticky;
  overflow-y: auto;
  top: 50px
}

.docsNavContainer .toc .navBreadcrumb {
  display: none
}

.toc {
  padding: 40px 0
}

.toc .toggleNav .navGroup .navGroupCategoryTitle {
  color: #393939;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2em;
  margin-bottom: 8px;
  margin-top: 0
}

.toc .toggleNav ul {
  padding: 0 8px
}

.toc .toggleNav ul li {
  list-style-type: none;
}

.toc .toggleNav a {
  border: none;
  color: #717171;
  display: block;
  font-size: 14px;
  padding: 4px 0;
  transition: color .3s
}

.toc .toggleNav .docsSliderActive ul {
  padding-left: 0
}

.toc .toggleNav ul li.navListItemActive a, .toc .toggleNav ul li a:focus, .toc .toggleNav ul li a:hover {
  color: #222
}

.toc section .navGroups {
  display: block;
  padding: 0;
  padding-top: 8px
}

.nav-footer {
  background: #20232a;
  border: none;
  color: #202020;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  line-height: 24px;
  padding-bottom: 2em;
  padding-top: 2em;
  position: relative
}

.nav-footer .sitemap {
  display: flex;
  justify-content: space-between;
  margin: 0 auto 3em;
  max-width: 1080px
}

.nav-footer .sitemap a {
  color: hsla(0, 0%, 100%, .6);
  display: block;
  margin: 2px -10px;
  padding: 3px 10px
}

.nav-footer .sitemap h5, .nav-footer .sitemap h6 {
  margin: 0 0 10px
}

.nav-footer .sitemap h5, .nav-footer .sitemap h5>a, .nav-footer .sitemap h6, .nav-footer .sitemap h6>a {
  color: #fff
}

footer.nav-footer {
  background-color: #012129
}

.container {
  max-width: 900px
}

.big-button, li, p {
  font-size: 18px
}

@media only screen and (max-width: 1200px) {
  .docsNavContainer {
    flex: 0 0 150px;
  }
}

/* -- */
codeR {
  background-color: rgba(255, 0, 0, .1);
  border-radius: 3px;
  color: inherit;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 85%;
  margin: 0;
  padding: 3.2px 6.4px
}

codeG {
  background-color: rgba(0, 250, 0, .1);
  border-radius: 3px;
  color: inherit;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 85%;
  margin: 0;
  padding: 3.2px 6.4px
}

codeB {
  background-color: rgba(0, 0, 250, .1);
  border-radius: 3px;
  color: inherit;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 85%;
  margin: 0;
  padding: 3.2px 6.4px
}

textR {
  background-color: rgba(255, 0, 0, .1);
  border-radius: 3px;
  color: inherit;
  margin: 0;
  padding: 3.2px 6.4px
}

textG {
  background-color: rgba(0, 250, 0, .1);
  border-radius: 3px;
  color: inherit;
  margin: 0;
  padding: 3.2px 6.4px
}

textB {
  background-color: rgba(0, 0, 250, .1);
  border-radius: 3px;
  color: inherit;
  margin: 0;
  padding: 3.2px 6.4px
}

.CodeBox {
  margin: auto;
  width: 75%;
  color: #fff;
  border-radius: 20px;
  padding: 2px;
  font-size: 150%;
  margin-bottom: 1em;
}

.CodeBoxL {
  margin: auto;
  width: 100%;
  color: #fff;
  border-radius: 20px;
  padding: 2px;
  font-size: 150%;
  margin-bottom: 1em;
}

.CodeBoxBuffer {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
}

.question {
  width: auto;
}

.answer {
  display: none;
}

#pb {
  width: 95%;
  margin: auto;
  max-width: 150px;
}

#toc>section {
  display: none;
}

.paraTitle {
  text-align: center;
}

.paraSection {
  background-color: #edf4f7;
  width: 99%;
  margin: auto;
  padding-top: 15px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 15px;
}

.para {
  overflow: hidden;
}

.fl {
  width: 50%;
  float: left;
}

.fr {
  width: 50%;
  float: right;
}

.fm {
  text-align: middle;
  margin: auto;
}

.tutImageContainer {
  width: 90%;
  margin: auto;
}

.tutImage {
  width: 100%;
}

.smallText {
  font-size: 10px;
}

.img-s {
  max-width: 500px;
  max-height: 500px;
}

.questionmark {
  height: 15px;
  width: 15px;
}

.prettifyHTML {
  color: #ed5565;
  background-color: #2f3640;
}

.prettifyCSS {
  background-color: #2f3640;
  color: #90EE90;
}

.prettifyJS {
  background-color: #2f3640;
  color: #4fc1e9
}

.prettifyResult {
  background-color: #2f3640;
  color: #e6e9ed;
}

.prettifyPurple {
  background-color: #2f3640;
  color: #ac92ec;
}

.codetab {
  font-size: 20px;
}

.nav-link {
  padding: 5px !important;
}

.resultBox {
  background-color: #edf4f7;
  width: 99%;
  margin: auto;
  padding-top: 15px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 15px;
  border-radius: 20px;
  margin-bottom: 1em;
}

.resultBoxImageContainer {
  text-align: center;
  margin: auto;
  width: 500px;
}

.tab-content h1 {
  margin-top: 16px;
}

.tab-content {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently supported by Chrome and Opera */
}


@media only screen and (max-width: 1000px) {
  .docsNavContainer {
    display: none;
  }
}
/* EOF */`



var defaultCodeHTML = `<!DOCTYPE html>
<html lang="en">

<head id="sql">
  <title>PHP and MySQL</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
  <script type="text/javascript" src="../../js/buildTOC.js"></script>
  <script type="text/javascript" src="../../js/toc.js"></script>
  <script type="text/javascript" src="../../js/progressbar.js"></script>
  <script type="text/javascript" src="../../js/question.js"></script>
  <script type="text/javascript" src="../../js/scrolling.js"></script>
  <script type="text/javascript" src="../../js/smoothscroll.js"></script>
  <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=css"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="../../css/prettyPrint.css">
  <link rel="stylesheet" href="../../css/styles.css">
</head>

<body class="sideNavVisible">

  <div class="fixedHeaderContainer">
    <div class="wrapper">
      <a href="https://portal.mycodecentral.com/my/" target="_self"><img src="../logo.png" alt="Code Central"></img></a>
    </div>
  </div>

  <div class="navPusher">
    <div class="docMainWrapper wrapper">

      <div class="container docsNavContainer">
        <nav class="toc">
          <div class="toggleNav">
            <section class="navWrapper wrapper">
              <div class="navGroups">
                <div class="navGroup">
                  <a href="#top">
                    <h3 class="navGroupCategoryTitle">WD 4</h3>
                  </a>
                  <ul id="toc">
                    <progress id="pb" value="0" max="100"></progress>
                    <div id="tocDynamic"></div>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </nav>
      </div>

      <div class="container mainContainer" id="top">
        <div class="wrapper">
          <div class="post">

            <header class="postHeader">
              <!-- <a class="edit-page-link button" href="https://www.GitHub.com/mm909" rel="noreferrer noopener">GitHub</a> -->
              <h1 class="postHeaderTitle">PHP and MySQL</h1>
            </header>

            <article id="mainContent">
              <p>
                We're reaching the end game of Programming Pro! You've learned a lot in your time in this course. Now
                we are reaching the final thing of web development! If you really enjoyed this, then the next step would
                be to get on one of our web development courses for Javascript, PHP, Ruby on Rails, or whatever other
                web development track looks good to you.
              </p>
              <p>
                In this project you are going to use PHP and <code class="prettifySQL">MySQL</code> to allow users to login into your website and add
                items to a list. Users who are logged in can see everything, while guests can only see the public posts
              </p>

              <div class="finalResultWapper">
                <img src="images/final.PNG" alt=""></img>
              </div>

              <!-- SECTION DIVIDER -->

              <section id="section_LG">
                <a id="_LG"><h1><codeG>Learning Goals</codeG></h1></a>
                <ol>
                  <li>PHP Recap</li>
                  <ol>
                    <li>Creating index.php</li>
                    <li>Setting up XAMPP</li>
                  </ol>
                  <li>Create base pages</li>
                  <ol>
                    <li>index.php</li>
                    <li>register.php</li>
                    <li>login.php</li>
                  </ol>
                  <li>MySQL Databasing</li>
                  <ol>
                    <li>What is MySQL?</li>
                    <li>Creating a database and it’s tables</li>
                  </ol>
                  <li>Adding to database through PHP</li>
                  <ol>
                    <li>Users</li>
                    <li>User's List</li>
                  </ol>
                  <li>Authentication</li>
                  <ol>
                    <li>Checking inputted password to password on database</li>
                  </ol>
                  <li>Home page for logged in users</li>
                  <ol>
                    <li>Home page for logged in users only (boot anyone off who isn't)</li>
                  </ol>
                  <li>Adding to user's list</li>
                  <ol>
                    <li>Add to list</li>
                    <li>Display list on home page</li>
                  </ol>
                  <li>Editing data in the list</li>
                  <li>Deleting Data</li>
                  <li>Displaying "public" data</li>
                </ol>
              </section>

              <section id="section_PHPRECAP">
                <a id="_PHPRECAP"><h1><codeG>PHP Recap</codeG></h1></a>
                <p>
                  It’s probably been a little bit since your last PHP project, so we will help catch you back up to
                  speed on setting up XAMPP
                </p>
                <p>
                  In order to run PHP code in XAMPP, you have to create your project folder in a very specific
                  location.
                </p>
                <a id="0CREATINGINDEXPHP"><h2><code class="prettifySQL">Creating index.php</code></h2></a>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        This is the folder you must make friends with.
                        Your project folder has to be in here.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/filepath.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="para">
                    <div class="fl">
                      <p>
                        Add a new project folder and create a new
                        index file (remember that the extension is
                        now .php).
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/startFile.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <a id="0SETTINGUPXAMPP"><h2> <code class="prettifySQL">Setting up XAMPP</code></h2></a>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Open up windows and type "XAMPP" and
                        select "XAMPP Control Panel"
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/startXampp.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="para">
                    <p>
                      You don't need to do much in here, just click
                      on the "Start" button next to "Apache".
                    </p>
                    <div class="tutImageContainer">
                      <img src="images/openXampp.PNG" alt=""></img>
                    </div>
                  </div>
                  <div class="para">
                    <p>
                      Now your server is running and you are ready
                      to do some PHP coding!
                    </p>
                    <div class="tutImageContainer">
                      <img src="images/startServerXampp.PNG" alt=""></img>
                    </div>
                  </div>
                </div>
                <br>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="index.php" data-toggle="tab" href="#-index.php0" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-index.php0" role="tabpanel" aria-labelledby="index.php">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>

  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                <p>
                  In order to test your code, you have to type in "<strong>localhost/yourProjectFolder/index.php</strong>" on
                  your browser. You can't just double click the file (if you do, you'll just see the PHP code).
                </p>
              </section>

              <!-- SECTION DIVIDER -->

              <section id="section_CBP">
                <a id="_CBP"><h1><codeG>Create Base Pages</codeG></h1></a>
                <p>
                  Now that we have the dust off, time to jump into making this website! First thing that we have to
                  is make our base pages for the home page, register page, and the login page.
                </p>
                <a id="0HPIPHP"><h2><code class="prettifySQL">Home page (index.php)</code></h2></a>
                <p>
                  Modify your index page to look like this.
                  Remember that index​ is the first page anyone
                  would go to if they typed in your website
                  address, so this is considered your "home"
                  page.
                </p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="index.php" data-toggle="tab" href="#-index.php1" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-index.php1" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                <a id="0RPRPHP"><h2><code class="prettifySQL">Registration page (register.php)</code></h2></a>
                <p>The registration page is where you will allow users to create their new account with your site. </p>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Create a new file called "register.php".
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/reg.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <p>Some of this should look familiar.</p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="register.php" data-toggle="tab" href="#-register.php2" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php2" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>

                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-register.php2" role="tabpanel" aria-labelledby="register.php">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Register Page&lt;/title>
  &lt;/head>

  &lt;body>
    &lt;h2>Registration Page&lt;/h2>
    &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="register.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Register"/>
  &lt;/form>

  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php2" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                <p>Remember <strong>action="post"</strong>? What does that mean?</p>
                <p>The <strong>type="password"</strong> hides what is being typed.</p>
                <a id="0LIPPHP"><h2><code class="prettifySQL">Login page (login.php)</code></h2></a>
                <p>The login page's code is almost identical with the registration code just replace registering a user for the first time and logging in an existing user.</p>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Create a new file called "login.php".
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/login.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <p>Similar to the register.php code.</p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-login.php3" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">login.php</code></a>
                    <a class="nav-item nav-link" id="register.php" data-toggle="tab" href="#-register.php3" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php3" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-login.php3" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>

  &lt;body>
    &lt;h2>Login Page&lt;/h2>
    &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

    &lt;form action="checklogin.php" method="post">
      Enter Username: &lt;input type="text" name="username" required="required">
      Enter Password: &lt;input type="password" name="password" required="required">
      &lt;input type="submit" value="Login"/>
    &lt;/form>

  &lt;/body>
&lt;/html>
                </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-register.php3" role="tabpanel" aria-labelledby="register.php">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Register Page&lt;/title>
  &lt;/head>

  &lt;body>
    &lt;h2>Registration Page&lt;/h2>
    &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="register.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Register"/>
  &lt;/form>

  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php3" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Section Divider -->

              <section id="section_MYSQLINTRO">
                <a id="_MYSQLINTRO"><h1><codeG>MySQL Introduction</codeG></h1></a>
                <a id="0WHATISSQ"><h2><code class="prettifySQL">What is SQL?</code></h2></a>
                <p>
                  With the basic pages set up and ready to go, time to bring in the big one! This is a powerful tool
                  in the world of web development. Almost every website you know runs with some kind of SQL
                  database
                </p>
                <p>
                  What is a database? A database is rows and columns of information, and SQL (Structured Query
                  Language) gives you the ability to access and manipulate that database. This is used for creating
                  users on a website, storing items in an online shopping cart, creating more dynamic blogs, etc.
                </p>
                <a id="0MAKINGADATABASE"><h2><code class="prettifySQL">Making a database</code></h2></a>
                <h3 class="paraTitle">Setting up our SQL database</h3>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Remember when you started
                        your Apache server on
                        XAMPP? Now you need to start
                        your MySQL server.
                      </p>
                      <p>
                        (SQL is the language, while
                        MySQL is a database system
                        that uses SQL)
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql1.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        Now you're ready to create your
                        database! Go to
                        "localhost/phpmyadmin" and
                        you should see this screen.
                      </p>
                      <p>
                        PHPMyAdmin is an admin tool
                        for setting up various aspects of
                        your site (and in this case, our
                        SQL database).
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql2.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        Click on the "Databases" tab on
                        the top and create a new
                        database called "first_db"
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql3.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        Add a new table called "users"
                        with 3 columns.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql4.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        First column should be titled "id".
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql5.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        At the end of the column, tick
                        the "A.I" box. This makes sure
                        that the id is auto-incrementing.
                        In databases, this is very
                        important as it gives us a quick
                        numerical value for every entry.
                        It makes sorting through all the
                        entries simpler and easier to
                        write.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql6.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        Create the columns for
                        "username" and "password".
                        Make sure that the type is
                        "varchar", this means that they
                        accept letters. Also make sure
                        that the value is set to 50.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql7.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        Press the "save" button to finish this table.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql8.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        Click here to create another
                        table for your database.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql9.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        Create a new table titled "list"
                      </p>
                      <p>
                        This is going to be the list that
                        each user can make on their own
                        individual accounts.
                      </p>
                      <p>
                        We need 7 columns, notice how
                        it already starts with 4? So we
                        just have to add 3 more
                        columns.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql10.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        Press the "save" button to finish this table.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql8.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        Fill in the seven columns with these values.
                      </p>
                      <p>
                        Remember to check that the "id"
                        is auto-incremented (A.I).
                      </p>
                      <p>
                        Pay close attention to your type
                        category, that you set it
                        correctly.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql11.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>

                  <div class="para">
                    <div class="fl">
                      <p>
                        Press the "save" button to finish this table.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/sql8.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Section Divider -->

              <section id="section_AUD">
                <a id="_AUD"><h1><codeG>Adding User Data</codeG></h1></a>
                <p>
                  *Whew*, that was probably a bit stressful. But you did it! Now we can get back to the fun part of coding!
                </p>
                <a id="0IF"><h2><code class="prettifySQL">Input Form</code></h2></a>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="register.php" data-toggle="tab" href="#-register.php4" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link " id="nav-home-tab" data-toggle="tab" href="#-login.php4" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">login.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php4" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-register.php4" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Register Page&lt;/title>
  &lt;/head>

  &lt;body>
    &lt;h2>Registration Page&lt;/h2>
    &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="register.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Register"/>
  &lt;/form>

  &lt;/body>
&lt;/html>

&lt;?php
  if($_SERVER["REQUEST_METHOD"] == "POST") {
    // Create a connection with the database
    $con = mysqli_connect("localhost","root","","first_db");

    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    echo "Username entered is: &lt;b>" . $username . "&lt;/b>&lt;br>";
    echo "Password entered is: &lt;b>" . $password . "&lt;/b>";
  }
?>
              </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-login.php4" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>

  &lt;body>
    &lt;h2>Login Page&lt;/h2>
    &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

    &lt;form action="checklogin.php" method="post">
      Enter Username: &lt;input type="text" name="username" required="required">
      Enter Password: &lt;input type="password" name="password" required="required">
      &lt;input type="submit" value="Login"/>
    &lt;/form>

  &lt;/body>
&lt;/html>
                </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php4" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                <p>
                  A lot going on here, the basics is that "<code class="prettifySQL">if($_SERVER['REQUEST_METHOD']</code>" is checking
                  to see if the form has been submitted. </br> </br> Once it has, it creates a connection to the database you
                  created. Then it runs your data through a function that converts the input to a string (this way
                  hackers can't inject code into your site) and displays it.
                </p>
                <a id="0CU"><h2><code class="prettifySQL">Creating users</code></h2></a>
                <p>
                  The previous code will need to be rewritten slightly, but the following code will allow you to
                  create users for your database.
                </p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="register.php" data-toggle="tab" href="#-register.php5" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link " id="nav-home-tab" data-toggle="tab" href="#-login.php5" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">login.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php5" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-register.php5" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Register Page&lt;/title>
  &lt;/head>

  &lt;body>
    &lt;h2>Registration Page&lt;/h2>
    &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="register.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Register"/>
  &lt;/form>

  &lt;/body>
&lt;/html>

&lt;?php
  if($_SERVER["REQUEST_METHOD"] == "POST") {

    // Create a connection with the database
    $con = mysqli_connect("localhost","root","","first_db");

    // Check connection
    if(mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    $bool = true;

    $query = mysqli_query($con, "Select * from users");
    while($row = mysqli_fetch_array($query)) {
      $table_users = $row['username'];
      if($username == $table_users) {
        $bool = false;
        Print '&lt;script>alert("Username has been taken!");&lt;/script>';
        Print '&lt;script>window.location.assign("register.php")&lt;/script>';
      }
    }

    if($bool) {
      mysqli_query($con, "INSERT INTO users(username,password) VALUES ('$username', '$password')");
      Print '&lt;script>alert("Successfully Registered!");&lt;/script>';
      Print '&lt;script>window.location.assign("register.php")&lt;/script>';
    }
  }
?>
              </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-login.php5" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>

  &lt;body>
    &lt;h2>Login Page&lt;/h2>
    &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

    &lt;form action="checklogin.php" method="post">
      Enter Username: &lt;input type="text" name="username" required="required">
      Enter Password: &lt;input type="password" name="password" required="required">
      &lt;input type="submit" value="Login"/>
    &lt;/form>

  &lt;/body>
&lt;/html>
                </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php5" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>

                <p>
                  A lot going on here:
                </p>
                <p>
                  <code class="prettifySQL">mysqli_query()</code> is a mysql function that is searching for data in your database by a certain
                  criteria. In this case… Everything from the user’s table. This is because we have to go through
                  every username in the database to check to make sure that a username isn’t taken (otherwise
                  we would be in trouble with users logging in).
                </p>
                <p>
                  <code class="prettifySQL">mysqli_fetch_array()</code> uses the query from the previous function to actually get data from the
                  database, and is then placed in a <code class="prettifySQL">while()</code> loop so that we can check each entry.
                </p>
                <p>
                  <code class="prettifySQL">Print</code> is just another form of echo.
                </p>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Going back to
                        PHPMyAdmin and
                        clicking on the "users"
                        table, you should be able
                        to see all created users
                        that you make
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/CU1.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Section Divider -->

              <section id="section_AUTH">
                <a id="_AUTH"><h1><codeG>Authenticating</codeG></h1></a>
                <p>
                  We have the ability to add users! Now we need the ability to log on as those users, for this we
                  need to create a php file for authenticating the login information they use put in the login page
                </p>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Create a new php file called "checklogin.php".
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/checklogin.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="checklogin.php" data-toggle="tab" href="#-checklogin.php6" role="tab" aria-controls="checklogin.php" aria-selected="true"><code class="prettifySQL codetab">checklogin.php</code></a>
                    <a class="nav-item nav-link" id="register.php" data-toggle="tab" href="#-register.php6" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link " id="nav-home-tab" data-toggle="tab" href="#-login.php6" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">login.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php6" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-checklogin.php6" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();

  // Create a connection with the database
  $con = mysqli_connect("localhost","root","","first_db");

  // Check connection
  if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $username = mysqli_real_escape_string($con, $_POST['username'])
  $password = mysqli_real_escape_string($con, $_POST['password'])

  // Check if the username exists
  $query = mysqli_query($con, "SELECT * from users WHERE username = '$username'");
  $exists = mysqli_num_rows($query);

  $table_users = "";
  $table_password = "";

  if(exists > 0){ // If there is a username
    while($row = mysqli_fetch_array($query)) { // Display all rows from Query
      // Populate array with results
      $table_users = $row['username'];
      $table_password = $row['password'];
    }

    // Check array and see if matched username and password
    if($username == $table_users && ($password == $table_password)) {
      // Ser the session to the logged in user
      $_SESSION['user'] = $username;
      header("location: home.php");
    } else {
      Print '&lt;script>alert("Incorrect Password!");&lt;/script>'
      Print '&lt;script>window.location.assign("login.php")&lt;/script>'
    }

  } else {
    Print '&lt;script>alert("Incorrect Username!");&lt;/script>'
    Print '&lt;script>window.location.assign("login.php")&lt;/script>'
  }

?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-register.php6" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Register Page&lt;/title>
  &lt;/head>

  &lt;body>
    &lt;h2>Registration Page&lt;/h2>
    &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="register.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Register"/>
  &lt;/form>

  &lt;/body>
&lt;/html>

&lt;?php
  if($_SERVER["REQUEST_METHOD"] == "POST") {

    // Create a connection with the database
    $con = mysqli_connect("localhost","root","","first_db");

    // Check connection
    if(mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    $bool = true;

    $query = mysqli_query($con, "Select * from users");
    while($row = mysqli_fetch_array($query)) {
      $table_users = $row['username'];
      if($username == $table_users) {
        $bool = false;
        Print '&lt;script>alert("Username has been taken!");&lt;/script>';
        Print '&lt;script>window.location.assign("register.php")&lt;/script>';
      }
    }

    if($bool) {
      mysqli_query($con, "INSERT INTO users(username,password) VALUES ('$username', '$password')");
      Print '&lt;script>alert("Successfully Registered!");&lt;/script>';
      Print '&lt;script>window.location.assign("register.php")&lt;/script>';
    }
  }
?>
              </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-login.php6" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>

  &lt;body>
    &lt;h2>Login Page&lt;/h2>
    &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

    &lt;form action="checklogin.php" method="post">
      Enter Username: &lt;input type="text" name="username" required="required">
      Enter Password: &lt;input type="password" name="password" required="required">
      &lt;input type="submit" value="Login"/>
    &lt;/form>

  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php6" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                <p>
                  <code class="prettifySQL">session_start()</code> Creating sessions is number
                  one to having a user logged in. Essentially
                  you're creating a new _SESSION variable
                  that will hold any information of who just
                  logged in on this computer (hence the reason
                  you will be able to navigate to other pages
                  while still logged in).
                </p>
                <p>
                  <code class="prettifySQL">$_SESSION['user']</code> This is where you hold
                  the information of who is logged in.
                </p>
                <p>
                  Go to your
                  "localhost/yourwebfolder/login.php" and try
                  to login with whatever account you created. <strong> If
                  it takes you to an error page then you did
                  good! </strong> ​We haven't created the user's home
                  page yet.
                </p>
              </section>

              <!-- Section Divider -->

              <section id="section_HP">
                <a id="_HP"><h1><codeG>Home Page For Users</codeG></h1></a>
                <p>
                  If you notice, when you login you get a "404" error. This is because the code is directing you to a
                  page that doesn't exist yet.
                </p>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Create a new file called "home.php".
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/homefile.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-home.php7" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">home.php</code></a>
                    <a class="nav-item nav-link" id="checklogin.php" data-toggle="tab" href="#-checklogin.php7" role="tab" aria-controls="checklogin.php" aria-selected="true"><code class="prettifySQL codetab">checklogin.php</code></a>
                    <a class="nav-item nav-link" id="register.php" data-toggle="tab" href="#-register.php7" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link " id="nav-home-tab" data-toggle="tab" href="#-login.php7" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">login.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php7" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-home.php7" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Home Page&lt;/title>
  &lt;/head>

  &lt;?php
    session_start();
    // Check if logged in or not
    if(!$_SESSION['user']) {
      // If not logged in
      header("location:index.php");
    }
    // Assign user value if logged in
    $user = $_SESSION['user'];
  ?>

  &lt;body>

    &lt;h2>Home Page&lt;/h2>
    &lt;p>Hello &lt;?php Print "$user" ?>!&lt;/p>

    &lt;a href="logout.php">Click here to logout</a> &lt;br> &lt;br>
    &lt;form action="add.php" method="post">
      Add more to the list: &lt;input name="details" value="text"> &lt;br>
      Public post? &lt;input type="checkbox" name="public[]" value="yes">
      &lt;input type="submit" value="Add to list">
    &lt;/form>

    &lt;h2 align="center">My List&lt;/h2>
    &lt;table border="1px" width="100%">
      &lt;tr>
        &lt;th>ID&lt;/th>
        &lt;th>Details&lt;/th>
        &lt;th>Edit&lt;/th>
        &lt;th>Delete&lt;/th>
      &lt;/tr>
    &lt;/table>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-checklogin.php7" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
session_start();

// Create a connection with the database
$con = mysqli_connect("localhost","root","","first_db");

// Check connection
if(mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$username = mysqli_real_escape_string($con, $_POST['username'])
$password = mysqli_real_escape_string($con, $_POST['password'])

// Check if the username exists
$query = mysqli_query($con, "SELECT * from users WHERE username = '$username'");
$exists = mysqli_num_rows($query);

$table_users = "";
$table_password = "";

if(exists > 0){ // If there is a username
  while($row = mysqli_fetch_array($query)) { // Display all rows from Query
    // Populate array with results
    $table_users = $row['username'];
    $table_password = $row['password'];
  }

  // Check array and see if matched username and password
  if($username == $table_users && ($password == $table_password)) {
    // Ser the session to the logged in user
    $_SESSION['user'] = $username;
    header("location: home.php");
  } else {
    Print '&lt;script>alert("Incorrect Password!");&lt;/script>'
    Print '&lt;script>window.location.assign("login.php")&lt;/script>'
  }

} else {
  Print '&lt;script>alert("Incorrect Username!");&lt;/script>'
  Print '&lt;script>window.location.assign("login.php")&lt;/script>'
}

?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-register.php7" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
  &lt;title>PHP/SQL Register Page&lt;/title>
&lt;/head>

&lt;body>
  &lt;h2>Registration Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

&lt;form action="register.php" method="post">
  Enter Username: &lt;input type="text" name="username" required="required">
  Enter Password: &lt;input type="password" name="password" required="required">
  &lt;input type="submit" value="Register"/>
&lt;/form>

&lt;/body>
&lt;/html>

&lt;?php
if($_SERVER["REQUEST_METHOD"] == "POST") {

  // Create a connection with the database
  $con = mysqli_connect("localhost","root","","first_db");

  // Check connection
  if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $username = mysqli_real_escape_string($con, $_POST['username']);
  $password = mysqli_real_escape_string($con, $_POST['password']);

  $bool = true;

  $query = mysqli_query($con, "Select * from users");
  while($row = mysqli_fetch_array($query)) {
    $table_users = $row['username'];
    if($username == $table_users) {
      $bool = false;
      Print '&lt;script>alert("Username has been taken!");&lt;/script>';
      Print '&lt;script>window.location.assign("register.php")&lt;/script>';
    }
  }

  if($bool) {
    mysqli_query($con, "INSERT INTO users(username,password) VALUES ('$username', '$password')");
    Print '&lt;script>alert("Successfully Registered!");&lt;/script>';
    Print '&lt;script>window.location.assign("register.php")&lt;/script>';
  }
}
?>
            </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-login.php7" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
  &lt;title>PHP/SQL Login Page&lt;/title>
&lt;/head>

&lt;body>
  &lt;h2>Login Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="checklogin.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Login"/>
  &lt;/form>

&lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php7" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
  &lt;title>PHP/SQL Login Page&lt;/title>
&lt;/head>
&lt;body>
  &lt;?php
    echo "&lt;p>Hello, World!&lt;/p>";
  ?>
  &lt;a href="login.php">Click here to login&lt;/a>
  &lt;a href="register.php">Click here to register&lt;/a>
&lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                <p><i>
                  You should be able to login and see this page.
                  Notice how it even says hello to your
                  username? Isn’t that cool???
                </i></p>
                <br>
                <p>
                  Most of this should be code you've seen before. The <code class="prettifySQL">session_start()</code> will be needed anywhere
                  where you need to know the user who's logged in (in most sites that is everywhere. You
                  always want to be checking when a user is logged in, otherwise users can get into places they
                  shouldn't.
                </p>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Create a new file called "logout.php", we
                        need this to end the session and logout the
                        user.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/logoutfile.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-logout.php8" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">logout.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-home.php8" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">home.php</code></a>
                    <a class="nav-item nav-link" id="checklogin.php" data-toggle="tab" href="#-checklogin.php8" role="tab" aria-controls="checklogin.php" aria-selected="true"><code class="prettifySQL codetab">checklogin.php</code></a>
                    <a class="nav-item nav-link" id="register.php" data-toggle="tab" href="#-register.php8" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link " id="nav-home-tab" data-toggle="tab" href="#-login.php8" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">login.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php8" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-logout.php8" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();
  session_destroy();
  header("locaion:index.php");
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-home.php8" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Home Page&lt;/title>
  &lt;/head>

  &lt;?php
    session_start();
    // Check if logged in or not
    if(!$_SESSION['user']) {
      // If not logged in
      header("location:index.php");
    }
    // Assign user value if logged in
    $user = $_SESSION['user'];
  ?>

  &lt;body>

    &lt;h2>Home Page&lt;/h2>
    &lt;p>Hello &lt;?php Print "$user" ?>!&lt;/p>

    &lt;a href="logout.php">Click here to logout</a> &lt;br> &lt;br>
    &lt;form action="add.php" method="post">
      Add more to the list: &lt;input name="details" value="text"> &lt;br>
      Public post? &lt;input type="checkbox" name="public[]" value="yes">
      &lt;input type="submit" value="Add to list">
    &lt;/form>

    &lt;h2 align="center">My List&lt;/h2>
    &lt;table border="1px" width="100%">
      &lt;tr>
        &lt;th>ID&lt;/th>
        &lt;th>Details&lt;/th>
        &lt;th>Edit&lt;/th>
        &lt;th>Delete&lt;/th>
      &lt;/tr>
    &lt;/table>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-checklogin.php8" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();

  // Create a connection with the database
  $con = mysqli_connect("localhost","root","","first_db");

  // Check connection
  if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $username = mysqli_real_escape_string($con, $_POST['username'])
  $password = mysqli_real_escape_string($con, $_POST['password'])

  // Check if the username exists
  $query = mysqli_query($con, "SELECT * from users WHERE username = '$username'");
  $exists = mysqli_num_rows($query);

  $table_users = "";
  $table_password = "";

if(exists > 0){ // If there is a username
  while($row = mysqli_fetch_array($query)) { // Display all rows from Query
    // Populate array with results
    $table_users = $row['username'];
    $table_password = $row['password'];
  }

  // Check array and see if matched username and password
  if($username == $table_users && ($password == $table_password)) {
    // Ser the session to the logged in user
    $_SESSION['user'] = $username;
    header("location: home.php");
  } else {
    Print '&lt;script>alert("Incorrect Password!");&lt;/script>'
    Print '&lt;script>window.location.assign("login.php")&lt;/script>'
  }

} else {
  Print '&lt;script>alert("Incorrect Username!");&lt;/script>'
  Print '&lt;script>window.location.assign("login.php")&lt;/script>'
}

?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-register.php8" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
  &lt;title>PHP/SQL Register Page&lt;/title>
&lt;/head>

&lt;body>
  &lt;h2>Registration Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

&lt;form action="register.php" method="post">
  Enter Username: &lt;input type="text" name="username" required="required">
  Enter Password: &lt;input type="password" name="password" required="required">
  &lt;input type="submit" value="Register"/>
&lt;/form>

&lt;/body>
&lt;/html>

&lt;?php
if($_SERVER["REQUEST_METHOD"] == "POST") {

  // Create a connection with the database
  $con = mysqli_connect("localhost","root","","first_db");

  // Check connection
  if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $username = mysqli_real_escape_string($con, $_POST['username']);
  $password = mysqli_real_escape_string($con, $_POST['password']);

  $bool = true;

  $query = mysqli_query($con, "Select * from users");
  while($row = mysqli_fetch_array($query)) {
    $table_users = $row['username'];
    if($username == $table_users) {
      $bool = false;
      Print '&lt;script>alert("Username has been taken!");&lt;/script>';
      Print '&lt;script>window.location.assign("register.php")&lt;/script>';
    }
  }

  if($bool) {
    mysqli_query($con, "INSERT INTO users(username,password) VALUES ('$username', '$password')");
    Print '&lt;script>alert("Successfully Registered!");&lt;/script>';
    Print '&lt;script>window.location.assign("register.php")&lt;/script>';
  }
}
?>
            </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-login.php8" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
  &lt;title>PHP/SQL Login Page&lt;/title>
&lt;/head>

&lt;body>
  &lt;h2>Login Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="checklogin.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Login"/>
  &lt;/form>

&lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php8" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
  &lt;title>PHP/SQL Login Page&lt;/title>
&lt;/head>
&lt;body>
  &lt;?php
    echo "&lt;p>Hello, World!&lt;/p>";
  ?>
  &lt;a href="login.php">Click here to login&lt;/a>
  &lt;a href="register.php">Click here to register&lt;/a>
&lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                <p>
                  Pretty straightforward. This code opens the
                  session with session_start() and then ends it
                  with session_destroy(). The user is logged out
                  and you can login with a new user. Go ahead
                  and try it!
                </p>
              </section>

              <!-- Section Divider -->

              <section id="section_ATUS">
                <a id="_ATUS"><h1><codeG>Adding To User's List</codeG></h1></a>
                <p>
                  We can create users, log them in, and see a page that says to them. Now let's add in one more
                  thing. We are going to add in a list that has public and private items. Logged in users can see the
                  private, while everyone can see the public.
                </p>
                <a id="0ATL"><h2> <code class="prettifySQL">Add to list</code></h2></a>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Create a new file called "add.php". This will
                        be the script we run to add items.
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/addfile.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <p>This is just sample code for you to see how the addition code is going to work</p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="add.php" data-toggle="tab" href="#-add.php9" role="tab" aria-controls="add.php" aria-selected="true"><code class="prettifySQL codetab">add.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-logout.php9" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">logout.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-home.php9" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">home.php</code></a>
                    <a class="nav-item nav-link" id="checklogin.php" data-toggle="tab" href="#-checklogin.php9" role="tab" aria-controls="checklogin.php" aria-selected="true"><code class="prettifySQL codetab">checklogin.php</code></a>
                    <a class="nav-item nav-link" id="register.php" data-toggle="tab" href="#-register.php9" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-login.php9" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">login.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php9" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-add.php9" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();

  if(!$_SESSION['user']) {
    header("location:index.php");
  }

  $con = mysqli_connect("localhost","root","","first_db");
  $details = mysqli_real_escape_string($con,$_POST['details']);
  $time = strfrime("%X");
  $date = strfrime("%B %d, %Y");

  Print "$time - $date - $details";
?>
              </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-logout.php9" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();
  session_destroy();
  header("locaion:index.php");
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-home.php9" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Home Page&lt;/title>
  &lt;/head>

  &lt;?php
    session_start();
    // Check if logged in or not
    if(!$_SESSION['user']) {
      // If not logged in
      header("location:index.php");
    }
    // Assign user value if logged in
    $user = $_SESSION['user'];
  ?>

  &lt;body>

    &lt;h2>Home Page&lt;/h2>
    &lt;p>Hello &lt;?php Print "$user" ?>!&lt;/p>

    &lt;a href="logout.php">Click here to logout</a> &lt;br> &lt;br>
    &lt;form action="add.php" method="post">
      Add more to the list: &lt;input name="details" value="text"> &lt;br>
      Public post? &lt;input type="checkbox" name="public[]" value="yes">
      &lt;input type="submit" value="Add to list">
    &lt;/form>

    &lt;h2 align="center">My List&lt;/h2>
    &lt;table border="1px" width="100%">
      &lt;tr>
        &lt;th>ID&lt;/th>
        &lt;th>Details&lt;/th>
        &lt;th>Edit&lt;/th>
        &lt;th>Delete&lt;/th>
      &lt;/tr>
    &lt;/table>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-checklogin.php9" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();

  // Create a connection with the database
  $con = mysqli_connect("localhost","root","","first_db");

  // Check connection
  if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $username = mysqli_real_escape_string($con, $_POST['username'])
  $password = mysqli_real_escape_string($con, $_POST['password'])

  // Check if the username exists
  $query = mysqli_query($con, "SELECT * from users WHERE username = '$username'");
  $exists = mysqli_num_rows($query);

  $table_users = "";
  $table_password = "";

  if(exists > 0){ // If there is a username
    while($row = mysqli_fetch_array($query)) { // Display all rows from Query
      // Populate array with results
      $table_users = $row['username'];
      $table_password = $row['password'];
    }

    // Check array and see if matched username and password
    if($username == $table_users && ($password == $table_password)) {
      // Ser the session to the logged in user
      $_SESSION['user'] = $username;
      header("location: home.php");
    } else {
      Print '&lt;script>alert("Incorrect Password!");&lt;/script>'
      Print '&lt;script>window.location.assign("login.php")&lt;/script>'
    }

  } else {
    Print '&lt;script>alert("Incorrect Username!");&lt;/script>'
    Print '&lt;script>window.location.assign("login.php")&lt;/script>'
  }

?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-register.php9" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Register Page&lt;/title>
  &lt;/head>

  &lt;body>
  &lt;h2>Registration Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="register.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Register"/>
  &lt;/form>

  &lt;/body>
&lt;/html>

&lt;?php
  if($_SERVER["REQUEST_METHOD"] == "POST") {

    // Create a connection with the database
    $con = mysqli_connect("localhost","root","","first_db");

    // Check connection
    if(mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    $bool = true;

    $query = mysqli_query($con, "Select * from users");
    while($row = mysqli_fetch_array($query)) {
      $table_users = $row['username'];
      if($username == $table_users) {
        $bool = false;
        Print '&lt;script>alert("Username has been taken!");&lt;/script>';
        Print '&lt;script>window.location.assign("register.php")&lt;/script>';
      }
    }

    if($bool) {
      mysqli_query($con, "INSERT INTO users(username,password) VALUES ('$username', '$password')");
      Print '&lt;script>alert("Successfully Registered!");&lt;/script>';
      Print '&lt;script>window.location.assign("register.php")&lt;/script>';
    }
  }
?>
          </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-login.php9" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>

  &lt;body>
  &lt;h2>Login Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="checklogin.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Login"/>
  &lt;/form>

  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php9" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                <br>
                <p>
                  Alter the "add.php" to the following… This will create an SQL query to insert the values into
                  your table. Notice the <code class="prettifySQL">if(isset($_POST['public']){}</code>, this is because we created the checkbox as
                  an array in the form in your "home.php". Without this conditional, our loop would sometimes
                  loop through an empty array if you don’t select the checkbox.
                </p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-add.php10" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">add.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-logout.php10" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">logout.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-home.php10" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">home.php</code></a>
                    <a class="nav-item nav-link" id="checklogin.php" data-toggle="tab" href="#-checklogin.php10" role="tab" aria-controls="checklogin.php" aria-selected="true"><code class="prettifySQL codetab">checklogin.php</code></a>
                    <a class="nav-item nav-link" id="register.php" data-toggle="tab" href="#-register.php10" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-login.php10" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">login.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php10" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-add.php10" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();
  if(!$_SESSION['user']) {
    header("location:index.php");
  }

  // Only add if the request is secure
  if($_SERVER['REQUEST_METHOD'] == "POST") {
    $con = mysqli_connect("localhost", "root", "", "first_db");
    $details = mysqli_real_escape_string($con, $_POST['details']);
    $time = strfrime("%X");
    $date = strfrime("%B %d, %Y");
    $decision = "no";

    // Gets the data form the check box to see if it was checked
    if(isset($_POST['public'])) {
      $checkboxes = $_POST['public'];
    } else {
      $checkboxes = array();
    }

    foreach($checkboxes as $each_check) {
      if($each_check != null) {
        $decision = "yes"; // Yes this will be public
      }
    }

    mysqli_query($con, "INSERT INTO list (details, date_posted, time_posted, public)
                    VALUES ('$details', '$date', '$time', '$decision')");
    header(location:home.php);
  } else {
    header(location:home.php);
  }
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-logout.php10" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();
  session_destroy();
  header("locaion:index.php");
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-home.php10" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Home Page&lt;/title>
  &lt;/head>

  &lt;?php
    session_start();
    // Check if logged in or not
    if(!$_SESSION['user']) {
      // If not logged in
      header("location:index.php");
    }
    // Assign user value if logged in
    $user = $_SESSION['user'];
  ?>

  &lt;body>

    &lt;h2>Home Page&lt;/h2>
    &lt;p>Hello &lt;?php Print "$user" ?>!&lt;/p>

    &lt;a href="logout.php">Click here to logout</a> &lt;br> &lt;br>
    &lt;form action="add.php" method="post">
      Add more to the list: &lt;input name="details" value="text"> &lt;br>
      Public post? &lt;input type="checkbox" name="public[]" value="yes">
      &lt;input type="submit" value="Add to list">
    &lt;/form>

    &lt;h2 align="center">My List&lt;/h2>
    &lt;table border="1px" width="100%">
      &lt;tr>
        &lt;th>ID&lt;/th>
        &lt;th>Details&lt;/th>
        &lt;th>Edit&lt;/th>
        &lt;th>Delete&lt;/th>
      &lt;/tr>
    &lt;/table>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-checklogin.php10" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();

  // Create a connection with the database
  $con = mysqli_connect("localhost","root","","first_db");

  // Check connection
  if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $username = mysqli_real_escape_string($con, $_POST['username'])
  $password = mysqli_real_escape_string($con, $_POST['password'])

  // Check if the username exists
  $query = mysqli_query($con, "SELECT * from users WHERE username = '$username'");
  $exists = mysqli_num_rows($query);

  $table_users = "";
  $table_password = "";

  if(exists > 0){ // If there is a username
    while($row = mysqli_fetch_array($query)) { // Display all rows from Query
      // Populate array with results
      $table_users = $row['username'];
      $table_password = $row['password'];
    }

    // Check array and see if matched username and password
    if($username == $table_users && ($password == $table_password)) {
      // Ser the session to the logged in user
      $_SESSION['user'] = $username;
      header("location: home.php");
    } else {
      Print '&lt;script>alert("Incorrect Password!");&lt;/script>'
      Print '&lt;script>window.location.assign("login.php")&lt;/script>'
    }

  } else {
    Print '&lt;script>alert("Incorrect Username!");&lt;/script>'
    Print '&lt;script>window.location.assign("login.php")&lt;/script>'
  }

?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-register.php10" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Register Page&lt;/title>
  &lt;/head>

  &lt;body>
  &lt;h2>Registration Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="register.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Register"/>
  &lt;/form>

  &lt;/body>
&lt;/html>

&lt;?php
  if($_SERVER["REQUEST_METHOD"] == "POST") {

    // Create a connection with the database
    $con = mysqli_connect("localhost","root","","first_db");

    // Check connection
    if(mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    $bool = true;

    $query = mysqli_query($con, "Select * from users");
    while($row = mysqli_fetch_array($query)) {
      $table_users = $row['username'];
      if($username == $table_users) {
        $bool = false;
        Print '&lt;script>alert("Username has been taken!");&lt;/script>';
        Print '&lt;script>window.location.assign("register.php")&lt;/script>';
      }
    }

    if($bool) {
      mysqli_query($con, "INSERT INTO users(username,password) VALUES ('$username', '$password')");
      Print '&lt;script>alert("Successfully Registered!");&lt;/script>';
      Print '&lt;script>window.location.assign("register.php")&lt;/script>';
    }
  }
?>
          </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-login.php10" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>

  &lt;body>
  &lt;h2>Login Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="checklogin.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Login"/>
  &lt;/form>

  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php10" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                <a id="0DLOHP"><h2> <code class="prettifySQL">Displaying list on home page</code></h2></a>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-home.php11" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">home.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-add.php11" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">add.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-logout.php11" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">logout.php</code></a>
                    <a class="nav-item nav-link" id="checklogin.php" data-toggle="tab" href="#-checklogin.php11" role="tab" aria-controls="checklogin.php" aria-selected="true"><code class="prettifySQL codetab">checklogin.php</code></a>
                    <a class="nav-item nav-link" id="register.php" data-toggle="tab" href="#-register.php11" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-login.php11" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">login.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php11" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-home.php11" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Home Page&lt;/title>
  &lt;/head>

  &lt;?php
    session_start();
    // Check if logged in or not
    if(!$_SESSION['user']) {
      // If not logged in
      header("location:index.php");
    }
    // Assign user value if logged in
    $user = $_SESSION['user'];
  ?>

  &lt;body>

    &lt;h2>Home Page&lt;/h2>
    &lt;p>Hello &lt;?php Print "$user" ?>!&lt;/p>

    &lt;a href="logout.php">Click here to logout</a> &lt;br> &lt;br>
    &lt;form action="add.php" method="post">
      Add more to the list: &lt;input name="details" value="text"> &lt;br>
      Public post? &lt;input type="checkbox" name="public[]" value="yes">
      &lt;input type="submit" value="Add to list">
    &lt;/form>

    &lt;h2 align="center">My List&lt;/h2>
    &lt;table border="1px" width="100%">

      &lt;tr>
        &lt;th>ID&lt;/th>
        &lt;th>Details&lt;/th>
        &lt;th>Post Time&lt;/th>
        &lt;th>Post Time&lt;/th>
        &lt;th>Edit&lt;/th>
        &lt;th>Delete&lt;/th>
        &lt;th>Public Host&lt;/th>
      &lt;/tr>

      &lt;!-- User Data -->
      &lt;?php
        $con = mysqli_connect("localhost", "root", "", "first_db");
        $query = mysqli_query($con, "Select * from users");
        while($row = mysqli_fetch_array($query)) {
          Print "&lt;tr>"
          Print '&lt;td align="center">' . $row['id'] . "&lt;/td>";
          Print '&lt;td align="center">' . $row['details'] . "&lt;/td>";
          Print '&lt;td align="center">' . $row['date_posted'] . " - " . $row['time_posted'] . "&lt;/td>";
          Print '&lt;td align="center">' . $row['date_edited'] . " - " . $row['time_edited'] . "&lt;/td>";
          Print '&lt;td align="center">&lt;a href="edit.php">edit&lt;/a>&lt;/td>';
          Print '&lt;td align="center">&lt;a href="delete.php">delete&lt;/a>&lt;/td>';
          Print '&lt;td align="center">' . $row['public'] . "&lt;/td>";
          Print "&lt;/tr>"
        }
      ?>
    &lt;/table>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-add.php11" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();
  if(!$_SESSION['user']) {
    header("location:index.php");
  }

  // Only add if the request is secure
  if($_SERVER['REQUEST_METHOD'] == "POST") {
    $con = mysqli_connect("localhost", "root", "", "first_db");
    $details = mysqli_real_escape_string($con, $_POST['details']);
    $time = strfrime("%X");
    $date = strfrime("%B %d, %Y");
    $decision = "no";

    // Gets the data form the check box to see if it was checked
    if(isset($_POST['public'])) {
      $checkboxes = $_POST['public'];
    } else {
      $checkboxes = array();
    }

    foreach($checkboxes as $each_check) {
      if($each_check != null) {
        $decision = "yes"; // Yes this will be public
      }
    }

    mysqli_query($con, "INSERT INTO list (details, date_posted, time_posted, public)
                    VALUES ('$details', '$date', '$time', '$decision')");
    header(location:home.php);
  } else {
    header(location:home.php);
  }
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-logout.php11" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();
  session_destroy();
  header("locaion:index.php");
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-checklogin.php11" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();

  // Create a connection with the database
  $con = mysqli_connect("localhost","root","","first_db");

  // Check connection
  if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $username = mysqli_real_escape_string($con, $_POST['username'])
  $password = mysqli_real_escape_string($con, $_POST['password'])

  // Check if the username exists
  $query = mysqli_query($con, "SELECT * from users WHERE username = '$username'");
  $exists = mysqli_num_rows($query);

  $table_users = "";
  $table_password = "";

  if(exists > 0){ // If there is a username
    while($row = mysqli_fetch_array($query)) { // Display all rows from Query
      // Populate array with results
      $table_users = $row['username'];
      $table_password = $row['password'];
    }

    // Check array and see if matched username and password
    if($username == $table_users && ($password == $table_password)) {
      // Ser the session to the logged in user
      $_SESSION['user'] = $username;
      header("location: home.php");
    } else {
      Print '&lt;script>alert("Incorrect Password!");&lt;/script>'
      Print '&lt;script>window.location.assign("login.php")&lt;/script>'
    }

  } else {
    Print '&lt;script>alert("Incorrect Username!");&lt;/script>'
    Print '&lt;script>window.location.assign("login.php")&lt;/script>'
  }

?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-register.php11" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Register Page&lt;/title>
  &lt;/head>

  &lt;body>
  &lt;h2>Registration Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="register.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Register"/>
  &lt;/form>

  &lt;/body>
&lt;/html>

&lt;?php
  if($_SERVER["REQUEST_METHOD"] == "POST") {

    // Create a connection with the database
    $con = mysqli_connect("localhost","root","","first_db");

    // Check connection
    if(mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    $bool = true;

    $query = mysqli_query($con, "Select * from users");
    while($row = mysqli_fetch_array($query)) {
      $table_users = $row['username'];
      if($username == $table_users) {
        $bool = false;
        Print '&lt;script>alert("Username has been taken!");&lt;/script>';
        Print '&lt;script>window.location.assign("register.php")&lt;/script>';
      }
    }

    if($bool) {
      mysqli_query($con, "INSERT INTO users(username,password) VALUES ('$username', '$password')");
      Print '&lt;script>alert("Successfully Registered!");&lt;/script>';
      Print '&lt;script>window.location.assign("register.php")&lt;/script>';
    }
  }
?>
          </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-login.php11" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>

  &lt;body>
  &lt;h2>Login Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="checklogin.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Login"/>
  &lt;/form>

  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php11" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                <p>
                  We altered the <code class="prettifySQL">&lt;table&lt;/table></code> tags in the home page to query and retrieve the values from the
                  list table. We then looped through all the results and added them to the home page for logged
                  in users to see.
                </p>
              </section>


              <!-- section divider -->


              <section id="section_ED">
                <a id="_ED"><h1><codeG>Editing Data</codeG></h1></a>
                <p>
                  We can add data to the table, but what if you made a mistake? We are going to explore how to
                  use GET (this entire time we’ve been using POST) to edit this data.
                </p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-php8" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">home.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-php8" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums:53 lang-php CodeBoxBuffer">
Print '&lt;td align="center">&lt;a href="edit.php" id='. $row['id'] .'>edit&lt;/a>&lt;/td>';
Print '&lt;td align="center">&lt;a href="delete.php" id='. $row['id'] .'>delete&lt;/a>&lt;/td>';
</pre>
                    </div>
                  </div>
                </div>
                <p>
                  Edit the two table values for "edit" and "delete" in "home.php". Remember how get grabs
                  values and passes them into the URL? Keep that in mind, it will become relevant soon.
                </p>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Create a new file called "edit.php"
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/editfile.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <p>
                  The "edit.php" is very similar to the home
                  page, and this is because it is supposed to!
                </p>
                <p>
                  What this page is doing is acting as a way
                  to edit the list that you were planning to
                  edit, hence the reason we did a GET
                  request. We are passing the value through
                  the URL to be given to the edit page.
                </p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-edit.php12" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">edit.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-home.php12" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">home.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-add.php12" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">add.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-logout.php12" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">logout.php</code></a>
                    <a class="nav-item nav-link" id="checklogin.php" data-toggle="tab" href="#-checklogin.php12" role="tab" aria-controls="checklogin.php" aria-selected="true"><code class="prettifySQL codetab">checklogin.php</code></a>
                    <a class="nav-item nav-link" id="register.php" data-toggle="tab" href="#-register.php12" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-login.php12" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">login.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php12" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-edit.php12" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer longCode">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Home Page&lt;/title>
  &lt;/head>

  &lt;?php
    session_start();
    // Check if logged in or not
    if(!$_SESSION['user']) {
      // If not logged in
      header("location:index.php");
    }
    // Assign user value if logged in
    $user = $_SESSION['user'];
  ?>

  &lt;body>

    &lt;h2>Home Page&lt;/h2>
    &lt;p>Hello &lt;?php Print "$user" ?>!&lt;/p>

    &lt;a href="logout.php">Click here to logout</a> &lt;br> &lt;br>
    &lt;a href="home.php">Return to Home Page</a> &lt;br> &lt;br>

    &lt;h2>Currently Selected&lt;/h2>

    &lt;h2 align="center">My List&lt;/h2>
    &lt;table border="1px" width="100%">
      &lt;tr>
        &lt;th>ID&lt;/th>
        &lt;th>Details&lt;/th>
        &lt;th>Post Time&lt;/th>
        &lt;th>Post Time&lt;/th>
        &lt;th>Public Host&lt;/th>
      &lt;/tr>

      &lt;?php
        if(!empty($_GET['id'])){
          $id = $_GET['id'];
          $_SESSION['id'] = $id;
          $id_exists = true;
          $con = mysqli_connect("localhost", "root", "", "first_db");
          $query = mysqli_query($con, "Select * from users");
          $count = mysqli_num_rows($query);
          if($count > 0){
            while($row = mysqli_fetch_array($query)) {
              Print "&lt;tr>"
                Print '&lt;td align="center">' . $row['id'] . "&lt;/td>";
                Print '&lt;td align="center">' . $row['details'] . "&lt;/td>";
                Print '&lt;td align="center">' . $row['date_posted'] . " - " . $row['time_posted'] . "&lt;/td>";
                Print '&lt;td align="center">' . $row['date_edited'] . " - " . $row['time_edited'] . "&lt;/td>";
                Print '&lt;td align="center">' . $row['public'] . "&lt;/td>";
              Print "&lt;/tr>"
            }
          } else {
            $id_exists = false;
          }
        }
      ?>
    &lt;/table>
    &lt;br>
    <!-- User Data -->
    &lt;?php
      if($id_exists) {
        Print
        &lt;form action="add.php" method="post">
        Add more to the list: &lt;input name="details" value="text"> &lt;br>
        Public post? &lt;input type="checkbox" name="public[]" value="yes">
        &lt;input type="submit" value="Add to list">
        &lt;/form>
        ;
      } else {
        Print '&lt;h2 align="center">There is no data to be edited.&lt;/h2>';
      }
    ?>
  &lt;/body>
&lt;/html>

&lt;?php
  if($_SERVER['REQUEST_METHOD'] == "POST") {
    $con = mysqli_connect("localhost", "root", "", "first_db");
    $details = mysqli_real_escape_string($con, $_POST['details']);
    $public = "no";
    $id = $_SESSION['id'];
    $time = strfrime("%X");
    $date = strfrime("%B %d, %Y");

    // Gets the data form the check box to see if it was checked
    if(isset($_POST['public'])) {
      $checkboxes = $_POST['public'];
    } else {
      $checkboxes = array();
    }

    foreach($checkboxes as $list) {
      if($list != null) {
        $public = "yes"; // Yes this will be public
      }
    }

    mysqli_query($con, "UPDATE list SET details='$details', public='$public', date_edited='$date', time_edited='$time' WHERE id='$id'");
    header(location:home.php);
  }
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-home.php12" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Home Page&lt;/title>
  &lt;/head>

  &lt;?php
    session_start();
    // Check if logged in or not
    if(!$_SESSION['user']) {
      // If not logged in
      header("location:index.php");
    }
    // Assign user value if logged in
    $user = $_SESSION['user'];
  ?>

  &lt;body>

    &lt;h2>Home Page&lt;/h2>
    &lt;p>Hello &lt;?php Print "$user" ?>!&lt;/p>

    &lt;a href="logout.php">Click here to logout</a> &lt;br> &lt;br>
    &lt;form action="add.php" method="post">
      Add more to the list: &lt;input name="details" value="text"> &lt;br>
      Public post? &lt;input type="checkbox" name="public[]" value="yes">
      &lt;input type="submit" value="Add to list">
    &lt;/form>

    &lt;h2 align="center">My List&lt;/h2>
    &lt;table border="1px" width="100%">

      &lt;tr>
        &lt;th>ID&lt;/th>
        &lt;th>Details&lt;/th>
        &lt;th>Post Time&lt;/th>
        &lt;th>Post Time&lt;/th>
        &lt;th>Edit&lt;/th>
        &lt;th>Delete&lt;/th>
        &lt;th>Public Host&lt;/th>
      &lt;/tr>

      &lt;!-- User Data -->
      &lt;?php
        $con = mysqli_connect("localhost", "root", "", "first_db");
        $query = mysqli_query($con, "Select * from users");
        while($row = mysqli_fetch_array($query)) {
          Print "&lt;tr>"
          Print '&lt;td align="center">' . $row['id'] . "&lt;/td>";
          Print '&lt;td align="center">' . $row['details'] . "&lt;/td>";
          Print '&lt;td align="center">' . $row['date_posted'] . " - " . $row['time_posted'] . "&lt;/td>";
          Print '&lt;td align="center">' . $row['date_edited'] . " - " . $row['time_edited'] . "&lt;/td>";
          Print '&lt;td align="center">&lt;a href="edit.php">edit&lt;/a>&lt;/td>';
          Print '&lt;td align="center">&lt;a href="delete.php">delete&lt;/a>&lt;/td>';
          Print '&lt;td align="center">' . $row['public'] . "&lt;/td>";
          Print "&lt;/tr>"
        }
      ?>
    &lt;/table>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-add.php12" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();
  if(!$_SESSION['user']) {
    header("location:index.php");
  }

  // Only add if the request is secure
  if($_SERVER['REQUEST_METHOD'] == "POST") {
    $con = mysqli_connect("localhost", "root", "", "first_db");
    $details = mysqli_real_escape_string($con, $_POST['details']);
    $time = strfrime("%X");
    $date = strfrime("%B %d, %Y");
    $decision = "no";

    // Gets the data form the check box to see if it was checked
    if(isset($_POST['public'])) {
      $checkboxes = $_POST['public'];
    } else {
      $checkboxes = array();
    }

    foreach($checkboxes as $each_check) {
      if($each_check != null) {
        $decision = "yes"; // Yes this will be public
      }
    }

    mysqli_query($con, "INSERT INTO list (details, date_posted, time_posted, public)
                    VALUES ('$details', '$date', '$time', '$decision')");
    header(location:home.php);
  } else {
    header(location:home.php);
  }
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-logout.php12" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();
  session_destroy();
  header("locaion:index.php");
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-checklogin.php12" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();

  // Create a connection with the database
  $con = mysqli_connect("localhost","root","","first_db");

  // Check connection
  if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $username = mysqli_real_escape_string($con, $_POST['username'])
  $password = mysqli_real_escape_string($con, $_POST['password'])

  // Check if the username exists
  $query = mysqli_query($con, "SELECT * from users WHERE username = '$username'");
  $exists = mysqli_num_rows($query);

  $table_users = "";
  $table_password = "";

  if(exists > 0){ // If there is a username
    while($row = mysqli_fetch_array($query)) { // Display all rows from Query
      // Populate array with results
      $table_users = $row['username'];
      $table_password = $row['password'];
    }

    // Check array and see if matched username and password
    if($username == $table_users && ($password == $table_password)) {
      // Ser the session to the logged in user
      $_SESSION['user'] = $username;
      header("location: home.php");
    } else {
      Print '&lt;script>alert("Incorrect Password!");&lt;/script>'
      Print '&lt;script>window.location.assign("login.php")&lt;/script>'
    }

  } else {
    Print '&lt;script>alert("Incorrect Username!");&lt;/script>'
    Print '&lt;script>window.location.assign("login.php")&lt;/script>'
  }

?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-register.php12" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Register Page&lt;/title>
  &lt;/head>

  &lt;body>
  &lt;h2>Registration Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="register.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Register"/>
  &lt;/form>

  &lt;/body>
&lt;/html>

&lt;?php
  if($_SERVER["REQUEST_METHOD"] == "POST") {

    // Create a connection with the database
    $con = mysqli_connect("localhost","root","","first_db");

    // Check connection
    if(mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    $bool = true;

    $query = mysqli_query($con, "Select * from users");
    while($row = mysqli_fetch_array($query)) {
      $table_users = $row['username'];
      if($username == $table_users) {
        $bool = false;
        Print '&lt;script>alert("Username has been taken!");&lt;/script>';
        Print '&lt;script>window.location.assign("register.php")&lt;/script>';
      }
    }

    if($bool) {
      mysqli_query($con, "INSERT INTO users(username,password) VALUES ('$username', '$password')");
      Print '&lt;script>alert("Successfully Registered!");&lt;/script>';
      Print '&lt;script>window.location.assign("register.php")&lt;/script>';
    }
  }
?>
          </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-login.php12" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>

  &lt;body>
  &lt;h2>Login Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="checklogin.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Login"/>
  &lt;/form>

  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php12" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                  <p>
                    <code class="prettifySQL"> if($_SERVER["REQUEST_METHOD"] == "POST"</code>
                    Is a conditional that is triggered when a
                    form is submitting through POST (Not
                    GET because we are directly accessing
                    the database and that could cause security
                    issues).
                  </p>
              </section>


              <!-- Section Divider -->


              <section id="section_DD">
                <a id="_DD"><h1><codeG>Deleting Data</codeG></h1></a>
                <p>
                  We have the ability to edit our data, but what if we just want to delete it? We are going to have
                  the "delete" button be pressed and then have a javascript function to prompt the user to make
                  sure they do in fact want to delete a record.
                </p>
                <br>
                <p>
                  Change your table data for
                  "delete" and add the following
                  script underneath your table.
                </p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-home.php13" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">home.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-edit.php13" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">edit.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-add.php13" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">add.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-logout.php13" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">logout.php</code></a>
                    <a class="nav-item nav-link" id="checklogin.php" data-toggle="tab" href="#-checklogin.php13" role="tab" aria-controls="checklogin.php" aria-selected="true"><code class="prettifySQL codetab">checklogin.php</code></a>
                    <a class="nav-item nav-link" id="register.php" data-toggle="tab" href="#-register.php13" role="tab" aria-controls="register.php" aria-selected="true"><code class="prettifySQL codetab">register.php</code></a>
                    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#-login.php13" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">login.php</code></a>
                    <a class="nav-item nav-link" id="index.php" data-toggle="tab" href="#-index.php13" role="tab" aria-controls="index.php" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-home.php13" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Home Page&lt;/title>
  &lt;/head>

  &lt;?php
  session_start();
    // Check if logged in or not
    if(!$_SESSION['user']) {
      // If not logged in
      header("location:index.php");
    }
    // Assign user value if logged in
    $user = $_SESSION['user'];
  ?>

  &lt;body>

    &lt;h2>Home Page&lt;/h2>
    &lt;p>Hello &lt;?php Print "$user" ?>!&lt;/p>

    &lt;a href="logout.php">Click here to logout</a> &lt;br> &lt;br>
    &lt;form action="add.php" method="post">
      Add more to the list: &lt;input name="details" value="text"> &lt;br>
      Public post? &lt;input type="checkbox" name="public[]" value="yes">
      &lt;input type="submit" value="Add to list">
    &lt;/form>

    &lt;h2 align="center">My List&lt;/h2>
    &lt;table border="1px" width="100%">

      &lt;tr>
        &lt;th>ID&lt;/th>
        &lt;th>Details&lt;/th>
        &lt;th>Post Time&lt;/th>
        &lt;th>Post Time&lt;/th>
        &lt;th>Edit&lt;/th>
        &lt;th>Delete&lt;/th>
        &lt;th>Public Host&lt;/th>
      &lt;/tr>

      &lt;!-- User Data -->
      &lt;?php
        $con = mysqli_connect("localhost", "root", "", "first_db");
        $query = mysqli_query($con, "Select * from users");
        while($row = mysqli_fetch_array($query)) {
          Print "&lt;tr>"
          Print '&lt;td align="center">' . $row['id'] . "&lt;/td>";
          Print '&lt;td align="center">' . $row['details'] . "&lt;/td>";
          Print '&lt;td align="center">' . $row['date_posted'] . " - " . $row['time_posted'] . "&lt;/td>";
          Print '&lt;td align="center">' . $row['date_edited'] . " - " . $row['time_edited'] . "&lt;/td>";
          Print '&lt;td align="center">&lt;a href="edit.php">edit&lt;/a>&lt;/td>';
          Print '&lt;td align="center">&lt;a href="#" onclick="promptUser(' . $row['id'] . ')">delete&lt;/a>&lt;/td>';
          Print '&lt;td align="center">' . $row['public'] . "&lt;/td>";
          Print "&lt;/tr>"
        }
      ?>

    &lt;/table>

    &lt;script>
      function promptUser(id){
        var r = confirm("Are you sure you want to delete this record?")
        if(r){
          window.location.assign("delete.php?id=" + id);
        }
      }
    &lt;/script>

  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-edit.php13" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer longCode">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Home Page&lt;/title>
  &lt;/head>

  &lt;?php
    session_start();
    // Check if logged in or not
    if(!$_SESSION['user']) {
      // If not logged in
      header("location:index.php");
    }
    // Assign user value if logged in
    $user = $_SESSION['user'];
  ?>

  &lt;body>

    &lt;h2>Home Page&lt;/h2>
    &lt;p>Hello &lt;?php Print "$user" ?>!&lt;/p>

    &lt;a href="logout.php">Click here to logout</a> &lt;br> &lt;br>
    &lt;a href="home.php">Return to Home Page</a> &lt;br> &lt;br>

    &lt;h2>Currently Selected&lt;/h2>

    &lt;h2 align="center">My List&lt;/h2>
    &lt;table border="1px" width="100%">
      &lt;tr>
        &lt;th>ID&lt;/th>
        &lt;th>Details&lt;/th>
        &lt;th>Post Time&lt;/th>
        &lt;th>Post Time&lt;/th>
        &lt;th>Public Host&lt;/th>
      &lt;/tr>

      &lt;?php
        if(!empty($_GET['id'])){
          $id = $_GET['id'];
          $_SESSION['id'] = $id;
          $id_exists = true;
          $con = mysqli_connect("localhost", "root", "", "first_db");
          $query = mysqli_query($con, "Select * from users");
          $count = mysqli_num_rows($query);
          if($count > 0){
            while($row = mysqli_fetch_array($query)) {
              Print "&lt;tr>"
                Print '&lt;td align="center">' . $row['id'] . "&lt;/td>";
                Print '&lt;td align="center">' . $row['details'] . "&lt;/td>";
                Print '&lt;td align="center">' . $row['date_posted'] . " - " . $row['time_posted'] . "&lt;/td>";
                Print '&lt;td align="center">' . $row['date_edited'] . " - " . $row['time_edited'] . "&lt;/td>";
                Print '&lt;td align="center">' . $row['public'] . "&lt;/td>";
              Print "&lt;/tr>"
            }
          } else {
            $id_exists = false;
          }
        }
      ?>
    &lt;/table>
    &lt;br>
    &lt;!-- User Data -->
    &lt;?php
      if($id_exists) {
        Print
        &lt;form action="add.php" method="post">
        Add more to the list: &lt;input name="details" value="text"> &lt;br>
        Public post? &lt;input type="checkbox" name="public[]" value="yes">
        &lt;input type="submit" value="Add to list">
        &lt;/form>
        ;
      } else {
        Print '&lt;h2 align="center">There is no data to be edited.&lt;/h2>';
      }
    ?>
  &lt;/body>
&lt;/html>

&lt;?php
  if($_SERVER['REQUEST_METHOD'] == "POST") {
    $con = mysqli_connect("localhost", "root", "", "first_db");
    $details = mysqli_real_escape_string($con, $_POST['details']);
    $public = "no";
    $id = $_SESSION['id'];
    $time = strfrime("%X");
    $date = strfrime("%B %d, %Y");

    // Gets the data form the check box to see if it was checked
    if(isset($_POST['public'])) {
      $checkboxes = $_POST['public'];
    } else {
      $checkboxes = array();
    }

    foreach($checkboxes as $list) {
      if($list != null) {
        $public = "yes"; // Yes this will be public
      }
    }

    mysqli_query($con, "UPDATE list SET details='$details', public='$public', date_edited='$date', time_edited='$time' WHERE id='$id'");
    header(location:home.php);
  }
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-add.php13" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();
  if(!$_SESSION['user']) {
    header("location:index.php");
  }

  // Only add if the request is secure
  if($_SERVER['REQUEST_METHOD'] == "POST") {
    $con = mysqli_connect("localhost", "root", "", "first_db");
    $details = mysqli_real_escape_string($con, $_POST['details']);
    $time = strfrime("%X");
    $date = strfrime("%B %d, %Y");
    $decision = "no";

    // Gets the data form the check box to see if it was checked
    if(isset($_POST['public'])) {
      $checkboxes = $_POST['public'];
    } else {
      $checkboxes = array();
    }

    foreach($checkboxes as $each_check) {
      if($each_check != null) {
        $decision = "yes"; // Yes this will be public
      }
    }

    mysqli_query($con, "INSERT INTO list (details, date_posted, time_posted, public)
                    VALUES ('$details', '$date', '$time', '$decision')");
    header(location:home.php);
  } else {
    header(location:home.php);
  }
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-logout.php13" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();
  session_destroy();
  header("locaion:index.php");
?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-checklogin.php13" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();

  // Create a connection with the database
  $con = mysqli_connect("localhost","root","","first_db");

  // Check connection
  if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $username = mysqli_real_escape_string($con, $_POST['username'])
  $password = mysqli_real_escape_string($con, $_POST['password'])

  // Check if the username exists
  $query = mysqli_query($con, "SELECT * from users WHERE username = '$username'");
  $exists = mysqli_num_rows($query);

  $table_users = "";
  $table_password = "";

  if(exists > 0){ // If there is a username
    while($row = mysqli_fetch_array($query)) { // Display all rows from Query
      // Populate array with results
      $table_users = $row['username'];
      $table_password = $row['password'];
    }

    // Check array and see if matched username and password
    if($username == $table_users && ($password == $table_password)) {
      // Ser the session to the logged in user
      $_SESSION['user'] = $username;
      header("location: home.php");
    } else {
      Print '&lt;script>alert("Incorrect Password!");&lt;/script>'
      Print '&lt;script>window.location.assign("login.php")&lt;/script>'
    }

  } else {
    Print '&lt;script>alert("Incorrect Username!");&lt;/script>'
    Print '&lt;script>window.location.assign("login.php")&lt;/script>'
  }

?>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-register.php13" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Register Page&lt;/title>
  &lt;/head>

  &lt;body>
  &lt;h2>Registration Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="register.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Register"/>
  &lt;/form>

  &lt;/body>
&lt;/html>

&lt;?php
  if($_SERVER["REQUEST_METHOD"] == "POST") {

    // Create a connection with the database
    $con = mysqli_connect("localhost","root","","first_db");

    // Check connection
    if(mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    $bool = true;

    $query = mysqli_query($con, "Select * from users");
    while($row = mysqli_fetch_array($query)) {
      $table_users = $row['username'];
      if($username == $table_users) {
        $bool = false;
        Print '&lt;script>alert("Username has been taken!");&lt;/script>';
        Print '&lt;script>window.location.assign("register.php")&lt;/script>';
      }
    }

    if($bool) {
      mysqli_query($con, "INSERT INTO users(username,password) VALUES ('$username', '$password')");
      Print '&lt;script>alert("Successfully Registered!");&lt;/script>';
      Print '&lt;script>window.location.assign("register.php")&lt;/script>';
    }
  }
?>
          </pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-login.php13" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>

  &lt;body>
  &lt;h2>Login Page&lt;/h2>
  &lt;a href="index.php">Click here to go back&lt;/a> &lt;br> &lt;br>

  &lt;form action="checklogin.php" method="post">
    Enter Username: &lt;input type="text" name="username" required="required">
    Enter Password: &lt;input type="password" name="password" required="required">
    &lt;input type="submit" value="Login"/>
  &lt;/form>

  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                  <div class="tab-pane fade show" id="-index.php13" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>PHP/SQL Login Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
                <p>
                  Notice how the URL you are
                  directed to is "delete.php?id=id",
                  is that a GET or POST method?
                </p>
                <div class="paraSection paraCenter">
                  <div class="para">
                    <div class="fl">
                      <p>
                        Create a file called "delete.php",
                        and we are ready to delete some
                        records!
                      </p>
                    </div>
                    <div class="fr">
                      <div class="tutImageContainer">
                        <img src="images/deletefile.PNG" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <p>Add this code into the "delete.php".</p>


                <!-- NEED TO BE CLEANED BELOW  -->


                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-php7" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">delete.php</code></a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-php7" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;?php
  session_start();
  if(!$_SESSION['user']) {
    header("location:index.php");
  }

  if($_SERVER['REQUEST_METHOD'] == "GET") {
    $con = mysqli_connect("localhost", "root", "", "first_db");
    $id = $_GET['id'];
    mysqli_query($con, "DELETE FROM list WHERE id='$id'");
    header(location:home.php);
  }
?>
</pre>
                    </div>
                  </div>
                </div>
                <p>Now you can delete items! Go ahead and try it.</p>
              </section>


              <!-- section divider -->


              <section id="section_DPD">
                <a id="_DPD"><h1><codeG>Displaying "Public Data"</codeG></h1></a>
                <p>
                  We've done quite a bit, but what you now have is very impressive! However, there is one last
                  thing we need to add into our site, and that is the ability for "guest" users (the users who are not
                  logged in) to see the "public posts" that we have set.
                </p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#-php1" role="tab" aria-controls="nav-home" aria-selected="true"><code class="prettifySQL codetab">index.php</code></a>
                  </div>
                </nav>
                <br>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="-php1" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class='CodeBoxL'>
                      <pre class="prettyprint linenums lang-php CodeBoxBuffer">
&lt;!DOCTYPE html>
&lt;html>

  &lt;head>
    &lt;title>PHP/SQL Guest Page&lt;/title>
  &lt;/head>

  &lt;body>
    &lt;?php
      echo "&lt;p>Hello, World!&lt;/p>";
    ?>
    &lt;a href="login.php">Click here to login&lt;/a>
    &lt;a href="register.php">Click here to register&lt;/a>
  &lt;/body>

  &lt;br>
  &lt;h2 align="center">My List&lt;/h2>
  &lt;table border="1px" width="100%">
    &lt;tr>
      &lt;th>ID&lt;/th>
      &lt;th>Details&lt;/th>
      &lt;th>Edit&lt;/th>
      &lt;th>Delete&lt;/th>
    &lt;/tr>

    &lt;?php
      $con = mysqli_connect("localhost", "root", "", "first_db");
      $query = mysqli_query($con, "Select * from list Where public='yes'");
      while($row = mysqli_fetch_array($query)) {
        Print "&lt;tr>";
        Print '&lt;td align="center">' . $row['id'] . "&lt;/td>";
        Print '&lt;td align="center">' . $row['details'] . "&lt;/td>";
        Print '&lt;td align="center">' . $row['date_posted'] . " - " . $row['time_posted'] . "&lt;/td>";
        Print '&lt;td align="center">' . $row['date_edited'] . " - " . $row['time_edited'] . "&lt;/td>";
        Print "&lt;/tr>";
      }
    ?>
  &lt;/table>
&lt;/html>
</pre>
                    </div>
                  </div>
                </div>
              </section>
              <section id="section_FINALPRODUCT">
                <a id="_FINALPRODUCT"><h1><codeG>Final Product</codeG></h1></a>
                <div class="paraCenter">
                  <h1>You've made it!</h1>
                  <p>
                    One thing that you may have noticed is that the table is the same for every logged in user. This s
                    because if you want a different list for every user, you would need to create a new table for every
                    new user who registers to your site. Unfortunately, that goes beyond the scope of this project
                    sheet. In the PHP course you can learn more about PHP and it’s relationship with SQL to create
                    more complex websites and databases. Until then, you still have something very impressive to
                    show off!
                  </p>
                </div>
                <div class="finalResultWapper">
                  <img src="images/final.PNG" alt=""></img>
                </div>
              </section>

              <section id="section_KC">
                <a id="_KC"><h1><codeG>Knowledge Check</codeG></h1></a>
                <ol>
                  <li>What is SQL?</li>
                  <li> How do you have users enter text and have it hidden?</li>
                  <li>How do you create a connection to a SQL database?</li>
                </ol>
              </section>

              <section id="section_CHALLENGES">
                <a id="_CHALLENGES"><h1><codeG>Challenges</codeG></h1></a>
                <p>None yet!</p>
              </section>

            </article>
          </div>
          <!-- <div class="docs-prevnext"><a class="docs-prev button" href="#">← Lorem</a><a class="docs-next button" href="#">Ipsum →</a></div> -->
        </div>
      </div>
    </div>
  </div>
  <footer class="nav-footer" id="footer">
    <section class="sitemap">
      <!-- <div>
          <h5><a href="#">Lorem</a></h5>
          <a href="#">Lorem</a>
        </div>
        <div>
          <h5><a href="#">Lorem</a></h5>
          <a href="#">Lorem</a>
        </div>
        <div>
          <h5><a href="#">Lorem</a></h5>
          <a href="#">Lorem</a>
        </div> -->
      <!-- <section class="copyright"> -->
    </section>
  </footer>
  </div>
</body>

</html>`




var defaultCodeJS = `// This is a circle object
// It takes an x and a y for its location
function Circle(x, y) {
  // this.pos is a vector with the obejct's pos(x,y)
  this.pos = createVector(random(width), random(height));
  // this.pos = createVector(x,y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.target = createVector(x, y)

  // this.r is the circle's radius
  // this.growrate is how fast the cirlce grows
  // Amount each frame
  // this.growing is a bool var for it the circle should grow or not
  // this.buffer is how much black space should be allowed between circles
  this.r = 1;
  this.growRate = 1.5;
  this.growing = true;
  this.buffer = 5;

  // how the cirlces move.
  // MaxSpeed is how long a vector can possibly be (Top left to bottom right)
  // How much do we slow down
  // this.maxSpeed = sqrt(width * width + width * width);
  this.maxSpeed = 5;
  this.maxForce = 0.3;
  this.fleeRange = 125;
  this.fleeSpeed = 7;

  // var middle = createVector(width/2,height/2);
  // var d = dist(middle.x, middle.y, this.target.x, this.target.y)
  // var c = map(d,0,width/2,0,255)

  // this.color is the color of the circle
  // this.color = color(random(360),255,255)
  // this.color = color(c,255,255)

  // Apply a force to acc (Takes a vector)
  this.applyForce = function(f) {
    this.acc.add(f)
  }

  // This function will update the color of the circle
  this.updateColor = function() {
    var middle = createVector(width / 2, height / 2);
    var d = dist(middle.x, middle.y, this.pos.x, this.pos.y);
    var c = map(d, 0, width / 2, 0, 255);
    this.color = color(c, 255, 255);
  }

  // updates color, vel, pos, acc, and calls the arrive function.
  this.update = function() {
    this.updateColor();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.arrive(this.target);
    var d = dist(this.pos.x, this.pos.y, mouseX, mouseY)
    var mouseV = createVector(mouseX, mouseY);
    if (d < this.fleeRange) {
      this.applyForce(this.run(mouseV));
    }
  }

  this.run = function(target) {
    var fleeingTarget = createVector(target.x, target.y);
    var fleeDir = p5.Vector.sub(this.pos, fleeingTarget)
    fleeDir.setMag(this.fleeSpeed)
    return p5.Vector.sub(fleeDir, this.vel);
  }

  // This arive is a function that moves a agent (circle)
  // towards a target based on how far away from target it is
  // Think of this as stoping at a stop sign
  // We want to go max speed until we are close to the sign
  // As we get closer we want to slow down
  // Once we arive we want to stop
  this.arrive = function(target) {
    // Get the direction
    var desired = p5.Vector.sub(target, this.pos)
    // See how long this vector is
    var d = desired.mag();
    // Get the max speed
    var speed = this.maxSpeed;
    // This is the "Slow down as we get close" part of the alg
    if (d < 10 * this.maxSpeed) {
      speed = map(d, 0, 10 * this.maxSpeed, 0, this.maxSpeed)
    }
    // Resize the vector
    desired.setMag(speed)
    // "steer"
    var steer = p5.Vector.sub(desired, this.vel)
    // Apply the force
    steer.limit(this.maxForce)
    this.applyForce(steer)
  }

  // This.show draws the circle to the screen
  this.show = function() {
    // Color mode Hue, sat, brightness
    // No stroke around the circle
    // Fill the circle with it's color
    // Draw the ellipse
    // NOTE: this.r is the radius so we must mult it by 2 for the with and height
    colorMode(HSB);
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  // This.grow will inc this.r by this.growRate if the circle is still growing
  this.grow = function() {
    if (!this.bounds()) {
      this.growing = false;
    }
    // If the circle is still growing and this.r < the MAXSIZE ->
    if (this.growing && this.r < MAXSIZE) {
      // this.r = this.r + this.growRate
      this.r += this.growRate;
    }
  }

  // this function will return false if the circle is touching another circle or a wall
  this.bounds = function() {
    // Check to see if the circle is touching a wall
    var tempX = this.target.x + this.r + this.buffer;
    var tempY = this.target.y + this.r + this.buffer;
    if (tempX > width || tempY > height) return false;
    var tempX = this.target.x - this.r - this.buffer;
    var tempY = this.target.y - this.r - this.buffer;
    if (tempX < 0 || tempY < 0) return false;

    // Check to see if 'this' is touching any other circle
    for (var i = 0; i < circles.length; i++) {
      // Check circle at i
      // Get the distance between 'this' and circle c
      var c = circles[i];
      var d = dist(this.target.x, this.target.y, c.target.x, c.target.y)
      // IF D > 1 // NOTE: 'this' is in the circle array so it will
      // check itself so the distance from itself to itself will be 0
      // thus will stop growing
      if (d > 1) {
        // if the distance is less than both radius + the buffer then return false
        if (d < this.r + c.r + this.buffer) {
          return false;
        }
      }
    }
    return true;
  }
}

function addCircle() {
  var x = random(width);
  var y = random(height);

  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    var d = dist(x, y, c.target.x, c.target.y)
    if (d - c.buffer < c.r) {
      valid = false;
    }
  }

  if (valid) {
    circles.push(new Circle(x, y))
  }

  return valid;
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=QHEQuoIKgNE
// https://p5js.org/reference/

// MAXSIZE => The max radius of a circle
// CIRCLESEACHFRAME => The numbers of circles that are spawned each frame
// ATTEMPTS => The nuber of tries to spawn a circle each frame.
// MAX => Max number of circles possible
var MAXSIZE = 50;
var CIRCLESEACHFRAME = 10;
var ATTEMPTS = CIRCLESEACHFRAME * 10;
var MAX = 1000;

// circle => Array to hold the cirlces
// Finished => Var to tell if we have finished packing the space yet
var circles = [];
var finished = false;

// Create the canvas
function setup() {
  createCanvas(500, 500);
}

function draw() {
  // Draw the background
  background(0, 0, 0)
  addCircles();

  // For each circle update, grow, and show.
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].grow();
    circles[i].show();
  }
}

function addCircles() {
  // circlesThisFrame keeps track of how many circles have sucessfully been spwaned this frame.
  // attemptsToAddCircle keepts track of how many attempts to add a circle have been made.
  var circlesThisFrame = 0;
  var attemptsToAddCircle = 0;
  // If the number of cirlcs is less than the max and we are not finished then ->
  if (circles.length < MAX && !finished) {
    // While the # of circles this frame < CIRCLESEACHFRAME
    while (circlesThisFrame < CIRCLESEACHFRAME) {
      // inc attempts
      attemptsToAddCircle++;
      // If we sucessfully add a circle then inc circlesThisFrame
      if (addCircle()) {
        circlesThisFrame++;
      }
      // If we try too many times (attemptsToAddCircle > ATTEMPTS)
      // Then we are done trying to pack circles
      if (attemptsToAddCircle > ATTEMPTS) {
        finished = true;
        // Break from while loop
        break;
      }
    }
  }
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI

// 1. This is a firework object
// It takes in -
// x
// y
// size
// color

// Vars
// 2. vector pos
// 3. size
// 4. color
// 5. vector vel
// 6. vector acc
// 7. vector g
// 8. pcount
// 9. array partical
// 10. bool exploded
// 11. bool del

// Functions
// 12. Apply force
// 13. Update
// 14. explode
// 15. show

function Firework(x_, y_, size_, color_) { // 1

  // Vars
  // 2. Create a vector with x and y as the passed values.
  // 3. set size to the passed value
  // 4. set the color to the passed value
  this.pos = createVector(x_, y_) // 2
  this.size = size_; // 3
  this.color = color_; // 4

  // 5. create a vector for the velocity
  // 6. create a vector for the acceleration
  // 7. create a vector for the force of gravity
  this.vel = createVector(0, 0); // 5
  this.acc = createVector(0, 0); // 6
  this.g = createVector(0, 0.1); // 7

  // 8. pCount is the number of particles the fire makes when it explodes
  // 9. particles is the array for storing all of the particles made when it explodes
  this.pCount = floor(size_ * 5); // 8
  this.particles = []; // 9

  // 10. exploded is a bool to check is the firework has been exploded yet. Starts as false
  // 11. del is a bool to see if the firework can be deleted from the array.
  this.exploded = false; // 10
  this.del = false; // 11

  // 12. Apply force
  // Apply force takes in a vector and adds it to the acceleration
  // a. Add the force to acc vector
  this.applyForce = function(f) { // 12
    this.acc.add(f); // 12.a
  }

  // 13. Update
  // a > Add acc to vel
  // b > Add g to vel
  // c > Add pos to vel
  // d > 0 out acc
  // e > If the vel is negitive (Firework is falling)
  // f > then explode the firework
  // g > If the firework has exploded and there are no particles in the air
  // h > Mark the firework for deletion
  this.update = function() { // 13
    this.vel.add(this.acc); // 13.a
    this.vel.add(this.g) // 13.b
    this.pos.add(this.vel); // 13.c
    this.acc.mult(0); // 13.d

    if (this.vel.y > 0) { // 13.e
      this.explode(); // 13.f
    }

    if (this.exploded && this.particles.length == 0) { // 13.g
      this.del = true; // 13.h
    }
  }

  // 14. explode
  // a > if this firework has not exploded yet (We dont want to do this more than once)
  // b > do the following pCount times
  // c > Create a force that will send the partical flying out
  // d > create a particle
  // > this.pos so that the particles can start where the firework ended.
  // > this.size/2 is the new size of the partical
  // > the new random force we made
  // > this.color so that we know what color to draw the particals
  // e > apply that random for the particle
  // f > add that partical to the array list
  // g > set exploded to true (so that we dont do all of that again)
  this.explode = function() { // 14
    if (!this.exploded) { // a
      for (var i = 0; i < this.pCount; i++) { // b
        var force = createVector(random(-2, 2), random(-2, 2)); // c
        var particle = new Particle(this.pos, this.size / 2, this.color); // d
        particle.applyForce(force); // e
        this.particles[i] = particle; // f
      }
    }
    this.exploded = true; // g
  }

  // 15. show
  // > this function will draw the firework and it's particles
  // a > set the color mode to HSB (Hue, saturation, brightness)
  // > this makes our colors really saturated and bright
  // b > check to see if the firework has been exploded
  // > if the fire work has exploded then dont show it
  // c > noStroke removes black lines around our firework
  // d > fill our circle with the color
  // e > draw the firework at x,y,size,size
  // f > For every partical (Loop through this array backwards)
  // > Update the partical's location
  // > show the partical
  // > if the partical is marked for deletion
  // > Delete that partical
  this.show = function() { // 15
    colorMode(HSB); // a

    if (!this.exploded) { // b
      noStroke(); // c
      fill(this.color, 255, 255); // d
      ellipse(this.pos.x, this.pos.y, this.size, this.size); // e
    }

    for (var i = this.particles.length - 1; i >= 0; i--) { // f
      this.particles[i].update();
      this.particles[i].show();
      if (this.particles[i].del) {
        this.particles.splice(i, 1)
      }
    }
  }
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI

// 1. this is a partical object
// > it takes in a parent firework
// > posistion
// > size
// > color

// Vars
// 2. vector pos
// 3. size
// 4. color
// 5. vector vel
// 6. vector acc
// 7. vector g
// 8. bool del
// 9. life
// 10. lifeSpan

// Functions
// 11. Apply force
// 12. Update
// 13. show

function Particle(pos_, size_, color_) { // 1

  // Vars
  // 2. Create a vector with x and y as the passed values.
  // 3. set size to the passed value
  // 4. set the color to the passed value
  this.pos = createVector(pos_.x, pos_.y); // 2
  this.size = size_; // 3
  this.color = color_; // 4

  // 5. create a vector for the velocity
  // 6. create a vector for the acceleration
  // 7. create a vector for the force of gravity
  this.vel = createVector(0, 0); // 5
  this.acc = createVector(0, 0); // 6
  this.g = createVector(0, 0.01); // 7

  // 8. del is a bool to see if the partical can be deleted from the array.
  this.del = false; // 8

  // 9. this.life is how many frames this partical has been alive
  // 10. this.lifeSpan is how many frames this partical is allowed to live
  this.life = 0; // 9
  this.lifeSpan = 40; // 10

  // 11. Apply force
  // Apply force takes in a vector and adds it to the acceleration
  // a. Add the force to acc vector
  this.applyForce = function(f) { // 11
    this.acc.add(f); // a
  }

  // 12. Update
  // a > Add acc to vel
  // b > Add g to vel
  // c > Add pos to vel
  // d > 0 out acc
  // e > inc the life count
  // f > if this.life > this.lifeSpan then
  // g > set del for true
  this.update = function() { // 12
    this.vel.add(this.acc); // a
    this.vel.add(this.g); // b
    this.pos.add(this.vel); // c
    this.acc.mult(0); // d
    this.life++; // e
    if (this.life > this.lifeSpan) { // f
      this.del = true; // g
    }
  }

  // 13. Show
  // > this function will draw the partical
  // a > set the color mode to HSB (Hue, saturation, brightness)
  // b > get the alpha value using the map function (Make it look like they are fading)
  // c > fill with color and alpha
  // d > draw the partical
  this.show = function() { // 13
    colorMode(HSB) // a
    var alpha = map(this.life, 0, this.lifeSpan, 255, 50) // b
    fill(this.color, alpha, alpha) // c
    ellipse(this.pos.x, this.pos.y, this.size, this.size) // d
  }
}

// Mikian Musser
// Code Central
// Sprint: Advanced Programing Topics with P5.js
// https://www.youtube.com/watch?v=CKeyIbT3vXI
// https://p5js.org/reference/

// Purple Rain topics
// > Map function
// > Floor function
// > Applying force function
// > Acc, vel, pos vectors
// > Color Modes
// > Vectors
// > OOP
// > Arrays
// > Push and splice
// > Random
// > Update/Show functions
// > P5.js basics

// 1. Array to hold our fireworks
// 2. How many fireworks on the screen
// 3. On average, how big should this firework be?
var fireworks = []; // 1
var count = 50; // 2
var baseSize = 6; // 3

// 1. Setup runs before the draw loop starts
// 2. Make a canvas to draw on.
// 3. Create 'count' number of fireworks
// 4. Get a random color.
// 5. Get a random size based on the 'baseSize'
// 6. Create a new firework with the following arguments
//    x, y, size, color
//    x is random
//    y is just off the screen
//    size is the new random size
//    color is random
// 7. create a vector pointing up
//    the vector is at a random length (speed)
// 8. for each firework, apply that 'random' force
// 9. draw the starting background
function setup() { // 1
  createCanvas(500, 500); // 2

  for (var i = 0; i < count; i++) { // 3
    var color = random(255); // 4
    var newSize = random(baseSize - 2, baseSize + 2); // 5
    fireworks[i] = new Firework(random(width), height - newSize, newSize, color); // 6
    var force = createVector(0, random(-9, -5)); // 7
    fireworks[i].applyForce(force); // 8
  }

  background(25); // 9
}

// 1. Draw loop runs once each frame (30 times a second)
// 2. colorMode is set to take in RGB values (this is the normal setting)
// 3. Draw a black backgroun with alot of alpha. (this makes the trails)
//    Try using other alpha values and see what happens
//    Alpha - 255 = opaque, 0 = transparent
// 4. For each firework, do the follwing -
// a. Update the firework
// b. Show the firework
// 5. For each firework, do the following
// a. Check to see if the firework can be deleted
// b. if so, splice it from the array
// 6. if the number of fireworks is less than the 'count'
//    aka. some have been deleted -> Then we should make some new ones
// 7. Get a random color.
// 8. Get a random size based on the 'baseSize'
// 9. Create a new firework with the following arguments
//    x, y, size, color
//    x is random
//    y is just off the screen
//    size is the new random size
//    color is random
// 10. create a vector pointing up
//    the vector is at a random length (speed)
// 11. for each firework, apply that 'random' force
// 12. push that new firework to the array

function draw() { // 1
  colorMode(RGB) // 2
  background(0, 25); // 3

  for (var i = 0; i < fireworks.length; i++) { // 4
    fireworks[i].update(); // a
    fireworks[i].show(); // b
  }

  for (var i = 0; i < fireworks.length; i++) { // 5
    if (fireworks[i].del) { // a
      fireworks.splice(i, 1) // b
    }
  }

  if (fireworks.length < count) { // 6
    var color = random(255); // 7
    var newSize = random(baseSize - 2, baseSize + 2); // 8
    var fw = new Firework(random(width), height - newSize, newSize, color); // 9
    var force = createVector(0, random(-9, -5)); // 10
    fw.applyForce(force); // 11
    fireworks.push(fw) // 12
  }
}

// NeuralNetwork visualizer

const LEVELS = 3;

class nnv {
  constructor(brain){
    this.inputSize = brain.input_nodes;
    this.hiddenSize = brain.hidden_nodes;
    this.outputSize = brain.output_nodes;
    this.IH_weights = brain.weights_ih.data
    this.HO_weights = brain.weights_ho.data
    this.hidden_Bias = brain.bias_h.data
    this.output_Bias = brain.bias_o.data
    this.hidden_values = brain.HiddenValues.data
    this.output_values = brain.OuputValues.data
    this.input_values = brain.InputValues;
    this.NodeSizeBias = 24;
    this.SizeMax = 50;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.x = 0;
    this.y = 0;
    this.xSize = 0;
    this.ySize = 0;
    this.YIntervalI = 0;
    this.YIntervalH = 0;
    this.YIntervalO = 0;
    this.XInterval = 0;
    this.YOffset = 0;
    this.XOffset = 0;
  }

  setValues(x, y, xSize, ySize, XOffset, YOffset){
    this.x = x;
    this.y = y;
    this.xSize = xSize;
    this.ySize = ySize;
    this.XOffset = XOffset;
    this.YOffset = YOffset;
    this.XInterval = this.CalcuateXInterval(this.xSize, LEVELS);
    this.YIntervalI = this.CalcuateYInterval(this.ySize, this.inputSize);
    this.YIntervalH = this.CalcuateYInterval(this.ySize, this.hiddenSize);
    this.YIntervalO = this.CalcuateYInterval(this.ySize, this.outputSize);
  }

  draw(){
    if(this.input_values){
      noStroke();
      fill(200);
      rectMode(CENTER);
      rect(this.x,this.y,this.xSize,this.ySize);
      this.drawNodes();
      this.drawLinks();
    }
  }

  drawNodes(){
    let size = this.NodeSizeBias;
    for(let i = 0; i < this.inputSize; i++){
      this.color = this.getColor(this.input_values[i],false);
      fill(this.color);
      let xValue = this.x - this.xSize/2 + 0 * this.XInterval + this.XInterval/2 + this.XOffset;
      let yValue = this.YOffset + i * this.YIntervalI + this.YIntervalI/2;
      ellipse(xValue, yValue, size, size);
    }
    for(let i = 0; i < this.hiddenSize; i++){
      this.color = this.getColor(this.hidden_values[i],false);
      fill(this.color);
      size = this.getSize(this.hidden_Bias[i][0]);
      let xValue = this.x - this.xSize/2 + 1 * this.XInterval + this.XInterval/2 + this.XOffset;
      let yValue = this.YOffset + i * this.YIntervalH + this.YIntervalH/2;
      ellipse(xValue, yValue, size, size);
    }
    for(let i = 0; i < this.outputSize; i++){
      this.color = this.getColor(this.output_values[i],true);
      fill(this.color);
      size = this.getSize(this.output_Bias[i][0]);
      let xValue = this.x - this.xSize/2 + 2 * this.XInterval + this.XInterval/2 + this.XOffset;
      let yValue = this.YOffset + i * this.YIntervalO + this.YIntervalO/2;
      ellipse(xValue, yValue, size, size);
    }
  }

  drawLinks(){
    for(let i = 0; i < this.hiddenSize; i++){
      for(let j = 0; j < this.inputSize; j++){
        let x = this.input_values[i];
        let weight = this.IH_weights[i][j];
        let pSum = x * weight;
        if(abs(pSum) >= 1/this.inputSize){
          this.drawConnection(i,j,1,2,this.IH_weights);
        }
      }
    }

    for(let i = 0; i < this.outputSize; i++){
      for(let j = 0; j < this.hiddenSize; j++){
        let x = this.hidden_values[i];
        let weight = this.HO_weights[i][j];
        let pSum = x * weight;
        if(abs(pSum) >= 1/(this.hiddenSize+1)){
          this.drawConnection(i,j,2,3,this.HO_weights);
        }
      }
    }
  }

  drawConnection(i,j,layerX,layerY,weights){
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;

    if(layerX == 1){
      x1 = this.x - this.xSize/2 + 0 * this.XInterval + this.XInterval/2 + this.XOffset;
      y1 = this.YOffset + j * this.YIntervalI + this.YIntervalI/2;
    }
    if(layerX == 2){
      x1 = this.x - this.xSize/2 + 1 * this.XInterval + this.XInterval/2 + this.XOffset;
      y1 = this.YOffset + j * this.YIntervalH + this.YIntervalH/2;
    }
    if(layerX == 3){
      x1 = this.x - this.xSize/2 + 2 * this.XInterval + this.XInterval/2 + this.XOffset;
      y1 = this.YOffset + j * this.YIntervalO + this.YIntervalO/2;
    }
    if(layerY == 1){
      x2 = this.x - this.xSize/2 + 0 * this.XInterval + this.XInterval/2 + this.XOffset;
      y2 = this.YOffset + i * this.YIntervalI + this.YIntervalI/2;
    }
    if(layerY == 2){
      x2 = this.x - this.xSize/2 + 1 * this.XInterval + this.XInterval/2 + this.XOffset;
      y2 = this.YOffset + i * this.YIntervalH + this.YIntervalH/2;
    }
    if(layerY == 3){
      x2 = this.x - this.xSize/2 + 2 * this.XInterval + this.XInterval/2 + this.XOffset;
      y2 = this.YOffset + i * this.YIntervalO + this.YIntervalO/2;
    }

    stroke(0);
    strokeWeight(abs(weights[i][j]) * 2);
    line(x1,y1,x2,y2);
  }

  getColor(val, output){
    let r = 0;
    let g = 0;
    let b = 0;
    if(output){
      let max = this.getHighestOutput();
      if(val == max){
        r = 0;
        g = 255;
        b = 0;
      } else {
        r = 255;
        g = 0;
        b = 0;
      }
    } else {
      if(val <= .5){
        r = 255;
        g = val * 2 * 255;
        b = 0;
      } else {
        r = (val - .5) * 2 * 255;
        g = 255;
        b = 0;
      }
    }
    let color = [3]
    color[0] = r;
    color[1] = g;
    color[2] = b;
    return color;
  }

  CalcuateYInterval(Height, Size){
    let UsableSpace = Height - 2 * this.YOffset;
    let Interval = UsableSpace / Size;
    return floor(Interval);
  }

  CalcuateXInterval(Width, Size){
    let UsableSpace = Width - 2 * this.XOffset;
    let Interval = UsableSpace / Size;
    return floor(Interval);
  }

  getSize(value){
    value = value * this.SizeMax;
    if(value <= 10) value = this.NodeSizeBias;
    return value;
  }

  getHighestOutput(){
    let max = 0;
    for(let j = 0; j < this.outputSize; j++){
      if(this.output_values[j] >= this.output_values[max]) max = j;
    }
    return this.output_values[max];
  }
}
// let m = new Matrix(3,2);


class Matrix {
constructor(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
}

copy() {
  let m = new Matrix(this.rows, this.cols);
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      m.data[i][j] = this.data[i][j];
    }
  }
  return m;
}

static fromArray(arr) {
  return new Matrix(arr.length, 1).map((e, i) => arr[i]);
}

static subtract(a, b) {
  if (a.rows !== b.rows || a.cols !== b.cols) {
    console.log('Columns and Rows of A must match Columns and Rows of B.');
    return;
  }

  // Return a new Matrix a-b
  return new Matrix(a.rows, a.cols)
    .map((_, i, j) => a.data[i][j] - b.data[i][j]);
}

toArray() {
  let arr = [];
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      arr.push(this.data[i][j]);
    }
  }
  return arr;
}

randomize() {
  return this.map(e => Math.random() * 2 - 1);
}

add(n) {
  if (n instanceof Matrix) {
    if (this.rows !== n.rows || this.cols !== n.cols) {
      console.log('Columns and Rows of A must match Columns and Rows of B.');
      return;
    }
    return this.map((e, i, j) => e + n.data[i][j]);
  } else {
    return this.map(e => e + n);
  }
}

static transpose(matrix) {
  return new Matrix(matrix.cols, matrix.rows)
    .map((_, i, j) => matrix.data[j][i]);
}

static multiply(a, b) {
  // Matrix product
  if (a.cols !== b.rows) {
    console.log('Columns of A must match rows of B.')
    return;
  }

  return new Matrix(a.rows, b.cols)
    .map((e, i, j) => {
      // Dot product of values in col
      let sum = 0;
      for (let k = 0; k < a.cols; k++) {
        sum += a.data[i][k] * b.data[k][j];
      }
      return sum;
    });
}

multiply(n) {
  if (n instanceof Matrix) {
    if (this.rows !== n.rows || this.cols !== n.cols) {
      console.log('Columns and Rows of A must match Columns and Rows of B.');
      return;
    }

    // hadamard product
    return this.map((e, i, j) => e * n.data[i][j]);
  } else {
    // Scalar product
    return this.map(e => e * n);
  }
}

map(func) {
  // Apply a function to every element of matrix
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      let val = this.data[i][j];
      this.data[i][j] = func(val, i, j);
    }
  }
  return this;
}

static map(matrix, func) {
  // Apply a function to every element of matrix
  return new Matrix(matrix.rows, matrix.cols)
    .map((e, i, j) => func(matrix.data[i][j], i, j));
}

print() {
  console.table(this.data);
  return this;
}

serialize() {
  return JSON.stringify(this);
}

static deserialize(data) {
  if (typeof data == 'string') {
    data = JSON.parse(data);
  }
  let matrix = new Matrix(data.rows, data.cols);
  matrix.data = data.data;
  return matrix;
}
}

if (typeof module !== 'undefined') {
module.exports = Matrix;
}
`
