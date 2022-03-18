import "bulmaswatch/darkly/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";
import Footer from "./components/footer";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
      <div>
        <Footer />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
