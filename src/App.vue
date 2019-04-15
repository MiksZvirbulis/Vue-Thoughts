<template>
  <div id="app">
    <ul id="navigation">
      <li v-if="auth.loggedIn"><router-link to="/">Thoughts</router-link></li>
      <li v-if="auth.loggedIn"><router-link to="/add">Add Thought</router-link></li>
      <li v-if="auth.loggedIn"><router-link to="/logout">Logout</router-link></li>
      <li v-if="!auth.loggedIn"><router-link to="/signup">Signup</router-link></li>
      <li v-if="!auth.loggedIn"><router-link to="/login">Login</router-link></li>
    </ul>
    <div id="errors" v-if="auth.error || thoughts.error">
      <div v-if="auth.error !== null">{{ handleError(auth.error) }}</div>
      <div v-if="thoughts.error !== null">{{ handleError(thoughts.error) }}</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import handleError from './utils/handleError'

export default {
  name: 'app',
  computed: {
    ...mapState(['auth', 'thoughts'])
  },
  methods: {
    ...mapActions(['loggedIn']),
    handleError
  },
  created() {
    
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

#errors {
  display: flex;
  flex-direction: column;
  margin: 50px auto 0 auto;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  width: 50%;
  padding: 10px;
}

form {
        width: 100%;
        display: flex;
        flex-direction: column;

        label {
            display: flex;
            margin-right: auto;
            margin: 20px 0;
        }
        
        input, textarea {
            margin: 0 20px;
            padding: 10px;
            border-radius: 2px;
            border: 1px solid #ffffff;
            resize: none;
            font: inherit;

            &:focus {
                outline: none;
                border: 1px solid #63c4f9;
            }

            &::placeholder {
                color: #f97f63;
            }
        }


        button {
            display: flex;
            margin: 40px auto;
            border-radius: 2px;
            color: #ffffff;
            padding: 20px;
            background-color: #f97f63;
            outline: none;
            border: 1px solid #ffffff;
            cursor: pointer;
            font: inherit;

            &:hover {
                background-color: #ffffff;
                color: #f97f63;
            }

            &.small {
              padding: 5px;
              font-size: 11px;
            }

            &.delete, &.delete:hover {
              background-color: rgb(202, 60, 60);
              color: #ffffff;
              border: none;
            }

            &.save, &.save:hover {
              background-color: rgb(28, 184, 65);
              color: #ffffff;
              border: none;
            }

            &.cancel, &.cancel:hover {
              background-color: rgb(66, 184, 221);
              color: #ffffff;
              border: none;
            }
        }
    }

    ul#errors {
        text-align: left;
        background-color: #ffffff;
        padding: 10px;
        margin: 0 20px;
        border: 1px solid #ffffff;
        border-radius: 2px;

        li {
            list-style-type: none;
            width: 50%;
            margin: 0 auto;
            color: #f96379;

            @media screen and (max-width: 360px) {
                width: 100%;
                font-size: 14px;
            }
        }
    }
</style>
