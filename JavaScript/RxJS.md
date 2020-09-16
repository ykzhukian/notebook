### RxJS 响应式变成的 JavaScript 实现
- 使用 `Observables` 的响应式编程（Reactive Programming）的库，它使编写异步或基于回调的代码更容易。
- 主动轮询来获取上一个任务执行结果的方式称为 `Proactive` 方式。相对的 `Reactive` 方式，是把上一个任务执行结果的反馈作为一个时间，这个事件的到来会触发下一个任务的执行。
- `响应式编程` 是使用 `异步数据流` 进行编程。

![响应式编程](https://github.com/ykzhukian/notebook/blob/master/assets/images/reactive-stream.jpg "响应式编程")


#### Observable
An observable is a function that creates an observer and attaches it to the source where
values are expected, for example, clicks, mouse events from a dom element or an Http
request, etc.

#### Observer
It is an object with next(), error() and complete() methods, that will get called when there
is interaction to the with the observable i.e. the source interacts for an example button
click, Http request, etc.

#### Subscription
When the observable is created, to execute the observable we need to subscribe to it. It
can also be used to cancel the execution.
Operators
An operator is a pure function that takes in observable as input and the output is also an
observable.

#### Subject
A subject is an observable that can multicast i.e. talk to many observers. Consider a button
with an event listener, the function attached to the event using addlistener is called every
time the user clicks on the button similar functionality goes for subject too.

#### Advantages of using RxJS
The following are the advantages of using RxJS:
 RxJS can be used with other Javascript libraries and frameworks. It is supported
by javascript and also with typescript. Few examples are Angular, ReactJS, Vuejs,
nodejs etc.
 RxJS is an awesome library when it comes to the handling of async tasks.RxJS uses
observables to work with reactive programming that deals with asynchronous data
calls, callbacks and event-based programs.
 RxJS offers a huge collection of operators in mathematical, transformation,
filtering, utility, conditional, error handling, join categories that makes life easy
when used with reactive programming.

#### Disadvantages of using RxJS
The following are the disadvantages of using RxJS:
 Debugging the code with observables is little difficult.
 As you start to use Observables, you can end up your full code wrapped under the
observables.