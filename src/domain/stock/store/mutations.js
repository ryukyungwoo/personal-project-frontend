import { REQUEST_STOCK_LIST_TO_FASTAPI, 
        REQUEST_STOCK_TO_SPRING,
    } from "./mutation-types"

export default {
    [REQUEST_STOCK_LIST_TO_FASTAPI] (state, receivedData) {
        state.stocks = receivedData
    },
    [REQUEST_STOCK_TO_SPRING] (state, receivedData) {
        state.stock = receivedData
    },
}