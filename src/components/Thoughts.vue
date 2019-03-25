<template>
<div id="thoughts">
  <div v-for="thought in thoughts" v-bind:key="thought.id">
    <Thought v-bind:thought="thought"/>
  </div>
</div>
</template>

<script>
import Thought from './Thought'

export default {
  name: 'Thoughts',
  components: {
    Thought
  },
  props: ['thoughts']
}
</script>

<style lang="scss" scoped>
#thoughts {
  margin: 50px auto;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 650px;
  }

  @media screen and (min-width: 1080px) {
    width: 950px;
  }
}
</style>
