<template>
    <div id="#app">
      <h1>hello world</h1>
        <h1>{{msg}}</h1>
    </div>
</template> 

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: "abc"
    };
  }
};
</script>

<style>
#app {
  color: rgb(122, 173, 173);
}
</style>