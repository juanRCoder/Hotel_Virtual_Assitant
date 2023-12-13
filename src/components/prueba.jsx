import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación


function Form() {
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre }),
      });

      if (response.ok) {
        console.log("Datos enviados correctamente");
        navigate("/dashboard"); // Redirige a la página de Dashboard después de enviar el nombre
      } else {
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  const handleInputChange = (e) => {
    setNombre(e.target.value);
  };

  return (
    <>
      <h1>Form!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ingresa tu nombre:{" "}
          <input type="text" value={nombre} onChange={handleInputChange} />
          <button type="submit">Enviar</button>
        </label>
      </form>
      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </>
  );
}

export default Form;
