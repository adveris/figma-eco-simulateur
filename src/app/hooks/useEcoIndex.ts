import { useState, useEffect } from 'react';
import {
  getEcoIndex,
  getGrade,
  getGreenhouseGasesEmmission,
  getWaterConsumption
} from '../../helpers/ecoindex';

interface EcoIndexResult {
  nodeName: string;
  nodesBase: number;
  nodes: number;
  px: number;
  size: number;
  requests: number;
  greenhouseGasesEmmission: number;
  waterConsumption: number;
  ecoIndexMin: {
    score: number;
    grade: string;
  };
  ecoIndexMax: {
    score: number;
    grade: string;
  };
  accurateEcoIndex: {
    score: number;
    grade: string;
  };
  additionalAssets: number;
}

interface UseEcoIndexProps {
  uiMode: boolean;
  uiDomMultiplier: number;
  uxDomMultiplier: number;
  sizeMult: number;
  additionalAssets: number;
  requests: number;
}

export function useEcoIndex({
  uiMode,
  uiDomMultiplier,
  uxDomMultiplier,
  sizeMult,
  additionalAssets,
  requests
}: UseEcoIndexProps) {
  const [result, setResult] = useState<EcoIndexResult | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data.pluginMessage;
      if (message.type === 'selection') {
        const { nodeName, nodesBase, px, size } = message.data;

        const nodes = nodesBase * (uiMode ? uiDomMultiplier : uxDomMultiplier);
        const accurateEcoIndex = getEcoIndex(nodes, requests, size);

        const ecoIndexMin = { ...accurateEcoIndex };
        const ecoIndexMax = { ...accurateEcoIndex };

        ecoIndexMax.score = accurateEcoIndex.score - 7;
        ecoIndexMin.score = accurateEcoIndex.score + 8;
        ecoIndexMax.grade = getGrade(ecoIndexMax.score);
        ecoIndexMin.grade = getGrade(ecoIndexMin.score);

        setResult({
          nodeName,
          nodesBase,
          nodes,
          px,
          size,
          requests,
          greenhouseGasesEmmission: getGreenhouseGasesEmmission(accurateEcoIndex.score),
          waterConsumption: getWaterConsumption(accurateEcoIndex.score),
          ecoIndexMin,
          ecoIndexMax,
          accurateEcoIndex,
          additionalAssets,
        });
      } else if (message.type === 'reset') {
        setResult(null);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [uiMode, uiDomMultiplier, uxDomMultiplier, sizeMult, additionalAssets, requests]);

  return result;
} 