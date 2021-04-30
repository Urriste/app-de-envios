import React, { useState } from "react";
import "./main.css";

const Main = () => {
  const [total, setTotal] = useState();

  const handleClick = () => {
    let envio = document.getElementById("input-envio").value;
    let propina = document.getElementById("input-propina").value;
    let dia = document.getElementById("input-dia").value;
    let mes = document.getElementById("input-mes").value;
    let año = document.getElementById("input-año").value;
    let comentario = document.getElementById("comentario").value;

    setTotal(envio + propina);
    console.log(
      `El día ${dia} del mes ${mes} del año ${año} se ganaron  $${total}`
    );
  };

  return (
    <div className="main-container ">
      <h1 className="title">Ingresar Ganancias</h1>
      <form className="form-container">
        <input
          type="text"
          name="envio"
          id="input-envio"
          placeholder="Envio"
          className="input"
          required
        />
        <input
          type="text"
          name="propina"
          id="input-propina"
          className="input"
          placeholder="Propina"
        />
        <div className="input-fecha__container">
          <h4 className="fecha-subtitle">Fecha</h4>
          <input
            type="text"
            name="dia"
            id="input-dia"
            placeholder="Dia"
            required
          />
          <input
            type="text"
            name="mes"
            id="input-mes"
            placeholder="Mes"
            required
          />
          <input
            type="text"
            name="año"
            id="input-año"
            placeholder="Año"
            required
          />
        </div>
      </form>
      <textarea
        name="comentario"
        id="comentario"
        cols="30"
        rows="5"
        placeholder="Comentario"
      ></textarea>
      <button onClick={handleClick} className="btn">
        Agregar
      </button>
    </div>
  );
};

export default Main;
