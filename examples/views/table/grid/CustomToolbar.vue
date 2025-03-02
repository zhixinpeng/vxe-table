<template>
  <div>
    <p class="tip">工具栏：通过 <grid-api-link prop="toolbar"/> 属性配置，使用 <grid-api-link prop="slot"/> 自定义模板</p>

    <vxe-grid
      border
      resizable
      keep-source
      ref="xGrid"
      height="530"
      id="toolbar_demo_2"
      :custom-config="tableCustom"
      :pager-config="tablePage"
      :proxy-config="tableProxy"
      :columns="tableColumn"
      :toolbar="tableToolbar"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
      <template v-slot:toolbar_buttons>
        <vxe-input v-model="searchName" placeholder="搜索"></vxe-input>
        <vxe-button status="primary">搜索</vxe-button>
        <vxe-button @click="$refs.xGrid.commitProxy('reload')">刷新</vxe-button>
        <vxe-button @click="$refs.xGrid.commitProxy('insert_actived')">新增</vxe-button>
        <vxe-button @click="$refs.xGrid.commitProxy('mark_cancel')">标记/取消</vxe-button>
        <vxe-button @click="$refs.xGrid.commitProxy('save')">保存</vxe-button>
        <vxe-button @click="$refs.xGrid.exportData()">导出.csv</vxe-button>
      </template>
    </vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>
  </div>
</template>

<script>
import XEAjax from 'xe-ajax'
import hljs from 'highlight.js'

export default {
  data () {
    return {
      searchName: '',
      tablePage: {
        pageSize: 15
      },
      tableProxy: {
        props: {
          result: 'result',
          total: 'page.total'
        },
        ajax: {
          // page 对象： { pageSize, currentPage }
          query: ({ page }) => XEAjax.get(`/api/user/page/list/${page.pageSize}/${page.currentPage}`),
          // body 对象： { removeRecords }
          delete: ({ body }) => XEAjax.post('/api/user/save', body),
          // body 对象： { insertRecords, updateRecords, removeRecords, pendingRecords }
          save: ({ body }) => XEAjax.post('/api/user/save', body)
        }
      },
      tableCustom: {
        storage: true
      },
      tableToolbar: {
        refresh: true,
        custom: true,
        slots: {
          buttons: 'toolbar_buttons'
        }
      },
      tableColumn: [
        { type: 'checkbox', width: 50 },
        { type: 'seq', width: 60 },
        { field: 'name', title: 'Name', editRender: { name: 'input' } },
        {
          title: '分类',
          children: [
            { field: 'nickname', title: 'Nickname', editRender: { name: 'input' } },
            {
              title: '子类',
              children: [
                { field: 'role', title: 'Role', editRender: { name: 'input' } }
              ]
            }
          ]
        },
        { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }
      ],
      demoCodes: [
        `
        <vxe-grid
          border
          resizable
          keep-source
          ref="xGrid"
          height="530"
          id="toolbar_demo_2"
          :custom-config="tableCustom"
          :pager-config="tablePage"
          :proxy-config="tableProxy"
          :columns="tableColumn"
          :toolbar="tableToolbar"
          :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
          <template v-slot:toolbar_buttons>
            <vxe-input v-model="searchName" placeholder="搜索"></vxe-input>
            <vxe-button status="primary">搜索</vxe-button>
            <vxe-button @click="$refs.xGrid.commitProxy('reload')">刷新</vxe-button>
            <vxe-button @click="$refs.xGrid.commitProxy('insert_actived')">新增</vxe-button>
            <vxe-button @click="$refs.xGrid.commitProxy('mark_cancel')">标记/取消</vxe-button>
            <vxe-button @click="$refs.xGrid.commitProxy('save')">保存</vxe-button>
            <vxe-button @click="$refs.xGrid.exportData()">导出.csv</vxe-button>
          </template>
        </vxe-grid>
        `,
        `
        export default {
          data () {
            return {
              searchName: '',
              tablePage: {
                pageSize: 15
              },
              tableProxy: {
                // 配置响应的数据属性
                props: {
                  result: 'result',
                  total: 'page.total'
                },
                ajax: {
                  // page 对象： { pageSize, currentPage }
                  query: ({ page }) => XEAjax.get(\`/api/user/page/list/\${page.pageSize}/\${page.currentPage}\`), // 模拟请求
                  // body 对象： { removeRecords }
                  delete: ({ body }) => XEAjax.post('/api/user/save', body),
                  // body 对象： { insertRecords, updateRecords, removeRecords, pendingRecords }
                  save: ({ body }) => XEAjax.post('/api/user/save', body)
                }
              },
              tableCustom: {
                storage: true
              },
              tableToolbar: {
                refresh: true,
                custom: true,
                slots: {
                  buttons: 'toolbar_buttons'
                }
              },
              tableColumn: [
                { type: 'checkbox', width: 50 },
                { type: 'seq', width: 60 },
                { field: 'name', title: 'Name', editRender: { name: 'input' } },
                {
                  title: '分类',
                  children: [
                    { field: 'nickname', title: 'Nickname', editRender: { name: 'input' } },
                    {
                      title: '子类',
                      children: [
                        { field: 'role', title: 'Role', editRender: { name: 'input' } }
                      ]
                    }
                  ]
                },
                { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }
              ]
            }
          }
        }
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
