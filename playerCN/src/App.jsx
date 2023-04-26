import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
