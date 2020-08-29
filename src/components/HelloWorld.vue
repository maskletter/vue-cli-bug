
<script lang="tsx">
import Test from './test'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld2',
  components: { Test },
  props: {
    msg: String,
  },
  setup() {
    return () => <div class="hello">
      <h1>msg</h1>
      <Test />
    </div>
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
