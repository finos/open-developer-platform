import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const vendors = [
  {
    imageUrl: 'img/vendors/github-logo.png',
    name: 'GitHub'
  },
  {
    imageUrl: 'img/vendors/whitesource-logo.png',
    name: 'Whitesource'
  },
  {
    imageUrl: 'img/vendors/redhat-logo.png',
    name: 'Red Hat'
  },
  {
    imageUrl: 'img/vendors/greenkey-tech-logo.png',
    name: 'GreenKey Technologies'
  },
  {
    imageUrl: 'img/vendors/fossa-logo.png',
    name: 'FOSSA'
  }
]

const features = [
  {
    title: <>Project Collaboration</>,
    imageUrl: '/img/intro/project-collaboration.png',
    description: (
      <>
        ODP provides collaboration workflows that are open and accessible by everyone, especially financial institutions, which are often blocked by regulatory restrictions.
      </>
    ),
  },
  {
    title: <>Developer tooling</>,
    imageUrl: '/img/intro/developer-tools.png',
    description: (
      <>
        FINOS contributors can access to development infrastructure services, like distributed SCM, CI/CD, IP compliance & security checks, container runtime and release automation
      </>
    ),
  },
  {
    title: <>Open to everyone</>,
    imageUrl: '/img/intro/open.png',
    description: (
      <>
        Everyone is welcome to read, listen and submit feedback to the ODP Team; all content and conversations produced are (and will be) public.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Vendor({imageUrl, name}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('text--center col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={name} />
        </div>
      )}
      <h3>{name}</h3>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('what-is-odp')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {vendors && vendors.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <h2>ODP Vendors</h2>
                {vendors.map((props, idx) => (
                  <Vendor key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
