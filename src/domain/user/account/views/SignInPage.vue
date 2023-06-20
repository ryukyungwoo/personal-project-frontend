<template lang="">
    <div>
        <sign-in-form @submit="onSubmit"></sign-in-form>
    </div>
</template>

<script>
import SignInForm from "../components/SignInForm.vue"
import { mapActions } from "vuex";

const accountModule = 'accountModule'

export default {
    components: {
        SignInForm
    },
    methods: {
        ...mapActions(accountModule, ['requestSpringToLoginDuplication']),
        async onSubmit (payload) {
            const isSuccess = await this.requestSpringToLoginDuplication(payload)
            if (isSuccess) {
                this.$router.push("/")
            }
        }
    }
}

</script>

<style lang="">
    
</style>