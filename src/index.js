import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import createStore from './redux/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ApolloProvider } from 'react-apollo';
import Login from './components/login/login';
import client from './redux/client';

const store=createStore();
const App = () =>
(<ApolloProvider
  client={ client }
  store={ store } >
    <MuiThemeProvider>
      <Login />
    </MuiThemeProvider>
  </ApolloProvider>);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
export default App;
