import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import Routes from './router';
import '../style/vendor/animate/animate.min.scss';
import '../style/style.scss';



import Navbar from './components/navbar';

const App = () => {
  const store = createStore(() => {  return {}}, ['use redux']);

  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));