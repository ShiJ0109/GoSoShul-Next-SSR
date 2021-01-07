import React from 'react';
import {BrowserRouter, StaticRouter } from 'react-router-dom';
import * as userRequests from 'services/userRequests';

const isServer = typeof window === 'undefined';

export default App => {
  return class AppWithReactRouter extends React.Component {
    static async getInitialProps(appContext) {
      const {
        ctx: {
          req: {
            originalUrl,
            locals = {},
          },
        },
      } = appContext;
      try{
        let requestArray = typeof originalUrl === undefined ? [] : originalUrl.split("/");
        let requestDecodedArray = requestArray.map((el)=>decodeURIComponent(el));
        let data = {};
        if(requestDecodedArray.length > 2 &&requestDecodedArray[1] ==='spread' )
        {
          const fetchData = await userRequests.GetRef(requestDecodedArray[2]);
          data = {fetchData, params : requestDecodedArray};
        }
        const res = await fetch('https://api.github.com/repos/vercel/next.js')
        const json = await res.json()
        return {
          originalUrl,
          context: locals.context || {},
          data,
        };
      }
      catch(e){
        return {
          originalUrl,
          context: locals.context || {},
          data: {},
        };
      }
    }

    render() {
      if (isServer) {
        const {StaticRouter} = require('react-router-dom/server');
        return (
          <StaticRouter
            location={this.props.originalUrl}
            context={this.props.context}
          >
            <App {...this.props} />
          </StaticRouter>
        );
      }
      return (
        <BrowserRouter>
          <App {...this.props} />
        </BrowserRouter>
      );
    }
  };
};
