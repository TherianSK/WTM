import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from './components/login/login';

const store=createStore();
const App = () =>
(<Provider store={store}>
  <MuiThemeProvider>
  <Login />
  </MuiThemeProvider>
  </Provider>);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
export default App;
