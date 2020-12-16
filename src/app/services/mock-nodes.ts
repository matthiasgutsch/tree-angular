import { TreeNode } from './tree-node';

export const NODES: TreeNode[] = [
  {
    name: 'Africa',
    showChildren: false,
    documents: [],
    children: [
      {
        name: 'Algeria',
        documents: [
          {
            name: 'document 1',
          },
          {
            name: 'document 2',
          },
        ],
        showChildren: false,
        children: [
          {
            name: 'Algeris',
            showChildren: false,
            documents: [
              {
                name: 'document 1.jpg',
              },
              {
                name: 'document 2.jpg',
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
  {
    name: 'North America',
    showChildren: false,
    documents: [],

    children: [],
  },
];
