<template>
  <div style="height: 100vh; padding: 100px;">
    <div style="display: flex; flex-direction: row; justify-content: center; position: sticky; top: 64px;">
      <v-card class="table" style="width: 700px;">
        <v-container>
          <stock-list-form :stocks="stocks" @sort-item-selected="handleSortItemUpdate" @ascending-selected="handleAscendingSelectedUpdate"/>
        </v-container>
      </v-card>
      <v-card class="chat-table" style="width: 500px; position: sticky; top: 64px; right: 0; height: calc(60vh - 64px);">
        <v-container>
          <chat-form :ticker="ticker"/>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import StockListForm from '@/domain/stock/components/StockListForm.vue';
import ChatForm from '@/domain/chat/components/ChatForm.vue'
import { mapActions, mapState } from 'vuex';

const stockModule = 'stockModule'

export default {
  data() {
    return {
      ticker: "1",
      selectedSortItem:'open',
      selectedAscending: 'desc' 
    }
  },
  components: {
    StockListForm,
    ChatForm,
  },
  methods: {
    ...mapActions(
      stockModule, ['requestStockListToSpring']
    ),  
    handleSortItemUpdate(selectedSortItem) {
      this.selectedSortItem = selectedSortItem;
      this.fetchStockList();
    },
    handleAscendingSelectedUpdate(selectedAscending) {
      this.selectedAscending = selectedAscending;
      this.fetchStockList();
    },
    fetchStockList() {
      const payload = {
          OCVA: this.selectedSortItem,
          ascending: this.selectedAscending
        }
      this.requestStockListToSpring(payload);
    },
  },
  computed: {
    ...mapState(stockModule, ['stocks'])
  },
  mounted () {
    this.fetchStockList();
  },
}
</script>
<style lang="css">
.table {
    width: 100%;
    border: 1px solid #444444;
  }
.chat-table{
  width: 100%;
  border: 1px solid #444444;
}
</style>