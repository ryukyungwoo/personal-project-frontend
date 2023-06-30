<template lang="">
  <div>
      <h3>주식 목록</h3>
      <table style="margin: 10px;">
          <tr>
              <th align="center" width="10%">번호</th>
              <th align="center" width="30%">티커</th>
              <th align="center" width="80%">주식</th>
          </tr>
          <tr v-if="!stocks || (Array.isArray(stocks) && stocks.length === 0)">
              <td colspan="2">
                  현재 등록된 게시물이 없습니다!
              </td>
          </tr>
          <tr v-else v-for="stock in stocks" :key="stock.id">
              <td align="center">
                  {{ stock.id }}
              </td>
              <td align="center">
                  <!-- <router-link :to="{ 
                      name: 'BoardReadPage', 
                      params: { id: stock.id.toString() }}">
                          {{ stock.ticker }}
                  </router-link> -->
                  {{ stock.ticker }}
              </td>
              <td align="center">
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
          type: Array
      }
  },
}
</script>

<style lang="">
  
</style>