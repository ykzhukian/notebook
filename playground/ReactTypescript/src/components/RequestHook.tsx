import React, { useState } from 'react';

const useReqeust = ({
  request,
  toast,
}: {
  request: (params?: any) => any
  toast?: boolean
}) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

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
