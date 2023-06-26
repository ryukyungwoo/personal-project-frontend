<!-- <template lang="">
    <div style="text-align: left; margin: 15px;">
        <router-link :to="{ name: 'VuetifyBoardRegister' }">
            게시물 작성
        </router-link>        
      </div>
      <board-list-form :boards="boards"/>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import BoardListForm from '../../board/components/BoardListForm.vue';

const boardModule = 'boardModule'

export default {
    components: { BoardListForm },
    data () {
        return {
            headerTitle: [
                  { 
                      title: 'No',
                      align: 'start',
                      sortable: true,
                      key: 'boardId',
                  },
                  { title: '제목', align: 'end', key: 'title' },
                  { title: '작성자', align: 'end', key: 'writer' },
                  { title: '작성일자', align: 'end', key: 'createDate' },
              ],
              perPage: 5,
              pagination: {
                  page: 1,
              }
        }
    },
    computed: {
        ...mapState(boardModule, ['boards']),
        pagedItems () {
              const startIdx = (this.pagination.page - 1) * this.perPage
              const endIdx = startIdx + this.perPage
              return this.boards.slice(startIdx, endIdx)
          }
    },
    mounted () {
        this.requestBoardListToSpring()
    },
    methods: {
        ...mapActions(boardModule, ['requestBoardListToSpring']),
            readRow (event, { item }) {
            const selectedRowBoardId = item.selectable.boardId

            this.$router.push({
                name: 'VuetifyBoardRead',
                params: { boardId: selectedRowBoardId.toString() }
            })
          }
    }
}
</script>
<style lang="">
    
</style> -->
<template lang="">
    <v-container>
        <div>
            <h2>게시판</h2>
            <div style="text-align: left; margin: 15px;">
                <router-link :to="{ name: 'BoardRegisterPage' }">
                    게시물 작성
                </router-link>
            </div>
            <board-list-form :boards="boards"/>
        </div>
    </v-container>  
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BoardListForm from '../../board/components/BoardListForm.vue'

const boardModule = 'boardModule'

export default {
    components: { BoardListForm },
    data () {
        return {
        }
    },
    computed: {
        ...mapState(boardModule, ['boards']),
    },
    mounted () {
        this.requestBoardListToSpring()
    },
    methods: {
        ...mapActions(
            boardModule, ['requestBoardListToSpring']
        )
    }
}
</script>

<style lang="">
    
</style>