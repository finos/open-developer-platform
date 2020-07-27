import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const projects = [
  {
    "name": "FDC3",
    "imageUrl": "https://raw.githubusercontent.com/finos/finos-landscape/master/hosted_logos/fdc3.svg",
    "url": "https://fdc3.org"
  },
  {
    "name": "Alloy",
    "imageUrl": "https://raw.githubusercontent.com/finos/finos-landscape/master/hosted_logos/alloy.svg",
    "url": "https://alloy.finos.org"
  },
  {
    "name": "Plexus Interop",
    "imageUrl": "https://raw.githubusercontent.com/finos/finos-landscape/master/hosted_logos/plexus-interop.svg",
    "url": "https://finos-plexus.github.io/plexus-interop"
  }
]

const vendors = [
  {
    imageUrl: 'img/vendors/morgan-stanley-800.png',
    name: 'Morgan Stanley'
  },
  {
    imageUrl: 'img/vendors/github-800.png',
    name: 'GitHub'
  },
  {
    imageUrl: 'img/vendors/red-hat-800.png',
    name: 'Red Hat'
  }
]

const features = [
  {
    title: <>Open Source Project Collaboration</>,
    imageUrl: '/img/intro/Collaboration.svg',
    description: (
      <>
        ODP delivers automated compliance, security and quality checks that enable open source collaboration in financial services and other regulated industries.
      </>
    ),
  },
  {
    title: <>Financial Services Working Together</>,
    imageUrl: '/img/intro/Bank.svg',
    description: (
      <>
        Bringing financial services firms together to identify successful solutions across finacial services engineering to collaboratively build a FINOS reference architecture.
      </>
    ),
  },
  {
    title: <>Technology Vendors Working Together</>,
    imageUrl: '/img/intro/TechCommunication.svg',
    description: (
      <>
        Bringing technology vendors and banks together to accelerate open source development in finance by integrating solutions into the Open Developer Platform.
      </>
    )
  },
  // {
  //   title: <>Teach collaboration best practices</>,
  //   imageUrl: '/img/intro/ConnectingTeaching.svg',
  //   description: (
  //     <>
  //       Teach collaboration best practices
  //     </>
  //   )
  // },
  {
    title: <>Accelerating Your Open Source Delivery Pipeline</>,
    imageUrl: '/img/intro/Success.svg',
    description: (
      <>
        ODP provides a reference architecture that accelerates the pipeline delivery of open source projects by leveraging the FINOS Open Developer Platform.
      </>
    )
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('text--center col col--3', styles.feature)}>
      {imgUrl && (
        <div>
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
    <div className={classnames('text--center col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.memberImage} src={imgUrl} alt={name} />
        </div>
      )}
     
    </div>
  );
}

function Project({imageUrl, name}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('text--center col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.projectImage} src={imgUrl} alt={name} />
        </div>
      )}
     
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 style={{visibility: 'hidden'}} className="hero__title">{siteConfig.title}</h1>
          <img style={{width: '600px'}} src={useBaseUrl('img/2020_ODP_Logo_WHT.png')}/>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/what-is-odp')}>
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
          <section className={styles.members}>
            <div className="container">
              <div className="row row--center">
                <h2>ODP Community Participants</h2>
              </div>
              <div className="row">
                {vendors.map((props, idx) => (
                  <Vendor key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {projects && projects.length && (
          <section className={styles.projects}>
            <div className="container">
              <div className="row row--center">
                <h2>Used by FINOS Projects</h2>
              </div>
              <div className="row">
                {projects.map((props, idx) => (
                  <Project key={idx} {...props} />
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
