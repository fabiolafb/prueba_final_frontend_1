import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import img_home from "../assets/img/img_home.jpg";

export default function Home() {
  return (
    <>
      <div className="contenedor-home">
        <div className="div-txt">
          <h2>Bienvenid@ a Condominio Ventas</h2>
          <p>
            Este espacio es para que cada uno de quienes integran esta comunidad
            puedan comprar o vender productos de una manera confiable y fácil.
          </p>
          <p>
          <Link to="/registro"><b>Regístrate</b></Link> si entras por primera vez y disfruta de este útil
            espacio.
          </p>
          <h3><b id="slogan" >¡Juntos hacemos un condominio mejor!</b></h3>
        </div>
        <div className="div-img-home">
          <img alt="" src={img_home} className="img_home" />
        </div>
      </div>
    </>
  );
}
