import React from 'react';
import { Center } from '@chakra-ui/react';
import Lottie from 'react-lottie';
import loading from '../../Assets/Lottie/8943-money-greenbg.json';

export default function Loading() {
  const options = {
    animationData: loading,
    loop: true,
    autoplay: true,
  };
  return (
    <Center>
      <Lottie options={options} height={550} width={450} />
    </Center>
  );
}
