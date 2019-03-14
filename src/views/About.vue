<template>
  <div class="view">
    <Background bg="/static/background-2.JPG"></Background>
    <div class="content">
      <p>
        Site réalisée par <a href="http://remi-rucojevic.com" target="_blank">Rémi Rucojevic</a> dans un cadre personnel avec le framework Vue.js.<br>
        Le code est en open source sur GitHub ici !<br>Les photos sont prises par Rémi Rucojevic et sont soumises à la licences <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)</a>.<br>
        Ceci est la 1ère vesion mise en ligne. N'hésitez pas à me faire part de vos retours ou des bugs que vous auriez pu constater.
    </p>
    <div id="rs">
        <a href="https://twitter.com/RemiRucojevic" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/r%C3%A9mi-rucojevic/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="http://remi-rucojevic.com" target="_blank"><i class="fas fa-globe"></i></a>
    </div>
    </div>
  </div>
</template>

<script>
import Background from '@/components/Background';

export default {
  name: 'Start',
  components:{
    Background,
  },
}
</script>

<style scoped>
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 1.5em;
        line-height: 43px;
    }

    a{
        color: white;
        text-decoration: none;
        font-weight: bolder;
    }

    #rs{
        font-size: 2.5em;
        margin: 50px 0px;
    }

    #rs a{
        margin: 0px 10px;
    }
</style>
