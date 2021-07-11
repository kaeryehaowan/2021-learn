## vue 源码分析--provide 与 inject

### provide/inject 介绍

这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。

provide 选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的属性。在该对象中你可以使用 ES2015 Symbols 作为 key，但是只在原生支持 Symbol 和 Reflect.ownKeys 的环境下可工作。

大概意思是，可以跨层级向子代组件传递状态。

### 使用场景

官方：provide 和 inject 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。

一般可以在封装一些 group 组件时，可以使用，一般 group 组件里会通过 slot 的方法，传递 子组件 ，那么就可以通过， provide 向子组件里传递 group 组件的状态，以及修改状态的方法。

```vue
<template>
  <div :class="`${stateA === 'active' ? 'active' : ''}`">
    <slot />
  </div>
</template>
<script>
export default {
  name: "myGroup",
  data() {
    return {
      stateA: "normal",
    };
  },
  provide(){
      return {
          myGroupState: this.stateA,
          actionMyGroupState(data){
              this.stateA = data
          }
      }
  }
};
</script>
// 使用
<template>
<div>
    <myGroup>
        <myButton @click="buttonClick">点击</myButton>
    </myGroup>
<div>
</template>

// 在这个 myButton 组件里，通过  inject 注入 myGroupState 和 actionMyGroupState，就可以在 myButton 组件调用 actionMyGroupState 方法，来操作 myGroupState 了。
```

### api 的原理
首先 vue 在实例化的时候，会先处理相互的关系，例如 this.$parent 、this.$root 、this.$refs 、this.$children。
然后后续在处理 inject 选项时（在 initMixin 里调用 initInjections 方法），就通过 vm.$options.inject 里配置的 key，去递归查找 $parent 链里配置的 provide 选项是否有这个 key 的配置（递归查找的实现在 resolveInject 方法里）。然后得到 provide 里配置的值后，通过  defineReactive 在 vm 实例上，挂载成响应式的 vm[key] 的形式。

### 过程
initMixin 给 Vue 挂载原型方法 _init;
实例化的时候，调用 _init 方法:
在 _init 方法里，初始化关系（initLifecycle）;
接着再初始化事件（initEvents），例如，this.$emit 的事件;
然后，获取到模板、render等（initRender）;
然后，通过 callHook 方法，触发 beforeCreate 生命钩子;
接着就是初始化 inject 选项（initInjections）;
在 initInjections 里，通过 resolveInject 方法去取 inject[key] 对应的值;
在 resolveInject 方法里，通过  while 循环递归获取;

