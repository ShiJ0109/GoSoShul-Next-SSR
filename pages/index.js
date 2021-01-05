import React, { useState, useEffect } from "react";
import Head from 'next/head'
import { Outlet, useRoutes } from 'react-router-dom';
import routes from '../src/routes';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import store from 'store/store';
import dynamic from "next/dynamic";



export function Index() {
  return <h2>Home</h2>;
}

export function About() {
  return <h2>About</h2>;
}

export function Users() {
  return <h2>Users</h2>;
}

export function NotFound() {
  return (
    <>
      {/* <Status code={404}/> */}
      <h2>Not found</h2>;
    </>
  )
}

// const routes = [
//   {
//     path: 'app',
//     element: <Outlet/>,
//     children: [
//       { path: '/', element:  <h2>Home</h2> },
//       { path: 'about', element: <h2>About</h2> },
//       { path: 'users', element: <h2>Users</h2> },
//       { path: 'people', element: <h2>Users</h2> },
//       { path: '404', element: <h2>Not found</h2> },
//     ]
//   },
// ];

function App() {
  // const routing = useRoutes(routes);
  if(typeof window === undefined)
    return (<h1>Welcome to Next.js!</h1>);

  const AppClient = dynamic(() => import('../src/App'), {
    ssr: false
  });
  return(
    // <Provider store={store}>
    // <HelmetProvider>
      <div>
        <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        <link rel="stylesheet" href="/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
        <link rel="stylesheet" href="/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
        <link rel="stylesheet" href="/plugins/jqvmap/jqvmap.min.css" />
        <link rel="stylesheet" href="/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
        <link rel="stylesheet" href="/plugins/daterangepicker/daterangepicker.css" />
        <link rel="stylesheet" href="/plugins/summernote/summernote-bs4.css" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <h1>Welcome to Next.js!</h1>
        <img src="/s1.png" height="34"></img>
        <nav>
          <ul>
            {/* <li>
              <Link to="/app/">Home</Link>
            </li>
            <li>
              <Link to="/app/about/">About</Link>
            </li>
            <li>
              <Link to="/app/users/">Users</Link>
            </li>
            <li>
              <Link to="/app/people/">People</Link>
            </li> */}
          </ul>
        </nav>
        <AppClient />
      </div>
  //   </HelmetProvider>
  // </Provider>

  );
}

export default App;
