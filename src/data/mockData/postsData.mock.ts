import { PostType } from '../../types/PostType';

export const mockPosts: Array<PostType> = [
  {
    id: 1,
    title: 'Lorem ipsum',
    createdAt: new Date('2024-01-11'),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan libero at placerat aliquet. Ut eu ante nunc. Donec vitae dolor ut quam maximus commodo. Vivamus vel massa sagittis, dapibus diam vel, tincidunt felis. Sed mauris erat, gravida sit amet sodales nec, varius in risus. Duis ut facilisis turpis. Etiam eleifend ultricies diam. Proin sed eleifend ex. Donec lobortis elit dapibus metus aliquam congue. Nullam pretium purus et purus tincidunt, in iaculis nibh aliquam. Donec venenatis tortor in arcu dictum blandit. Donec et dui in enim pretium consequat in a justo. Duis et ultrices leo, pellentesque molestie diam. Etiam molestie libero a augue tristique hendrerit. Pellentesque non tortor id ex euismod cursus. In non urna a turpis mattis imperdiet.' +
      '\n' +
      'Ut semper enim nec odio vestibulum gravida. Donec pharetra lacus sit amet turpis rutrum pretium. Ut id felis ac felis sagittis pharetra nec a ante. Quisque dictum sodales mattis. Maecenas dapibus rhoncus tortor, ac aliquam elit pretium in. Nulla mollis metus nulla, quis lobortis magna porttitor sit amet. Nulla nisl quam, faucibus venenatis lacus sed, sodales cursus est. Quisque vehicula, ex commodo sollicitudin bibendum, felis nibh scelerisque leo, nec auctor ante purus in felis.',
    comments: [
      {
        id: 1,
        author: 'John',
        content: 'Great post!',
        replies: [],
      },
      {
        id: 2,
        author: 'Jane',
        content: 'Looking forward to more content!',
        replies: [
          {
            id: 3,
            author: 'John',
            content: 'Thanks, Jane!',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Community Guidelines',
    createdAt: new Date('2024-05-10'),
    content: 'Please follow the community guidelines.',
    comments: [
      {
        id: 1,
        author: 'Alice',
        content: 'I agree with the guidelines.',
        replies: [],
      },
    ],
  },
];
