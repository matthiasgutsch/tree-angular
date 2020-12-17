import { TreeNode } from './tree-node';

export const NODES: TreeNode[] = [
  {
    name: 'Africa',
    showChildren: false,
    firstName: 'Africa',

    documents: [
      {
        name: 'document 1',
        data: '12/12/2005',
      },
      {
        name: 'document 2',
        data: '12/12/2005',
      },
    ],
    children: [
      {
        name: 'Algeria',
        firstName: 'Algeria',

        documents: [
          {
            name: 'document 1',
            data: '12/12/2005',
          },
          {
            name: 'document 2',
            data: '12/12/2005',
          },
        ],
        showChildren: false,
        children: [
          {
            name: 'Algeris',
            firstName: 'Algeris',

            showChildren: false,
            documents: [
              {
                name: 'document 1.jpg',
                data: '12/12/2005',
              },
              {
                name: 'document 2.jpg',
                data: '12/12/2005',
              },
            ],
            children: [],
          },
          {
            name: 'Algeria child 2',
            showChildren: false,
            children: [],
          },
        ],
      },
      {
        name: 'Angola',
        showChildren: false,
        children: [],
      },
      {
        name: 'Benin',
        showChildren: false,
        children: [],
      },
    ],
  },
  {
    name: 'Asia',
    showChildren: false,
    firstName: 'Asia',

    documents: [],
    children: [
      {
        name: 'Afghanistan',
        showChildren: false,
        children: [
          {
            name: 'Kabul',
            showChildren: false,
            children: [],
          },
        ],
      },
      {
        name: 'Armenia',
        showChildren: false,
        children: [],
      },
      {
        name: 'Azerbaijan',
        showChildren: false,
        children: [],
      },
    ],
  },
  {
    name: 'Europe',
    showChildren: false,
    firstName: 'Europe',
    documents: [],
    children: [
      {
        name: 'Romania',
        showChildren: false,
        children: [
          {
            name: 'Bucuresti',
            showChildren: false,
            children: [
              {
                name: 'Romania',
                showChildren: false,
                children: [
                  {
                    name: 'Bucuresti',
                    showChildren: false,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Hungary',
        showChildren: false,
        children: [],
      },
      {
        name: 'Benin',
        showChildren: false,
        children: [],
      },
    ],
  },
];
