## 发送请求获取 Loading 状态

### 实际开发中总是会遇到一个请求发出去以后的 loading 状态

### 1. 需要在 UI 上添加 Loading 的弹窗效果

#### 拦截器

通常情况可以在封装请求函数的时候统一在拦截器中添加 `显示` 或 `隐藏` Loading 图标的处理。

例如（axios）：
```js
import axios from 'axios';

const { BASE_URL } = process.env;

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

// 拦截器
request.interceptors.response.use(
  (response) => {
    Toast.hide();
    return response;
  },
);
```

或者（Fetch）：
```js
export const request = new Fetch({
  prefix: apiPrefix,
  beforeRequest, // 可以在此处处理 Loading
  afterResponse, // 可以在此处处理 Loading
})
```

缺点：这样适合一些简单的 H5 界面，但这样就过于统一。有些请求不需要 Loading 就要特殊处理

### 2. 实际不仅只有弹一个 Loading 而已

- 获取状态后也可以用在 antd `Table` 的组件上作为一个传参
- 异步处理，等待接口返回后做些其他事情
- 渲染不一样的 Loading 界面等等


### 封装一个 React Hook 来解决

```js
import React, { useState } from 'react';

const useReqeust = ({
  request, // 任意的请求，或异步事件
  toast, // 要不要弹转圈圈的弹窗通过传参决定
}: {
  request: (params?: any) => any
  toast?: boolean
}) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({}); // 格式可以统一，比如： { success: true, state: 200 } 或者可以在封装请求时统一格式

  const sendRequest = async (params?: any) => {
    setLoading(true);
    if (toast) {
      // 弹出一个 Loading 的弹窗
    }
    try {
      const res = await request(params);
      setResult(res);
    } finally {
      setLoading(false);
      // 隐藏 Loading 的弹窗
    }
  };

  return {
    loading,
    result,
    sendRequest,
  };
};

export default useReqeust;
```

使用：
```js
const { loading, result, sendRequest } = useReqeust({
  request: someRequest
});

useEffect(
  () => {
    sendRequest({ /* 传参 */ });
  },
  [],
);

useEffect(
  () => {
    console.log(loading, result);
  },
  [loading, result],
);
```
