<template>
  <div>

    <div>
      <p> Juegos Disponibles  {{games.length }}</p>
    </div>
    <input type="text" placeholder="Ingrese codigo" v-model="search" class="pt-2 pb-3 pl-5" >

    <GameList :games='filterGames' />
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import GameList from './GameList'

export default {
  data() {
    return {
      search: null
      }
  },
  components: {
    GameList
  },
  computed: {
    ...mapState(['games']),
    ...mapGetters(['findGame']),
    
    filterGames () {
      if (this.search){
        return this.findGame(this.search)
        } else{
          return this.games
        }
    }
  }

}
</script>

<style>

</style>