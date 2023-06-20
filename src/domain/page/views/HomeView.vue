<template lang="">
  <div>
    <div>
      <th>      
        <h1>stock & chat</h1>
      </th>
      <tr>
        <td>
          <v-container class="table">            
            <chart-form/>            
          </v-container>        
        </td>
        <td>
          <v-container class="table">            
            <chat-room-form/>                   
          </v-container>     
        </td>
      </tr>
    </div>          
  </div>
</template>
<script>

export default {

  components: {
  },
}
</script>
<style lang="css">
.table {
    width: 100%;
    border: 1px solid #444444;
  }
</style>