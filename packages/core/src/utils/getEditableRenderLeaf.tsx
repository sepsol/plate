import * as React from 'react';
import { DefaultLeaf } from 'slate-react';
import { PlatePluginComponent } from '../types/PlatePluginOptions/PlateOptions';
import { RenderNodeOptions } from '../types/PlatePluginOptions/RenderNodeOptions';
import { TRenderLeafProps } from '../types/TRenderLeafProps';
import { getSlateClass } from './getSlateClass';

/**
 * Get a `Editable.renderLeaf` handler for `options.type`.
 * If the type is equals to the slate leaf type and if the text is not empty, render `options.component`.
 * Else, return `children`.
 */
export const getEditableRenderLeaf = ({
  type,
  component: Leaf = DefaultLeaf as PlatePluginComponent,
  getNodeProps,
}: RenderNodeOptions) => ({
  children,
  leaf,
  text,
  attributes,
}: TRenderLeafProps) => {
  const nodeProps =
    getNodeProps?.({ leaf, text, attributes, children }) ??
    leaf.attributes ??
    {};

  if (leaf[type] && !!leaf.text) {
    return (
      <Leaf
        className={getSlateClass(type)}
        attributes={attributes}
        leaf={leaf}
        text={text}
        nodeProps={nodeProps}
      >
        {children}
      </Leaf>
    );
  }

  return children;
};
