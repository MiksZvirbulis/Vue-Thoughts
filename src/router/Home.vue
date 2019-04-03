<template>
<div id="thoughts">
  <div v-for="thought in listThoughts" v-bind:key="thought.id">
    <Thought v-bind:thought="thought"/>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import Thought from '../components/Thought'

export default {
  name: 'Home',
  components: {
    Thought
  },
  computed: mapGetters(['listThoughts']),
  created() {
    this.fetchThoughts()
  },
  data() {
    return {
      thoughts: []
    }
  },
  methods: {
    ...mapActions(['fetchThoughts'])
  },
  mounted() {
    axios.get('http://mikscode.com/api/thoughts/list')
    .then(response => (this.thoughts = response.data))
    .catch(error => console.log(error))
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
