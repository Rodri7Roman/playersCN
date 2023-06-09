import { Suspense, useState } from "react";
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
import Ingresar from "./components/Ingresar/Ingresar";
import MyProfile from "./components/MyProfile/MyProfile";
import Error from "./components/Error/Error";
import PostDetail from "./components/PostDetail/PostDetail";
import { lazy } from "react";

// const Home = lazy(()=> import("./components/Home/Home"))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* <Suspense fallback="Loading..."> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/registrarse" element={<Register />} />
            <Route exact path="/ingresar" element={<Ingresar />} />
            <Route exact path="/equipos" element={<Equipos />} />
            <Route exact path="/equipos/1" element={<Equipo />} />
            <Route exact path="/jugadores" element={<Jugadores />} />
            <Route exact path="/jugadores/:username" element={<Jugador />} />
            <Route exact path="/post/:idPost" element={<PostDetail />} />
            <Route exact path="/perfil" element={<MyProfile />} />
            <Route path="*" element={<Error />} />
            {/* </Suspense> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
