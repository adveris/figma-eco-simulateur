import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

import Cross from '../assets/cross';
import OnboardingOne from '../assets/_onboarding/one';
import OnboardingTwo from '../assets/_onboarding/two';
import OnboardingThree from '../assets/_onboarding/three';
import Footer from './Footer';

const HowItWorks = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [step, setStep] = React.useState<0 | 1 | 2>(0);

  return (
    <Flex
      display={open ? 'flex' : 'none'}
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
          <Flex h={'18px'} w={'18px'} alignItems={'center'} background={'rgba(255, 255, 255, 0.20)'} borderRadius={'14px'} justifyContent={'center'}>
            <Text fontSize={'12px'} fontWeight={500} color={'#fff'}>?</Text>
          </Flex>
          <Text fontSize={'12px'} color={'white'} fontWeight={500}>
            How it works
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
          onClick={() => {
            setOpen(false)
            setStep(0)
          }}
        >
          <Cross />
        </Button>
      </Flex>
      <Flex flex={1} alignItems={'center'} flexDir={'column'} justifyContent={'center'} px={'8px'}>
        {step === 0 && (
          <Flex flexDir={'column'} alignItems={'center'} gap={'16px'}>
            <Text fontSize={'16px'} fontWeight={600} color={'#fff'}>1. Select the evaluated frame</Text>
            <OnboardingOne />
          </Flex>
        )}
        {step === 1 && (
          <Flex flexDir={'column'} alignItems={'center'} gap={'16px'}>
            <Text fontSize={'16px'} fontWeight={600} color={'#fff'}>2. UX or UI Design mode</Text>
            <OnboardingTwo />
          </Flex>
        )}
        {step === 2 && (
          <Flex flexDir={'column'} alignItems={'center'} gap={'16px'}>
            <Text fontSize={'16px'} fontWeight={600} color={'#fff'}>3. Add requests number</Text>
            <OnboardingThree />
          </Flex>
        )}
        <Flex flexDirection={'row'} gap={'8px'} mt={'16px'}>
          {[0, 1, 2].map((s) => (
            <Button
              key={s}
              background={s === step ? 'rgba(255, 255, 255, 0.20)' : 'rgba(255, 255, 255, 0.10)'}
              p={'4px 8px'}
              borderRadius={'50px'}
              height={'auto'}
              onClick={() => setStep(s as 0 | 1 | 2)}
            >
              <Text fontSize={'12px'} color={'white'} fontWeight={500}>
                {s + 1}
              </Text>
            </Button>
          ))}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  )
}

export default HowItWorks;
