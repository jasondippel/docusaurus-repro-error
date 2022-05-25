import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import 'graphiql/graphiql.min.css';

const GraphiQL = () => {
  const token = '1234';
  const {
    siteConfig: {
      customFields: { graphqlUrl, githubToken, authToken },
    },
  } = useDocusaurusContext();

  return (
    <BrowserOnly>
      {() => {
        const GraphiQLCore = require('graphiql').default;
        const createGraphiQLFetcher = require('@graphiql/toolkit').createGraphiQLFetcher;

        const fetcher = createGraphiQLFetcher({
          url: graphqlUrl as string,
          headers: {
            ['X-GitHub-Token']: githubToken as string,
            ['X-Auth-Token']: authToken as string,
            ['Authorization']: `Bearer ${token}`,
          },
        });

        return <GraphiQLCore fetcher={fetcher} />;
      }}
    </BrowserOnly>
  );
};

export default GraphiQL;
