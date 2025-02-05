import { getRenderElement, PlatePlugin } from '@udecode/plate-core';
import { KEYS_CODE_BLOCK } from './defaults';
import { getCodeBlockDecorate } from './getCodeBlockDecorate';
import { getCodeBlockDeserialize } from './getCodeBlockDeserialize';
import { getCodeBlockOnKeyDown } from './getCodeBlockOnKeyDown';
import { getCodeBlockRenderLeaf } from './getCodeBlockRenderLeaf';
import { withCodeBlock } from './withCodeBlock';

/**
 * Enables support for pre-formatted code blocks.
 */
export const createCodeBlockPlugin = (): PlatePlugin => ({
  pluginKeys: KEYS_CODE_BLOCK,
  renderElement: getRenderElement(KEYS_CODE_BLOCK),
  renderLeaf: getCodeBlockRenderLeaf(),
  deserialize: getCodeBlockDeserialize(),
  decorate: getCodeBlockDecorate(),
  onKeyDown: getCodeBlockOnKeyDown(),
  withOverrides: withCodeBlock(),
});
