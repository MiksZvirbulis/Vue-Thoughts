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

<style scoped>
#thoughts {
  margin: 0 auto;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
