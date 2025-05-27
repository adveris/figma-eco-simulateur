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
    color={selected ? '#000' : '#fff'}
    backgroundColor={selected ? '#fff' : '#3B5B58'}
    fontSize={'10px'}
    fontWeight={500}
    height={'auto'}
  >
    {children}
  </Button>
)

const Header = ({
  mode,
  setMode
}: {
  mode: number;
  setMode: (value: 0 | 1) => void;
}) => (
  <Flex flexDir={'row'} alignItems={'center'} justifyContent={'space-between'} >
    <Text fontSize={'10px'} color={'#CDCDCD'} fontWeight={500}>
      Select what you are testing
    </Text>
    <Flex flexDir={'row'} alignItems={'center'} gap={'8px'}>
      <CButton selected={mode === 0} setSelected={() => setMode(0)}>
        Wireframe
      </CButton>
      <CButton selected={mode === 1} setSelected={() => setMode(1)}>
        Design
      </CButton>
    </Flex>
  </Flex>
)

export default Header;
