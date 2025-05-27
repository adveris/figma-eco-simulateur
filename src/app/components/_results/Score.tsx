import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import Water from '../../assets/water';
import Cloud from '../../assets/cloud';

const colors = [
  {
    grade: "A",
    color: '#2D9B42'
  },
  {
    grade: "B",
    color: '#34BC6C'
  },
  {
    grade: "C",
    color: '#CBDD09'
  },
  {
    grade: "D",
    color: '#F8ED04'
  },
  {
    grade: "E",
    color: '#FFCE10'
  },
  {
    grade: "F",
    color: '#FC9928'
  },
  {
    grade: "G",
    color: '#F01B14'
  }
];

const ScoreFrame = ({
  score,
  grade,
  type,
}: {
  score: number;
  grade: string;
  type: 'min' | 'max';
}) => (
  <Flex
    flex={1}
    background={colors.find((color) => color.grade === grade)?.color}
    borderRadius={'8px'}
    padding={"8px 16px"}
    flexDir={'column'}
    color={'#fff'}
    textAlign={'center'}
  >
    <Text fontSize={'12px'} fontWeight={500}>
      EcoIndex ({type})
    </Text>
    <Flex flexDir={'row'} gap={'16px'} alignItems={'center'} justifyContent={'center'}>
      <Text
        fontSize={'24px'}
        fontWeight={700}
      >
        {grade}
      </Text>
      <Box w={'1px'} height={'13px'} backgroundColor={'#fff'} />
      <Text
        fontSize={'18px'}
        fontWeight={500}
      >
        {score}
      </Text>
    </Flex>
  </Flex>
)

const MetricsFrame = ({
  icon,
  value,
  label,
  title,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  title: string;
}) => (
  <Flex
    flex={1}
    border={'1px solid #E3E3E3'}
    background={'#F6F6F9'}
    borderRadius={'8px'}
    padding={"8px 16px"}
    gap={'4px'}
    flexDir={'column'}
  >
    <Flex flexDir={'row'} gap={'4px'} alignItems={'center'}>
      {icon}
      <Text
        fontSize={'16px'}
        fontWeight={700}
        color={'#226D68'}
      >
        {value.toFixed(1)}
      </Text>
      <Text
        fontSize={'10px'}
        fontWeight={500}
        color={'#226D68'}
      >
        {label}
      </Text>
    </Flex>
    <Text fontSize={'10px'} fontWeight={500} color={'#989898'}>
      {title}
    </Text>
  </Flex>
)


interface ScoreProps {
  ecoIndexMin: {
    score: number;
    grade: string;
  };
  ecoIndexMax: {
    score: number;
    grade: string;
  };
  greenhouseGasesEmmission: number;
  waterConsumption: number;
}

const Score = ({
  ecoIndexMin,
  ecoIndexMax,
  greenhouseGasesEmmission,
  waterConsumption,
}: ScoreProps) => (
  <Flex
    p={'16px'}
    border={'1px solid #DEDEDE'}
    background={"#fff"}
    borderRadius={'4px'}
    gap={'8px'}
    flexDirection={'column'}
  >
    <Text
      fontSize={'12px'}
      color={'#000'}
      fontWeight={500}
    >
      Projected EcoIndex score of your design
    </Text>
    <Flex flexDir={'row'} gap={'8px'}>
      <ScoreFrame score={ecoIndexMin.score} grade={ecoIndexMin.grade} type="max" />
      <ScoreFrame score={ecoIndexMax.score} grade={ecoIndexMax.grade} type="min" />
    </Flex>
    <Flex flexDir={'row'} gap={'8px'}>
      <MetricsFrame
        icon={<Water />}
        value={waterConsumption}
        label={'Litres'}
        title={'Fresh water used *'}
      />
      <MetricsFrame
        icon={<Cloud />}
        value={greenhouseGasesEmmission}
        label={'kgCO2e'}
        title={'Green gas emissions *'}
      />
    </Flex>
  </Flex>
)

export default Score;
