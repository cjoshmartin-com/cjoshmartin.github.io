import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import AppRouter from "./routes/AppRouter"

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
