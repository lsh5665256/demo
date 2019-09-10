<template>
    <div>
        <div class="header">科目一</div>
        <div @click="fn">
            点击我开始答题
        </div>

    </div>
</template>

<script>
export default {
   methods:{
       fn(){
           this.$router.push("/card/0")
           localStorage.counter=0;
           localStorage.start=new Date().getTime()
       }
   }
}
</script>

<style scoped>
  .header{
      width: 100%;
      height: 60px;
      background: red;
  }
</style>
