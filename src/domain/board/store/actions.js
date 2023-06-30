import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosInst'

export default {
    requestBoardListToSpring ({ commit }) {
        axiosInst.spring.get('/board/list')
            .then((res) => {
                commit(REQUEST_BOARD_LIST_TO_SPRING, res.data)
            })
    },
    requestBoardToSpring ({ commit }, boardId) {
        return axiosInst.spring.get(`/board/${boardId}`)
            .then((res) => {
                commit(REQUEST_BOARD_TO_SPRING, res.data)
            })
    },
}