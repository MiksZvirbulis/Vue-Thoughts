<template>
<div id="thoughts">
  <div v-for="thought in thoughts" v-bind:key="thought.id">
    <Thought v-bind:thought="thought" v-on:del-thought="deleteThought"/>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Thought from '../components/Thought'

export default {
  name: 'Home',
  components: {
    Thought
  },
  data() {
    return {
      thoughts: []
    }
  },
  methods: {
    deleteThought(id) {
      axios.delete(`http://mikscode.com/api/thoughts/delete/${id}`)
      .then(response => {
        if (response.status === 200) {
          this.thoughts = this.thoughts.filter(thought => thought.id !== id)
        } else {
          this.errors.push("Something went wrong with the request. Please try again later!")
        }
      })
      .catch(error => console.log(error))
    }
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
