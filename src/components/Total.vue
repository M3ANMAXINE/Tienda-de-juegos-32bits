<template>
  <div>
    <ul v-if="sales.length > 0">
      <li v-for="(sale,index) in sales" :key="index">Id: {{ sale.id }} Juego: {{ sale.name  }}  $ {{ sale.price }}</li>
        <br> <H1>Total de ventas: {{  totalSales }}</H1>

    </ul>
    <ul v-else>
      <li>No hay ventas registradas</li>
    </ul>

  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['sales']),
    totalSales() {
      const reducer = (accumulator, currentSales) => accumulator + currentSales.price;
      return this.sales.reduce(reducer, 0)
    }
    
  },

}
</script>

<style>

</style>