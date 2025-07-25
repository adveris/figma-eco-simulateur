import { countLayers, getSizeEstimation } from '../helpers/figma';

figma.showUI(__html__, {
  width: 360,
  height: 545,
});

const SIZE_ESTIMATION_DEPTH = 5;
const SIZE_ESTIMATION_INITIAL = 0;

function getRootSelectedNode(selection: readonly SceneNode[], page: PageNode): SceneNode | null {
  if (selection.length === 0) return null;
  let node = selection[0];
  while (node.parent && node.parent.id !== page.id) {
    node = node.parent as SceneNode;
  }
  return node;
}

function postSelectionMessage(selector: SceneNode, sizeDepth?: number, additionalAssets?: number) {
  const result = countLayers([selector]);
  const sizeEstimation = getSizeEstimation([selector], sizeDepth || SIZE_ESTIMATION_DEPTH, additionalAssets || SIZE_ESTIMATION_INITIAL);

  figma.ui.postMessage({
    type: 'selection',
    data: {
      nodeName: selector.name,
      nodesBase: result.total,
      px: sizeEstimation.px,
      size: sizeEstimation.size
    }
  });
}

function postResetMessage() {
  figma.ui.postMessage({
    type: 'reset',
  });
}

function handleSelection(sizeDepth?: number, additionalAssets?: number) {
  const page = figma.currentPage;
  const selector = getRootSelectedNode(page.selection, page);
  if (selector) {
    postSelectionMessage(selector, sizeDepth, additionalAssets);
  } else {
    postResetMessage();
  }
}

figma.ui.onmessage = async (msg: {
  type: string,
  uiMode: boolean,
  sizeDepth: string,
  additionalAssets: string,
}) => {
  if (msg.type === 'count' || msg.type === 'changeMultiplier') {
    handleSelection(
      parseFloat(msg.sizeDepth),
      parseFloat(msg.additionalAssets),
    );
  }
};

figma.on('selectionchange', () => {
  handleSelection();
});
