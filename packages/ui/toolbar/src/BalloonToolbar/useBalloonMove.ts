import { useEffect } from 'react';
import { getSelectionText, isSelectionExpanded } from '@udecode/plate-common';
import { TEditor } from '@udecode/plate-core';
import { setPositionAtSelection } from './setPositionAtSelection';

/**
 * Move when the selection changes.
 */
export const useBalloonMove = ({
  editor,
  ref,
  direction,
}: {
  editor?: TEditor;
  ref: any;
  direction: 'top' | 'bottom';
}) => {
  const selectionExpanded = editor && isSelectionExpanded(editor);
  const selectionText = editor && getSelectionText(editor);

  useEffect(() => {
    ref.current &&
      selectionExpanded &&
      setPositionAtSelection(ref.current, direction);
  }, [direction, selectionText?.length, selectionExpanded, ref]);
};
