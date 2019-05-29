import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Heading from '../components/Heading';

const Page2 = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Heading component="h1">Start building on Catapult today</Heading>
    <p>
      Whether you're looking to start an experiment, build a MVP, bootstrap an
      eco-system or other innovative ideas, Catapult has the services to help
      you build fabulous modern-day web &amp; mobile applications with the
      security &amp; the reliability of the NN Cloud Infrastructure
    </p>

    <Heading component="h2">Explore Catapult platform API's</Heading>

    <Heading component="h2">Powering your innovation</Heading>

    <Heading component="h3">Family Office</Heading>

    <Heading component="h3">Friend</Heading>

    <Heading component="h3">Bundelz</Heading>

    <Heading component="h2">Under the hood</Heading>
    <p>
      Catapult is built upon the shoulder of giants - The NN Cloud
      Infrastructure. These are some of its fundamental building blocks. Most of
      these are accessible through our CLI.
    </p>

    <dl>
      <Heading component="dt">CI/CD pipeline</Heading>
      <dd>Continuous deployment of your software</dd>

      <Heading component="dt">Project metrics</Heading>
      <dd>Data &amp; insights on how a project is doing</dd>

      <Heading component="dt">Customer data / ecosystem data</Heading>
      <dd>Know your customers and your ecosystem</dd>

      <Heading component="dt">Templates</Heading>
      <dd>Web / Mobile templates to quickly help bootstrap your project</dd>

      <Heading component="dt">DevOps tools</Heading>
      <dd>Access to Azure DevOps tooling</dd>

      <Heading component="dt">Principes, best practices</Heading>
      <dd>Knowledge base of principes &amp; best practices</dd>
    </dl>

    <Heading component="h2">Tell me more</Heading>
    <p>
      Catapult places your innovation idea central and wants to assist you to
      make it a success. We think timely assistance mixed with your passion is
      key to secure results. What assistance can you look for?
    </p>

    <dl>
      <Heading component="dt">Scouting a tech partner</Heading>
      <dd>
        Finding a good technology partner can be crucial in bringing your idea
        to life. But how to know if you have the right one? Which questions to
        ask?
      </dd>

      <Heading component="dt">Full-stack engineers</Heading>
      <dd>
        Are you looking for engineers to build your innovation idea? Our team of
        full-stack engineers can assist your.
      </dd>

      <Heading component="dt">Network of experts</Heading>
      <dd>
        Don't know who to contact for questions on legal, data, UX, security or
        compliance. See if you can find them through our network
      </dd>

      <Heading component="dt">Scaling-up / architecture review</Heading>
      <dd>
        Need assistance in scaling-up your innovation and wondering what
        architecture is needed?
      </dd>
    </dl>
  </Layout>
);

export default Page2;
