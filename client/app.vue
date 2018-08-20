<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <p>{{count}}</p> -->
    <p>{{counter}}</p>
    <p>{{fullName}}</p>
    <p>{{textA}}</p>
    <!-- <todo></todo> -->
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <router-link :to="{name: 'app'}">nameAlert</router-link>
    <!-- <router-link to="/login/exact">login exact</router-link> -->
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
export default {
  components: {
    Header,
    Footer,
    Todo
  },
  mounted () {
    console.log(this.$store)
    console.log(this.$route)
    let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000)
    setInterval(() => {
      this.updateCount(i++)
    }, 1000)
    // this.$store.dispatch('updateCountSync', {
    //   count: 5,
    //   time: 2000
    // })
    // this.updateCountSync({
    //   count: 5,
    //   time: 2000
    // })
  },
  computed: {
    textA () {
      return this.$store.state.a.text
    },
    // ...mapState(['count']),
    ...mapState({
      counter: (state) => state.count
    }),
    // count () {
    //   return this.$store.state.count
    // },
    ...mapGetters(['fullName']),
    // fullName (state) {
    //   return this.$store.getters.fullName
    // }
    ...mapActions(['updateCountSync']),
    ...mapMutations(['updateCount'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


