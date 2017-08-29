# tree-grid

> 基于vue和iview组件库的树型表格
  主要使用了 iview(checkbox组件,icon组件,button组件) 同时部分表格渲染模仿iview表格 支持[iview](https://github.com/iview/iview) 

### [DEMO](https://huanglong6828.github.io/vue-tree-grid/dist/index.html) 如果对您如果有帮助的话,给颗星谢谢

## 版本支持
> VUE1.0/2.0 使用时请下载对应iview


## 自适应功能新增
    1. width 字段增加
    2. td总和大于容器宽宽度 出现滚动条 否则表格自适应  需要使用者下载组件后 修改源码中 document.body.clientWidth  修改为 document.getElementsByClassName('你的容器')[0].clientWidth
    
## 新增默认选中
``` bash
 1. _checked字段增加
 2. 给data项设置特殊 key _checked: true
```    
    
## 2.0 多选框样式错乱，默认选中问题
``` bash
 1. 修改为元素checkbox 样式大概调整
 2. 如果样式不好看 可以自行修改或者使用其他组件ui checkbox
```

## API
### props
| 属性        | 说明           | 类型  |
| ------------- |:-------------:| -----:|
| items| 显示的结构化数据|Array|
| columns| 表格列的配置描述|Array|

### columns 
| 属性        | 说明           | 类型 | 默认值|
| ----------- |:--------------:| -----:|-----:|
| title       | 列头显示文字       |String |#    |
| key         | 对应列内容的字段名 |String |#    |
| width       | 列宽名             |Number |#    |
| sortable    | 排序功能           |Boolean|false|
| type        |'selection':多选功能|String|# |
| type        |'action' 操作功能,  必填参数:actions:[{}]|String|#

 ### events
| 事件名        | 说明           | 返回值  |
| ------------- |:--------------:| -------:|
| @on-row-click       | 单击行或者单击操作按钮方法|data,$event,index|
| @on-selection-change| 返回选中数组              |arr|       
| @on-sort-change     | 表格列的配置描述          |key和排序规则(值为 asc 或 desc)|


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
                    type: 'selection',
                    width: '50',
                }, {
                    title: '编码',
                    key: 'code',
                    sortable: true,
                    width: '150',
                }, {
                    title: '名称',
                    key: 'name',
                    width: '150',
                }, {
                    title: '状态',
                    key: 'status',
                    width: '150',
                }, {
                    title: '备注',
                    key: 'remark',
                    width: '150',
                }, {
                    title: '操作',
                    type: 'action',
                    actions: [{
                        type: 'primary',
                        text: '编辑'
                    }, {
                        type: 'error',
                        text: '删除'
                    }],
                    width: '150',
                }],
                data: [{
                    id: '1',
                    code: '0001',
                    name: '测试数据1',
                    status: '启用',
                    remark: '测试数据测试数据',
                    _checked: true
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
## 使用方式
``` bash
# 安装依赖
npm install iview

main.js 引入
 import iView from 'iview';
 import 'iview/dist/styles/iview.css';
 Vue.use(iView);
 
treeGird 放入工程项目 例如 components/treeGird
```
