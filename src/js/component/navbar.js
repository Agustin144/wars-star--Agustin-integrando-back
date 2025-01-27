import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import navbar from "../../styles/navbar.css";
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {

  const { store, actions } = useContext(Context);
  const [listaFavoritos, setlistafavoritos] = useState([])
  useEffect(function () {
    //  setlistafavoritos(store.favoritos)
    
      actions.favoritosDeUsuario()
    

  }, [])
  // console.log(listaFavoritos);
  const navigate= useNavigate();
  
  const handleLogout=()=>{
    actions.logOut()
    navigate("/login")

  }
  return (
    <nav className="navbar navbar-light bg-light mb-3 sticky-top nav">
      <img id="local-nav-logo-desktop" className="d-flex ms-5 " style={{ width: "100px" }} src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" />
      
      <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle btn btn-primary boton " style={{color: "black"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Favorites <span className="badge text-bg-secondary ">{store.favoritos.length}</span>

        </a>
        <ul className="dropdown-menu menu">
          {store.favoritos.map(item => (
            <li className="dropdown-item me-4"> {item.vehicle?.name}{item.people?.name}{item.starship?.name}{item.species?.name}{item.planet?.name} <span onClick={() => actions.eliminarFavorito(item)}><span className="ms-2 btn btn-danger float-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg></span></span></li>


          ))}
        </ul>
      </div>
      {store.auth &&   <button class="btn btn-primary me-2 p-2 "onClick={handleLogout}>Log Out</button>}
    </nav>
  );
};
