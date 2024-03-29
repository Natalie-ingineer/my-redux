import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { balanceReducer } from "./balanceSlice";
import { localeReducer } from "./localSlice";

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
});

export const store = createStore(rootReducer, devToolsEnhancer());
