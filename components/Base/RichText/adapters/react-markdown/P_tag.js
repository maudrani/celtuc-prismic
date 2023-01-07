import Img from '../../../Img';
import { childExistsInReplaceObj, childrenNeedsToBeFiltered } from './utils';

const elementsToReplace = { img: Img };
const DefaultComponent = (props) => <p {...props} />;

// eslint-disable-next-line no-unused-vars
export const filterP_Tag = ({ node, ...props }) => {
  if (!childrenNeedsToBeFiltered(props.children, elementsToReplace))
    return <p {...props} />;

  let replacedComponents = [];
  let defaultComponentChildren = [];

  props.children.forEach((child, idx) => {
    const ReplacedComponent = elementsToReplace[child.type];
    const childGoesOutsideDefaultTag = childExistsInReplaceObj(
      child,
      elementsToReplace
    );

    if (!childGoesOutsideDefaultTag) {
      defaultComponentChildren.push(child);
    }
    if (childGoesOutsideDefaultTag) {
      replacedComponents.push(
        <DefaultComponent key={`replaced-child-${idx}`}>
          {defaultComponentChildren}
        </DefaultComponent>
      );
      defaultComponentChildren = [];

      replacedComponents.push(
        <ReplacedComponent key={`replaced-child-${idx}`} {...child.props} />
      );
    }
  });

  /* replacedComponents = replacedComponents.map((comp, idx) => {
    const isOut = !!comp.type;

    if (isOut) {
      return <p key={`p-comp-${idx}`}>{comp}</p>;
    }

    return comp;
  }); */

  return replacedComponents;
};
