## 为什么 vm._self = vm ，这样不会内存泄漏吗
## 为什么在 resolveConstructorOptions 方法里，能从 vue 的构造器上取得 options
## 实例上的 $options.render 是什么时候挂载的
## 标准化 scopeSlots 具体是做了什么 normalizeScopedSlots()
## 实例上的 _renderProxy 是什么
## createEmptyVNode 方法是做什么的
## options.modules 是什么

# vNode 是啥
# diff 原理
# Dep 类



## 笔记
- 实例的 _watcher.teardown() 可以解除数据监听
```js
this._watcher.teardown()
```

- 实例的 $forceUpdate 方法 实际就是 _watcher.update,强制更新当前视图，仅影响当前组件实例与当前组件里的插槽组件实例
```js
this.$forceUpdate === this._watcher.update
```

- 每一个注册的 filter 都会merge到 实例的 $options.filters 对象上，自身选项里注册的会直接在 filters 对象上，继承过来的会在 filters.__proto__ 上，例如  Vue.filters 全局注册的。
```js
this.$options.filters.ownFilterFn
this.$options.filters.__proto__.globalFilterFn
```