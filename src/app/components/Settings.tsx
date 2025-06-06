import React from 'react';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';

import Gear from '../assets/gear';
import Cross from '../assets/cross';
import Tooltip from '../assets/tooltip';
import Footer from './Footer';

interface SettingsProps {
  settingsOpen: boolean;
  closeSettings: () => void;
  settings: {
    uxMultiplier: string;
    uiMultiplier: string;
    additionalAssets: string;
    sizeMult: string;
    requests: string;
  };
  setSettings: React.Dispatch<React.SetStateAction<{
    uxMultiplier: string;
    uiMultiplier: string;
    additionalAssets: string;
    sizeMult: string;
    requests: string;
  }>>;
}

const Settings = ({
  settingsOpen,
  closeSettings,
  settings,
  setSettings,
}: SettingsProps) => (
  <Flex
    display={settingsOpen ? 'flex' : 'none'}
    position={'fixed'}
    top={'0'}
    left={'0'}
    right={'0'}
    bottom={'0'}
    background={'#396B68'}
    flexDir={'column'}
    p={'16px'}
    zIndex={1000}
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
        p={'9px 8px'}
        borderRadius={'50px'}
        height={'auto'}
        _hover={{
          background: 'rgba(255, 255, 255, 0.15)',
        }}
        onClick={closeSettings}
      >
        <Cross />
      </Button>
    </Flex>
    <Text
      color={'#CDCDCD'}
      fontSize={'10px'}
      fontWeight={500}
      mt={'12px'}
    >
      The settings allows you to edit the values and multipliers of the score calculation
    </Text>
    <Flex
      p='16px'
      border={'1px solid #DEDEDE'}
      borderRadius={'4px'}
      backgroundColor={'#fff'}
      mt={'12px'}
      flexDir={'column'}
      gap={'8px'}
    >
      <Text
        fontSize={'12px'}
        fontWeight={500}
        color={'#989898'}
      >
        <Box as='span' color={'#000'} fontWeight={800}>Wireframe </Box>
        to Webpage
      </Text>
      <Flex flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Flex flexDir={'row'} gap={'8px'} alignItems={'center'}>
          <Box
            cursor={'pointer'}
            position={'relative'}
            _hover={{
              '&>.tooltip_text': {
                display: 'block',
              },
            }}
          >
            <Tooltip />
            <Text
              display={'none'}
              className="tooltip_text"
              position={'absolute'}
              color={'#000'}
              left={'-16px'}
              top={'-4px'}
              transform={'translateY(-100%)'}
              w={'200px'}
              fontSize={'10px'}
              p={'4px'}
              borderRadius={'4px'}
              backgroundColor={'#989898'}
            >
              Nb "layers" to "HTML DOM elements" multiple (x)
            </Text>
          </Box>
          <Text
            fontSize={'12px'}
            fontWeight={400}
            color={'#000'}
          >
            Multiplier coefficient of the DOM
          </Text>
        </Flex>
        <Input
          w={'60px'}
          h={'28px'}
          borderRadius={'4px'}
          border={'1px solid #CDCDCD'}
          background={'#F6F6F9'}
          fontSize={'16px'}
          fontWeight={800}
          color={'#226D68'}
          value={settings.uxMultiplier}
          onChange={(e) => {
            setSettings(prev => ({ ...prev, uxMultiplier: e.target.value }));
          }}
        />
      </Flex>
    </Flex>
    <Flex
      p='16px'
      border={'1px solid #DEDEDE'}
      borderRadius={'4px'}
      backgroundColor={'#fff'}
      mt={'8px'}
      mb={'12px'}
      flexDir={'column'}
      gap={'8px'}
    >
      <Text
        fontSize={'12px'}
        fontWeight={500}
        color={'#989898'}
      >
        <Box as='span' color={'#000'} fontWeight={800}>Design </Box>
        to Webpage
      </Text>
      <Flex flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Flex flexDir={'row'} gap={'8px'} alignItems={'center'}>
          <Box
            cursor={'pointer'}
            position={'relative'}
            _hover={{
              '&>.tooltip_text': {
                display: 'block',
              },
            }}
          >
            <Tooltip />
            <Text
              display={'none'}
              className="tooltip_text"
              position={'absolute'}
              color={'#000'}
              left={'-16px'}
              top={'-4px'}
              transform={'translateY(-100%)'}
              w={'200px'}
              fontSize={'10px'}
              p={'4px'}
              borderRadius={'4px'}
              backgroundColor={'#989898'}
            >
              Nb "layers" to "HTML DOM elements" multiple (x)
            </Text>
          </Box>
          <Text
            fontSize={'12px'}
            fontWeight={400}
            color={'#000'}
          >
            Multiplier coefficient of the DOM
          </Text>
        </Flex>
        <Input
          w={'60px'}
          h={'28px'}
          borderRadius={'4px'}
          border={'1px solid #CDCDCD'}
          background={'#F6F6F9'}
          fontSize={'16px'}
          fontWeight={800}
          color={'#226D68'}
          value={settings.uiMultiplier}
          onChange={(e) => {
            setSettings(prev => ({ ...prev, uiMultiplier: e.target.value }));
          }}
        />
      </Flex>
    </Flex>
    <Flex
      p='16px'
      border={'1px solid #DEDEDE'}
      borderRadius={'4px'}
      backgroundColor={'#fff'}
      mt={'8px'}
      mb={'12px'}
      flexDir={'column'}
      gap={'8px'}
    >
      <Text
        fontSize={'12px'}
        fontWeight={500}
        color={'#989898'}
      >
        Other settings
      </Text>
      <Flex flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Flex flexDir={'row'} gap={'8px'} alignItems={'center'}>
          <Box
            cursor={'pointer'}
            position={'relative'}
            _hover={{
              '&>.tooltip_text': {
                display: 'block',
              },
            }}
          >
            <Tooltip />
            <Text
              display={'none'}
              className="tooltip_text"
              position={'absolute'}
              color={'#000'}
              left={'-16px'}
              top={'-4px'}
              transform={'translateY(-100%)'}
              w={'200px'}
              fontSize={'10px'}
              p={'4px'}
              borderRadius={'4px'}
              backgroundColor={'#989898'}
            >
              Add here the weight of additional assets
            </Text>
          </Box>
          <Text
            fontSize={'12px'}
            fontWeight={400}
            color={'#000'}
          >
            Additional assets (videos, etc.) (Ko)
          </Text>
        </Flex>
        <Input
          w={'60px'}
          h={'28px'}
          borderRadius={'4px'}
          border={'1px solid #CDCDCD'}
          background={'#F6F6F9'}
          fontSize={'16px'}
          fontWeight={800}
          color={'#226D68'}
          value={settings.additionalAssets}
          onChange={(e) => {
            setSettings(prev => ({ ...prev, additionalAssets: e.target.value }));
          }}
        />
      </Flex>
      <Flex flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Flex flexDir={'row'} gap={'8px'} alignItems={'center'}>
          <Box
            cursor={'pointer'}
            position={'relative'}
            _hover={{
              '&>.tooltip_text': {
                display: 'block',
              },
            }}
          >
            <Tooltip />
            <Text
              display={'none'}
              className="tooltip_text"
              position={'absolute'}
              color={'#000'}
              left={'-16px'}
              top={'-4px'}
              transform={'translateY(-100%)'}
              w={'200px'}
              fontSize={'10px'}
              p={'4px'}
              borderRadius={'4px'}
              backgroundColor={'#989898'}
            >
              100px x 100px of images result in [...] Ko assets online
            </Text>
          </Box>
          <Text
            fontSize={'12px'}
            fontWeight={400}
            color={'#000'}
          >
            Images size to images weight (Ko)
          </Text>
        </Flex>
        <Input
          w={'60px'}
          h={'28px'}
          borderRadius={'4px'}
          border={'1px solid #CDCDCD'}
          background={'#F6F6F9'}
          fontSize={'16px'}
          fontWeight={800}
          color={'#226D68'}
          value={settings.sizeMult}
          onChange={(e) => {
            setSettings(prev => ({ ...prev, sizeMult: e.target.value }));
          }}
        />
      </Flex>
    </Flex>
    <Footer />
  </Flex>
);

export default Settings;
