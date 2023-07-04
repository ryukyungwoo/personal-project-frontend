<template lang="">
    <div>
      <h3>주식 목록</h3>
      <table style="margin: 10px; width: 100%;">
        <tr>
          <th style="text-align: center; width: 50%; padding: 0 5px;">티커</th>
          <th style="text-align: center; width: 50%; padding: 0 5px;">주식</th>
        </tr>
        <tr v-if="!stocks || (Array.isArray(stocks) && stocks.length === 0)">
          <td colspan="2" style="text-align: center;">
            현재 등록된 게시물이 없습니다!
          </td>
        </tr>
        <tr v-else v-for="stock in stocks" :key="stock.ticker">
          <td style="text-align: center; padding: 0 5px;">
            <router-link
              :to="{
                name: 'StockMainPage',
                params: { ticker: stock.ticker.toString() },
              }"
            >
              {{ stock.ticker }}
            </router-link>
          </td>
          <td style="text-align: center; padding: 0 5px;">
            {{ stock.stockName }}
          </td>
        </tr>
      </table>
    </div>
  </template>

<script>
export default {
  props: {
      stocks: {
          type: Array,
      }
  },
  
  
}
</script>

<style lang="">
  
</style>