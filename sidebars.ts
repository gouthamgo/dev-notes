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
        'react-fundamentals/intro',
        'react-fundamentals/first-component',
        'react-fundamentals/props-and-children',
        'react-fundamentals/state-and-usestate',
        'react-fundamentals/rendering-lists',
        'react-fundamentals/handling-events',
        'react-fundamentals/useeffect-and-data-fetching',
        'react-fundamentals/lifting-state-up',
        'react-fundamentals/essential-hooks',
        'react-fundamentals/component-patterns',
        'react-fundamentals/job-ready-patterns',
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
