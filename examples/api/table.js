import XEUtils from 'xe-utils/methods/xe-utils'

const contextMenuAPI = [
  {
    name: 'disabled',
    desc: '是否禁用右键',
    version: '',
    type: 'Boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'options',
    desc: '菜单配置',
    version: '',
    type: 'Array<Array>',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'code',
        desc: '菜单键值',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'name',
        desc: '菜单名称（支持开启国际化）',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'prefixIcon',
        desc: '前缀图标 className',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'suffixIcon',
        desc: '后缀图标 className',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'className',
        desc: '菜单项的 className',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'visible',
        desc: '是否可视',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'disabled',
        desc: '是否禁用',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'children',
        desc: '二级菜单（最多只允许有二级）',
        version: '',
        type: 'Array',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'code',
            desc: '菜单键值',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'name',
            desc: '菜单名称',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'prefixIcon',
            desc: '前缀图标 className',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'visible ',
            desc: '是否可视',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'disabled ',
            desc: '是否禁用',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      }
    ]
  }
]

const exportDataAPI = [
  {
    name: 'filename',
    desc: '文件名',
    version: '',
    type: 'String',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'sheetName',
    desc: '表名（只对支持的文档类型有效）',
    version: '',
    type: 'String',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'type',
    desc: '文件类型',
    version: '',
    type: 'String',
    enum: 'csv, html, xml, txt',
    defVal: 'csv',
    list: []
  },
  {
    name: 'types',
    desc: '可选文件类型列表',
    version: '',
    type: 'Array',
    enum: 'csv, html, xml, txt',
    defVal: '[\'csv\', \'html\', \'xml\', \'txt\']',
    list: []
  },
  {
    name: 'mode',
    desc: '输出数据的方式',
    version: '',
    type: 'String',
    enum: 'current, selected, all',
    defVal: 'current',
    list: []
  },
  {
    name: 'modes',
    desc: '输出数据的方式列表',
    version: '',
    type: 'Array',
    enum: 'current, selected, all',
    defVal: '[\'current\', \'selected\', \'all\']',
    list: []
  },
  {
    name: 'original',
    desc: '是否为源数据（某些场景下支持 true， 比如虚拟滚动、优化的固定列..，如果需要支持导入，则必须设置为 true）',
    version: '',
    type: 'Boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'message',
    desc: '是否显示内置的消息提示',
    version: '',
    type: 'Boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'isHeader',
    desc: '是否需要表头',
    version: '',
    type: 'Boolean',
    enum: '',
    defVal: 'true',
    list: []
  },
  {
    name: 'isFooter',
    desc: '是否需要表尾',
    version: '',
    type: 'Boolean',
    enum: '',
    defVal: 'true',
    list: []
  },
  {
    name: 'download',
    desc: '是否马上下载，如果设置为 false 则通过返回结果为内容的 Promise',
    version: '',
    type: 'Boolean',
    enum: '',
    defVal: 'true',
    list: []
  },
  {
    name: 'data',
    desc: '自定义数据',
    version: '',
    type: 'Array',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'columns',
    desc: '自定义列（如果指定了 columns 则 columnFilterMethod 默认为空）',
    version: '',
    type: 'Array',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'columnFilterMethod',
    desc: '列过滤方法，该函数 Function(column,$columnIndex) 的返回值用来决定是否过滤掉列',
    version: '',
    type: 'Function',
    enum: '',
    defVal: '默认过滤掉 type=index,checkbox,radio 和 field 为空的列',
    list: []
  },
  {
    name: 'dataFilterMethod',
    desc: '数据过滤方法，该函数 Function(row,$rowIndex) 的返回值用来决定是否过滤掉数据行',
    version: '',
    type: 'Function',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'footerFilterMethod',
    desc: '表尾过滤方法，该函数 Function(cells,$rowIndex) 的返回值用来决定是否过滤掉表尾行',
    version: '',
    type: 'Function',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'remote',
    desc: '是否服务端导出',
    version: '',
    type: 'Boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'exportMethod',
    desc: '只对 remote=true 有效，该函数 Function({ options }) 用于自定义导出或服务端导出，返回 Promise',
    version: '',
    type: 'Function',
    enum: '',
    defVal: '',
    list: []
  }
]

const importDataAPI = [
  {
    name: 'mode',
    desc: '导入数据的方式',
    version: '',
    type: 'String',
    enum: 'covering, insert',
    defVal: 'covering',
    list: []
  },
  {
    name: 'message',
    desc: '是否显示内置的消息提示',
    version: '',
    type: 'Boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'types',
    desc: '导入的文件类型列表',
    version: '',
    type: 'Array',
    enum: 'csv, html, xml, txt',
    defVal: '[\'csv\', \'html\', \'xml\', \'txt\']',
    list: []
  },
  {
    name: 'remote',
    desc: '是否服务端导入',
    version: '',
    type: 'Boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'importMethod',
    desc: '只对 remote=true 有效，该函数 Function({ file, options }) 用于自定义导入或服务端导入，返回 Promise',
    version: '',
    type: 'Function',
    enum: '',
    defVal: '',
    list: []
  }
]

const printAPI = exportDataAPI.filter(item => !['filename', 'type', 'types', 'download', 'message', 'remote', 'exportMethod'].includes(item.name))

