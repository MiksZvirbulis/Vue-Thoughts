<template>
  <div id="app">
    <ul id="navigation">
      <li><router-link to="/">Thoughts</router-link></li>
      <li><router-link to="/add">Add Thought</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
