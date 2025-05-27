/*
  Quantiles for the UX metrics
*/

const quantilesDom: number[] = [
  0,
  47,
  75,
  159,
  233,
  298,
  358,
  417,
  476,
  537,
  603,
  674,
  753,
  843,
  949,
  1076,
  1237,
  1459,
  1801,
  2479,
  594601,
];

const quantilesReq: number[] = [
  0,
  2,
  15,
  25,
  34,
  42,
  49,
  56,
  63,
  70,
  78,
  86,
  95,
  105,
  117,
  130,
  147,
  170,
  205,
  281,
  3920,
];

const quantilesSize: number[] = [
  0,
  1.37,
  144.7,
  319.53,
  479.46,
  631.97,
  783.38,
  937.91,
  1098.62,
  1265.47,
  1448.32,
  1648.27,
  1876.08,
  2142.06,
  2465.37,
  2866.31,
  3401.59,
  4155.73,
  5400.08,
  8037.54,
  223212.26,
];

const grades: { min: number, letter: string }[] = [
  { min: 81, letter: "A" },
  { min: 70, letter: "B" },
  { min: 55, letter: "C" },
  { min: 40, letter: "D" },
  { min: 25, letter: "E" },
  { min: 10, letter: "F" },
  { min: 0, letter: "G" },
];

/*
  Compute functions
*/

function computeQuantile(quantiles: (number)[], value: number): number {
  for (let i = 1; i < quantiles.length; i++) {
    if (value < quantiles[i]) {
      return i - 1 + (value - quantiles[i - 1]) / (quantiles[i] - quantiles[i - 1]);
    }
  }
  return quantiles.length - 1;
}

function computeScore(dom: number, size: number, requests: number): number {
  const q_dom: number = computeQuantile(quantilesDom, dom);
  const q_size: number = computeQuantile(quantilesSize, size);
  const q_req: number = computeQuantile(quantilesReq, requests);

  return Math.round(100 - 5 * (3 * q_dom + 2 * q_req + q_size) / 6);
}


function computeImpact(ecoindex: number, base: number, factor: number): number {
  return Math.round(100 * (base + factor * (50 - ecoindex) / 100)) / 100;
}

/*
  Export getters
*/

function getGrade(ecoindex: number): string {
  for (const grade of grades) {
    if (ecoindex >= grade.min) {
      return grade.letter;
    }
  }

  return "G";
}

function getEcoIndex(nodes: number, requests: number, size: number) {
  const score: number = computeScore(nodes, size, requests);

  return {
    score,
    grade: getGrade(score),
  };
}

function getGreenhouseGasesEmmission(ecoindex: number): number {
  return computeImpact(ecoindex, 2, 2);
}

function getWaterConsumption(ecoindex: number): number {
  return computeImpact(ecoindex, 3, 3);
}

export {
  getGrade,
  getEcoIndex,
  getGreenhouseGasesEmmission,
  getWaterConsumption,
}