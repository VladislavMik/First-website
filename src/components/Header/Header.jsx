import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' />

        <div className = {s.loginBlock}>
            { props.isAuth
             ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
             :<NavLink to={`/login`}>Login</NavLink>}
        </div>
    </header>
}

export default Header;