// import {createStore} from 'redux';
// import reducer from "./reducers/Index";

// const Store = createStore(reducers, {});


// export default Store;


import { createStore } from 'redux';
import reducers from './reducers/Index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools());

// export default store;







// import { createStore } from 'redux';
// import reducers from './reducers/Index';

// const store = createStore(
//     reducers,
//      {},
//      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;






