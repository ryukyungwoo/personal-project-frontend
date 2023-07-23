<template lang="">
  <div>
    <h3>주식 목록</h3>

    <div style="display: flex; justify-content: space-between; margin: 5px 10px;">
      <label for="sortItem">Sort by:</label>
      <v-select
        dense
        outlined
        label="Sort Item"
        v-model="selectedSortItem"
        :items="sortOptions"
        item-text="text"
        item-value="value"
        @change="onSortItemSelected"
      ></v-select>
      <label for="ascending">Order:</label>
      <v-select
        dense
        outlined
        label="Order"
        v-model="selectedAscending"
        :items="ascendingOptions"
        @change="onAscendingSelected"
      ></v-select>
    </div>

    <table class="stock-table" style="margin: 10px; width: 100%;">
      <tr>
        <th style="text-align: center; padding: 0 5px;">종목</th>
        <th style="text-align: center; padding: 0 5px;">시가</th>
        <th style="text-align: center; padding: 0 5px;">종가</th>
        <th style="text-align: center; padding: 0 5px;">변동폭</th>
        <th style="text-align: center; padding: 0 5px;">등락률</th>
        <th style="text-align: center; padding: 0 5px;">거래량</th>
        <th style="text-align: center; padding: 0 5px;">거래대금</th>
      </tr>
      <tr
        v-for="stock in stocks"
        :key="stock.ticker"
        @click="navigateToStockMainPage(stock.ticker)"
      >
        <td style="text-align: center; padding: 0 5px;">{{ stock.stockName }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.open }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.close }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.rangeValue }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.fluctuationRate }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.volume }}</td>
        <td style="text-align: center; padding: 0 5px;">{{ stock.amount }}</td>
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
      selectedSortItem: 'open',
      selectedAscending: 'desc',
      sortOptions: [
        { text: '시가', value: 'open' },
        { text: '종가', value: 'close' },
        { text: '변동폭', value: 'rangeValue' },
        { text: '등락률', value: 'fluctuationRate' },
        { text: '거래량', value: 'volume' },
        { text: '거래대금', value: 'amount' },
      ],
      ascendingOptions: [
        { text: '오름차순', value: 'asc' },
        { text: '내림차순', value: 'desc' },
      ],
    };
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
      this.$emit("ascending-selected", selectedAscending);
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