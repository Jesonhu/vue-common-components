# 组件列表

### Slidemenu
+ 属性:

  | 属性名        | 类型           | 是否必需  |  说明 |
  | :----- |:-----:|:-----:|-----:|
  | `isShow` | Boolean | 非 | 是否展开 `true:展开` |

+ 方法:
  | 名称        | 说明         |
  | :------------- |-------------:|
  | mask     | 点击了遮罩层 |

+ 插槽:
  | 名称        | 说明         |
  | :------------- |-------------:|
  | header     | 头部内容 |
  | 默认   | 菜单 |
  | footer   | 底部内容 |

+ [预览图](./screenshots/slidemenu.jpg)
+ [使用参考](../src/views/example/slidemenu/index.vue)
+ [源码](../src/components/slidemenu/index.vue)

***

### Header
+ 属性:

  | 属性名        | 类型           | 是否必需  |  说明 |
  |:----- |:-----:|:-----:|-----:|
  | `backgroundColor`| `String`| `非必需`| 背景颜色 |
  | `textColor`| `String`| `非必需`| 中间文字颜色 |
  | `title` | `String`| `非必需`| 标题内容  |

+ 方法:
  | 名称        | 说明         |
  | :------------- |-------------:|
  | clickLeft     | 左侧内容点击 |
  | clickTitle   | 中间内容点击 |
  | clickRight   | 右侧内容点击 |

+ 插槽:
  | 名称        | 说明         |
  | :------------- |-------------:|
  | left     | 左侧内容 |
  | 默认   | 中间内容 |
  | right   | 右侧内容 |

+ [预览图](./screenshots/header.jpg)
+ [使用参考](../src/views/example/header/index.vue)
+ [源码](../src/components/header/index.vue)

***

### GridMenu(九宫格菜单)
+ 属性:

  | 属性名        | 类型           | 是否必需  |  说明 |
  |:----- |:-----:|:-----:|-----:|
  | `rowNumber`| `String|Number`| `非必需`| 每行`Item`的数量 |
  | `text-color`| `String`| `非必需`| 文字的颜色 |
  | `icon-color` | `String`| `非必需`| 图标的颜色  |
  | `backgroundColor` | `String`| `非必需`| 容器背景颜色 |
  | `menuList` | `Array`| `必需`| `{name: xxx, iconName: xxx}` 构成的数组  |

+ 方法:
  | 名称        | 说明         |
  | :------------- |-------------:|
  | itemClick     | 每项点击回调，当前点击的索引作为参数传递 |

+ 插槽: 无

+ [预览图](./screenshots/gridmenu.jpg)
+ [使用参考](../src/views/example/gridMenu/index.vue)
+ [源码](../src/components/gridMenu/index.vue)