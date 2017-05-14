<template>
    <div>
        <span class="anchor" id="home"></span>
        <div>
            <img class="img-responsive center-block" src="/static/logo_full.png" />
            <p class="bold italic" style="text-align: center;">&gt;&gt; {{ $t('home.slogan') }}</p>
        </div>

        <div class="spacer"></div>
        <div class="alert alert-danger" style="text-align: center;">{{ $t('home.warning') }}</div>
        <div class="spacer"></div>

        <div class="row">
            <div class="col-md-4 highlighted">
                <a href="https://github.com/StreakyCobra/raposfly">
                    <center><i class="fa fa-github"></i></center>
                    <h2>{{ $t('home.opensource.title') }}</h2>
                    <hr />
                    <p>{{ $t('home.opensource.description') }}</p>
                </a>
            </div>
            <div class="col-md-4 highlighted">
                <a href="https://github.com/StreakyCobra/raposfly/releases">
                    <center><i class="fa fa-download"></i></center>
                    <h2>{{ $t('home.download.title') }}</h2>
                    <hr />
                    <p>{{ $t('home.download.description') }}</p>
                </a>
            </div>
            <div class="col-md-4 highlighted">
                <a href="https://github.com/StreakyCobra/raposfly/tree/master/doc">
                    <center><i class="fa fa-book"></i></center>
                    <h2>{{ $t('home.documentation.title') }}</h2>
                    <hr />
                    <p>{{ $t('home.documentation.description') }}</p>
                </a>
            </div>
        </div>

        <div class="spacer"></div>

        <img src="../assets/project.png" class="img-responsive center-block" />

        <div class="spacer"></div>

        <!-- <span class="anchor" id="project"></span> -->
        <!-- <h1>{{ $t('home.project.title') }}</h1> -->

        <!-- <div class="row"> -->
        <!--     <p>{{ $t('home.project.description') }}</p> -->
        <!-- </div> -->

        <div class="spacer"></div>

        <div class="sep"></div>

        <span class="anchor" id="features"></span>
        <h1>{{ $t('home.features.title') }}</h1>

        <div class="row">
            <div class="col-md-6">
                <h2>{{ $t('home.features.self-contained.title') }}</h2>
                <p>{{ $t('home.features.self-contained.description') }}</p>
            </div>
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/self-contained.png" class="img-responsive center-block" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/responsive.png" class="img-responsive center-block" />
            </div>
            <div class="col-md-6 col-md-offset-1">
                <h2>{{ $t('home.features.responsive.title') }}</h2>
                <p>{{ $t('home.features.responsive.description') }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h2>{{ $t('home.features.android.title') }}</h2>
                <p>{{ $t('home.features.android.description') }}</p>
            </div>
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/android.png" class="img-responsive center-block" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/customizable.png" class="img-responsive center-block" />
            </div>
            <div class="col-md-6 col-md-offset-1">
                <h2>{{ $t('home.features.customizable.title') }}</h2>
                <p>{{ $t('home.features.customizable.description') }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h2>{{ $t('home.features.easy.title') }}</h2>
                <p>{{ $t('home.features.easy.description') }}</p>
            </div>
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/easy.png" class="img-responsive center-block" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/stats.png" class="img-responsive center-block" />
            </div>
            <div class="col-md-6 col-md-offset-1">
                <h2>{{ $t('home.features.stats.title') }}</h2>
                <p>{{ $t('home.features.stats.description') }}</p>
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

 .image img {
     margin-top: 2em;
 }

 .row {
     margin-bottom: 2em;
 }

 h1 {
     text-align: center;
     margin-bottom: 1em;
 }

 .anchor {
     display: block;
     height: 50px;
     margin-top: -50px;
     visibility: hidden;
 }

 .spacer {
     margin-top: 50px;
 }

 .sep {
     margin-left: 25%;
     margin-right: 25%;
     border-color: #4a4a4a;
     border-bottom: solid 1px;
     margin-top: 20px;
     margin-bottom: 20px;
 }

 .extra.sep {
     margin-top: 60px;
 }
</style>
