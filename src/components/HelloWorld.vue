<template>
  <div class="animated rollIn">
    <!-- <h1>{{ msg }}</h1> -->
    <marquee scrollamount="10" scrolldelay="200" behavior="alternate" direction="left" width="100%" height="120" bgcolor="#f5f5f5" @mouseover="stop()" @mouseleave="start()">
      <p>开发工程师</p>
      <p>设计师</p>
      <p>前端开发</p>
      <font size=+3 color=red>Hello, World</font>
    </marquee>
    <div class="animated infinite bounce delay-2s">Example</div>
    <div class="animated bounce delay-3s">Example</div>
    <div class="animated bounce delay-4s">Example</div>
    <div class="animated bounce delay-5s">Example</div>

    <div class="animated bounce slow">niutong</div>
    <div class="animated bounce slower">niutong</div>
    <div class="animated bounce fast">niutong</div>
    <div class="animated bounce faster">niutong</div>

    <div class="animated jello">world</div>

    <transition
      name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
      <h1>hello world! </h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
