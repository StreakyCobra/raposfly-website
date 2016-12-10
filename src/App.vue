<template>
    <div>
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
                        <span style="display: inline-block;">raposfly</span>
                    </router-link>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <router-link to="about" tag="li" active-class="active" exact data-toggle="collapse" data-target=".navbar-collapse.in">
                            <router-link :to="{name: 'about'}">{{ $t('About') }}</router-link>
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

        <div id="app" class="container-fluid">
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

 #app {
     padding-top: 50px;
     font-family: 'Montserrat', Helvetica, Arial, sans-serif;
 }

</style>
