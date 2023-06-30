import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosInst'

export default {
    requestBoardListToSpring ({ commit }) {
        return axiosInst.spring.get('/board/list')
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
    requestCreateBoardToSpring ({}, payload) {

        const { title, content, writer } = payload

        return axiosInst.spring.post('/board/register', { title, content, writer })
            .then((res) => {
                alert('게시물 등록 성공!')
                return res
                
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
}