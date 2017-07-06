# Vued
Vued is a UED framework based on Vue2.0, which includes standard UI components, data interaction, graphics, animation  and so on
# Doc
#### [English doing](http://vued.design) 
#### [中文文档 doing](http://vued.design) 

# engines
[node](https://nodejs.org/) >= 4.0
[npm](https://www.npmjs.com/) >= 3.0

# Dependency
[echarts](http://echarts.baidu.com)
[rc-tween-one](https://motion.ant.design/)

# Install Vued
using npm

> npm install vued --save

Or using script tag for global use

```
<script type="text/javascript" src="vued.min.js"></script>
```

# Usage

```
<template>
    <Slider v-model="value" range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
```
Use css

```
import 'iview/dist/styles/iview.css';
```

# Browser Support
Normal browsers and Internet Explorer 9+.
# Major Contributors
|Name   |Avatar   |Contributors|
|---|---|---|
|  [Guanjingkai](https://github.com/guanjingkai) |  ![](https://avatars3.githubusercontent.com/u/26058819?v=3&s=60)|Vued major developers|
|  [Heroin](https://github.com/heroin) |  ![](https://avatars2.githubusercontent.com/u/584283?v=3&s=60)  |design advice|
# History
2017
# Links
[Ant Design](http://ant.design)
[Vue](http://www.vuejs.org)
[iView](http://www.iviewui.com)
[Element](http://element.eleme.io)
[ionicons](http://ionicons.com)
[Webpack](https://webpack.js.org)
[Echarts](http://echarts.baidu.com)

# License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2017-present, Vued