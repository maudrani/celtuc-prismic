import React from 'react';
import NextLink from 'next/link';
import { Chevron, LinkWrapper } from './styled';

const Link = (props) => {
  return (
    <NextLink href={''} {...props}>
      <LinkWrapper
        data={{
          size: 'md',
          font_color: 'link-1',
          gap: '0.2em',

          ...props.data,
        }}
      >
        {props.children}
       {props.chevron && <Chevron />}
      </LinkWrapper>
    </NextLink>
  );
};

export default Link;
