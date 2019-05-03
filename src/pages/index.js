import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Start building on Catapult today</h1>
    <p>
      Whether you're looking to start an experiment, build a MVP, bootstrap an
      eco-system or other innovative ideas, Catapult has the services to help
      you build fabulous modern-day web &amp; mobile applications with the
      security &amp; the reliability of the NN Cloud Infrastructure
    </p>

    <h2>Explore Catapult platform API's</h2>

    <h2>Powering your innovation</h2>

    <h3>Family Office</h3>

    <h3>Friend</h3>

    <h3>Bundelz</h3>

    <h2>Under the hood</h2>
    <p>
      Catapult is built upon the shoulder of giants - The NN Cloud
      Infrastructure. These are some of its fundamental building blocks. Most of
      these are accessible through our CLI.
    </p>

    <dl>
      <dt>CI/CD pipeline</dt>
      <dd>Continuous deployment of your software</dd>

      <dt>Project metrics</dt>
      <dd>Data &amp; insights on how a project is doing</dd>

      <dt>Customer data / ecosystem data</dt>
      <dd>Know your customers and your ecosystem</dd>

      <dt>Templates</dt>
      <dd>Web / Mobile templates to quickly help bootstrap your project</dd>

      <dt>DevOps tools</dt>
      <dd>Access to Azure DevOps tooling</dd>

      <dt>Principes, best practices</dt>
      <dd>Knowledge base of principes &amp; best practices</dd>
    </dl>

    <h2>Tell me more</h2>
    <p>
      Catapult places your innovation idea central and wants to assist you to
      make it a success. We think timely assistance mixed with your passion is
      key to secure results. What assistance can you look for?
    </p>

    <dl>
      <dt>Scouting a tech partner</dt>
      <dd>
        Finding a good technology partner can be crucial in bringing your idea
        to life. But how to know if you have the right one? Which questions to
        ask?
      </dd>

      <dt>Full-stack engineers</dt>
      <dd>
        Are you looking for engineers to build your innovation idea? Our team of
        full-stack engineers can assist your.
      </dd>

      <dt>Network of experts</dt>
      <dd>
        Don't know who to contact for questions on legal, data, UX, security or
        compliance. See if you can find them through our network
      </dd>

      <dt>Scaling-up / architecture review</dt>
      <dd>
        Need assistance in scaling-up your innovation and wondering what
        architecture is needed?
      </dd>
    </dl>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
