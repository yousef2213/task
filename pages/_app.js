import '../styles/globals.css'
// items
import { createStore } from "redux";
import reducer from "../reducer.js";
import { Provider } from "react-redux";

// store
const store = createStore(reducer);


function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
