import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

import Gear from '../../assets/gear';

const Actions = ({
  onSettingsClick,
  onOnboardingClick,
}: {
  onSettingsClick: () => void;
  onOnboardingClick: () => void;
}) => (
  <Flex flexDir={'row'} gap={'8px'} mt={'8px'} mb={'8px'}>
    <Button
      border={'1px solid rgba(255, 255, 255, 0.40)'}
      background={'rgba(255, 255, 255, 0.10)'}
      p={'6px 12px 6px 8px'}
      borderRadius={'50px'}
      height={'auto'}
      onClick={onSettingsClick}
      _hover={{
        background: 'rgba(255, 255, 255, 0.15)',
      }}
    >
      <Flex h={'18px'} w={'18px'} alignItems={'center'} justifyContent={'center'} background={'rgba(255, 255, 255, 0.20)'} borderRadius={'14px'}>
        <Box w={'12px'} h={'12px'} transform={'translateY(-1px) translateX(-1px)'}>
          <Gear />
        </Box>
      </Flex>
      <Text fontSize={'12px'} color={'white'} fontWeight={500}>
        Settings
      </Text>
    </Button>
    <Button
      border={'1px solid rgba(255, 255, 255, 0.40)'}
      background={'rgba(255, 255, 255, 0.10)'}
      p={'6px 12px 6px 8px'}
      borderRadius={'50px'}
      height={'auto'}
      onClick={onOnboardingClick}
      _hover={{
        background: 'rgba(255, 255, 255, 0.15)',
      }}
    >
      <Flex h={'18px'} w={'18px'} alignItems={'center'} background={'rgba(255, 255, 255, 0.20)'} borderRadius={'14px'} justifyContent={'center'}>
        <Text fontSize={'12px'} fontWeight={500} color={'#fff'}>?</Text>
      </Flex>
      <Text fontSize={'12px'} color={'white'} fontWeight={500}>
        How it works
      </Text>
    </Button>
  </Flex>
)

export default Actions;
