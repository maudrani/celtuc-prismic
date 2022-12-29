import React from 'react';
import { RichText } from '@prismicio/react';
import ReactMarkdown from 'react-markdown';

const MarkDown = (doc) => {
  const rawMarkdown = RichText.asText(doc.data.markup);
  

  return <ReactMarkdown source={rawMarkdown} />;
};

export default MarkDown;
