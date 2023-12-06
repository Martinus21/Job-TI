import { combineReducers, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';

import users from "./users";
import exprience from "./exprience";
import jobs from "./jobs";

const rootReducer = combineReducers({
   users,
   exprience,
   jobs
});

export default function ReduxState(props) {
    
    // FOR DEVELOPMENT
    let store = createStore(rootReducer,compose(composeWithDevTools()));
    
    // FOR PRODUCTION
    // let store=createStore(rootReducer);

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}
