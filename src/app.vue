<template>
    <div id="#app">
      <h1>by writer:</h1>
        <h1>{{msg}}</h1>
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template> 

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'
export default {
  name: 'app',
  data() {
    return {
      msg: "youngriver"
    };
  },
  components:{
    Header,
    Footer,
    Todo,
  }
};
</script>

<style>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#cover{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #999;
  opacity: .9;
  z-index: -1;
}
</style>