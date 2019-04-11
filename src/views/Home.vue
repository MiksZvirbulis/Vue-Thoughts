<template>
<div id="thoughts">
  <div v-for="thought in listThoughts" v-bind:key="thought.id">
    <Thought v-bind:thought="thought"/>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions, mapState } from 'vuex'
import Thought from '../components/Thought'

export default {
  name: 'Home',
  components: {
    Thought
  },
  computed: {...mapGetters(['listThoughts']), ...mapState(['auth'])},
  created() {
    this.fetchThoughts(this.auth.userId)
  },
  data() {
    return {
      thoughts: []
    }
  },
  methods: {
    ...mapActions(['fetchThoughts'])
  }
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

  @media screen and (min-width: 1024px) {
    width: 950px;
  }

  @media screen and (min-width: 1224px) {
    width: 1260px;
  }
}
</style>
