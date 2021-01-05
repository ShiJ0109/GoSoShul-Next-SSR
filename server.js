const express = require('express');
const nextJS = require('next');
const { isBlockedPage, isInternalUrl } = require('next-server/dist/server/utils');

async function start() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = nextJS({ dev });
  const handle = app.getRequestHandler()
  const server = express();
  await app.prepare();

  // Redirect all requests to main entrypoint pages/index.js
  server.get('/spread', (req, res) => {
    return handle(req, res)
  })


  server.get('/*', async (req, res, next) => {
    try {
      // @NOTE code duplication from here
      // https://github.com/zeit/next.js/blob/cc6fe5fdf92c9c618a739128fbd5192a6d397afa/packages/next-server/server/next-server.ts#L405
      let requestArray = req.url.split("/")
      let requestDecodedArray = requestArray.map((el)=>decodeURIComponent(el));
      console.log((requestDecodedArray));
      if(requestDecodedArray[1]!=='shul'
            && requestDecodedArray[1] !== 'login'
            && requestDecodedArray[1] !== 'forgetpassword'
            && requestDecodedArray[1] !== 'user')
        return handle(req, res);
      const pathName = req.originalUrl;
      console.log(`\n${pathName}`);
      if (isInternalUrl(req.url)) {
        return app.handleRequest(req, res, req.originalUrl)
      }

      if (isBlockedPage(pathName)) {
        return app.render404(req, res, req.originalUrl)
      }

      // Provide react-router static router with a context object
      // https://reacttraining.com/react-router/web/guides/server-rendering
      req.locals = {};
      req.locals.context = {};
      const html = await app.renderToHTML(req, res, '/', {});

      // Handle client redirects
      const context = req.locals.context;
      if (context.url) {
        return res.redirect(context.url)
      }

      // Handle client response statuses
      if (context.status) {
        return res.status(context.status).send();
      }

      // Request was ended by the user
      if (html === null) {
        return;
      }

      app.sendHTML(req, res, html);
    } catch (e) {
      next(e);
    }
  });

  server.get('/*', (req, res) => {
    return handle(req, res)
  })

  server.listen(2999, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:2999`);
  });
}

start();
