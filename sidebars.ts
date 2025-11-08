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
      label: '🗺️ Complete Learning Path',
      collapsed: false,
      items: [
        'learning-path/intro',
        'learning-path/nextjs-intro',
      ],
    },
    {
      type: 'category',
      label: '📚 JavaScript',
      collapsed: true,
      items: [
        'javascript/intro',
        'javascript/variables',
        'javascript/functions',
        'javascript/arrays-objects',
        'javascript/async-javascript',
        'javascript/es6-features',
        'javascript/beginner-deep-dive',
        'javascript/interview-practice',
      ],
    },
    {
      type: 'category',
      label: '📘 TypeScript',
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
      label: '⚛️ React',
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
        'react-fundamentals/interview-coding-round',
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
