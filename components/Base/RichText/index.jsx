import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import gfm from 'remark-gfm';
import { replaceRulesOnTextText } from './adapters';
import { RichTextContainer } from './styled';

const RichText = ({ data }) => {
  const testText = `
  # Heading level 1
  ## Heading level 2
  ### Heading level 3
  #### Heading level 4
  ##### Heading level 5
  ###### Heading level 6

  !jump!
  
  I really like using Markdown.

  !jump!

  I think I'll use it to format all of my documents from now on.
  I just love **bold text**.
  I just love __bold text__.
  Love**is**bold

  !jump!

  Italicized text is the *cat's meow*.
  Italicized text is the _cat's meow_.
  A*cat*meow
  Cupidatat nostrud cillum aliquip irure eiusmod. Minim velit 
  labore consequat magna aliqua ea sunt cupidatat dolore. 
  Esse officia labore sint nostrud incididunt 
  [Link text Here](https://link-url-here.org) consequat enim veniam labore elit consequat.
  
  !jump!
  
  This text is ***really important***.
  This text is ___really important___.
  This text is **_really important_**.
  
  !jump!

  > Dorothy followed her through many of the beautiful rooms in her castle.

  !jump!
  
  [Link text Here](https://link-url-here.org)
  
  !jump!
  
  > Dorothy followed her through many of the beautiful rooms in her castle.
  >
  > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
  
  !jump!
  
  > Dorothy followed her through many of the beautiful rooms in her castle.
  >
  >> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
  
  !jump!
  
  > #### The quarterly results look great!
  > !jump!

  > - Revenue was off the chart.
  > - Profits were higher than ever.
  > !jump!

  >  *Everything* is going according to **plan**.
  
  !jump!

  1. First item
  2. Second item
  3. Third item
  4. Fourth item

  !jump!

  1. First item
  2. Second item
  3. Third item
      1. Indented item
      2. Indented item
  4. Fourth item
  
  !jump!

  - First item
  - Second item
  - Third item
      - Indented item
      - Indented item
  - Fourth item

  !jump!

  1. Open the file containing the Linux mascot.
  2. Marvel at its beauty.

  !jump!

  ![Tux, the Linux mascot](https://cdn-icons-png.flaticon.com/512/518/518713.png)
  !jump!
  3. Close the file.
  `;

  return (
    <RichTextContainer>
      <ReactMarkdown remarkPlugins={[gfm]}>
        {replaceRulesOnTextText(testText)}
      </ReactMarkdown>
    </RichTextContainer>
  );
};

export default RichText;

RichText.exampleProps = {
  data: {
    markdown: `
    ### Heading level 3
    
    !jump!  
      
    I really like using Markdown.
  
    !jump!
  
    I think I'll use it to format all of my documents from now on.
    I just love **bold text**.
    I just love __bold text__.
    Love**is**bold
  
    !jump!
  
    Italicized text is the *cat's meow*.
    Italicized text is the _cat's meow_.
    A*cat*meow
    
    !jump!
    
    This text is ***really important***.
    This text is ___really important___.
    This text is **_really important_**.
    > Dorothy followed her through many of the beautiful rooms in her castle.
    
    !jump!
    
    > Dorothy followed her through many of the beautiful rooms in her castle.
    >
    > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
    
    !jump!
    
    > Dorothy followed her through many of the beautiful rooms in her castle.
    >
    >> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
    
    !jump!
    
    > #### The quarterly results look great!
    >
    > - Revenue was off the chart.
    > - Profits were higher than ever.
    >
    >  *Everything* is going according to **plan**.
    
    !jump!
  
    1. First item
    2. Second item
    3. Third item
    4. Fourth item
  
    !jump!
  
    1. First item
    2. Second item
    3. Third item
        1. Indented item
        2. Indented item
    4. Fourth item
    
    !jump!
  
    - First item
    - Second item
    - Third item
        - Indented item
        - Indented item
    - Fourth item
  
    !jump!
  
    1. Open the file containing the Linux mascot.
    2. Marvel at its beauty.
  
    !jump!
  
    ![Tux, the Linux mascot](https://cdn-icons-png.flaticon.com/512/518/518713.png)
    !jump!
    3. Close the file.
    `,
  },
};
