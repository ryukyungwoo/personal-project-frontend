<template>
  <div>
    <h2>코스피 상장 주식 등락률</h2>
    <div v-if="loading">로딩중...</div>
    <ul v-else>
      <li v-for="ticker in tickers">
        {{ ticker.ticker }}
      </li>
    </ul>
  </div>
</template>

<script>
import axiosInst from '@/utility/axiosInst';


export default {
  data() {
    return {
      tickers: [],
      loading: true,
    };
  },

  created() {
    axiosInst.fastApi
      .get("/market_ticker")
      .then((response) => {
        this.tickers = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
  },
};
</script>
