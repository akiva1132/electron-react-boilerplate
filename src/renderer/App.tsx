import { MemoryRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { apoloClient } from './apolloClient';
// import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './redux/store'
import { Provider } from 'react-redux'

import './styles.css'

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}
{/* <RouterProvider router={router} /> */}

export default function App() {
console.log("akiva1");

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Hello />} />
    //   </Routes>
    // </Router>
    
    <StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apoloClient}>
        {/* <div>
          {window.location.href}
        </div> */}
        <RouterProvider router={router} />
      </ApolloProvider>
    </Provider>
  </StrictMode>
  );
}
