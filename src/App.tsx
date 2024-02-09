import React, {useEffect, useState} from 'react';
import './App.css';
import {Site} from "./components/Site";
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import styles from "./components/Site.module.css";
import {S} from "./components/pages/__styles";
import {useWindowSize} from "./helpers/useWindowSize";


function App() {
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate(-1)
    }

    const windowSize = useWindowSize()



    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {windowSize>1000
                    ? <div className={styles.nav}>
                        {/*<div><NavLink className={({isActive})=>isActive ?styles.active:styles.navLink} to={'/page1'}>Page1</NavLink></div>*/}
                        <S.NavWrapper><NavLink to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                        <div><a href="/page1">aHrefPage1</a></div>
                    </div>
                    : <div></div>
                }


                <div className={styles.content}>
                    <Outlet/>
                    <Link to={'/page/0'} className={styles.buttonLink}> ГЛАВНАЯ СТРАНИЦА</Link>
                    <button onClick={onClickHandler}>НАЗАД</button>
                </div>
            </div>
        </div>
    );
}


export default App;
