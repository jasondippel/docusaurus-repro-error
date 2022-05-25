import React from 'react';
import GraphiQLCore from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import 'graphiql/graphiql.min.css';

const GraphiQL = () => {
  const token = '1234';
  const {
    siteConfig: {
      customFields: { graphqlUrl, githubToken, authToken },
    },
  } = useDocusaurusContext();

  // This is what's causing it to fail the build with the following...
  // ✖ Server
  //   Compiled with some errors in 11.91s
  // [ERROR] Docusaurus server-side rendering could not render static page with path "/explorer".
  // Error: Cannot find module './assets/js/79.029384a4.js'
  // Require stack:
  // - main
  //     at Array.reduce (<anonymous>)
  // [ERROR] Unable to build website for locale en.
  // [ERROR] Error: Failed to compile with errors.
  //     at /Users/jasondippel/Code/docusaurus-repro-error/node_modules/@docusaurus/core/lib/webpack/utils.js:182:24
  //     at /Users/jasondippel/Code/docusaurus-repro-error/node_modules/webpack/lib/MultiCompiler.js:554:14
  //     at processQueueWorker (/Users/jasondippel/Code/docusaurus-repro-error/node_modules/webpack/lib/MultiCompiler.js:491:6)
  //     at processTicksAndRejections (node:internal/process/task_queues:78:11)
  // error Command failed with exit code 1.
  const fetcher = createGraphiQLFetcher({
    url: graphqlUrl as string,
    headers: {
      ['X-GitHub-Token']: githubToken as string,
      ['X-Auth-Token']: authToken as string,
      ['Authorization']: `Bearer ${token}`,
    },
  });

  return (
    <GraphiQLCore fetcher={fetcher} />
  );
};

export default GraphiQL;
