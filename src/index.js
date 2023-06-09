import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { HttpReqAbort } from 'components/HttpReqAbort';
import { HttpReqAbortOnEvent } from 'components/HttpReqAbortOnEvent';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HttpReqAbort /> */}
    <HttpReqAbortOnEvent />
  </React.StrictMode>
);
