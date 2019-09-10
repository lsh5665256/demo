<template>
     <div>
        <router-view></router-view>
     </div>

</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
export default {
     computed:{
       ...mapState(["count"])
     }
}
</script>

<style>

</style>
