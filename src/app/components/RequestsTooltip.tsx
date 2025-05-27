import React from 'react';
import { Button, Flex, Strong, Text } from '@chakra-ui/react';

import Cross from '../assets/cross';
import Footer from './Footer';

const RequestsTooltip = ({
  requestTooltipOpen,
  closeTooltip,
}: {
  requestTooltipOpen: boolean;
  closeTooltip: () => void;
}) => (
  <Flex
    display={requestTooltipOpen ? 'flex' : 'none'}
    position={'fixed'}
    top={'0'}
    left={'0'}
    right={'0'}
    bottom={'0'}
    background={'#396B68'}
    flexDir={'column'}
    p={'16px'}
  >
    <Flex flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
      <Button
        border={'1px solid rgba(255, 255, 255, 0.40)'}
        background={'rgba(255, 255, 255, 0.10)'}
        p={'6px 12px 6px 8px'}
        borderRadius={'50px'}
        height={'auto'}
        _hover={{
          background: 'rgba(255, 255, 255, 0.15)',
        }}
      >
        <Flex h={'18px'} w={'18px'} alignItems={'center'} justifyContent={'center'} background={'rgba(255, 255, 255, 0.20)'} borderRadius={'14px'}>
          <Text fontSize={'12px'} fontWeight={500} color={'#fff'}>?</Text>
        </Flex>
        <Text fontSize={'12px'} color={'white'} fontWeight={500}>
          Number of requests
        </Text>
      </Button>
      <Button
        border={'1px solid rgba(255, 255, 255, 0.40)'}
        background={'rgba(255, 255, 255, 0.10)'}
        p={'9px 8px'}
        borderRadius={'50px'}
        height={'auto'}
        _hover={{
          background: 'rgba(255, 255, 255, 0.15)',
        }}
        onClick={closeTooltip}
      >
        <Cross />
      </Button>
    </Flex>
    <Flex flex={1} flexDir={'column'} gap={'16px'} mt={'16px'}>
      <Flex
        alignItems={'center'}
        flexDir={'column'}
        gap={'8px'}
        backgroundColor={'#fff'}
        padding={'16px'}
        border={'1px solid #DEDEDE'}
        borderRadius={'4px'}
      >
        <Text
          color={'#000'}
          fontSize={'12px'}
          whiteSpace={'pre-wrap'}
          textAlign={'center'}
        >
          If you are redesigning an
          <Strong>existing website</Strong>
          {'\n'}
          Use current number of requests by going to:
        </Text>
        <Text
          cursor={'pointer'}
          onClick={() => window.open('https://www.ecoindex.fr/en/', '_blank')}
          color={'#396B68'}
          fontSize={'12px'}
          textDecoration={'underline'}
          p={'8px 12px'}
          background={'rgba(57, 107, 104, 0.10)'}
          borderRadius={"100px"}
        >
          https://www.ecoindex.fr/en/
        </Text>
        <Text
          color={'#000'}
          fontSize={'12px'}
        >
          and copy/paste "number of requests"
        </Text>
      </Flex>
      <Flex
        alignItems={'center'}
        flexDir={'column'}
        gap={'8px'}
        backgroundColor={'#fff'}
        padding={'16px'}
        border={'1px solid #DEDEDE'}
        borderRadius={'4px'}
      >
        <Text
          color={'#000'}
          fontSize={'12px'}
          textAlign={'center'}
        >
          If you are designing a
          <Strong> new website</Strong>
        </Text>
        <Text
          color={'#000'}
          fontSize={'12px'}
          textAlign={'center'}
          fontStyle={'italic'}
        >
          <Strong>
            Use default number (median): 78
          </Strong>
        </Text>
      </Flex>
    </Flex>
    <Footer />
  </Flex>
)

export default RequestsTooltip;
