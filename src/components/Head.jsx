import React from "react";
import { BrowserRouter as useParams, useNavigate, BrowserRouter, Link } from 'react-router-dom';
export default function Header({handleLogout, isLoggedIn}) {
    return (
    <div className="header">
        <h1 className="header__logo">PETiSPretty</h1>
        <div className="header__links">
            <nav className="header__list">
                {isLoggedIn&&<li><Link className="header__link" to="/">Главная</Link></li>}
                {isLoggedIn&&<li><Link className="header__link" to="/cart">Корзина</Link></li>}
                {isLoggedIn&&<li><Link className="header__link" to="/order">Заказ</Link></li>}
                {!isLoggedIn&&<li><Link className="header__link" to="/login">Войти</Link></li>}
                {!isLoggedIn&&<li><Link className="header__link" to="/registration">Регистрация</Link></li>}
                {isLoggedIn&&<li className="header__link" onClick={()=>handleLogout()}>Выйти</li>}
            </nav>
        </div>
    </div>
    )
}