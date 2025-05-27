interface CounterType {
  total: number;
  hidden: number;
  topLevel?: number;
  types?: Record<string, number>;
}

function countLayers(nodes: SceneNode[]): CounterType {
  const layersCounter: CounterType = {
    total: 0,
    hidden: 0,
    topLevel: nodes.length,
    types: {}
  };

  for (const node of nodes) {
    const { type: nodeType, visible: nodeVisibility } = node;

    if (nodeType !== 'VECTOR') {
      layersCounter.total++;
    }

    if (!nodeVisibility) {
      layersCounter.hidden++;
    }

    layersCounter.types![nodeType] = !layersCounter.types![nodeType] ? 1 : ++layersCounter.types![nodeType];

    if ('children' in node) {
      const children = node.children as SceneNode[];
      const { total: childrenTotal, hidden: childrenHidden, types: childrenTypes } = countLayers(children);

      layersCounter.hidden += nodeVisibility ? childrenHidden : childrenTotal;
      layersCounter.total += childrenTotal;

      for (const childrenType in childrenTypes) {
        const current = layersCounter.types![childrenType];
        const additional = childrenTypes[childrenType];
        layersCounter.types![childrenType] = !current ? additional : current + additional;
      }
    }
  }

  return layersCounter;
}

function computeNodeSize(node: SceneNode, sizeMultiplicator: number): { size: number, px: number } {
  let size = 0;
  let px = 0;

  switch (node.type) {
    case 'FRAME':
    case 'GROUP':
      size += 0.1; // Taille de base pour les conteneurs
      break;
    case 'RECTANGLE':
      if (node.isAsset && node.width && node.height) {
        size += ((node.width * node.height) / 10000) * sizeMultiplicator; // Taille supplémentaire en fonction de la surface de l'image
        px += node.width * node.height;
      }
      break;
    case 'ELLIPSE':
    case 'POLYGON':
      size += 0.05; // Taille de base pour les formes géométriques
      break;
    case 'TEXT':
      size += 0.2; // Taille de base pour les nœuds de texte
      size += (node.characters.length * 0.001); // Taille supplémentaire en fonction du nombre de caractères
      break;
    case 'MEDIA':
      if (node.isAsset && node.width && node.height) {
        size += ((node.width * node.height) / 10000) * sizeMultiplicator; // Taille supplémentaire en fonction de la surface de l'image
        px += node.width * node.height;
      }
      break;
    default:
      size += 0.05; // Taille de base pour les autres types de nœuds
      break;
  }

  // Ajout de la taille des enfants si le nœud est un conteneur
  if ("children" in node) {
    for (const child of node.children) {
      const { size: childSize, px: childPx } = computeNodeSize(child, sizeMultiplicator);

      size += childSize;
      px += childPx;
    }
  }

  return { size, px };
}

function getSizeEstimation(nodes: SceneNode[], sizeMultiplicator: number, additionalAssets: number): { size: number, px: number } {
  let totalSize = 0;
  let totalPx = 0;

  for (const node of nodes) {
    const { size: nodeSize, px: nodePx } = computeNodeSize(node, sizeMultiplicator);

    totalSize += nodeSize;
    totalPx += nodePx;
  }

  const sizeInMB = (additionalAssets + totalSize) / 1024; // Conversion Ko en Mo

  return {
    size: sizeInMB,
    px: totalPx
  };
}

export type { CounterType };

export {
  countLayers,
  getSizeEstimation
}