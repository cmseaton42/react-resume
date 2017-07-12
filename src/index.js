import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
//import Routes from './router';
import '../style/vendor/animate/animate.min.scss'
import '../style/style.scss'

import Navbar from './components/navbar'
import Cover from './components/cover'
import DetailWIcon from './components/detail-w-icon'

const App = () => {
  const store = createStore(() => { return {} }, ['use redux']);

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Cover />
        <div className="d-flex flex-row flex-wrap justify-content-between w-100">
          <DetailWIcon icon={'envelope'} caption={'cmseaton42@gmail.com'} animation={'slideInLeft'} />
          <DetailWIcon icon={'phone'} caption={'1 (931) 446-6573'} animation={'slideInDown'} />
          <DetailWIcon icon={'map-marker'} caption={'5220 Stonehedge Dr, Evansville, IN 47715'} animation={'slideInRight'} />
        </div>
        <hr />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));