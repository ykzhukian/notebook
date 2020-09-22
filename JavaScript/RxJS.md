### RxJS 响应式变成的 JavaScript 实现
- 使用 `Observables` 的响应式编程（Reactive Programming）的库，它使编写异步或基于回调的代码更容易。
- 主动轮询来获取上一个任务执行结果的方式称为 `Proactive` 方式。相对的 `Reactive` 方式，是把上一个任务执行结果的反馈作为一个时间，这个事件的到来会触发下一个任务的执行。
- `响应式编程` 是使用 `异步数据流` 进行编程。

#### Stream / 流
作为响应式编程的核心，流的本质是一个按时间顺序排列的进行中时间的序列集合。
- 某种类型的值
- 错误
- 已完成的信号
- --a---b-c---d---X---|->

在常见的响应式编程库中，每个 `stream` 都会有多个方法，`map`、`filter`、`scan` 等等。当你调用其中一个方法时，例如 `clickStream.map(f)`，它就会基于原来的 `click stream` 返回一个新的 `stream`。它不会对原来的 `click steam` 作任何修改。这个特性就是不可变性(`Immutability`)

![响应式编程](https://github.com/ykzhukian/notebook/blob/master/assets/images/reactive-stream.jpg "响应式编程")

#### 观察者模式
`观察者模式`又叫`发布订阅模式（Publish/Subscribe）`，它是一种一对多的关系，让多个`观察者（Obesver）`同时监听一个`主题（Subject）`，这个主题也就是`被观察者（Observable）`，被观察者的状态发生变化时就会通知所有的观察者，使得它们能够接收到更新的内容。观察者模式主题和观察者是分离的，不是主动触发而是被动监听。

#### 迭代器模式
`迭代器（Iterator）模式`又叫`游标（Sursor）模式`，迭代器具有 `next` 方法，可以顺序访问一个聚合对象中的各个元素，而不需要暴露该对象的内部表现。迭代器模式可以把迭代的过程从从业务逻辑中分离出来，迭代器将使用者和目标对象隔离开来，即使不了解对象的内部构造，也可以通过迭代器提供的方法顺序访问其每个元素。

```js
const iterable = [1, 2];
const iterator = iterable[Symbol.iterator]();
iterator.next(); // => { value: "1", done: false}
iterator.next(); // => { value: "2", done: false}
iterator.next(); // => { value: undefined, done: true}
```

### RxJS 解决了哪些问题：
- 同步和异步的统一写法
- 数据变更过程的组合拆分
- 数据和视图的精确绑定
- 条件变更后，对应数据自动重新计算

#### Observable （被观察者、可观察对象）
An observable is a function that creates an observer and attaches it to the source where
values are expected, for example, clicks, mouse events from a dom element or an Http
request, etc.

表示一个概念，这个概念是一个可调用的未来值或事件的集合。

#### Observer （观察者）
It is an object with next(), error() and complete() methods, that will get called when there
is interaction to the with the observable i.e. the source interacts for an example button
click, Http request, etc.

一个回调函数的集合，它知道如何去监听由 `Observable` 提供的值。

#### Subscription （订阅）
When the observable is created, to execute the observable we need to subscribe to it. It
can also be used to cancel the execution.

表示 `Observable` 的执行，主要用于取消 `Observable` 的执行。

#### Operators （操作符）
An operator is a pure function that takes in observable as input and the output is also an
observable.

采用函数式编程风格的纯函数 (`pure function`)，使用像 `map`、`filter`、`concat`、`flatMap` 等这样的操作符来处理集合。

#### Subject （主体）
A subject is an observable that can multicast i.e. talk to many observers. Consider a button
with an event listener, the function attached to the event using addlistener is called every
time the user clicks on the button similar functionality goes for subject too.

相当于 `EventEmitter`，并且是将值或事件多路推送给多个 `Observer` 的唯一方式。

#### Schedulers （调度器）
用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 `setTimeout` 或 `requestAnimationFrame` 或其他。

#### Advantages of using RxJS
The following are the advantages of using RxJS:
- RxJS can be used with other Javascript libraries and frameworks. It is supported
by javascript and also with typescript. Few examples are Angular, ReactJS, Vuejs,
nodejs etc.
- RxJS is an awesome library when it comes to the handling of async tasks.RxJS uses
observables to work with reactive programming that deals with asynchronous data
calls, callbacks and event-based programs.
- RxJS offers a huge collection of operators in mathematical, transformation,
filtering, utility, conditional, error handling, join categories that makes life easy
when used with reactive programming.

#### Disadvantages of using RxJS
The following are the disadvantages of using RxJS:
- Debugging the code with observables is little difficult.
- As you start to use Observables, you can end up your full code wrapped under the
observables.

### 实例

#### Observer, Observable 与 Subscription 示例
`Observable` 是多个值的惰性推送集合。

```js
import { Observable } from 'rxjs';

const observable = Observable.create(observer => {
  observer.next('foo');
  observer.next('bar');
})

const subscription = observable.subscribe(console.log);
subscription.unsubscrible();
```

#### Subject 是一种特殊的 Observable，它允许将值多播给多个观察者
从观察者的角度而言，它无法判断 `Observable` 执行是来自普通的 `Observable` 还是 `Subject` 。

`Subject` 是一个有如下方法的对象： `next(v)`、 `error(e)` 和 `complete()` 。要给 `Subject` 提供新值，只要调用 `next(theValue)` 方法。

```js
var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(1);
subject.next(2);
```

#### Operators 操作符是函数，它基于当前的 Observable 创建一个新的 Observable。这是一个无副作用的操作：前面的 Observable 保持不变。
[marble diagram（宝石图/弹珠图）](https://rxmarbles.com/)

`RxJS 6` 及更新版本提供了可链式调用（`Pipeable`）的 `RxJS` 操作符，假设 `source` 是一个已定义的 `observable`，一个简单示例如下：
```js
source.pipe(
  map(x => x + x),
  mergeMap(n => of(n + 1, n + 2).pipe(
    filter(x => x % 1 == 0),
    scan((acc, x) => acc + x, 0),
  )),
  catchError(err => of('error found')),
).subscribe(console.log);
```

#### Schedulers
调度器控制着何时启动 `subscription` 和何时发送通知。使用 `subscribeOn` 来调度 `subscribe()` 调用在什么样的上下文中执行。 默认情况下，`Observable` 的 `subscribe()` 调用会立即同步地执行。然而，你可能会延迟或安排在给定的调度器上执行实际的 `subscription` ，使用实例操作符 `observeOn(scheduler)`，其中 `scheduler` 是你提供的参数。

```js
var observable = Rx.Observable.create(function (proxyObserver) {
  proxyObserver.next(1);
  proxyObserver.next(2);
  proxyObserver.next(3);
  proxyObserver.complete();
})
.observeOn(Rx.Scheduler.async);

var finalObserver = {
  next: x => console.log('got value ' + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
};

console.log('just before subscribe');
observable.subscribe(finalObserver);
console.log('just after subscribe');

// before
// after
// 1
// 2
// 3
// done
```

#### 将数组转化为 Observable
```js
import { from } from 'rxjs';

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));
```

#### 将数组转化为 Observable
```js
import { from } from 'rxjs';

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));
```

#### Hot Observable 与 Cold Observable
- Hot Observable 无论有没有 Subscriber 订阅，事件始终都会发生。当 Hot Observable 有多个订阅者时，Hot Observable 与订阅者们的关系是一对多的关系，可以与多个订阅者共享信息。
- 然而，Cold Observable 只有 Subscriber 订阅时，才开始执行发射数据流的代码。并且 Cold Observable 和 Subscriber 只能是一对一的关系，当有多个不同的订阅者时，消息是重新完整发送的。也就是说对 Cold Observable 而言，有多个Subscriber的时候，他们各自的事件是独立的。


### Others

Observable 就是 Promise++。
```js
var stream = Rx.Observable.fromPromise(promise)
```

Metastream：包含 Stream 的 Stream


### Reference
(RP 响应式编程)[https://wiki.jikexueyuan.com/project/android-weekly/issue-145/introduction-to-RP.html]

