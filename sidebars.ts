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
      label: 'JavaScript',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'javascript/intro',
          label: '📖 Introduction',
        },
        {
          type: 'category',
          label: '🎯 Core Concepts',
          collapsed: false,
          items: [
            'javascript/variables',
            'javascript/functions',
            'javascript/arrays-objects',
            'javascript/async-javascript',
            'javascript/es6-features',
          ],
        },
        {
          type: 'category',
          label: '🚀 Advanced Topics',
          collapsed: true,
          items: [
            'javascript/beginner-deep-dive',
            'javascript/interview-practice',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'TypeScript',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'typescript/intro',
          label: '📖 Introduction',
        },
        {
          type: 'category',
          label: '🎯 Fundamentals',
          collapsed: false,
          items: [
            'typescript/why-typescript',
            'typescript/basic-types',
            'typescript/interfaces',
          ],
        },
        {
          type: 'category',
          label: '🚀 Advanced Topics',
          collapsed: true,
          items: [
            'typescript/typescript-with-react',
            'typescript/interview-essentials',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'React',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'react-fundamentals/intro',
          label: '📖 Introduction',
        },
        {
          type: 'category',
          label: '🎯 Core Concepts',
          collapsed: false,
          items: [
            'react-fundamentals/first-component',
            'react-fundamentals/props-and-children',
            'react-fundamentals/state-and-usestate',
            'react-fundamentals/rendering-lists',
            'react-fundamentals/handling-events',
            'react-fundamentals/useeffect-and-data-fetching',
            'react-fundamentals/lifting-state-up',
          ],
        },
        {
          type: 'category',
          label: '🚀 Advanced Patterns',
          collapsed: true,
          items: [
            'react-fundamentals/essential-hooks',
            'react-fundamentals/component-patterns',
            'react-fundamentals/job-ready-patterns',
            'react-fundamentals/interview-coding-round',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🚀 Projects',
      collapsed: true,
      items: [
        'projects/intro',
      ],
    },
    {
      type: 'category',
      label: '💼 Job Ready',
      collapsed: true,
      items: [
        'job-ready/intro',
        'job-ready/resume-writing',
        'job-ready/linkedin-github-profile',
        'job-ready/networking-job-search',
        'job-ready/salary-negotiation',
      ],
    },
    {
      type: 'category',
      label: '🏗️ System Design',
      collapsed: true,
      items: [
        'system-design-debugging/system-design-for-react',
        'system-design-debugging/debugging-labs',
        'system-design-debugging/behavioral-prep',
        'system-design-debugging/project-portfolio-guide',
      ],
    },
  ],
};

export default sidebars;
