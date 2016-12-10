<template>
    <div>
        <div class="page-header">
            <img class="img-responsive center-block" src="/static/logo_full.png" />
            <p class="bold italic">&gt;&gt; {{ $t('home.slogan') }}</p>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h2></h2>
            </div>
            <div class="col-md-6">
                <h2></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 highlighted">
                <a href="https://github.com/StreakyCobra/raposfly">
                    <center><i class="fa fa-github"></i></center>
                    <h2>{{ $t('home.opensource.title') }}</h2>
                    <p>{{ $t('home.opensource.description') }}</p>
                </a>
            </div>
            <div class="col-md-4 highlighted">
                <a href="https://github.com/StreakyCobra/raposfly/tree/master/doc">
                    <center><i class="fa fa-book"></i></center>
                    <h2>{{ $t('home.documentation.title') }}</h2>
                    <p>{{ $t('home.documentation.description') }}</p>
                </a>
            </div>
            <div class="col-md-4 highlighted">
                <a href="https://github.com/StreakyCobra/raposfly">
                    <center><i class="fa fa-download"></i></center>
                    <h2>{{ $t('home.download.title') }}</h2>
                    <p>{{ $t('home.download.description') }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
     name: 'home'
 }
</script>

<style scoped>
 .highlighted a {
     color: inherit;
     text-decoration: none;
 }

 .highlighted a:hover {
     text-decoration: none;
 }

 .highlighted a i {
     font-size: 100px;
     color: #507027;
 }

 .highlighted a:hover i, .highlighted a:hover h2 {
     color: #a00431;
 }

 .highlighted h2 {
     font-size: 1.5em;
     text-align: center;
     color: #507027;
 }

</style>
