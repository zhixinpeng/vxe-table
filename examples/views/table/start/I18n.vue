<template>
  <div>
    <h2>Internationalization 国际化</h2>
    <p class="tip">目前支持的 <a class="link" href="https://github.com/xuliangzhan/vxe-table/tree/master/packages/locale/lang" target="_blank">国际化列表</a>，若希望使用指定语言，则需要进行多语言设置。以中/英文为例<br><a class="link" href="https://github.com/xuliangzhan/vxe-table-demo/tree/master/vxe-table-by-vue-i18n" target="_blank">项目示例</a></p>
    <pre>
      <code class="shell">
        npm install vue-i18n
      </code>
      <code class="javascript">{{ demoCodes[0] }}</code>
    </pre>
    <h2>集成国际化</h2>
    <p class="tip">若希望在项目中支持全局自动翻译，可以通过全局参数开启（将对列头、校验提示..进行自动翻译）</p>
    <pre>
      <code class="javascript">{{ demoCodes[1] }}</code>
      <code class="html">{{ demoCodes[2] }}</code>
    </pre>
    <h2>发现错误？想参与翻译？</h2>
    <p class="tip">通过 <a class="link" href="https://github.com/xuliangzhan/vxe-table/pulls">Pull requests</a> 贡献翻译 -> <a class="link" href="https://github.com/xuliangzhan/vxe-table/tree/master/packages/locale/lang">添加或修改</a></p>
    <div>
      <ul class="lang-list">
        <li><a class="link" href="https://github.com/xuliangzhan/vxe-table/blob/master/packages/locale/lang/zh-CN.js" target="_blank">简体中文（zh-CN）</a></li>
        <li><a class="link" href="https://github.com/xuliangzhan/vxe-table/blob/master/packages/locale/lang/zh-TC.js" target="_blank">繁体中文（zh-TC）</a></li>
        <li><a class="link" href="https://github.com/xuliangzhan/vxe-table/blob/master/packages/locale/lang/en-US.js" target="_blank">英文（en-US）</a></li>
        <li><a class="link" href="https://github.com/xuliangzhan/vxe-table/blob/master/packages/locale/lang/ja-JP.js" target="_blank">日语（ja-JP）</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    return {
      demoCodes: [
        `
        import Vue from 'vue'
        import VueI18n from 'vxe-i18n'
        import VXETable from 'vxe-table'
        import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
        import enUS from 'vxe-table/lib/locale/lang/en-US'

        const messages = {
          zh_CN: {
            ...zhCN
          },
          en_US: {
            ...enUS
          }
        }

        const i18n = new VueI18n({
          locale: 'zh_CN',
          messages,
        })

        Vue.use(VXETable, {
          // 对参数中的列头、校验提示..等进行自动翻译（只对支持国际化的有效）
          // translate (key) {
          //   // 例如，只翻译 "app." 开头的键值
          //   if (key && key.indexOf('app.') > -1) {
          //     return i18n.t(key)
          //   }
          //   return key
          // },
          // 对组件内置的提示语进行国际化翻译
          // i18n: key => i18n.t(key)
        })

        new Vue({ i18n }).$mount('#app')
        `,
        `
        Vue.use(VXETable, {
          // 可选，对参数中的列头、校验提示..等进行自动翻译（只对支持国际化的有效）
          translate: key => i18n.t(key),
          // 对组件内置的提示语进行国际化翻译
          i18n: key => i18n.t(key)
        })
        `,
        `
        <vxe-table
          border
          height="600"
          :data="tableData">
          <vxe-table-column field="name" title="app.body.label.name"></vxe-table-column>
          <vxe-table-column field="age" title="app.body.label.age"></vxe-table-column>
          <vxe-table-column field="sex" title="app.body.label.sex"></vxe-table-column>
        </vxe-table>
        `
      ]
    }
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>

<style scoped>
.lang-list {
  list-style: disc;
  padding-left: 40px;
}
</style>
