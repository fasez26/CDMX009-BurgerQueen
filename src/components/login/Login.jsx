import React, { useCallback, useState } from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../firebase/firebase";
import burger from "../../assets/images/burger.svg";
import title from "../../assets/images/title.svg";
import whiteRectangle from "../../assets/images/whiterectangle.svg";
import user from "../../assets/images/user.svg";
import padlock from "../../assets/images/padlock.svg";
import "../../assets/styles/Login.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const processData = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Ingrese Email");
      return;
    }
    if (!pass.trim()) {
      setError("Ingrese Password");
      return;
    }
    if (pass.length < 6) {
      setError("Ingrese Password de mínimo 6 carácteres");
      return;
    }
    setError(null);
  };

  const login = useCallback(async () => {
    try {
      await auth.signInWithEmailAndPassword(email, pass);
      setEmail("");
      setPass("");
      setError(null);
      history.push("/Personal");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Email no registrado");
      }
      if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
    }
  }, [email, pass, history]);

  return (
    <div className="container mt-5">
      <img className="burger" src={burger} alt="burger" />
      <img
        className="img-fluid__white"
        src={whiteRectangle}
        alt="loginRectangle"
      />
      <img className="logo" src={title} alt="title" />
      <form className="form" onSubmit={processData}>
        <div>
          {error && <div className="alert alert-danger error">{error}</div>}
          <img className="user" src={user} alt="user" />
          <input
            type="email"
            className="input form-rounded"
            id="email"
            placeholder="correo"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="">
          <img className="user" src={padlock} alt="padlock" />
          <input
            type="password"
            className="input form-rounded"
            id="password"
            placeholder="  Contraseña"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>
        <div>
          <button
            id="submit"
            type="submit"
            className="btn form-rounded"
            onClick={login}
          >
            Iniciar Sesión
          </button>
        </div>
        <div>
          <h5 className="names">Nallely Flores y Danaee Partida</h5>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
