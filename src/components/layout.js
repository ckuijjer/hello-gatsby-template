/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { Global, css } from '@emotion/core';

import Header from './header';
import './layout.css';
import fonts from '../fonts';

const styles = css`
  @font-face {
    font-family: 'NN Dagny';
    font-style: normal;
    font-weight: bold;
    src: local('NNDagnyDisplayWebPro'), url(${fonts.NNDagnyDisplayWebProEOT}),
      url(${fonts.NNDagnyDisplayWebProWOFF}) format('woff');
  }

  @font-face {
    font-family: 'NN Dagny';
    font-style: normal;
    font-weight: normal;
    src: local('NNDagnyTextWeb'), url(${fonts.NNDagnyTextWebEOT}),
      url(${fonts.NNDagnyTextWebWOFF}) format('woff');
  }

  body {
    font-family: 'NN Dagny';
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'NN Dagny';
    color: #ea650d;
  }

  dt {
    color: #ea650d;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Global styles={styles} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          {/* <footer>© {new Date().getFullYear()}</footer> */}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
