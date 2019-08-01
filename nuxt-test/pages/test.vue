<template>
  <div>
    <h1 class="red">Hello {{ name }}!</h1>
    <h4 class="red" v-for="(name, index) in list" :key="index">城市{{index + 1}} {{ name }}!</h4>
    <div>
      <div
        v-for="index in $store.state.list"
        :key="index"
      >{{index + 1}}. 为了把页面拉长，scrollToTop 不是0，哈哈哈哈哈哈</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "test-layouts",
  async asyncData(context) {
    // called every time before loading the component
    // as the name said, it can be async
    // Also, the returned object will be merged with your data object
    // let { status, data } = await axios.get("http://localhost:3000/city/list");
    // // this.list = data;
    // return {
    //   list: data
    // };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "World" });
      }, 2000);
    });
  },
  async fetch({ store, params }) {
    // let { status, data } = await axios.get("http://localhost:3000/city/list");
    // this.$store.city.dispatch("initList", data);
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     let list = [];
    //     for (let i = 0; i < 10000; i++) {
    //       list.push(i);
    //     }
    //     store.commit("setList", list);
    //     // resolve({ list });
    //   }, 5000);
    // });
    // The `fetch` method is used to fill the store before rendering the page
  },
  data() {
    if (process.browser) {
      console.log(window);
      // alert(123);
    } else {
      console.log(global);
    }
    return {
      title: "这是我设置的title",
      // name: "",
      // name: location.pathname,
      // list: []
      list: this.$store.state.city.list
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  // async mounted() {
  //   let { status, data } = await axios.get("/city/list");

  //   this.list = data;
  //   // console.log(status, data);
  // },
  // and more functionality to discover
  // loading() {},
  scrollToTop: true
};
</script>

<style>
.red {
  color: red;
}
</style>