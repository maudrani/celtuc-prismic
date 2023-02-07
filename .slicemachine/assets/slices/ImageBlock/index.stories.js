import MyComponent from '../../../../slices/ImageBlock';

export default {
  title: 'slices/ImageBlock',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      version: 'sktwi1xtmkfgx8626',
      items: [
        {
          image: {
            dimensions: { width: 3168, height: 4752 },
            alt: null,
            copyright: null,
            url: 'https://images.unsplash.com/photo-1589321599763-d66926c29613',
          },
          content: [
            {
              type: 'paragraph',
              text: 'Adipisicing eiusmod anim reprehenderit magna non quis fugiat. Cillum officia exercitation pariatur aute laborum in reprehenderit laborum elit nisi magna magna veniam cillum.',
              spans: [],
            },
          ],
          theme: 'Light',
          background_type: 'none',
          align_y: 'bottom',
          align_x: 'left',
          text_align: 'left',
          image_align_y: 'Center',
          size: 'xxl',
          width: 'md',
          spacing: 'sm',
          image_height: 90,
          image_animation: 'None',
          content_animation: 'None',
        },
      ],
      primary: {
        theme: 'Light',
        width: 'md',
        height: 76,
        spacing: 'sm',
        separation_gap: 'none',
        align_y: 'top',
        min_height: 75,
      },
      id: '_Default',
      slice_type: 'image_block',
    }}
  />
);
_Default.storyName = '';
