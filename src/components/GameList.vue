<template>
  <div>
    <ul >
      <li v-for="(game,index) in games" :key="index" :style="{'background-color' :game.color}"> {{game.id}} - {{ game.name}} - {{ game.price}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    games: {
      type: Array,
      required: true
    }
  }

}
</script>

<style>

</style>