<template>
  <div>
    <ul >
      <li v-for="(game,index) in games" :key="index" :style="{'background-color' :game.color}"> {{game.id}} - {{ game.name}} - {{ game.price}} {{ game.stock }} <button v-if="displayButton" @click="emitSale(game)">Vender</button> </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    games: {
      type: Array,
      required: true
    },
  displayButton: {
    type: Boolean,
    default: false
    }
  },
  methods: {
    emitSale(game){
      this.$emit('emit-Sale', game)
    }
  },
}
</script>

<style>

</style>