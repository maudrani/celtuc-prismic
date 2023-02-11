import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkBreaks from 'remark-breaks';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';

import { RichTextContainer } from './styled';
import { MarkdownComponentsToReplace } from './adapters/react-markdown';

const RichText = ({ data, children, className }) => {
  return (
    <RichTextContainer className={className} size={data?.size}>
      <ReactMarkdown
        remarkPlugins={[gfm, remarkBreaks, remarkParse, remarkFrontmatter]}
        rehypePlugins={[rehypeRaw]}
        components={MarkdownComponentsToReplace}
      >
        {children || data?.markdown}
      </ReactMarkdown>
    </RichTextContainer>
  );
};

export default RichText;
