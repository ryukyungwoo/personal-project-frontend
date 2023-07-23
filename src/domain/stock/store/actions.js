import { REQUEST_STOCK_LIST_TO_FASTAPI,
            REQUEST_STOCK_TO_SPRING,
    } from './mutation-types'
import axiosInst from '@/utility/axiosInst'

export default {
    async requestStockListToFastAPI({ commit }, payload) {
        const { OHCLVA, ascending } = payload
        return axiosInst.fastApi.get(`/stock/list/${OHCLVA}/${ascending}`)
        .then((res) => {
            commit(REQUEST_STOCK_LIST_TO_FASTAPI, res.data)
        })
    },
    requestStockToSpring({ commit }, ticker) {
        return axiosInst.spring.get(`/stock/name/${ticker}`)
        .then((res) => {
            commit(REQUEST_STOCK_TO_SPRING, res.data)
        })
    }
}