const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'id',
        descKey: 'app.api.table.desc.id',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'data',
        descKey: 'app.api.table.desc.data',
        version: '',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'height',
        descKey: 'app.api.table.desc.height',
        version: '',
        type: 'Number, String',
        enum: 'auto, %, px',
        defVal: '',
        list: []
      },
      {
        name: 'max-height',
        descKey: 'app.api.table.desc.maxHeight',
        version: '',
        type: 'Number, String',
        enum: '%, px',
        defVal: '',
        list: []
      },
      {
        name: 'auto-resize',
        descKey: 'app.api.table.desc.autoResize',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'sync-resize',
        descKey: 'app.api.table.desc.syncResize',
        version: '',
        type: 'Boolean, String, Number',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'resizable',
        descKey: 'app.api.table.desc.resizable',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: '默认 false，继承 setup.table.resizable',
        list: []
      },
      {
        name: 'stripe',
        descKey: 'app.api.table.desc.stripe',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: '默认 false，继承 setup.table.stripe',
        list: []
      },
      {
        name: 'border',
        descKey: 'app.api.table.desc.border',
        version: '',
        type: 'Boolean, String',
        enum: 'default（默认）, full（完整边框）, outer（外边框）, inner（内边框）, none（无边框）',
        defVal: '默认 false，继承 setup.table.border',
        list: []
      },
      {
        name: 'round',
        descKey: 'app.api.table.desc.round',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: '默认 false，继承 setup.table.round',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.table.desc.size',
        version: '',
        type: 'String',
        enum: 'medium, small, mini',
        defVal: '继承上下文',
        list: []
      },
      // {
      //   name: 'fit',
      //   descKey: 'app.api.table.desc.fit',
      //   version: '',
      //   type: 'Boolean',
      //   enum: '',
      //   defVal: 'true',
      //   list: []
      // },
      {
        name: 'loading',
        descKey: 'app.api.table.desc.loading',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'align',
        descKey: 'app.api.table.desc.align',
        version: '',
        type: 'String',
        enum: 'left（左对齐）, center（居中对齐）, right（右对齐）',
        defVal: 'left',
        list: []
      },
      {
        name: 'header-align',
        descKey: 'app.api.table.desc.headerAlign',
        version: '',
        type: 'String',
        enum: 'left（左对齐）, center（居中对齐）, right（右对齐）',
        defVal: '继承 align',
        list: []
      },
      {
        name: 'footer-align',
        descKey: 'app.api.table.desc.footerAlign',
        version: '',
        type: 'String',
        enum: 'left（左对齐）, center（居中对齐）, right（右对齐）',
        defVal: '继承 align',
        list: []
      },
      {
        name: 'show-header',
        descKey: 'app.api.table.desc.showHeader',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'highlight-current-row',
        descKey: 'app.api.table.desc.highlightCurrentRow',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'highlight-hover-row',
        descKey: 'app.api.table.desc.highlightHoverRow',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'highlight-current-column',
        descKey: 'app.api.table.desc.highlightCurrentColumn',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'highlight-hover-column',
        descKey: 'app.api.table.desc.highlightHoverColumn',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'highlight-cell',
        descKey: 'app.api.table.desc.highlightCell',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'row-class-name',
        descKey: 'app.api.table.desc.rowClassName',
        version: '',
        type: 'String, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'cell-class-name',
        descKey: 'app.api.table.desc.cellClassName',
        version: '',
        type: 'String, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header-row-class-name',
        descKey: 'app.api.table.desc.headerRowClassName',
        version: '',
        type: 'String, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header-cell-class-name',
        descKey: 'app.api.table.desc.headerCellClassName',
        version: '',
        type: 'String, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer-row-class-name',
        descKey: 'app.api.table.desc.footerRowClassName',
        version: '',
        type: 'String, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer-cell-class-name',
        descKey: 'app.api.table.desc.footerCellClassName',
        version: '',
        type: 'String, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'cell-style',
        descKey: 'app.api.table.desc.cellStyle',
        version: '',
        type: 'Object, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header-cell-style',
        descKey: 'app.api.table.desc.headerCellStyle',
        version: '',
        type: 'Object, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer-cell-style',
        descKey: 'app.api.table.desc.footerCellStyle',
        version: '',
        type: 'Object, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'row-style',
        descKey: 'app.api.table.desc.rowStyle',
        version: '',
        type: 'Object, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header-row-style',
        descKey: 'app.api.table.desc.headerRowStyle',
        version: '',
        type: 'Object, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer-row-style',
        descKey: 'app.api.table.desc.footerRowStyle',
        version: '',
        type: 'Object, Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'show-footer',
        descKey: 'app.api.table.desc.showFooter',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'footer-method',
        descKey: 'app.api.table.desc.footerMethod',
        version: '',
        type: 'Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'span-method',
        descKey: 'app.api.table.desc.spanMethod',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '{ rowspan: 1, colspan: 1}',
        list: []
      },
      {
        name: 'footer-span-method',
        descKey: 'app.api.table.desc.footerSpanMethod',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '{ rowspan: 1, colspan: 1}',
        list: []
      },
      {
        name: 'show-overflow',
        descKey: 'app.api.table.desc.showOverflow',
        version: '',
        type: 'Boolean, String',
        enum: 'ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）',
        defVal: '',
        list: []
      },
      {
        name: 'show-header-overflow',
        descKey: 'app.api.table.desc.showHeaderOverflow',
        version: '',
        type: 'Boolean, String',
        enum: 'ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）',
        defVal: '',
        list: []
      },
      {
        name: 'show-footer-overflow',
        descKey: 'app.api.table.desc.showFooterOverflow',
        version: '',
        type: 'Boolean, String',
        enum: 'ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）',
        defVal: '',
        list: []
      },
      {
        name: 'column-width',
        descKey: 'app.api.table.desc.columnWidth',
        version: '',
        type: 'Number, String',
        enum: 'auto, px, %',
        defVal: '默认均匀分配',
        list: []
      },
      {
        name: 'column-min-width',
        descKey: 'app.api.table.desc.columnMinWidth',
        version: '',
        type: 'Number, String',
        enum: 'auto, px, %',
        defVal: '',
        list: []
      },
      {
        name: 'column-key',
        descKey: 'app.api.table.desc.columnKey',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'row-key',
        descKey: 'app.api.table.desc.rowKey',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'row-id',
        descKey: 'app.api.table.desc.rowId',
        version: '',
        type: 'String',
        enum: '',
        defVal: '默认 _XID，继承 setup.table.rowId',
        list: []
      },
      {
        name: 'keep-source',
        descKey: 'app.api.table.desc.keepSource',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: '默认 false，继承 setup.table.keepSource',
        list: []
      },
      {
        name: 'z-index',
        descKey: 'app.api.table.desc.zIndex',
        version: '',
        type: 'Number',
        enum: '',
        defVal: '继承 setup.table.zIndex',
        list: []
      },
      {
        name: 'seq-config',
        descKey: 'app.api.table.desc.seqConfig',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '继承 setup.table.seqConfig',
        list: [
          {
            name: 'startIndex',
            desc: '设置序号的起始值',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '0',
            list: []
          },
          {
            name: 'seqMethod',
            desc: '自定义序号的方法 Function({ row, rowIndex, column, columnIndex }) 返回处理后的值',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'sort-config',
        descKey: 'app.api.table.desc.sortConfig',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '继承 setup.table.sortConfig',
        list: [
          {
            name: 'defaultSort',
            desc: '默认排序（只会在初始化时被触发一次）',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'field',
                desc: '列字段名',
                version: '',
                type: 'String',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'order',
                desc: '排序方式',
                version: '',
                type: 'String',
                enum: 'asc（升序）,desc（降序）, null',
                defVal: '',
                list: []
              }
            ]
          },
          {
            name: 'orders',
            desc: '自定义轮转顺序',
            version: '',
            type: 'Array',
            enum: 'asc, desc, null',
            defVal: '[\'asc\', \'desc\', \'null\']',
            list: []
          },
          {
            name: 'sortMethod',
            desc: '自定义所有列的排序方法，当触发排序时会调用该函数 Function({ data, column, property, order  }) 返回排序后的结果',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'remote',
            desc: '所有列是否使用服务端排序，如果设置为 true 则不会对数据进行处理',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式',
            version: '',
            type: 'String',
            enum: 'default（点击按钮触发）, cell（点击表头触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'showIcon',
            desc: '是否显示列头排序图标',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'iconAsc',
            desc: '自定义升序的图标',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconDesc',
            desc: '自定义降序的图标',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'filter-config',
        descKey: 'app.api.table.desc.filterConfig',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '继承 setup.table.filterConfig',
        list: [
          {
            name: 'remote',
            desc: '所有列是否使用服务端筛选，如果设置为 true 则不会对数据进行处理',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'showIcon',
            desc: '是否显示列头筛选图标',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'iconNone',
            desc: '自定义无条件时显示的图标',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconMatch',
            desc: '自定义带条件时显示的图标',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'export-config',
        descKey: 'app.api.table.desc.exportConfig',
        version: '',
        type: 'Boolean, Object',
        enum: '',
        defVal: '继承 setup.table.exportConfig',
        list: XEUtils.clone(exportDataAPI, true)
      },
      {
        name: 'import-config',
        descKey: 'app.api.table.desc.importConfig',
        version: '',
        type: 'Boolean, Object',
        enum: '',
        defVal: '继承 setup.table.importConfig',
        list: XEUtils.clone(importDataAPI, true)
      },
      {
        name: 'print-config',
        descKey: 'app.api.table.desc.printConfig',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '继承 setup.table.printConfig',
        list: XEUtils.clone(printAPI, true)
      },
      {
        name: 'radio-config',
        descKey: 'app.api.table.desc.radioConfig',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '继承 setup.table.radioConfig',
        list: [
          {
            name: 'reserve',
            desc: '是否保留勾选状态，对于某些场景下非常有用，比如分页之后还保留之前选中的状态（需要有 row-id）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'labelField',
            desc: '单选框显示的字段名，可以直接显示在单选框中',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkRowKey',
            desc: '默认选中开指定行（只会在初始化时被触发一次，需要有 row-id）',
            version: '',
            type: 'Row.rowId',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkMethod',
            desc: '是否允许选中的方法，该方法 Function({row}) 的返回值用来决定这一行的 Radio 是否可以选中',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式',
            version: '',
            type: 'String',
            enum: 'default（默认）, cell（点击单元格触发）, row（点击行触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'highlight',
            desc: '高亮选中行',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'checkbox-config',
        descKey: 'app.api.table.desc.checkboxConfig',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '继承 setup.table.checkboxConfig',
        list: [
          {
            name: 'reserve',
            desc: '是否保留勾选状态，对于某些场景下非常有用，比如分页之后还保留之前选中的状态（需要有 row-id）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'labelField',
            desc: '复选框显示的字段名，可以直接显示在复选框中',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkField',
            desc: '绑定选中属性，如果设置了该属性渲染速度更快（建议数据量大时使用，行数据中必须存在该字段，否则无效）',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'showHeader',
            desc: '是否显示全选按钮（如果 checkStrictly=true 则默认为 false）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'checkAll',
            desc: '默认勾选所有（只会在初始化时被触发一次）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'checkRowKeys',
            desc: '默认勾选开指定行（只会在初始化时被触发一次，需要有 row-id）',
            version: '',
            type: 'Array<Row.rowId>',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkStrictly',
            desc: '是否严格的遵循父子不互相关联的做法',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'strict',
            desc: '严格模式，当数据为空或全部禁用时，列表为禁用状态',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'checkMethod',
            desc: '是否允许勾选的方法，该方法 Function({row}) 的返回值用来决定这一行的 checkbox 是否可以勾选',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式',
            version: '',
            type: 'String',
            enum: 'default（默认）, cell（点击单元格触发）, row（点击行触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'highlight',
            desc: '高亮勾选行',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'range',
            desc: '开启复选框范围勾选功能（启用后通过鼠标在复选框的列圈选指定行）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'tooltip-config',
        descKey: 'app.api.table.desc.tooltipConfig',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '继承 setup.table.tooltipConfig',
        list: [
          {
            name: 'enabled',
            desc: '所有单元格开启 tooltip 显示',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'theme',
            desc: 'tooltip 的主题颜色',
            version: '',
            type: 'String',
            enum: 'dark,light',
            defVal: 'dark',
            list: []
          },
          {
            name: 'enterable',
            desc: '鼠标是否可进入到 tooltip 中',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'leaveDelay',
            desc: '鼠标移出后延时多少才隐藏 tooltip',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '300',
            list: []
          },
          {
            name: 'contentMethod',
            desc: '该方法 Function({items?, row?, rowIndex?, $rowIndex, column, columnIndex, $columnIndex, type, cell, $event}) 接收一个字符串，可以通过返回值来重写默认的提示内容',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'expand-config',
        descKey: 'app.api.table.desc.expandConfig',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '继承 setup.table.expandConfig',
        list: [
          {
            name: 'labelField',
            desc: '展开列显示的字段名，可以直接显示在单元格中',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'expandAll',
            desc: '默认展开所有行（只会在初始化时被触发一次）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'expandRowKeys',
            desc: '默认展开指定行（只会在初始化时被触发一次，需要有 row-id）',
            version: '',
            type: 'Array<Row.rowId>',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'accordion',
            desc: '每次只能展开一行',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式',
            version: '',
            type: 'String',
            enum: 'default（点击按钮触发）, cell（点击单元格触发）, row（点击行触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'lazy',
            desc: '是否使用懒加载',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'loadMethod',
            desc: '该方法 Function({row, row, rowIndex?, $rowIndex?}) 用于异步加载展开后的内容（必须返回 Promise<any[]> 对象）',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'toggleMethod',
            desc: '该方法 Function({expanded, column, columnIndex, $columnIndex, row, rowIndex?, $rowIndex?}) 在展开或关闭触发之前调用，可以通过返回值来决定是否允许继续执行',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'visibleMethod',
            desc: '该函数 Function({column, columnIndex, $columnIndex, row, rowIndex?, $rowIndex?}) 的返回值用来决定是否允许显示展开按钮',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconOpen',
            desc: '自定义展开后显示的图标',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconClose',
            desc: '自定义收起后显示的图标',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconLoaded',
            desc: '自定义懒加载中显示的图标',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'tree-config',
        descKey: 'app.api.table.desc.treeConfig',
        version: '',
        type: 'Boolean, Object',
        enum: '',
        defVal: '继承 setup.table.treeConfig',
        list: [
          {
            name: 'children',
            desc: '树子节点的属性',
            version: '',
            type: 'String',
            enum: '',
            defVal: 'children',
            list: []
          },
          {
            name: 'indent',
            desc: '树节点的缩进',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '20',
            list: []
          },
          {
            name: 'line',
            desc: '树节点的连接线（启用连接线会降低渲染性能）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'expandAll',
            desc: '默认展开所有子孙树节点（只会在初始化时被触发一次）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'expandRowKeys',
            desc: '默认展开指定树节点（只会在初始化时被触发一次，需要有 row-id）',
            version: '',
            type: 'Array<Row.rowId>',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'accordion',
            desc: '对于同一级的节点，每次只能展开一个',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式',
            version: '',
            type: 'String',
            enum: 'default（点击按钮触发）, cell（点击单元格触发）, row（点击行触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'lazy',
            desc: '是否使用懒加载（启用后只有指定 hasChild 的节点才允许被点击）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'hasChild',
            desc: '只对 lazy 启用后有效，标识是否存在子节点，从而控制是否允许被点击',
            version: '',
            type: 'String',
            enum: '',
            defVal: 'hasChild',
            list: []
          },
          {
            name: 'loadMethod',
            desc: '该方法 Function({row}) 用于异步加载子节点（必须返回 Promise<any[]> 对象）',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'toggleMethod',
            desc: '该方法 Function({expanded, row, column, columnIndex, $columnIndex}) 在展开或关闭触发之前调用，可以通过返回值来决定是否允许继续执行',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconOpen',
            desc: '自定义展开后显示的图标',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconClose',
            desc: '自定义收起后显示的图标',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconLoaded',
            desc: '自定义懒加载中显示的图标',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'context-menu',
        descKey: 'app.api.table.desc.contextMenu',
        version: '',
        type: 'Boolean, Object',
        enum: '',
        defVal: '继承 setup.table.contextMenu',
        list: [
          {
            name: 'header',
            desc: '表头的快捷菜单',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '',
            list: XEUtils.clone(contextMenuAPI, true)
          },
          {
            name: 'body',
            desc: '内容的快捷菜单',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '',
            list: XEUtils.clone(contextMenuAPI, true)
          },
          {
            name: 'footer',
            desc: '表尾的快捷菜单',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '',
            list: XEUtils.clone(contextMenuAPI, true)
          },
          {
            name: 'trigger',
            desc: '触发方式',
            version: '',
            type: 'String',
            enum: 'default（默认触发）, cell（右键单元格触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'visibleMethod',
            desc: '该函数 Function({type, options, columns, row?, rowIndex?, column?, columnIndex?}) 的返回值用来决定是否允许显示右键菜单（对于需要对菜单进行权限控制时可能会用到）',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'className',
            desc: '菜单面板的 className',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'mouse-config',
        descKey: 'app.api.table.desc.mouseConfig',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'selected',
            desc: '开启单元格选中功能',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'keyboard-config',
        descKey: 'app.api.table.desc.keyboardConfig',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'isArrow',
            desc: '开启方向键功能',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isDel',
            desc: '开启删除键功能',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isEnter',
            desc: '开启回车键功能',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isTab',
            desc: '开启 Tab 键功能',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          // {
          //   name: 'isCut',
          //   desc: '开启复制粘贴功能',
          //   type: 'Boolean',
          //   enum: '',
          //   defVal: 'false',
          //   list: []
          // },
          {
            name: 'isEdit',
            desc: '开启任意键进入编辑（功能键除外）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'editMethod',
            desc: '只对 isEdit=true 有效，用于重写选中编辑处理逻辑，该函数 Function({row, rowIndex, column, columnIndex}) 可以返回 false 来阻止默认行为',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'edit-config',
        descKey: 'app.api.table.desc.editConfig',
        version: '',
        type: 'Boolean, Object',
        enum: '',
        defVal: '继承 setup.table.editConfig',
        list: [
          {
            name: 'trigger',
            desc: '触发方式',
            version: '',
            type: 'String',
            enum: 'manual（手动触发方式，只能用于 mode=row）,click（点击触发编辑）,dblclick（双击触发编辑）',
            defVal: 'click',
            list: []
          },
          {
            name: 'mode',
            desc: '编辑模式',
            version: '',
            type: 'String',
            enum: 'cell（单元格编辑模式）,row（行编辑模式）',
            defVal: 'cell',
            list: []
          },
          {
            name: 'showIcon',
            desc: '是否显示列头编辑图标',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'showStatus',
            desc: '只对 keep-source 开启有效，是否显示单元格值的修改状态',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'autoClear',
            desc: '当点击非编辑列之后，是否自动清除单元格的激活状态',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'activeMethod',
            desc: '该方法 Function({row, rowIndex, column, columnIndex}) 的返回值用来决定该单元格是否允许编辑',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'icon',
            desc: '自定义可编辑列的状态图标',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'valid-config',
        descKey: 'app.api.table.desc.validConfig',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'autoPos',
            desc: '是否自动定位到校验不通过的单元格',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'message',
            abandoned: true,
            desc: '校验提示框的方式',
            version: '',
            type: 'String',
            enum: 'default（如果不设置高度，则默认第一行使用 tooltip，之后使用 inline）, none（关闭提示）, inline（强制使用内联的提示）, tooltip（强制使用 tooltip 提示）',
            defVal: 'default',
            list: []
          },
          {
            name: 'maxWidth',
            desc: '校验提示框的最大宽度（对于某些特殊场景可能会用到）',
            version: '',
            type: 'String, Number',
            enum: '',
            defVal: '320',
            list: []
          }
        ]
      },
      {
        name: 'edit-rules',
        descKey: 'app.api.table.desc.editRules',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'required',
            desc: '是否必填',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'min',
            desc: '校验值最小长度（如果 type=number 则比较值大小）',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'max',
            desc: '校验值最大长度（如果 type=number 则比较值大小）',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'type',
            desc: '数据校验的类型',
            version: '',
            type: 'String',
            enum: 'number, string',
            defVal: 'string',
            list: []
          },
          {
            name: 'pattern',
            desc: '正则校验',
            version: '',
            type: 'RegExp, String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'validator',
            desc: '自定义校验方法 Function({ cellValue, rule, rules, row, rowIndex，column, columnIndex }) 返回一个 Promise<new Error("提示消息")>',
            version: '',
            type: 'Promise<e?: Error>',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'message',
            desc: '校验提示内容（支持开启国际化）',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发校验方式（如果为空，则为常规校验方式； 如果指定触发方式，则只会在匹配情况下进行校验）',
            version: '',
            type: 'String',
            enum: 'blur,change',
            defVal: '',
            list: []
          },
          {
            name: 'maxWidth',
            desc: '提示框的最大宽度（对于某些特殊场景可能会用到）',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '320',
            list: []
          }
        ]
      },
      {
        name: 'empty-render',
        descKey: 'app.api.table.desc.emptyRender',
        version: '',
        type: 'Boolean, Object',
        enum: '',
        defVal: '继承 setup.table.emptyRender',
        list: [
          {
            name: 'name',
            desc: '渲染器名称',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'props',
            desc: '渲染的参数（请查看目标渲染的 Props）',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'attrs',
            desc: '渲染的属性（请查看目标渲染的 Attribute）',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'events',
            desc: '渲染组件的事件（请查看目标渲染的 Events）',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '{}, ...[目标渲染的 arguments]',
            list: []
          }
        ]
      },
      {
        name: 'custom-config',
        descKey: 'app.api.table.desc.customConfig',
        version: '',
        type: 'Boolean, Object',
        enum: '',
        defVal: '继承 setup.table.customConfig',
        list: [
          {
            name: 'storage',
            desc: '是否启用 localStorage 本地保存，会将列操作状态保留在本地',
            version: '',
            type: 'Boolean, Object',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'visible',
                desc: '启用显示/隐藏列状态',
                version: '',
                type: 'Boolean',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'resizable',
                desc: '启用列宽状态',
                version: '',
                type: 'Boolean',
                enum: '',
                defVal: '',
                list: []
              }
            ]
          },
          {
            name: 'checkMethod',
            desc: '自定义列是否允许列选中的方法，该方法 Function({column}) 的返回值用来决定这一列的 checkbox 是否可以选中',
            version: '',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'animat',
        desc: '表格动画效果开关（关闭后视觉效果更快）',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '默认 true，继承 setup.table.animat',
        list: []
      },
      {
        name: 'cloak',
        desc: '可以设置为 true 来避免初始化渲染时的闪动',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: '默认 false，继承 setup.table.cloak',
        list: []
      },
      {
        name: 'delay-hover',
        desc: '当表格发生拖动、滚动...等行为时，至少多少毫秒之后才允许触发 hover 事件',
        version: '',
        type: 'Number',
        enum: '',
        defVal: '默认 250，继承 setup.table.delayHover',
        list: []
      },
      {
        name: 'scroll-x',
        desc: '横向虚拟滚动配置（tree-config 启用后无效）',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '继承 setup.table.scrollX',
        list: [
          {
            name: 'gt',
            desc: '指定大于指定列时自动启动横向虚拟滚动，如果为 0 则总是启用，如果为 -1 则关闭（注：启用横向虚拟滚动之后将不能支持分组表头）',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '40',
            list: []
          },
          {
            name: 'oSize',
            desc: '当剩余数据少于指定列时触发重新渲染',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '默认自动计算',
            list: []
          },
          {
            name: 'rSize',
            desc: '每次渲染条数',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '默认自动计算',
            list: []
          },
          {
            name: 'vSize',
            desc: '指定可视区域条数',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '默认自动计算',
            list: []
          }
        ]
      },
      {
        name: 'scroll-y',
        desc: '纵向虚拟滚动配置（注：当 tree-config 启用后纵向虚拟滚动将无效）',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '继承 setup.table.scrollY',
        list: [
          {
            name: 'gt',
            desc: '指定大于指定行时自动启动纵向虚拟滚动，如果为 0 则总是启用，如果为 -1 则关闭（注：启用纵向虚拟滚动之后将不能支持动态行高）',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '50',
            list: []
          },
          {
            name: 'oSize',
            desc: '当剩余数据少于指定行时触发重新渲染',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '默认自动计算',
            list: []
          },
          {
            name: 'rSize',
            desc: '每次渲染条数',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '默认自动计算',
            list: []
          },
          {
            name: 'vSize',
            desc: '指定可视区域条数',
            version: '',
            type: 'Number',
            enum: '',
            defVal: '默认自动计算',
            list: []
          },
          // {
          //   name: 'rHeight',
          //   desc: '指定行高',
          //   version: '',
          //   type: 'Number',
          //   enum: '',
          //   defVal: '默认自动计算',
          //   list: []
          // },
          {
            name: 'adaptive',
            desc: '自动适配最优的渲染方式',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          }
        ]
      // },
      // {
      //   name: 'rHeights',
      //   desc: '重写表格默认高度,必须和 scss 中的变量一致（用于重写表格默认行高的场景，谨慎使用，99%场景不需要更改）',
      //   version: '',
      //   type: 'Object',
      //   enum: '',
      //   defVal: '',
      //   list: [
      //     {
      //       name: 'default',
      //       desc: '表格 default size',
      //       version: '',
      //       type: 'Number',
      //       enum: '',
      //       defVal: '48',
      //       list: []
      //     },
      //     {
      //       name: 'medium',
      //       desc: '表格 medium size',
      //       version: '',
      //       type: 'Number',
      //       enum: '',
      //       defVal: '44',
      //       list: []
      //     },
      //     {
      //       name: 'small',
      //       desc: '表格 small size',
      //       version: '',
      //       type: 'Number',
      //       enum: '',
      //       defVal: '40',
      //       list: []
      //     },
      //     {
      //       name: 'mini',
      //       desc: '表格 mini size',
      //       version: '',
      //       type: 'Number',
      //       enum: '',
      //       defVal: '36',
      //       list: []
      //     }
      //   ]
      },
      {
        name: 'params',
        descKey: 'app.api.table.desc.params',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Slots',
    descKey: 'app.api.title.slots',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'empty',
        descKey: 'app.api.table.desc.empty',
        version: '',
        type: '',
        enum: '',
        defVal: '{}',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    descKey: 'app.api.title.events',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'keydown',
        desc: '当表格被激活且键盘被按下时会触发的事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      },
      {
        name: 'current-change',
        descKey: 'app.api.table.desc.currentChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'radio-change',
        descKey: 'app.api.table.desc.radioChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'checkbox-change',
        descKey: 'app.api.table.desc.checkboxChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ records, reserves, indeterminates, checked, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'checkbox-all',
        descKey: 'app.api.table.desc.checkboxAll',
        version: '',
        type: '',
        enum: '',
        defVal: '{ records, reserves, indeterminates, checked, $event }',
        list: []
      },
      {
        name: 'cell-click',
        descKey: 'app.api.table.desc.cellClick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, triggerRadio, triggerCheckbox, triggerTreeNode, triggerExpandNode, $event }',
        list: []
      },
      {
        name: 'cell-dblclick',
        descKey: 'app.api.table.desc.cellDblclick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'cell-context-menu',
        descKey: 'app.api.table.desc.cellContextmenu',
        version: '',
        type: '',
        enum: '',
        defVal: '{ type, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'cell-mouseenter',
        descKey: 'app.api.table.desc.cellMouseenter',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'cell-mouseleave',
        descKey: 'app.api.table.desc.cellMouseleave',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'header-cell-click',
        descKey: 'app.api.table.desc.headerCellClick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $rowIndex, column, columnIndex, $columnIndex, triggerResizable, triggerSort, triggerFilter, $event }',
        list: []
      },
      {
        name: 'header-cell-dblclick',
        descKey: 'app.api.table.desc.headerCellDblclick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'header-cell-context-menu',
        descKey: 'app.api.table.desc.headerCellContextmenu',
        version: '',
        type: '',
        enum: '',
        defVal: '{ type, column, columnIndex, $event }',
        list: []
      },
      {
        name: 'footer-cell-click',
        descKey: 'app.api.table.desc.footerCellClick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ items, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'footer-cell-dblclick',
        descKey: 'app.api.table.desc.footerCellDblclick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ items, $rowIndex, column, columnIndex, $columnIndex, $event}',
        list: []
      },
      {
        name: 'footer-cell-context-menu',
        descKey: 'app.api.table.desc.footerCellContextmenu',
        version: '',
        type: '',
        enum: '',
        defVal: '{ type, column, columnIndex, $event}',
        list: []
      },
      {
        name: 'sort-change',
        descKey: 'app.api.table.desc.sortChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ column, property, order, $event }',
        list: []
      },
      {
        name: 'filter-change',
        descKey: 'app.api.table.desc.filterChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ column, property, values, datas, filters, $event }',
        list: []
      },
      {
        name: 'resizable-change',
        descKey: 'app.api.table.desc.resizableChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'toggle-row-expand',
        descKey: 'app.api.table.desc.toggleExpandChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ expanded, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'toggle-tree-expand',
        descKey: 'app.api.table.desc.toggleTreeChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ expanded, row, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'context-menu-click',
        descKey: 'app.api.table.desc.contextMenuClick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ menu, type, row, rowIndex, column, columnIndex, $event }',
        list: []
      },
      {
        name: 'edit-closed',
        descKey: 'app.api.table.desc.editClosed',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }',
        list: []
      },
      {
        name: 'edit-actived',
        descKey: 'app.api.table.desc.editActived',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }',
        list: []
      },
      {
        name: 'edit-disabled',
        descKey: 'app.api.table.desc.editDisabled',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }',
        list: []
      },
      {
        name: 'valid-error',
        descKey: 'app.api.table.desc.validError',
        version: '',
        type: '',
        enum: '',
        defVal: '{ rule, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }',
        list: []
      },
      {
        name: 'scroll',
        descKey: 'app.api.table.desc.scroll',
        version: '',
        type: '',
        enum: '',
        defVal: '{ type, scrollTop, scrollLeft, isX, isY, $event }',
        list: []
      },
      {
        name: 'custom',
        desc: '如果与工具栏关联，在自定义列按钮被手动点击后会触发该事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ type, $event}',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    descKey: 'app.api.title.methods',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'loadData(data)',
        desc: '加载数据（对于表格数据需要重载、局部递增场景下可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'data: array',
        list: []
      },
      {
        name: 'reloadData(data)',
        desc: '加载数据并清除所有状态（对于表格数据需要重载、局部递增的场景中可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'data: array',
        list: []
      },
      {
        name: 'updateData()',
        desc: '手动处理数据（对于手动更改了排序、筛选...等条件后需要重新处理数据时可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'syncData()',
        desc: '同步 data 数据；如果用了该方法，那么组件将不再记录增删改的状态，只能自行实现对应逻辑（对于某些特殊的场景，比如深层树节点元素发生变动时可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'reloadRow(rows, record, field)',
        desc: '局部加载行数据并恢复到初始状态（对于行数据需要局部更改的场景中可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'rows: Row | Row[], record: object, field?: string',
        list: []
      },
      {
        name: 'reloadExpandContent(rows)',
        desc: '用于懒加载展开行，重新加载展开行的内容',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'rows: Row | Row[]',
        list: []
      },
      {
        name: 'reloadTreeChilds(rows)',
        desc: '用于懒加载树表格，重新加载子节点',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'rows: Row | Row[]',
        list: []
      },
      {
        name: 'loadColumn(columns)',
        desc: '加载列配置（对于表格列需要重载、局部递增场景下可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'columns: array',
        list: []
      },
      {
        name: 'reloadColumn(columns)',
        desc: '加载列配置并恢复到初始状态（对于表格列需要重载、局部递增场景下可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'columns: array',
        list: []
      },
      {
        name: 'refreshColumn()',
        desc: '刷新列配置（对于动态修改属性、显示/隐藏列等场景下可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'createRow(records)',
        desc: '创建 Row|Rows 对象（对于某些特殊场景需要对数据进行手动插入时可能会用到）',
        version: '',
        type: 'Promise<Row|Rows>',
        enum: '',
        defVal: 'records: object | array',
        list: []
      },
      {
        name: 'createData(records)',
        desc: '创建 data 对象（对于某些特殊场景可能会用到，会自动对数据的字段名进行检测，如果不存在就自动定义）',
        version: '',
        type: 'Promise<Array>',
        enum: '',
        defVal: 'records: array',
        list: []
      },
      {
        name: 'insert(records)',
        desc: '往表格插入临时数据，从第一行新增一行或多行新数据',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: 'records?: object | array',
        list: []
      },
      {
        name: 'insertAt(records, row)',
        desc: '往表格插入临时数据，从指定位置插入一行或多行；第二个参数：row 指定位置（不支持树表格）、null从第一行插入、-1 从最后插入',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: 'records: Array<object>, row?: Row',
        list: []
      },
      {
        name: 'revertData(rows, field)',
        desc: '只对 keep-source 开启有效，还原指定行 row 或者整个表格的数据',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'rows: Row | Array<Row>, field?: string',
        list: []
      },
      {
        name: 'remove(rows)',
        desc: '删除指定行数据，指定 row 或 [row, ...] 删除多条数据，如果为空则删除所有数据',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: 'rows: Row | Array<Row>',
        list: []
      },
      {
        name: 'removeCheckboxRow()',
        desc: '删除复选框选中的行数据',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'removeRadioRow()',
        desc: '删除单选框选中的行数据',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'removeCurrentRow()',
        desc: '删除当前行选中的行数据',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRowIndex(row)',
        desc: '根据 row 获取相对于 data 中的索引',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: '_getRowIndex(row)',
        desc: '根据 row 获取相对于当前数据中的索引',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: '$getRowIndex(row)',
        desc: '根据 row 获取渲染中的虚拟索引',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'getRowNode(tr)',
        desc: '根据 tr 元素获取对应的 row 信息',
        version: '',
        type: '{item, items, index, parent}',
        enum: '',
        defVal: 'tr: Element',
        list: []
      },
      {
        name: 'getColumns(columnIndex)',
        desc: '获取表格的可视列，也可以指定索引获取列',
        version: '',
        type: 'Array',
        enum: '',
        defVal: 'columnIndex?: number',
        list: []
      },
      {
        name: 'getColid(column)',
        desc: '根据列获取列的唯一主键',
        version: '',
        type: 'String',
        enum: '',
        defVal: 'column: ColumnConfig',
        list: []
      },
      {
        name: 'getColumnById(colid)',
        desc: '根据列的唯一主键获取列',
        version: '',
        type: 'Column',
        enum: '',
        defVal: 'colid: string',
        list: []
      },
      {
        name: 'getColumnByField(field)',
        desc: '根据列的字段名获取列',
        version: '',
        type: 'Column',
        enum: '',
        defVal: 'field: string',
        list: []
      },
      {
        name: 'getTableColumn()',
        desc: '获取当前表格的列（收集到的全量列、全量表头列、处理条件之后的全量表头列、当前渲染中的表头列）',
        version: '',
        type: '{collectColumn, fullColumn, visibleColumn, tableColumn}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getColumnIndex(column)',
        desc: '根据 column 获取相对于 columns 中的索引',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'column: ColumnConfig',
        list: []
      },
      {
        name: '$getColumnIndex(column)',
        desc: '根据 column 获取渲染中的虚拟索引',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'column',
        list: []
      },
      {
        name: '_getColumnIndex(column)',
        desc: '根据 column 获取相对于当前表格列中的索引（分组表头可能会用到）',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'column',
        list: []
      },
      {
        name: 'getColumnNode(cell)',
        desc: '根据 th/td 元素获取对应的 column 信息',
        version: '',
        type: '{item, items, index, parent}',
        enum: '',
        defVal: 'cell: Element',
        list: []
      },
      {
        name: 'getSortColumn()',
        desc: '获取当前排序的 column 信息',
        version: '',
        type: 'Column',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getTableData()',
        desc: '获取当前表格的数据（完整的全量表体数据、处理条件之后的全量表体数据、当前渲染中的表体数据、当前渲染中的表尾数据）',
        version: '',
        type: '{fullData, visibleData, tableData, footerData}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRowById(rowid)',
        desc: '根据行的唯一主键获取行',
        version: '',
        type: 'String',
        enum: '',
        defVal: 'rowid: string',
        list: []
      },
      {
        name: 'getRowid(row)',
        desc: '根据行获取行的唯一主键',
        version: '',
        type: 'Row',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'getData(rowIndex)',
        desc: '获取数据，和 data 的行为一致，也可以指定索引获取数据',
        version: '',
        type: 'Array',
        enum: '',
        defVal: 'rowIndex?: number',
        list: []
      },
      {
        name: 'getRecordset()',
        desc: '获取表格数据集（获取新增、删除、更改的数据，对于增删改查表格非常方便）',
        version: '',
        type: '{insertRecords, removeRecords, updateRecords}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getInsertRecords()',
        desc: '用于 edit-config，获取新增的临时数据',
        version: '',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRemoveRecords()',
        desc: '获取已删除的数据',
        version: '',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getUpdateRecords()',
        desc: '只对 keep-source 开启有效，获取已修改的数据',
        version: '',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCurrentColumn()',
        desc: '用于 highlight-current-column，获取当前列',
        version: '',
        type: 'ColumnConfig',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCurrentRecord()',
        desc: '用于 highlight-current-row，获取当前行的行数据',
        version: '',
        type: 'Row',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRadioRecord()',
        desc: '用于 type=radio，获取当已选中的行数据',
        version: '',
        type: 'Row',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCheckboxRecords()',
        desc: '用于 type=checkbox，获取已选中的行数据',
        version: '',
        type: 'Array<Row>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRadioReserveRecord()',
        desc: '用于 radio-config.reserve，获取已保留选中的行数据',
        version: '',
        type: 'Row',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCheckboxReserveRecords()',
        desc: '用于 checkbox-config.reserve，获取已保留选中的行数据',
        version: '',
        type: 'Array<Row>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCheckboxIndeterminateRecords()',
        desc: '用于 type=checkbox，获取半选状态的行数据',
        version: '',
        type: 'Array<Row>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRowExpandRecords()',
        desc: '用于 expand-config，用于展开行，获取已展开的行数据',
        version: '',
        type: 'Array<Row>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getTreeExpandRecords()',
        desc: '用于 tree-config，用于树表格，获取已展开的节点（注意，即使父节点被收起，只要该节点还处于展开状态都能获取到）',
        version: '',
        type: 'Array<Row>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getActiveRecord()',
        desc: '用于 edit-config，获取已激活的行数据',
        version: '',
        type: '{row,rowIndex,$rowIndex,column,columnIndex,$columnIndex}',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'getSelectedCell()',
        desc: '用于 mouse-config.selected，获取选中的单元格信息',
        version: '',
        type: '{row,column}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getScroll()',
        desc: '获取表格的滚动状态',
        version: '',
        type: '{virtualX, virtualY, scrollTop, scrollLeft}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'isActiveByRow(row)',
        desc: '用于 edit-config，判断行是否为激活编辑状态',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'isInsertByRow(row)',
        desc: '用于 edit-config，判断行是否为新增的临时数据',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'isUpdateByRow(row, field)',
        desc: '只对 keep-source 开启有效，判断行数据是否发生改变',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row, field?: string',
        list: []
      },
      {
        name: 'isAllCheckboxChecked()',
        desc: '用于 type=checkbox，判断复选行是否被全部选中',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'isCheckedByCheckboxRow(row)',
        desc: '用于 type=checkbox，判断复选行数据是否勾选',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'isCheckedByRadioRow(row)',
        desc: '用于 type=radio，判断单选行数据是否勾选',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'isExpandByRow(row)',
        desc: '用于 expand-config，判断行是否为展开状态',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'isRowExpandLoaded(row)',
        desc: '用于 expand-config.lazy，用于懒加载展开行，判断展开行是否懒加载完成',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'isTreeExpandByRow(row)',
        desc: '用于 tree-config，判断行是否为树形节点展开状态',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'isTreeExpandLoaded(row)',
        desc: '用于 tree-config.lazy，用于懒加载树表格，判断树节点是否懒加载完成',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'isFilter(column)',
        desc: '判断指定列是否为筛选状态，如果为空则判断所有列',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'column?: Column',
        list: []
      },
      {
        name: 'setFilter(column, options)',
        desc: '用于 filters，修改筛选列表（在筛选条件更新之后可以调用 updateData 函数处理表格数据）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'column: Column, options: []',
        list: []
      },
      {
        name: 'setActiveRow(row)',
        desc: '用于 edit-config，激活行编辑，如果是 mode=cell 则默认激活第一个单元格',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'setActiveCell(row, field)',
        desc: '用于 edit-config，激活单元格编辑',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'row: Row, field: string',
        list: []
      },
      {
        name: 'setSelectCell(row, field)',
        desc: '用于 mouse-config.selected，选中指定的单元格',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'row: Row, field: string',
        list: []
      },
      {
        name: 'setRowExpansion(rows, checked)',
        desc: '用于 expand-config，设置展开行，二个参数设置这一行展开与否',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'rows: Row | Array<Row>, checked: boolean',
        list: []
      },
      {
        name: 'setAllRowExpansion(checked)',
        desc: '用于 expand-config，设置所有行的展开与否（如果是关闭所有行，可以使用 clearRowExpand 快速清除）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'checked: boolean',
        list: []
      },
      {
        name: 'setTreeExpansion(rows, checked)',
        desc: '用于 tree-config，设置展开树形节点，二个参数设置这一行展开与否',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'rows: Row | Array<Row>, checked: boolean',
        list: []
      },
      {
        name: 'setAllTreeExpansion(checked)',
        desc: '用于 tree-config，设置所有树节点的展开与否（如果是关闭所有树节点，可以使用 clearTreeExpand 快速清除）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'checked: boolean',
        list: []
      },
      {
        name: 'setCurrentRow(row)',
        desc: '用于 highlight-current-row，设置某一行为高亮状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'setCurrentColumn(column)',
        desc: '用于 highlight-current-column，设置某列行为高亮状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'column: ColumnConfig',
        list: []
      },
      {
        name: 'setRadioRow(row)',
        desc: '用于 type=radio，设置某一行为选中状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'setCheckboxRow(rows, checked)',
        desc: '用于 type=checkbox，设置行为选中状态，第二个参数为选中与否',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'rows: Row | Array<Row>, checked: boolean',
        list: []
      },
      {
        name: 'setAllCheckboxRow(checked)',
        desc: '用于 type=checkbox，设置所有行的选中状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'checked: boolean',
        list: []
      },
      {
        name: 'toggleCheckboxRow(row)',
        desc: '用于 type=checkbox，切换某一行的选中状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'toggleAllCheckboxRow()',
        desc: '用于 type=checkbox，切换所有行的选中状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'toggleRowExpansion(row)',
        desc: '用于 type=expand，切换展开行的状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'toggleTreeExpansion(row)',
        desc: '用于 tree-config，切换展开树形节点的状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'clearCurrentRow()',
        desc: '用于 highlight-current-row，手动清空当前高亮的状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearCurrentColumn()',
        desc: '用于 highlight-current-column，手动清空当前高亮的状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearRadioRow()',
        desc: '用于 type=radio，手动清空用户的选择',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearRadioReserve()',
        desc: '用于 radio-config.reserve，手动清空用户保留选中的行数据',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearCheckboxRow()',
        desc: '用于 type=checkbox，手动清空用户的选择',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearCheckboxReserve()',
        desc: '用于 checkbox-config.reserve，手动清空用户保留选中的行数据',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearRowExpand()',
        desc: '用于 type=expand，手动清空展开行状态，数据会恢复成未展开的状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearRowExpandLoaded()',
        desc: '用于 expand-config.lazy，手动清空懒加载展开行的状态，数据会恢复成未展开的状态，当再次展开时会重新加载',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearTreeExpand()',
        desc: '用于 tree-config，手动清空树形节点的展开状态，数据会恢复成未展开的状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearTreeExpandLoaded()',
        desc: '用于 tree-config.lazy，手动清空懒加载树节点的状态，数据会恢复成未展开的状态，当再次展开时会重新加载',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearSort()',
        desc: '手动清空排序条件，数据会恢复成未排序的状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearFilter(column)',
        desc: '手动清空筛选条件（如果不传 column 则清空所有筛选条件），数据会恢复成未筛选的状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'column?: ColumnConfig',
        list: []
      },
      {
        name: 'clearSelected()',
        desc: '手动清除单元格选中状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearActived()',
        desc: '手动清除单元格激活状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      // {
      //   name: 'clearCopyed()',
      //   desc: '手动清空已复制的内容',
      //   type: 'Promise',
      //   enum: '',
      //   defVal: '',
      //   list: []
      // },
      {
        name: 'clearData(rows, field)',
        desc: '手动清空单元格内容，如果不创参数，则清空整个表格内容，如果传了行则清空指定行内容，如果传了指定字段，则清空该字段内容',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'rows?: Row | Array<Row>, field?: string',
        list: []
      },
      {
        name: 'clearScroll()',
        desc: '手动清除滚动相关信息，还原到初始状态',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearValidate()',
        desc: '手动清除校验',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearAll()',
        desc: '手动清除表格所有条件，还原到初始状态（对于增删改查的场景中可能会用到，比如在数据保存之后清除表格缓存）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'resetColumn(options)',
        desc: '手动重置列的显示隐藏、列宽拖动的状态；如果为 true 则重置所有状态（如果已关联工具栏，则会同步更新）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'options: boolean | object',
        list: [
          {
            name: 'visible',
            desc: '是否重置可视列状态',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'resizable',
            desc: '是否重置列宽拖动状态',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'closeFilter()',
        desc: '手动关闭筛选面板（某些特殊场景可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clostTooltip()',
        desc: '手动关闭 tooltip 提示（某些特殊场景可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'closeMenu()',
        desc: '手动关闭快捷菜单（某些特殊场景可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'updateFooter()',
        desc: '手动更新表尾（对于某些需要频繁更新的场景下可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'updateStatus(scope)',
        desc: '更新单元格状态（当使用自定义渲染时可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'scope: { row, column }',
        list: []
      },
      {
        name: 'hideColumn(column)',
        desc: '隐藏指定列',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'column: ColumnConfig',
        list: []
      },
      {
        name: 'showColumn(column)',
        desc: '显示指定列',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'column: ColumnConfig',
        list: []
      },
      {
        name: 'scrollTo(scrollLeft, scrollTop)',
        desc: '如果有滚动条，则滚动到对应的位置',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'scrollLeft?: number, scrollTop?: number',
        list: []
      },
      {
        name: 'scrollToRow(row)',
        desc: '如果有滚动条，则滚动到对应的行（对于某些特定的场景可能会用到，比如定位到某一行）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'scrollToColumn(column)',
        desc: '如果有滚动条，则滚动到对应的列（对于某些特定的场景可能会用到，比如定位到某一列）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'column: ColumnConfig',
        list: []
      },
      // {
      //   name: 'scrollToTreeRow(row)',
      //   desc: '对于树形结构中，可以直接滚动到指定深层节点中（对于某些特定的场景可能会用到，比如定位到某一节点）',
      //   version: '',
      //   type: 'Promise',
      //   enum: '',
      //   defVal: 'column: ColumnConfig',
      //   list: []
      // },
      {
        name: 'sort(field, order)',
        desc: '手动对表格进行排序（如果 order 为空则自动切换排序）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'field: string, order?: \'desc\' | \'asc\'',
        list: []
      },
      {
        name: 'recalculate()',
        desc: '重新计算表格（对于某些特殊场景可能会用到，比如隐藏的表格、重新计算列宽...等）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'refreshScroll()',
        desc: '刷新滚动操作，手动同步滚动相关位置（对于某些特殊的操作，比如滚动条错位、固定列不同步）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'validate(rows, callback)',
        desc: '表格校验函数，如果指定 row 或 rows 则校验指定一行或多行，否则校验整个表格。该回调函数会在校验结束后被调用 callback(errMap)。若不传入回调函数，则会返回一个 promise',
        version: '',
        type: 'Promise<ErrMap>',
        enum: '',
        defVal: 'rows?: Row | Array<Row>, callback?: Function',
        list: []
      },
      {
        name: 'fullValidate(rows, callback)',
        desc: '表格完整校验函数，和 validate 的区别就是会对全量数据的所有规则进行完整校验',
        version: '',
        type: 'Promise<ErrMap>',
        enum: '',
        defVal: 'rows?: Row | Array<Row>, callback?: Function',
        list: []
      },
      {
        name: 'exportData(options)',
        desc: '将表格数据导出（只支持基本数据结构，目前不支持分组、合并等；树结构和虚拟滚动只允许导出数据源）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'options: object',
        list: XEUtils.clone(exportDataAPI, true)
      },
      {
        name: 'openExport(options)',
        desc: '打开高级导出（只对 export-config 启用后有效）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'options: object',
        list: XEUtils.clone(exportDataAPI, true).concat([
          {
            name: 'isPrint',
            desc: '是否需要打印按钮',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          }
        ])
      },
      {
        name: 'importData(options)',
        desc: '将数据导入表格（只支持基本数据结构，目前不支持分组、合并等）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'options: object',
        list: XEUtils.clone(importDataAPI, true)
      },
      {
        name: 'openImport(options)',
        desc: '打开高级导入（只对 import-config 启用后有效）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'options: object',
        list: XEUtils.clone(importDataAPI, true)
      },
      {
        name: 'print(options)',
        desc: '打印（只支持基本数据结构，目前不支持分组、合并等）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: 'options: object',
        list: XEUtils.clone(printAPI, true)
      },
      {
        name: 'readFile(options)',
        desc: '读取本地文件',
        version: '',
        type: 'Promise<Event>',
        enum: '',
        defVal: 'options: object',
        list: [
          {
            name: 'multiple',
            desc: '是否允许多选',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'types',
            desc: '支持选取的文件类型',
            version: '',
            type: 'Array',
            enum: '',
            defVal: '[\'csv\', \'html\', \'xml\', \'txt\']',
            list: []
          },
          {
            name: 'message',
            desc: '是否显示内置的消息提示',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          }
        ]
      }
    ]
  }
]

export default apis
