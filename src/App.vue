<template>
  <div id="app">
    <Thoughts v-bind:thoughts="thoughts"/>
  </div>
</template>

<script>
import Thoughts from './components/Thoughts.vue'

export default {
  name: 'app',
  components: {
    Thoughts
  },
  data() {
    return {
      thoughts:
      [
        {
          id: 1,
          title: "My first thought",
          content: "I am curious about this book... It's called Digital Minimalist, should read it soon!",
          date: "2019-03-22T10:31:43.632Z"
        },
        {
          id: 2,
          title: "My second thought",
          content: "I am curious about this book... It's called Digital Minimalist, should read it soon!",
          date: "2019-03-22T10:31:43.632Z"
        },
        {
          id: 3,
          title: "My third thought",
          content: "I am curious about this book... It's called Digital Minimalist, should read it soon!",
          date: "2019-03-22T10:31:43.632Z"
        },
        {
          id: 4,
          title: "My fourth thought",
          content: "I am curious about this book... It's called Digital Minimalist, should read it soon!",
          date: "2019-03-22T10:31:43.632Z"
        }
      ]
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #000;
}

#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  color: #fff;
  margin-top: 50px;
}
</style>
