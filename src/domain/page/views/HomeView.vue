<template lang="">
  <div>
    <div>
      <tr>
        <td>
          <v-container class="table">
            <stock-list-form/>            
          </v-container>        
        </td>
        <td>
          <v-container class="table">              
          </v-container>     
        </td>
      </tr>
    </div>          
  </div>
</template>
<script>
import StockListForm from '@/domain/stock/components/StockListForm.vue';
export default {

  components: {
    StockListForm,
  },
}
</script>
<style lang="css">
.table {
    width: 100%;
    border: 1px solid #444444;
  }
</style>