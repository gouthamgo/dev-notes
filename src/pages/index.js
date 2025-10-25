import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Learn React. Get Hired. 🚀
        </Heading>
        <p className={styles.heroSubtitle}>
          From JavaScript fundamentals to job-ready React skills. No fluff. Just what actually matters.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            Start Learning Now →
          </Link>
        </div>
        <p className={styles.heroSmallText}>
          ✨ Free • Interactive • Built by developers, for developers
        </p>
      </div>
    </header>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: '📚',
      title: 'Progressive Learning',
      description: 'Start with JavaScript basics, add TypeScript, master React. Each lesson builds on the last. No jumping around.',
    },
    {
      icon: '💼',
      title: 'Job-Focused Content',
      description: 'Learn what companies actually look for: hooks, routing, state management, API integration, testing, deployment.',
    },
    {
      icon: '🎯',
      title: 'Interview Ready',
      description: 'Every section includes real interview questions with answers. Build 5 portfolio projects you can show employers.',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <Heading as="h3">{feature.title}</Heading>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningPath() {
  const steps = [
    {
      number: '1',
      title: 'JavaScript Essentials',
      description: 'Variables, functions, arrays, async code, ES6+',
      duration: '⏱️ 2-3 days',
    },
    {
      number: '2',
      title: 'TypeScript Basics',
      description: 'Types, interfaces, TypeScript with React',
      duration: '⏱️ 1-2 days',
    },
    {
      number: '3',
      title: 'React Fundamentals',
      description: 'Components, state, effects, hooks',
      duration: '⏱️ 5-7 days',
    },
    {
      number: '4',
      title: 'Job-Ready Skills',
      description: 'Routing, APIs, forms, testing, deployment',
      duration: '⏱️ 7-10 days',
    },
  ];

  return (
    <section className={styles.learningPath}>
      <div className="container">
        <Heading as="h2" className={styles.pathHeading}>
          Your Learning Path
        </Heading>
        <div className={styles.pathSteps}>
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className={styles.pathCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <Heading as="h3" className={styles.stepTitle}>
                  {step.title}
                </Heading>
                <p className={styles.stepDescription}>{step.description}</p>
                <p className={styles.stepDuration}>{step.duration}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className={styles.pathArrow}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className={styles.pathCTA}>
          <Link
            className="button button--primary button--lg"
            to="/javascript/intro">
            Start with JavaScript →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="From JavaScript fundamentals to job-ready React skills. Free interactive guide built by developers.">
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <LearningPath />
      </main>
    </Layout>
  );
}
