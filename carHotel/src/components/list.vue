<template>
  <div>
<!--     <group title="switch the type">
      <radio title="type" v-model="type" :options="['1', '2', '3']"></radio>
    </group> -->
    <panel header="酒店列表" :footer="footer" :list="list" :type="type" :rate='rate'></panel>
  </div>
</template>

<script>
import { Panel, Group, Radio } from 'vux'
export default {
  components: {
    Panel,
    Group,
    Radio
  },
  data () {
    return {
      type: '1',
      list: [{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        rate:4.3,
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        rate:4.3,
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        }
      },
		{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        rate:4.3,
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        rate:4.3,
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        }
      }
      ],
      footer: {
        title: '查看更多',
        url: 'http://vux.li'
      }
    }
  }
}
</script>