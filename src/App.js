import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions/counterActions";
import { logIn, logOut } from "./actions/isLoggedInAction";
import "./App.css";

function App() {
  const counterReducer = useSelector((state) => state.counterReducer);
  const loginReducer = useSelector((state) => state.loginReducer);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="App__div">
        <h2>counter: {counterReducer}</h2>
        <button
          className="ui black button"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="ui black button"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="App__login">
        {!loginReducer ? (
          <button className="ui black button" onClick={() => dispatch(logIn())}>
            login
          </button>
        ) : (
          <button
            className="ui black button"
            onClick={() => dispatch(logOut())}
          >
            logout
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
