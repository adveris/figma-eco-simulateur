import React, { useEffect } from 'react';
import { Box, Flex, Input, Text } from '@chakra-ui/react';

import Figma from '../../assets/figma';
import Html from '../../assets/html';
import Tooltip from '../../assets/tooltip';

const domTooltip = 'Complexity (weight: x3): the DOM (Document Object Model) is the representation of the structure and elements of an HTML webpage. The more elements the DOM contains, the more complex the page is to decipher, therefore more complexe to display for the browser. Concretely, all this means your computer processor provides a greater effort to display the page, which decrease your device lifespan.'
const requestsTooltip = 'Number of HTTP requests (coeff 2) : this criterion allows us to take into account servers effort necessary to display the tested webpage. The greater the number of requests for one page, the more servers will be needed to render this page.'
const sizeTooltip = 'Size of data transferred (coeff 1) : a webpage is a set of data stored on a server. When you access a webpage, your browser sends a request to the server in order to communicate this set of data, format it and display it on your screen.'

const Column = ({
  icon,
  title,
  sections,
  openRequestsTooltip,
  openSettings,
  setSettings,
  requests,
}: {
  icon: React.ReactNode;
  title: string;
  sections: {
    dom: { title?: string, value: number; label: string };
    req: { title?: string, value: number; label: string };
    size: { title?: string, value: number | string; label: string };
  };
  openRequestsTooltip?: () => void;
  openSettings?: () => void;
  setSettings: React.Dispatch<React.SetStateAction<{
    uxMultiplier: string;
    uiMultiplier: string;
    additionalAssets: string;
    sizeMult: string;
    requests: string;
  }>>;
  requests: string;
}) => {
  return (
    <Flex flexDir={'column'} border={'1px solid #E3E3E3'} p={'12px'} borderRadius={'4px'} flex={1} gap={'12px'}>
      <Flex flexDir={'row'} gap={'8px'} alignItems={'center'} mb={'4px'}>
        <Flex backgroundColor={"#E3E3E3"} borderRadius={'4px'} padding={'3px 5px'}>
          {icon}
        </Flex>
        <Text fontSize={'10px'} fontWeight={500} color={'#000'}>
          {title}
        </Text>
      </Flex>
      {sections.dom.title ? (
        <Flex flexDir={'row'} justifyContent={'space-between'}>
          <Text
            height={'14px'}
            fontSize={'12px'}
            fontWeight={500}
            color={'#000'}
          >
            {sections.dom.title}
          </Text>
          <Box
            position={'relative'}
            cursor={'pointer'}
            _hover={{
              '&>.domTooltip': {
                opacity: 1,
                display: 'flex'
              }
            }}
          >
            <Flex
              zIndex={2}
              display={'none'}
              className="domTooltip"
              opacity={0}
              position={'absolute'}
              right={'0'}
              top={'-4px'}
              transform={'translateY(-100%) translateX(50%)'}
              w={'200px'}
              fontSize={'10px'}
              p={'4px'}
              borderRadius={'4px'}
              backgroundColor={'#989898'}
            >
              {domTooltip}
            </Flex>
            <Tooltip />
          </Box>
        </Flex>
      ) : <Box height={('14px')} />}
      <Flex
        p={'8px 12px'}
        border={'1px solid #E3E3E3'}
        backgroundColor={'#F6F6F9'}
        borderRadius={'8px'}
        flexDir={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={'4px'}
      >
        <Text fontSize={'16px'} fontWeight={800} color={'#226D68'}>
          {sections.dom.value}
        </Text>
        <Text fontSize={'10px'} fontWeight={500} color={'#989898'} letterSpacing={'-0.2px'}>
          {sections.dom.label}
        </Text>
      </Flex>
      {sections.req.title ? (
        <Flex flexDir={'row'} justifyContent={'space-between'}>
          <Text
            height={'14px'}
            fontSize={'12px'}
            fontWeight={500}
            color={'#000'}
          >
            {sections.req.title}
          </Text>
          <Box
            position={'relative'}
            cursor={'pointer'}
            _hover={{
              '&>.requestsTooltip': {
                opacity: 1,
                display: 'flex'
              }
            }}
          >
            <Flex
              zIndex={2}
              display={'none'}
              className="requestsTooltip"
              opacity={0}
              position={'absolute'}
              right={'0'}
              top={'-4px'}
              transform={'translateY(-100%) translateX(50%)'}
              w={'200px'}
              fontSize={'10px'}
              p={'4px'}
              borderRadius={'4px'}
              backgroundColor={'#989898'}
            >
              {requestsTooltip}
            </Flex>
            <Tooltip />
          </Box>
        </Flex>
      ) : <Box height={('14px')} />}
      {sections.req.value ? (
        <Flex
          p={'8px 12px'}
          border={'1px solid #E3E3E3'}
          backgroundColor={'#F6F6F9'}
          borderRadius={'8px'}
          flexDir={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={'4px'}
        >
          <Text fontSize={'16px'} fontWeight={800} color={'#226D68'}>
            <Input
              type={'text'}
              value={requests}
              onChange={(e) => setSettings(prev => ({ ...prev, requests: e.target.value }))}
              fontSize={'16px'}
              fontWeight={800}
              color={'#226D68'}
              height={'28px'}
              p={'4px'}
              border={'1px solid #CDCDCD'}
              backgroundColor={'#fff'}
              borderRadius={'4px'}
              _focus={{
                border: 'none'
              }}
              _hover={{
                border: 'none'
              }}
            />
          </Text>
          <Text fontSize={'10px'} fontWeight={500} color={'#989898'} letterSpacing={'-0.2px'}>
            {sections.req.label}
          </Text>
        </Flex>
      ) : (
        <Flex
          height={'46px'}
          p={'8px'}
          border={'1px solid #E3E3E3'}
          backgroundColor={'#F6F6F9'}
          borderRadius={'8px'}
        >
          <Text
            cursor={'pointer'}
            fontSize={'10px'}
            fontWeight={500}
            color={'#226D68'}
            onClick={openRequestsTooltip}
            textDecoration={'underline'}
          >
            What number should I enter in this box  👉
          </Text>
        </Flex>
      )}
      {sections.size.title ? (
        <Flex flexDir={'row'} justifyContent={'space-between'}>
          <Text
            height={'14px'}
            fontSize={'12px'}
            fontWeight={500}
            color={'#000'}
          >
            {sections.size.title}
          </Text>
          <Box
            position={'relative'}
            cursor={'pointer'}
            _hover={{
              '&>.sizeTooltip': {
                opacity: 1,
                display: 'flex'
              }
            }}
          >
            <Flex
              zIndex={2}
              display={'none'}
              className="sizeTooltip"
              opacity={0}
              position={'absolute'}
              right={'0'}
              top={'-4px'}
              transform={'translateY(-100%) translateX(50%)'}
              w={'200px'}
              fontSize={'10px'}
              p={'4px'}
              borderRadius={'4px'}
              backgroundColor={'#989898'}
            >
              {sizeTooltip}
            </Flex>
            <Tooltip />
          </Box>
        </Flex>
      ) : (
        <Flex
          justify={'flex-end'}
          alignItems={'center'}
          transform={'translateY(4px)'}
        >
          <Text
            cursor={'pointer'}
            fontSize={'10px'}
            fontWeight={500}
            color={'#989898'}
            onClick={openSettings}
            textDecoration={'underline'}
          >
            + Add video weight
          </Text>
        </Flex>
      )}
      <Flex
        p={'8px 12px'}
        border={'1px solid #E3E3E3'}
        backgroundColor={'#F6F6F9'}
        borderRadius={'8px'}
        flexDir={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={'4px'}
      >
        <Text fontSize={'16px'} fontWeight={800} color={'#226D68'}>
          {sections.size.value}
        </Text>
        <Text fontSize={'10px'} fontWeight={500} color={'#989898'} letterSpacing={'-0.2px'}>
          {sections.size.label}
        </Text>
      </Flex>
    </Flex>
  )
}

const Metrics = ({
  values,
  openRequestsTooltip,
  openSettings,
  setSettings,
  requests,
}: {
  values: {
    dom: { figma: number; estimate: number };
    requests: number;
    size: { pixels: number; size: number };
  };
  openRequestsTooltip: () => void;
  openSettings: () => void;
  setSettings: React.Dispatch<React.SetStateAction<{
    uxMultiplier: string;
    uiMultiplier: string;
    additionalAssets: string;
    sizeMult: string;
    requests: string;
  }>>;
  requests: string;
}) => {
  const [pixels, setPixels] = React.useState<{
    value: number | string;
    label: string;
  }>({
    value: 0,
    label: 'Px²',
  })

  useEffect(() => {
    function getPixelsValue(value: number) {
      if (value > 1000000) {
        return { value: (value / 1000000).toFixed(1), label: 'Mpx²' };
      } else if (value > 1000) {
        return { value: (value / 1000).toFixed(1), label: 'Kpx²' };
      } else {
        return { value, label: 'Px²' };
      }
    }
    setPixels(getPixelsValue(values.size.pixels))

  }, [values.size.pixels])

  return (
    <Flex p={'12px'} flexDirection={'row'} gap={'6px'} backgroundColor={'#fff'} borderRadius={'4px'}>
      <Column
        icon={<Figma />}
        title={'This Figma frame'}
        sections={{
          dom: { title: 'DOM complexity', value: values.dom.figma, label: 'Layers' },
          req: { title: 'Requests', value: null, label: null },
          size: { title: 'Page weight', value: pixels.value, label: pixels.label }
        }}
        openRequestsTooltip={openRequestsTooltip}
        setSettings={setSettings}
        requests={requests}
      />
      <Column
        icon={<Html />}
        title={'Future HTML page'}
        sections={{
          dom: { value: parseInt(values.dom.estimate.toFixed(0)), label: 'HTML <>' },
          req: { value: 76, label: 'Requests' },
          size: { value: values.size.size.toFixed(2), label: 'Mo' }
        }}
        openSettings={openSettings}
        setSettings={setSettings}
        requests={requests}
      />
    </Flex>
  )
}

export default Metrics;
