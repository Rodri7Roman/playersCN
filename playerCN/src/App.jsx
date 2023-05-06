import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Equipos from "./components/Equipos/Equipos";
import Equipo from "./components/Equipo/Equipo";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import store from "./redux/store";
import Jugadores from "./components/Jugadores/Jugadores";
import Jugador from "./components/Jugador/Jugador";
import Register from "./components/Register/Register";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/equipos" element={<Equipos />} />
            <Route exact path="/equipos/1" element={<Equipo />} />
            <Route exact path="/jugadores" element={<Jugadores />} />
            <Route exact path="/jugadores/1" element={<Jugador />} />
            <Route exact path="/registrarse" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
