<template lang="">
    <div>
      <h2>{{ board.title }}</h2>
      <board-read-form v-if="board" :board="board" />
      <p v-else>로딩중 .......</p>
      <v-btn @click="onModify">게시물 수정</v-btn>
      <v-btn @click="onDelete">삭제</v-btn>
      <v-btn :to="{ name: 'StockMainPage' }">돌아가기</v-btn>
    </div>
  </template>
  
  <script>
  import BoardReadForm from "../components/BoardReadForm.vue";
  import { mapActions, mapState } from "vuex";
  
  const boardModule = "boardModule";
  
  export default {
    components: {
      BoardReadForm,
    },
    props: {
      id: {
        type: String,
        required: true,
      },
      ticker: {
        type: String,
        required: true,
      },
    },
    computed: {
      ...mapState(boardModule, ["board"]),
    },
    methods: {
      ...mapActions(boardModule, [
        "requestBoardToSpring",
        "requestDeleteBoardToSpring",
      ]),
      async onDelete() {
        const payload = {
          ticker: this.ticker,
          id: this.id,
        };
        await this.$router.push({ name: "BoardCheckPage", params: payload });
      },
      async fetchData() {
        const payload = {
          ticker: this.ticker,
          id: this.id,
          purpose: 'delete'
        };
        await this.requestBoardToSpring(payload);
      },
      async onModify() {
        const payload = {
          ticker: this.ticker,
          id: this.id,
          purpose: 'modify'
        };
        await this.$router.push({ name: "BoardCheckPage", params: payload });
      },
    },
    created() {
      this.fetchData();
    },
  };
  </script>
  
  <style lang=""></style>
  