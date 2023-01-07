import React from 'react';
import { HasCommonElements } from 'utils/helpers/values';

export const childrenNeedsToBeFiltered = (
  componentChildren = [],
  elementsToReplace = {}
) =>
  HasCommonElements(
    componentChildren.map((el) => el.type),
    Object.keys(elementsToReplace)
  );

export const childExistsInReplaceObj = (child, elementsToReplace = {}) =>
  Object.keys(elementsToReplace).some((el_out) => el_out === child.type);

export const childAsReactComponent = (child, optionalKey) => {
  if (!child.type) return child;

  const compKey = child.props.key || optionalKey;
  const props = { ...child.props, key: compKey };
  const children = child.props.children;

  return React.createElement(child.type, props, children);
};
