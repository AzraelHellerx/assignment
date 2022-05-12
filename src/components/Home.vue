
<template>
    <div class="container-fluid main_contents">
        <!-- Home page block element -->
        <video-embed :params="{autoplay: 1}" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>
        <div id="home">
            <div class="row">
            <div class="col-sm-12">

            <div id="main_3d_image">
            <div
            id="main_text"
            class="sticky-top col-xs-12 col-sm-4"
            >
            <h2>Creating a World Without Waste </h2>
            <h3>Thanks 4 recycling the bottles</h3>
            <p>We recognize our responsibility to help solve the global plastic waste crisis. World Without Waste, our ambitious sustainable packaging initiative, aims to create systemic change through a circular economy for our packaging alongside our bottling partners. The World Without Waste strategy has signaled a renewed focus on our entire packaging lifecycle—from how bottles and cans are designed and produced to how they’re recycled and repurposed—through a focus on three fundamental areas: design, collect and partner. </p>
            <div class="row">
                <div
                class="col-sm-4"
                v-for="item in cards_up"
                :key="item.id"
                >
                <div class="card">
                    <router-link :to="`/model?id=${item.id}`">
                        <img
                        class="card-img-top img-fluid img-thumbnail"
                        :src="`assets/images/site_images/${item.img}.jpg`"
                        :alt="item.title"
                        >
                    </router-link>
                </div>
            </div>

            </div>
        </div>
    </div>
</div>
</div>

<!-- Row of cards on the grid -->
<div class="row">
    <!-- Coca Cola Column -->
    <div
    class="col-sm-4"
    v-for="item in cards"
    :key="item.id"
    >
    <div class="card">

        <router-link :to="`/model?id=${item.id}`">
            <img
            class="card-img-top img-fluid img-thumbnail"
            :src="`assets/images/site_images/${item.img}.jpg`"
            :alt="item.title"
            >
        </router-link>
        <div class="card-body">
            <h3 class="card-title">{{item.title}}</h3>
            <p class="card-text">{{item.text}}</p>
            <router-link
            :to="`/model?id=${item.id}`"
            class="btn btn-primary"
            >Find out more ...</router-link>
        </div>
    </div>
</div>

</div>
</div>
</div>

<ul class="actions">
    <li><a href="index.html" rel="noopener" class="actions-button">
        Home</a>
    </li>

    <li class="nav-item">
        <a
        class="actions-button"
        href="#"
        data-toggle="popover"
        data-trigger="hover"
        data-placement="bottom"
        title="About Web 3D Applications"
        data-content="3D Apps is a final year and postgraduate module ..."
        >About</a>
    </li>
    <li>
        <a
        class="actions-button dropdown-toggle"
        href="#"
        id="navbardrop"
        data-toggle="dropdown"
        >Drinks</a>
        <div class="dropdown-menu">

            <router-link
            to="/model?id=coke"
            class="dropdown-item"
            >Coca Cola</router-link>
            <router-link
            to="/model?id=sprite"
            class="dropdown-item"
            >Sprite</router-link>
            <router-link
            to="/model?id=pepper"
            class="dropdown-item"
            >Dr Pepper</router-link>

        </div>
    </li>
    <li>
        <a
        class="actions-button"
        href="#"
        data-toggle="modal"
        data-target="#contactModal"
        >Contact</a>
    </li>
</ul>
</template>


<script setup>

const cards_up = [

    {        id: 'coke', img: 'coca_cola', title: 'Coke', text: `Some !`    },
    {        id: 'sprite', img: 'fanta', title: 'Sprite', text: `Text Here`    },
    {        id: 'pepper', img: 'dr_pepper', title: 'Dr Pepper', text: `Text here`    },
    {        id: 'coke', img: 'minute', title: 'Coke', text: `Some !`    },
    {        id: 'sprite', img: 'sprite', title: 'Sprite', text: `Text Here`    },
    {        id: 'pepper', img: 'fresca', title: 'Dr Pepper', text: `Text here`    },
    {        id: 'coke', img: 'ultra', title: 'Coke', text: `Some !`    },
    {        id: 'sprite', img: 'costa', title: 'Sprite', text: `Text Here`    },
    {        id: 'pepper', img: 'ciel', title: 'Dr Pepper', text: `Text here`    },
]
const cards = [

    {
        id: 'coke', img: 'img1', title: 'Friendship', text: ``
    },
        {
            id: 'sprite', img: 'img4', title: 'Global', text: `` },
            {
                id: 'pepper', img: 'img5', title: 'Enjoy', text: `` },
            ]

</script>
            <style scoped>
            </style>
            <style type="text/css">blockquote,body,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,li,ol,p,pre,td,textarea,th,ul{padding:0;margin:0}a{text-decoration:none}table{border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-weight:400;font-style:normal}strong{font-weight:700}ol,ul{list-style:none;margin:0;padding:0}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-weight:400;font-size:100%;margin:0;padding:0}q:after,q:before{content:''}abbr,acronym{border:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{font-family:arial,helvetica}.section{position:relative}#section-1{text-align:center}#section-1 h2:before{content:'';display:inline-block;height:200px;width:232px;background-image:url(imgs/vue-fullpage2.png);background-repeat:no-repeat;background-size:cover;vertical-align:bottom}#section-1 h2{color:#fff;font-size:10em;font-weight:900}#section-1 h1{font-size:2em;font-weight:100;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;margin:1.5em auto 1em auto;color:#35495e;padding-right:30px;padding-left:30px}#section-1 li{display:inline-block;margin:1.25em .3em}.section-1-button{padding:.93em 1.87em;background:#35495e;border-radius:5px;display:block;color:#fff}h3{font-size:5em;text-align:center;color:#fff;font-weight:700}#logo{position:fixed;top:20px;left:20px;color:#fff;font-weight:700;z-index:99;font-size:1.9em;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased}#menu-line{position:absolute;bottom:-4px;left:0;width:159px;height:2px;background:#fff}#menu{position:fixed;top:20px;right:20px;z-index:70;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;letter-spacing:1px;font-size:1.1em}#menu li{display:inline-block;margin:10px 0;position:relative}#menu a{color:#fff;padding:0 1.1em 1.1em 1.1em}#menu li.active a:after{content:'';margin:0 1.1em 0 1.1em;height:2px;background:#fff;display:block;position:absolute;bottom:-6px;left:0;right:0;display:block}.actions{position:fixed;bottom:2%;margin:0 auto;z-index:99;left:0;right:0;text-align:center}.actions li{display:inline-block;margin:.3em .3em}.actions-button{padding:.73em 1.47em;background:rgba(53,73,94,.47);border-radius:5px;display:block;color:#fff}.twitter-share i{vertical-align:middle;position:relative;top:2px;display:inline-block;width:38px;height:14px;color:#fff;top:-4px;left:-2px;fill:#fff}.twitter-share svg{height:40px;margin-top:-10px}
            </style>
