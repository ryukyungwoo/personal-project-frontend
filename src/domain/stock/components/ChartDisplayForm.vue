<template>
  <div>
    <!-- Chart controls -->
    <div>
      <label for="interval">Interval: </label>
      <select id="interval" v-model="interval" @change="fetchData">
        <option v-for="value in intervals" :key="value" :value="value">
          {{ value }}
        </option>
      </select>

      <label for="period">Period: </label>
      <select id="period" v-model="period" @change="fetchData">
        <option v-for="value in periods" :key="value" :value="value">
          {{ value }}
        </option>
      </select>
    </div>

    <apexchart
      v-if="!isLoading"
      type="candlestick"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import axiosInst from '@/utility/axiosInst';

export default {
  props: {
        ticker: {
            type: String,
            required: true,
        },
    },
  data() {
    return {
      isLoading: true,
      intervals: [
        "1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1wk", "1mo", "3mo"
      ],
      periods: [
        "1d", "5d", "1mo", "3mo", "6mo", "1y", "2y", "5y", "10y", "max"
      ],
      interval: "1m", // 기본값으로 1m 설정
      period: "1d", // 기본값으로 1d 설정
      chartOptions: {
        chart: {
          type: 'candlestick',
          height: '100%',
          zoom: {
            enabled: false
          }
        },
        plotOptions: {
          candlestick: {
            wick: {
              useFillColor: true,
            }
          }
        },
        xaxis: {
          type: 'category', 
          labels: {
            show: true,
            rotate: -45,
            formatter: (value) => {
              // 'YYYY-MM-DD HH:mm' 형식의 문자열로 반환합니다.
              return new Date(value).toLocaleString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              });
            },
          }
        },
        yaxis: {
          tooltip: {
            enabled: true
          },
        },
      },
      series: [
        {
          name: 'OHLC',
          data: []
        }
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {        
        const response = await axiosInst.fastApi.get('/stock/test');
        const formattedData = response.data.map((item) => {
          return {
            x: new Date (item.Date),
            y: [item.Open, item.High, item.Low, item.Close],
          };
        });
        this.series[0].data = formattedData;
        console.log("formmated data", formattedData)
        this.isLoading = false;
      } catch (error) {
        console.error("An error occurred while fetching the data:", error);
      }
    },
  },
};
</script>
