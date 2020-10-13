import React, { useEffect } from 'react';
import MySwiper from '@/components/Swiper';
import useReqeust from '@/components/RequestHook';
import { requestSim } from '@/utils';

import './index.scss';

const Home = () => {
  const { loading, result, sendRequest } = useReqeust({ request: requestSim });

  useEffect(
    () => {
      sendRequest();
    },
    [],
  );

  useEffect(
    () => {
      console.log(loading, result);
    },
    [loading, result],
  );

  return (
    <div>
      <h1>Home</h1>
      <MySwiper />
    </div>
  );
};

export default Home;
