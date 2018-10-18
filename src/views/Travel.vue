<template >
    <div class="view">
        <Background :bg='require("../assets/tokyo.jpg")'></Background>
        <div class="background-letter">
            <transition name="fade" appear>
                <p class="title title-kanji"></p>
            </transition>
        </div>
        <div class="content">
            <japan-map></japan-map>
        </div>
    </div>
</template>

<script>
import router from '@/router/index';
import Background from '@/components/Background';
import JapanMap from '@/components/JapanMap';
import dataCities from '../dataCities.js';
import store from '../store.js';
import TweenMax from "gsap/TweenMax";
import Draggable from "gsap/Draggable"; 

export default {
    name: 'Travel',
    components:{
        Background,
        JapanMap,
        store
    },
    data(){
        return {
            store: store
        } 
    },
    methods:{
        refresh: function(targ){
            if (typeof targ === 'number') {
                var index = targ;
            } else if (targ === "-"){
                
                if (store.actual>0) {
                    store.actual--;
                } else {
                    store.actual = store.link.length-1;
                }
                var index = store.actual;

            } else if (targ === "+"){
                if (store.actual < store.link.length-1) {
                    store.actual++;
                } else {
                    store.actual = 0;
                }
                var index = store.actual;
            } else {
                var index = store.link.indexOf(targ);
            }

            store.link.forEach(element => {
                element.classList.remove("active");
            });
            TweenMax.to(document.querySelector(".title-kanji"),0,{opacity: 0, filter: 'blur(20rem)', function() {
                store.refresh(index);
                store.link[index].classList.add("active");
                TweenMax.to(document.querySelector(".title-kanji"),0.5,{opacity: 1, filter: 'blur(0rem)'});
            }});
        }
    },
    mounted(){
        var link = document.querySelectorAll(".link");

        link.forEach(element => {
            element.addEventListener("mouseover",function(){
                TweenMax.to(document.querySelector(".title-kanji"),0,{opacity: 0, filter: 'blur(1.5rem)', function() {
                    document.querySelector(".title-kanji").innerHTML = dataCities.cities[event.target.id]['kanji'];
                    TweenMax.to(document.querySelector(".title-kanji"),0.5,{opacity: 1, filter: 'blur(0rem)'});
                }});
            });

            element.addEventListener("mouseout",function(){
                TweenMax.to(document.querySelector(".title-kanji"),0.5,{opacity: 0, filter: 'blur(1.5rem)', function() {
                    document.querySelector(".title-kanji").innerHTML ="";
                    TweenMax.to(document.querySelector(".title-kanji"),0,{opacity: 1, filter: 'blur(0rem)'});
                }});
            });
        });

        /*var vue = this;
        this.refresh(store.actual);*/

        /*var nodeList = document.querySelectorAll(".link");
        var link = Array.prototype.slice.call(nodeList);
        var actual = 0;
        setActive(actual);
        link.forEach(element => {
            element.addEventListener("mouseover",function(){
                setActive(link.indexOf(this));
            });
        });

        document.addEventListener("keydown", function(e){
            switch(e.keyCode){
                case 40: case 37: //down and left
                    if(actual > 0){
                        actual--;
                    } else {
                        actual = link.length-1;
                    }
                    setActive(actual);
                    break;
                case 38: case 39: //top and right
                    if(actual < link.length-1){
                        actual++;
                    } else {
                        actual = 0;
                    }
                    setActive(actual);
                    break;
                    case 13: //enter
                        router.push({ name: 'City', params: { city: link[actual].id }})
                        break;
            }
        });

        function setActive(newActive){
            actual = newActive;
            var cityName = link[newActive].id;
            TweenMax.to(document.querySelector(".title-kanji"),0,{opacity: 0, filter: 'blur(1.5rem)', function() {
                document.querySelector(".title-kanji").innerHTML = dataCities.cities[cityName]['kanji'];
                TweenMax.to(document.querySelector(".title-kanji"),0.5,{opacity: 1, filter: 'blur(0rem)'});
            }});
            link.forEach(el => {
                el.classList.remove('active');
            });
            link[newActive].classList.add('active');
        }*/
    }
}

</script>

<style scoped>
    .background{
        background-image: url("../assets/tokyo.jpg");
    }

    .background-letter{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .background-letter .title{
        width: 100%;
        font-size: 30vw;
        background-position: center;
        background-size: cover;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
        background-image: url("../assets/tokyo.jpg");
    }

    .content{
        height: calc(100vh - 137px);
    }
</style>
