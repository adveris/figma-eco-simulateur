import React from 'react';
import { Flex, Strong, Text } from '@chakra-ui/react';

import Logo from '../assets/logo';

const Footer = () => {
  return (
    <Flex
      flexDir='column'
      gap='24px'
      alignItems='center'
      color={'#CDCDCD'}
      fontSize={'10px'}
      fontWeight={'500'}
    >
      <Flex
        flexDir='column'
        gap='8px'
        textAlign={'center'}
      >
        <Text >
          Plugin created by
          {' '}
          <Strong
            textDecoration={'underline'}
            cursor={'pointer'}
            onClick={() => window.open('https://adveris.fr', '_blank')}
          >Adveris</Strong>
          , based on work by
          {' '}
          <Strong
            textDecoration={'underline'}
            cursor={'pointer'}
            onClick={() => window.open('https://www.ecoindex.fr/', '_blank')}
          >EcoIndex</Strong>
          {' '}
          and
          {' '}
          <Strong
            textDecoration={'underline'}
            cursor={'pointer'}
            onClick={() => window.open('https://greenit.fr/', '_blank')}
          >GreenIT</Strong>
          .
        </Text>
        <Text>
          Online tool for developpers :
          <Strong
            textDecor={'underline'}
            cursor={'pointer'}
            onClick={() => window.open('https://eco-simulateur.adveris.io', '_blank')}
          >eco-simulateur.adveris.io</Strong>
        </Text>
      </Flex>
      <Flex flexDir={'row'} justifyContent={'space-between'} w={'100%'}>
        <Flex flexDir={'row'} gap={'8px'}>
          <Logo />
          <Text
            cursor={'pointer'}
            textDecoration={'underline'}
            onClick={() => window.open('https://adveris.fr', '_blank')}
          >
            adveris.fr
          </Text>
        </Flex>
        <Text>
          Version
          <Strong color={'#fff'}> 11</Strong>
        </Text>
      </Flex>
    </Flex >
  )
}

export default Footer;
