import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '👋 Start Here',
    },
    {
      type: 'category',
      label: '📚 JavaScript Essentials',
      collapsed: false,
      items: [
        'javascript/intro',
        'javascript/variables',
        'javascript/functions',
        'javascript/arrays-objects',
        'javascript/async-javascript',
        'javascript/es6-features',
      ],
    },
    {
      type: 'category',
      label: '📘 TypeScript Basics',
      collapsed: true,
      items: [
        'typescript/intro',
        'typescript/why-typescript',
        'typescript/basic-types',
        'typescript/interfaces',
        'typescript/typescript-with-react',
        'typescript/interview-essentials',
      ],
    },
    {
      type: 'category',
      label: '⚛️ React Fundamentals',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'react-fundamentals/intro',
          label: 'Coming Soon',
        },
      ],
    },
    {
      type: 'category',
      label: '💼 Job-Ready Skills',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'job-ready/intro',
          label: 'Coming Soon',
        },
      ],
    },
    {
      type: 'category',
      label: '🚀 Projects',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'projects/intro',
          label: 'Coming Soon',
        },
      ],
    },
  ],
};

export default sidebars;
