<template>
    <div class="view">
    <Background :bg="this.cities[$route.params.city]['path']"></Background>
    <div class="content">
      <h2 class="title">{{$route.params.city}}<span>{{this.cities[$route.params.city]['kanji']}}</span></h2>
      <div class="text">
          <p v-for="content in this.cities[$route.params.city]['content']" :key="content"> {{content}} </p>
      </div>
      <div class="photos">
          <a target="_blank" v-for="i in this.cities[$route.params.city]['photosNum']" :key="i" :href="'/static/'+$route.params.city+'/img ('+i+').JPG'"><img v-bind:src="'/static/'+$route.params.city+'/img ('+i+').JPG'"></a>
      </div>
    </div>
  </div>
</template>

<script>
import Background from "@/components/Background";
import dataCities from "../dataCities.js";

export default {
  name: "City",
  components: { Background },
  computed: {
    cities: () => dataCities.cities,
  }
};
</script>

<style scoped>
h2 {
  position: relative;
  font-size: 5em;
}
@media (max-width: 673px){
  h2{
    font-size: 1.9em;
  }
}
span {
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  font-size: 1.5em;
  color: rgba(255, 255, 255, 0.17);
}

.text {
  margin-top: 40px;
}
.photos {
	display: flex;
  flex-wrap: wrap;
}

.photos a {
  height: fit-content;
  align-items: center;
  margin: 10px;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px;
  flex: 1 1 500px;
  opacity: 0.9;

  transition: all 0.3s;
}
.photos a:hover{
  opacity: 1;
}


a img {
  width: 100%;
}
</style>

