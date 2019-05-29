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

  * {
    box-sizing: border-box;
  }

  html {
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
    overflow-y: scroll;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }

  body {
    font-family: 'NN Dagny';
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1.45rem;
    padding: 0;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.62671rem;
    line-height: 1.1;
    color: #ea650d;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.62671rem;
  }

  h3 {
    font-size: 1.38316rem;
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
          }}
        >
          <main>{children}</main>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
