import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = ({ style }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "nn-logo.png" }) {
        childImageSharp {
          fixed(width: 196, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img style={style} fixed={data.logo.childImageSharp.fixed} />;
};

const Header = ({ siteTitle }) => (
  <header
    style={
      {
        // marginBottom: `1.45rem`,
      }
    }
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#ea650d',
            textDecoration: `none`,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Logo style={{ marginRight: 24 }} />
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
