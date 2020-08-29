import { defineComponent, VNode, KeepAlive, createVNode, ref, provide } from 'vue'
/**This can be hot updated */
import Abs from './components/HelloWorld.vue'
/**Directly quote the following cannot be hot update */
// import Abs from './components/HelloWorld'



export default defineComponent({
    name: 'xxxx',
    setup() {
     
        return () => <div >
            <input />
            <Abs />
            
        </div>
    }
})