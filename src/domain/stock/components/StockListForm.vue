<template lang="">
  <div>
    <h3>주식 목록</h3>

    <div style="display: flex; justify-content: space-between; margin: 5px 10px;">
      <label for="sortItem">Sort by:</label>
      <v-select
        dense
        outlined
        label="Sort Item"
        :items="['시가', '종가', '변동폭', '등락률', '거래량', '거래대금']"
        @change="onSortItemSelected"
      ></v-select>
      <label for="ascending">Order:</label>
      <v-select
        dense
        outlined
        label="Order"
        :items="['True', 'False']"
        @change="onAscendingSelected"
      ></v-select>
    </div>

    <table class="stock-table" style="margin: 10px; width: 100%;">
      <tr>
        <th style="text-align: center; padding: 0 5px;">티커</th>
        <th style="text-align: center; padding: 0 5px;">시가</th>
        <th style="text-align: center; padding: 0 5px;">종가</th>
        <th style="text-align: center; padding: 0 5px;">변동폭</th>
        <th style="text-align: center; padding: 0 5px;">등락률</th>
        <th style="text-align: center; padding: 0 5px;">거래량</th>
        <th style="text-align: center; padding: 0 5px;">거래대금</th>
      </tr>
      <tr
        v-for="stock in stockArray"
        :key="stock.ticker"
        @click="navigateToStockMainPage(stock.ticker)"
      >
        <td style="text-align: center; padding: 0 5px;">{{ stock.ticker }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.시가 }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.종가 }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.변동폭 }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.등락률 }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.거래량 }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.거래대금 }}</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  props: {
    stocks: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedSortItem: '시가',
      selectedAscending: 'False',
    };
  },
  computed: {
    stockArray() {
        return Object.entries(this.stocks).map(([ticker, data]) => {
            return { ticker, ...data };
        });
    },
  },
  methods: {
  navigateToStockMainPage(ticker, stockName) {
    this.$router.push({
      name: "StockMainPage",
      params: { ticker: ticker.toString(), stockName: stockName },
    });
  },
  onSortItemSelected(selectedSortItem) {
      this.$emit("sort-item-selected", selectedSortItem);
    },
    onAscendingSelected(selectedAscending) {
      this.$emit("ascending-selected", selectedAscending === "True");
    },
},
};
</script>

<style>
    .stock-table tr:not(:first-child) {
    background-color: #f2f2f2;
    cursor: pointer; /* 마우스를 올릴 때 손가락 모양으로 변경 */
    border-radius: 4px; /* 테이블 행의 모서리를 둥글게 설정 */
    margin-bottom: 5px; /* 테이블 행 간의 여백을 확보 */
  }

  .stock-table tr:not(:first-child):hover {
    background-color: #e0e0e0;
    /* 마우스 호버 시 스타일 변경 */
  }

  .stock-table th,
  .stock-table td {
    text-align: center;
    padding: 0 5px;
  }
</style>