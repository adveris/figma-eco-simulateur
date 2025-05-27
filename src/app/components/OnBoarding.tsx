import React from 'react';
import { Flex, Strong, Text } from '@chakra-ui/react';

import Select from '../assets/select';

const OnBoarding = () => (
  <Flex
    flexDir={'column'}
    p={'16px'}
    gap={'16px'}
    alignItems={'center'}
    border={'1px solid #DEDEDE'}
    backgroundColor={'#fff'}
    borderRadius={'4px'}
    color={'#000'}
    position={'relative'}
  >
    <Select />
    <Text
      position={'absolute'}
      color={"#CDCDCD"}
      fontSize={'12px'}
      top={'60px'}
    >
      Select a frame to get started
    </Text>
    <Text fontSize={'14px'} textAlign={'center'}>
      <Strong>Estimate </Strong>
      the
      <Strong> EcoIndex score </Strong>
      of your wireframe or design
    </Text>
  </Flex>
)

export default OnBoarding;
