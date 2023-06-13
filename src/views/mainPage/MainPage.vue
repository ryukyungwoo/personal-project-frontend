<template lang="">
    <div>
        <div>
            <chart-form/>
        </div>
        <div>
            <chat-room-form/>
        </div>
    </div>
</template>
<script>
import ChartForm from '@/components/chart/ChartForm.vue';
import ChatRoomForm from '@/components/chatRoom/ChatRoomForm.vue';

export default {
    name: 'MainPage',

    components: {
        ChartForm,
        ChatRoomForm
    },

}
</script>
<style lang="">
    
</style>