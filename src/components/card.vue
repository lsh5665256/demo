<template>
  <div>
    <div class="header">答题中</div>
    <div class="main">
      <div v-if="shuju.length">{{shuju[xb].question}}</div>
      <template v-if="shuju.length">
        <p v-for="(item,index) in shuju[xb].allAnswer" :key="index" @click="pan(item)">
          <span class="b1" v-if="item.isok==null"></span>
          <span class="a1" v-if="item.isok==true"></span>
          <span class="c1" v-if="item.isok==false"></span>
          <span>{{item.key}}</span>
          <span>{{item.value}}</span>
        </p>
      </template>
    </div>
    <div class="footer">
      <span @click="shang">上一题</span>
      <span @click="tijiao">提交</span>
      <span @click="xia">下一题</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      xb: this.$route.params.id
    };
  },
  methods: {
    ...mapActions(["qingqiu"]),
    xia() {
      this.xb++;
      if (this.xb >3) {
        this.xb = 3;
      }
      this.$router.push("/card/" + this.xb);
    },
    shang() {
      this.xb--;
      if (this.xb < 0) {
        this.xb = 0;
      }
      this.$router.push("/card/" + this.xb);
    },
    pan(item) {
      console.log(item);
      if (this.shuju[this.xb].isAnswerd) {
        return;
      }
      this.shuju[this.xb].isAnswerd = true;

      if (item.key == this.shuju[this.xb].answer) {
        item.isok = true;
        let counter = localStorage.counter;
        counter++;
        localStorage.counter = counter;
      } else {
        item.isok = false;
      }
    },
    tijiao() {
      let end = new Date() * 1;
      let start = localStorage.start;
      let cha = (end - start) / 1000;
      let min = parseInt(cha / 60);
      let sec = parseInt(cha % 60);
      alert(`答对${localStorage.counter}题，用时${min}分，${sec}秒`);
  
    }
  },
  computed: {
    ...mapState(["shuju"])
  },

  created() {
    //   alert(123)
    this.qingqiu();
    // if(shuju)
    // {
    console.log(this.shuju);
    // }
  }
  //   mounted(){
  //       console.log(shuju)
  //   }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background: blue;
}
.footer {
  width: 100%;
  height: 60px;
  background: red;
  position: absolute;
  bottom: 0;
}
.a1 {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid red;
  background: green;
}
.b1 {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid red;
}
.c1 {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid red;
  background: pink;
}
</style>
