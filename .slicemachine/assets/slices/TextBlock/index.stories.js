import MyComponent from '../../../../slices/TextBlock';

export default {
  title: 'slices/TextBlock',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      version: 'sktwi1xtmkfgx8626',
      items: [
        {
          content: [
            {
              type: 'paragraph',
              text: 'Labore enim non aute laborum aliquip reprehenderit in fugiat qui ex aliqua voluptate sunt magna tempor. Veniam culpa eu nisi ad occaecat incididunt.',
              spans: [],
            },
          ],
          animation: 'None',
        },
      ],
      primary: {
        align: 'right',
        theme: 'Light',
        size: 'xxl',
        width: 'md',
        separation_gap: 'none',
        spacing: 'md',
      },
      id: '_Default',
      slice_type: 'text_block',
    }}
  />
);
_Default.storyName = '';
