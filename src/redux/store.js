import { createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import allreducer from "./reducer/index"
import { composeWithDevTools } from "redux-devtools-extension";
//暴露Store



export default createStore(allreducer,composeWithDevTools(applyMiddleware(thunk)))