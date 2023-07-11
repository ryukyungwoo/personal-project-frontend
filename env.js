const env = {
    api: {
        MAIN_API_URL: process.env.VUE_APP_BASE_URL,
    },
    fastapi: {
        MAIN_API_URL: process.env.VUE_APP_FASTAPI_URL
    }
}

export default env