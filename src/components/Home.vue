<template>
    <div>
        <span class="anchor" id="home"></span>
        <div>
            <img class="img-responsive center-block" src="/static/logo_full.png" />
            <p class="bold italic" style="text-align: center;">&gt;&gt; {{ $t('home.slogan') }}</p>
        </div>

        <div class="spacer"></div>
        <div class="sep"></div>
        <div class="spacer"></div>

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
                <a href="https://github.com/StreakyCobra/raposfly/releases">
                    <center><i class="fa fa-download"></i></center>
                    <h2>{{ $t('home.download.title') }}</h2>
                    <p>{{ $t('home.download.description') }}</p>
                </a>
            </div>
        </div>

        <div class="sep"></div>

        <span class="anchor" id="project"></span>
        <h1>{{ $t('home.project.title') }}</h1>

        <div class="row">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.</p>
        </div>

        <div class="sep"></div>

        <span class="anchor" id="features"></span>
        <h1>{{ $t('home.features.title') }}</h1>

        <div class="row">
            <div class="col-md-6">
                <h2>Self-contained, a.k.a «On the fly»</h2>
                <p>The project has been designed from the beginning to be self-contained. You can set up a Raposfly point of sales anywhere where a power-plug is available: you don't need any sort of internet access. The size of the whole system is small, so you can take it anywhere with you in a breath. If you want to set up a Point of Sale on the fly for a one-time event, this project is for you!</p>
            </div>
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/placeholder.png" class="img-responsive center-block" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/placeholder.png" class="img-responsive center-block" />
            </div>
            <div class="col-md-6 col-md-offset-1">
                <h2>Responsive shop</h2>
                <p>The shop is accessible from any wifi-enabled device and the display adapts to the size of the screen. So you will not have to zoom between the different parts of the screen in order to use it. This also means the website is adapting to portrait and landscape modes. This is nice because if you have forgotten you laptop, or your tablet goes out of power, you can still use your phone to continue using the shop!</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h2>Android integration</h2>
                <p>The Raposfly project integrates especially well with Android. First you can use it from your favourite browser by accessing the «raposfly.shop» address. If you want to quickly access the website next time, you can add a shortcut to your home screen. This will not only add a shorcut to your home screen, but the application will open without the address bar on top so you will have more space for the shop. Finally an Android application is available on the Play Store that will do the same as the shortcut, but which handle even better some small and annoying behaviours such as the double-tap that zoom in the browser version, but that are understood as two clicks on the application.</p>
            </div>
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/placeholder.png" class="img-responsive center-block" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/placeholder.png" class="img-responsive center-block" />
            </div>
            <div class="col-md-6 col-md-offset-1">
                <h2>Customizable</h2>
                <p>The shop is not comming with a predefined database because every event is different and have different items and prices. So you have a full control over the shop: categories and items can be added/removed, can have their own colors, can be sorted and so on. You can customize, for each item independentely, what kind of grouping should be done for tickets printing. You can also customize the name of the event and eventually add a logo.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h2>Easy to use</h2>
                <p>Using the shop for selling items is easy. For now the preparation phase is less polished, but this is done only once, by one person, before the event. Once the event is starting, using the shop is like a breaze, for every people that will be chief of the point of sale during the day. Click on the items, press the purchase button, get the money and give the tickets in exchange. Done, and another happy customer!</p>
            </div>
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/placeholder.png" class="img-responsive center-block" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/placeholder.png" class="img-responsive center-block" />
            </div>
            <div class="col-md-6 col-md-offset-1">
                <h2>Statistics and history</h2>
                <p>Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.</p>
            </div>
        </div>

        <div class="extra sep"></div>

        <span class="anchor" id="technologies"></span>
        <h1>{{ $t('home.technologies.title') }}</h1>

        <div class="row">
            <div class="col-md-6">
                <h2>Raspberry Pi</h2>
                <p>Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.</p>
            </div>
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/placeholder.png" class="img-responsive center-block" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/placeholder.png" class="img-responsive center-block" />
            </div>
            <div class="col-md-6 col-md-offset-1">
                <h2>Vue.js</h2>
                <p>Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h2>Django</h2>
                <p>Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.</p>
            </div>
            <div class="col-md-4 col-md-offset-1 image">
                <img src="../assets/placeholder.png" class="img-responsive center-block" />
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
