import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

const CButton = ({
  children,
  selected,
  setSelected
}: {
  children: React.ReactNode;
  selected: boolean;
  setSelected: (value: boolean) => void;
}) => (
  <Button
    p={'2px 8px'}
    onClick={() => setSelected(!selected)}
    borderRadius={'800px'}
    color={selected ? '#fff' : '#000'}
    background={selected ? '#3B5B58' : 'rgba(0, 0, 0, 0.10)'}
    fontSize={'10px'}
    fontWeight={500}
    height={'auto'}
  >
    {children}
  </Button>
)

const FrameName = ({
  name,
  mode,
  setMode
}: {
  name: string;
  mode: number;
  setMode: (value: 0 | 1) => void;
}) => (
  <Flex
    p={'16px'}
    border={'1px solid #DEDEDE'}
    background={"#fff"}
    borderRadius={'4px'}
    gap={'8px'}
    flexDirection={'column'}
  >
    <Flex flexDir={'row'} alignItems={'center'} justifyContent={'flex-start'} gap={'8px'} >
      <CButton selected={mode === 0} setSelected={() => setMode(0)}>
        Wireframe
      </CButton>
      <CButton selected={mode === 1} setSelected={() => setMode(1)}>
        Design
      </CButton>
    </Flex>
    <Text
      color={'#000'}
      fontSize={'12px'}
      fontWeight={700}
      lineHeight={'12px'}
    >
      {name}
    </Text>
  </Flex>
)

export default FrameName;
