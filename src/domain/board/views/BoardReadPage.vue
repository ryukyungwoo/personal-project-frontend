<template lang="">
    <div>
        <h2>{{ board.title }}</h2>
        <board-read-form v-if="board" :board="board"/>
        <p v-else>로딩중 .......</p>
        <router-link :to="{ name: 'BoardModifyPage', params: { id: board.id.toString() }}">
            게시물 수정
        </router-link>
        <button @click="onDelete">삭제</button>
        <router-link :to="{ name: 'BoardListPage' }">
            돌아가기
        </router-link>
    </div>
</template>

<script>
import BoardReadForm from '../components/BoardReadForm.vue'
import { mapActions, mapState } from 'vuex';

const boardModule = 'boardModule'

export default {
    components: {
        BoardReadForm
    },
    props: {
        orderNumber: {
            type: String,
            required: true,
        },
        ticker: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(boardModule, ['board'])
    },
    methods: {
        ...mapActions(
            boardModule, ['requestBoardToSpring', 'requestDeleteBoardToSpring']
        ),
        async onDelete () {
            await this.requestDeleteBoardToSpring(this.id)
            await this.$router.push({ name: 'BoardListPage' })
        },
        async fetchData() {
            const payload = {
            ticker: this.ticker,
            orderNumber: this.orderNumber,
            };
            await this.requestBoardToSpring(payload);
        },
    },
    created () {
        this.fetchData();
    }
}
</script>
<style lang="">
    
</style>