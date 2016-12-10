<template>
    <div id="app">
        <div id="background"></div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" :to="{name: 'home'}" exact>
                        <img style="float: left; display:inline-block; height: 1.5em;"src="/static/favicon.png" />
                        <span style="display: inline-block;"> raposfly</span>
                    </router-link>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <router-link to="about" tag="li" active-class="active" exact data-toggle="collapse" data-target=".navbar-collapse.in">
                            <router-link :to="{name: 'about'}">{{ $t('about.nav') }}</router-link>
                        </router-link>
                    </ul>
                    <div class="navbar-right">
                        <ul class="nav navbar-nav">
                            <li><a @click="set_lang('en')">EN</a></li>
                            <li><a @click="set_lang('fr')">FR</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <div id="view" class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
 import Home from './components/Home'

 export default {
     name: 'app',
     components: {
         Home
     },
     methods: {
         set_lang: function (lang) {
             const route = Object.assign({}, this.$route)
             route.params.lang = lang
             this.$router.push(route)
         }
     }
 }
</script>

<style>
 @font-face {
     font-family: 'Montserrat';
     src: url('/static/fonts/Montserrat-Regular.otf');
     font-weight: normal;
 }

 @font-face {
     font-family: 'Montserrat';
     src: url('/static/fonts/Montserrat-Bold.otf');
     font-weight: bold;
 }

 #background {
     z-index: -1;
     position: fixed;
     height: 100vh;
     width: 100vw;
     /* background-color: #eff6e5; */
 }

 #background:after {
     content: "";
     position: absolute;
     width: 100%;
     margin-top: 50px;
     height: 100%;
     background: #c5dfa4;
     background: -webkit-linear-gradient(#c5dfa4, white); /* For Safari 5.1 to 6.0 */
     background: -o-linear-gradient(#c5dfa4, white); /* For Opera 11.1 to 12.0 */
     background: -moz-linear-gradient(#c5dfa4, white); /* For Firefox 3.6 to 15 */
     background: linear-gradient(#d3e7b9, white); /* Standard syntax */
     background-repeat: no-repeat;
 }

 #app {
     font-family: 'Montserrat', Helvetica, Arial, sans-serif;
 }

 #view {
     padding-top: 50px;
     font-size: 1.2em;
     color: #4a4a4a;
     text-align: justify;
 }


 hr {
     border-color: #4a4a4a !important;
     margin-top: 20px !important;
     margin-bottom: 20px !important;
 }

 .page-header {
     border-color: #4a4a4a !important;
 }

 .bold {
     font-weight: bold;
 }

 .italic {
     font-style: italic;
 }

 .underline {
     text-decoration: underline;
 }

</style>
