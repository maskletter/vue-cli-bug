import Test from './test'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
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