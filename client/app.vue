<template>
  <div id="app">
    <div id="cover"></div>
    <div id="loading" v-show="loading">
      <loading></loading>
    </div>
    <Header></Header>
    <!-- <p>{{count}}</p> -->
    <!-- <p>{{counter}}</p>
    <p>{{fullName}}</p> -->
    <!-- <todo></todo> -->
    <!-- <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <router-link :to="{name: 'app'}">nameAlert</router-link> -->
    <!-- <router-link to="/login/exact">login exact</router-link> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!-- <button @click="notify"></button> -->
    <!-- <notification content="note"/>   -->
    <Footer></Footer>
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
import Loading from './components/loading/loading.vue'
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
export default {
  metaInfo: {
    title: 'Dany SSR test'
  },
  components: {
    Header,
    Footer,
    Todo,
    Loading
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
    this.$store.dispatch('updateCountSync', {
      count: 5,
      time: 2000
    })
    // this.updateCountSync({
    //   count: 5,
    //   time: 2000
    // })
  },
  methods: {
    ...mapActions(['updateCountSync']),
    ...mapMutations(['updateCount']),
    notify () {
      this.$notify({
        content: 'test $notify'
      })
    }
  },
  computed: {
    // ...mapState(['count']),
    ...mapState(['loading']),
    // ...mapState({
    //   counter: (state) => state.count
    // }),
    // count () {
    //   return this.$store.state.count
    // },
    // ...mapGetters(['fullName', 'a/textPlus'])
    ...mapGetters(['fullName'])
    // fullName (state) {
    //   return this.$store.getters.fullName
    // }
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


