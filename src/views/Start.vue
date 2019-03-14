<template>
  <div class="view">
    <Background bg="/static/background-1.JPG"></Background>
    <div class="content">
      <h2>On voyage ?</h2>
      <div class="button-container">
        <router-link tag="button" :to="{name: 'Travel'}">{{button1}}</router-link>
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
  data () {
    return {
      button1 : "Ticket gratuit",
      button2 : "Encore mieux avec des écouteurs",
      
    }
  },
  methods:{
    content: function(e){
      switch (e.target.innerHTML){
        case this.button1 : e.target.innerHTML = this.button2;break;
        case this.button2 : e.target.innerHTML = this.button1;break;

      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2{
    font-size: 5em;
  }
  @media (max-width: 520px){
    h2{
      font-size: 3em;
    }
  }

  button{
    margin: 50px 10px;
    transition: all 0.3s;
  }

  .button-container{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

</style>
