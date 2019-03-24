<template>
  <div id="app">
    <ul id="navigation">
        <li><a href="#">Thoughts</a></li>
        <li><a href="#">Add Thought</a></li>
      </ul>
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

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  background-color: #f7eddc;
  font-weight: normal;
  font-family: 'Courier New';
  text-align: center;
  color: #fff;
}

ul#navigation {
  margin: 0;
  display: flex;
  height: 50px;
  line-height: 50px;
  background-color: #f97f63;
  list-style-type: none;
  flex-direction: row;
  justify-content: center;

  li {
    border-left: 1px solid #ffffff;
    display: flex;
    padding: 0 10px 0 10px;

    &:last-child {
      border-right: 1px solid #ffffff;
    }

  a {
    color: #FDEDD0;
    text-decoration: none;
    }
  }
}
</style>
