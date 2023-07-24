<template lang="">
  <div>
    <h3>주식 목록</h3>
    <div
        class="switch-container"
        @click="switchMode"
      >
        <div
          class="switch-label"
          :class="{ 'mode-active': mode === 'stock' }"
        >Stock</div>
        <div
          class="switch-thumb"
          :class="{ 'sentiment': mode === 'sentiment' }"
        ></div>
        <div
          class="switch-label"
          :class="{ 'mode-active': mode === 'sentiment' }"
        >Sentiment</div>
      </div>
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
        <template v-if="mode === 'stock'">
          <th style="text-align: center; padding: 0 5px;">시가</th>
          <th style="text-align: center; padding: 0 5px;">종가</th>
          <th style="text-align: center; padding: 0 5px;">변동폭</th>
          <th style="text-align: center; padding: 0 5px;">등락률</th>
          <th style="text-align: center; padding: 0 5px;">거래량</th>
          <th style="text-align: center; padding: 0 5px;">거래대금</th>
        </template>
        <template v-else>
          <th style="text-align: center; padding: 0 5px;">여론종합</th>
          <th style="text-align: center; padding: 0 5px;">긍정의견</th>
          <th style="text-align: center; padding: 0 5px;">부정의견</th>
          <th style="text-align: center; padding: 0 5px;">중립의견</th>          
        </template>
      </tr>
      <tr v-for="stock in stocks"
          :key="stock.ticker"
          @click="navigateToStockMainPage(stock.ticker)"
        >
          <td style="text-align: center; padding: 0 5px;">{{ stock.stockName }}</td>
          <template v-if="mode==='stock'">
            <td style="text-align: center; padding: 0 5px;">{{ stock.open }}</td>
            <td style="text-align: center; padding: 0 5px;">{{ stock.close }}</td>
            <td style="text-align: center; padding: 0 5px;">{{ stock.rangeValue }}</td>
            <td style="text-align: center; padding: 0 5px;">{{ stock.fluctuationRate }}</td>
            <td style="text-align: center; padding: 0 5px;">{{ stock.volume }}</td>
            <td style="text-align: center; padding: 0 5px;">{{ stock.amount }}</td>
          </template>
          <template v-else>
            <td style="text-align: center; padding: 0 5px;">{{ stock.totalSentimentScore }}</td>
            <td style="text-align: center; padding: 0 5px;">{{ stock.positiveCount }}</td>
            <td style="text-align: center; padding: 0 5px;">{{ stock.negativeCount }}</td>
            <td style="text-align: center; padding: 0 5px;">{{ stock.naturalCount }}</td>
          </template>
        </tr>
      </table>

      <div class="text-center">
        {{ nowPage }}
        <v-btn
          icon
          :disabled="nowPage === 1"
          @click="decreasePage"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="increasePage"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>

  </div>
</template>

<script>
export default {
  props: {
    stocks: {
      type: Object,
      required: true,
    },
    nowPage: {
      type: Number,
      required: true,
    },
    hasStocks: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mode: 'stock',
      sortOptions: this.getOriginalSortOptions(),
      selectedSortItem: 'open',
      selectedAscending: 'desc',
      sortOptions: [
        { text: '시가', value: 'open' },
        { text: '종가', value: 'close' },
        { text: '변동폭', value: 'rangeValue' },
        { text: '등락률', value: 'fluctuationRate' },
        { text: '거래량', value: 'volume' },
      ],
      ascendingOptions: [
        { text: '오름차순', value: 'asc' },
        { text: '내림차순', value: 'desc' },
      ],
    };
  },
  methods: {
    getOriginalSortOptions() {
      return [
        { text: '시가', value: 'open' },
        { text: '종가', value: 'close' },
        { text: '변동폭', value: 'rangeValue' },
        { text: '등락률', value: 'fluctuationRate' },
        { text: '거래량', value: 'volume' },
      ];
    },
    switchMode() {
      this.mode = this.mode === 'stock' ? 'sentiment' : 'stock';
      this.updateSortOptions();
      this.$emit("update-mode", this.mode);
      },
    updateSortOptions() {
      if (this.mode === 'stock') {
        this.sortOptions = this.getOriginalSortOptions();
      } else {
        this.sortOptions = [
          { text: '긍정의견', value: 'positiveCount' },
          { text: '부정의견', value: 'negativeCount' },
          { text: '중립의견', value: 'naturalCount' },
          { text: '여론종합', value: 'totalSentimentScore' },
        ];
      }
      this.selectedSortItem = this.sortOptions[0].value;
    },
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
    increasePage() {
      if (!this.hasStocks) {
          alert("마지막 페이지입니다.");
          return;
        }
      this.$emit("update-now-page", this.nowPage + 1);
    },
    decreasePage() {
      if (this.nowPage > 1) {
        this.$emit("update-now-page", this.nowPage - 1);
      }
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
  .switch-container {
    display: inline-block !important;
    background-color: #ccc !important;
    padding: 5px !important;
    border-radius: 5px !important;
    cursor: pointer !important;
  }
  .switch-label {
    display: inline-block !important;
    padding: 5px 10px !important;
    color: white !important;
  }
  .switch-label.mode-active {
    color: black !important;
  }
  .switch-thumb {
    display: inline-block !important;
    background-color: white !important;
    width: 60px !important;
    border-radius: 5px !important;
    padding: 5px !important;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3) !important;
    -webkit-transition: 0.2s !important;
    transition: 0.2s !important;
  }
  .switch-thumb.sentiment {
    margin-left: 60px !important;
  }
</style>