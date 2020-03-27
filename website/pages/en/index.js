const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Showcase = require(`${process.cwd()}/core/Showcase.js`);

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={siteConfig.repoUrl}>GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {docsUrl, baseUrl, defaultVersionShown} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const versionPart = `${defaultVersionShown ? `${defaultVersionShown}/` : ''}`;
    const docUrl = doc => `${docsPart}${versionPart}${langPart}${doc}`;


    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div  className="featureShowcaseSection  paddingBottom" style={{textAlign: 'center'}}>
        <h2>Use Cases</h2>
        <MarkdownBlock>{`Document business [use cases](${docUrl('use-cases/overview')}) that drives the Open Developer Platform.`}</MarkdownBlock>
      </div>
    );

    const Features = () => (
      <Block background="white" layout="fourColumn">
        {[
          {
            content: `ODP provides collaboration workflows that are open and accessible by everyone, especially financial institutions, which are often blocked by regulatory restrictions.`,
            image: `https://www.finos.org/hubfs/FINOS/website/pages/odp/icons/people.svg`,
            imageAlign: 'top',
            title: 'Project Collaboration',
          },
          {
            content: `FINOS contributors can access to development infrastructure services, like distributed SCM, CI/CD, IP compliance & security checks, container runtime and release automation`,
            image: `https://www.finos.org/hubfs/FINOS/website/pages/odp/icons/construct.svg`,
            imageAlign: 'top',
            title: 'Developer tooling',
          },
          {
            content: `Everyone is welcome to read, listen and submit feedback to the ODP Team; all content and conversations produced are (and will be) public.`,
            image: `https://www.finos.org/hubfs/FINOS/website/pages/odp/icons/people.svg`,
            imageAlign: 'top',
            title: 'Open to everyone',
          }
        ]}
      </Block>
    );

    const ProjectShowcase = () => {
      if ((siteConfig.projects || []).length === 0) {
        return null;
      }

      const pinnedProjects = siteConfig.projects.filter(project => project.pinned);

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="projectShowcase productShowcaseSection paddingTop paddingBottom">
          <h2>Projects Using ODP</h2>
          <Showcase projects={pinnedProjects} />
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          {/* <FeatureCallout /> */}
          <ProjectShowcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;