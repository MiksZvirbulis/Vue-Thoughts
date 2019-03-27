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
import axios from 'axios'
import Thoughts from './components/Thoughts.vue'

export default {
  name: 'app',
  components: {
    Thoughts
  },
  data() {
    return {
      thoughts: []
    }
  },
  mounted() {
    axios.get('http://mikscode.com/api/thoughts/list')
    .then(response => (this.thoughts = response.data))
    .catch(error => console.log(error))
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
