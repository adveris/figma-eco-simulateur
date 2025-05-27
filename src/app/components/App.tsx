import React from 'react';
import { ChakraProvider, defaultSystem, Flex, Text } from '@chakra-ui/react';

import Header from './Header';
import OnBoarding from './OnBoarding';
import FrameName from './_results/FrameName';
import Score from './_results/Score';
import Metrics from './_results/Metrics';
import Actions from './_results/Actions';
import Footer from './Footer';
import Settings from './Settings';
import HowItWorks from './HowItWorks';
import RequestsTooltip from './RequestsTooltip';

import { useEcoIndex } from '../hooks/useEcoIndex';
import { useSettings } from '../hooks/useSettings';

import '../styles/ui.css';

const App = () => {
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [onboardingOpen, setOnboardingOpen] = React.useState(false);
  const [requestsTooltipOpen, setRequestsTooltipOpen] = React.useState(false);
  const [mode, setMode] = React.useState<0 | 1>(0);

  const { settings, setSettings } = useSettings();
  const informations = useEcoIndex({
    uiMode: mode === 1,
    uiDomMultiplier: settings.uiMultiplier,
    uxDomMultiplier: settings.uxMultiplier,
    sizeMult: settings.sizeMult,
    additionalAssets: settings.additionalAssets,
    requests: settings.requests
  });

  React.useEffect(() => {
    parent.postMessage({
      pluginMessage: {
        type: 'count',
        uiMode: mode === 1
      }
    }, '*');
  }, [mode]);

  return (
    <ChakraProvider value={defaultSystem}>
      <Flex p={'16px'} flexDir={'column'} gap={!informations ? '24px' : '8px'}>
        {!informations ? (
          <>
            <Header
              mode={mode}
              setMode={setMode}
            />
            <OnBoarding />
          </>
        ) : (
          <>
            <FrameName
              name={informations.nodeName}
              mode={mode}
              setMode={setMode}
            />
            <Score
              ecoIndexMin={informations.ecoIndexMin}
              ecoIndexMax={informations.ecoIndexMax}
              greenhouseGasesEmmission={informations.greenhouseGasesEmmission}
              waterConsumption={informations.waterConsumption}
            />
            <Metrics
              openSettings={() => setSettingsOpen(true)}
              openRequestsTooltip={() => setRequestsTooltipOpen(true)}
              values={{
                dom: {
                  figma: informations.nodesBase,
                  estimate: informations.nodes,
                },
                requests: informations.requests,
                size: { pixels: informations.px, size: informations.size },
              }}
            />
            <Text
              color={'#CDCDCD'}
              fontSize={'10px'}
              fontWeight={'500'}
              fontStyle={'italic'}
            >
              * For 1000 monthly page views
            </Text>
          </>
        )}
        <Actions
          onSettingsClick={() => setSettingsOpen(!settingsOpen)}
          onOnboardingClick={() => setOnboardingOpen(!onboardingOpen)}
        />
        <Footer />
      </Flex>
      <Settings
        settingsOpen={settingsOpen}
        closeSettings={() => setSettingsOpen(false)}
        settings={settings}
        setSettings={setSettings}
      />
      <HowItWorks
        open={onboardingOpen}
        setOpen={setOnboardingOpen}
      />
      <RequestsTooltip
        requestTooltipOpen={requestsTooltipOpen}
        closeTooltip={() => setRequestsTooltipOpen(false)}
      />
    </ChakraProvider>
  );
}

export default App;
