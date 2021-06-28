- declare 到底是什么？都有哪些用法？如何理解？

- 类型别名的泛型如何使用，应用场景？
```ts
type Container<T> = { value: T }; 
```

- 交叉类型如何理解？下面两种有什么区别
```ts
interface IA {
    ai: string
}
interface IB {
    bi: number
}

interface IAb {
    ai: string
    bi: number
}

let ab:IA&IB
let _ab: IAB
```