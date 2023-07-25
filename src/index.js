import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/about';
import Contact from './routes/Contact';
import Error from './routes/Error';

import MainLayout from './layout/Main';
import Projects from './routes/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: 'contacts/:contactid',
            element: <Contact />
          },
        ]
      },
      
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]

  },

 
  ,
  // { path: '*',
  // element: <h1>Not Found</h1>},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    < RouterProvider router={router} />
    {/* <MainMenu /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
