# tree-grid

> 基于vue1.0和iview1.0.1组件库的树型表格
  主要使用了 iview(checkbox组件 icon组件) 同时部分表格渲染模仿iview表格 支持[iview](https://github.com/iview/iview) 

# 版本支持
``` bash
  iview已经支持vue1和2了, 下载源码后组件内部只需修改 ready()事件即可 
```

### [DEMO](https://huanglong6828.github.io/vue-tree-grid/dist/) 如果对您如果有帮助的话,给颗星谢谢
## API
### props
| 属性        | 说明           | 类型  |
| ------------- |:-------------:| -----:|
| items| 显示的结构化数据|Array|
| columns| 表格列的配置描述|Array|

### columns 
| 属性        | 说明           | 类型 | 默认值|
| ------------- |:-------------:| -----:|-----:|
| sortable| 排序功能|Boolean|false|
| type|'selection':多选功能|String|#
| type|'action' 操作功能,  必填参数:actions:[{}]|String|#

 ### events
| 事件名        | 说明           | 返回值  |
| ------------- |:-------------:| -----:|
| @on-row-click| 单击行或者单击操作按钮方法|data,$event,index|
| @on-selection-change|返回选中数组 |arr|       
| @on-sort-change | 表格列的配置描述|返回key和排序规则|


## 使用方式

```html
<template>
    <tree-grid 
        :items='data' 
        :columns='columns'
        @on-row-click='rowClick'
        @on-selection-change='selectionClick'
        @on-sort-change='sortClick'
      ></tree-grid>
</template>
<script>
    import TreeGrid from './components/TreeGrid'
    export default {
        data() {
            return {
                columns: [{
                    type: 'selection'
                }, {
                    title: '编码',
                    key: 'code',
                    sortable: true
                }, {
                    title: '名称',
                    key: 'name'
                }, {
                    title: '状态',
                    key: 'status'
                }, {
                    title: '备注',
                    key: 'remark'
                }, {
                    title: '操作',
                    type: 'action',
                    actions: [{
                        type: 'primary',
                        text: '编辑'
                    }]
                }],
                data: [{
                    id: '1',
                    code: '0001',
                    name: '测试数据1',
                    status: '启用',
                    remark: '测试数据测试数据'
                }, {
                    id: '2',
                    code: '0002',
                    name: '测试数据2',
                    status: '启用',
                    remark: '测试数据测试数据',
                    children: [{
                        id: '01',
                        code: '00001',
                        name: '测试数据01',
                        status: '启用',
                        remark: '测试数据测试数据',
                    }, {
                        id: '02',
                        code: '00002',
                        name: '测试数据02',
                        status: '启用',
                        remark: '测试数据测试数据',
                    }]
                }, {
                    id: '3',
                    code: '0003',
                    name: '测试数据3',
                    status: '启用',
                    remark: '测试数据测试数据'
                }, {
                    id: '4',
                    code: '0004',
                    name: '测试数据4',
                    status: '启用',
                    remark: '测试数据测试数据'
                }]
            }
        },
        components: {
            TreeGrid
        },
        methods: {
            rowClick(data, index, event) {
                console.log('当前行数据:' + data)
                console.log('点击行号:' + index)
                console.log('点击事件:' + event)
            },
            selectionClick(arr) {
                console.log('选中数据id数组:' + arr)
            },
            sortClick(key, type) {
                console.log('排序字段:' + key)
                console.log('排序规则:' + type)
            }
        }
    }
</script>
```
## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
