import React from 'react';
import { Link, useStaticQuery, StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Heading from '../components/Heading';
import BackgroundImage from 'gatsby-background-image';

const Hero = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg5.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          style={{ height: '70vh' }}
          backgroundColor={`#f1edeb`}
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Layout>
    <Hero>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 80,
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
        <div
          style={{
            padding: 40,
            backgroundColor: '#fff',
            borderRadius: 20,
            width: '50%',
          }}
        >
          <Heading component="h1">Created with Catapult</Heading>
          <div>
            You just used Catapult to create and deploy the start of your
            landingpage. Learn more about{' '}
            <a
              href="https://www.gatsbyjs.org"
              style={{ color: 'hsla(0, 0%, 0%, 0.8)' }}
            >
              Gatsby
            </a>
            , the technology that powers this blazingly fast landingpage.
          </div>
        </div>
      </div>
    </Hero>
    <div
      style={{
        margin: `0 auto`,
        marginTop: 40,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <Heading component="h2">About Catapult</Heading>
      <p>
        Whether you're looking to start an experiment, build a MVP, bootstrap an
        eco-system or other innovative ideas, Catapult has the services to help
        you build fabulous modern-day web &amp; mobile applications with the
        security &amp; the reliability of the NN Cloud Infrastructure
      </p>
    </div>
  </>
);

export default IndexPage;
