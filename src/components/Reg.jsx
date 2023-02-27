import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
export default function RegistrationForm({ onRegister ,isLoggedIn}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMail, setErrorMail] = useState('')
  const [errorPass, setErrorPass] = useState('')
  const handleClick = () => {
    navigate("/login");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password || !confirmPassword) {
        setErrorMessage('Имя пользователя, пароли не могут быть пустыми');
        return;
      }
    else if (password !== confirmPassword) {
      setErrorPass('Пароли не совпадают');
        return;
      }
    else if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMail(' Некорректный Email-адрес ');
        return;
      }
    else {
        onRegister({ username, password,email });
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setEmail('');
        setErrorMessage('');
        setErrorMail('');
        setErrorPass('');
        handleClick('');
    }
  };
  return (
    <form  className="lgForm" onSubmit={handleSubmit}>
      {errorMessage && <div>{errorMessage}</div>}
      <label>
        Имя пользователя:
        <input type="text" value={username} className={errorMessage && 'validate-error'}onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Пароль:{errorPass&&<p>{errorPass}</p>}
        <input type="password" value={password} className={errorPass && 'validate-error'} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <label>
        Подтверждение пароля:{errorPass&&<p>{errorPass}</p>}
        <input type="password" value={confirmPassword} className={errorPass && 'validate-error'} onChange={(event) => setConfirmPassword(event.target.value)} />
      </label>
      <br />
      <label>
        Email:{errorMail&& <p>{errorMail}</p>}
        <input type="email" value={email} className={errorMail && 'validate-error'} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <button className="btn_lg" type="submit">Зарегистрироваться</button>
    </form>
    );
    }