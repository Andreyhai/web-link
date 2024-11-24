import React, { useRef } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ERROR_ROUTE } from '../../utils/PATHS';
import logo from '../../sources/logo/logo.svg'

const MyButton = () => {
    const buttonRef = useRef(null);

  const handleClick = () => {
    const spanElement = buttonRef.current.querySelector('span');
    spanElement.classList.add(styles.animate); // Добавляем класс для запуска анимации

    // Сброс анимации после завершения (необязательно, но рекомендуется):
    spanElement.addEventListener('animationend', () => {
      spanElement.classList.remove(styles.animate);
    //   spanElement.style.width = '0'; // Сбрасываем ширину для следующего клика
    }, { once: true }); // {once: true} - обработчик сработает только один раз
  };

  return (
    <button className={styles['login-button']} onClick={handleClick} ref={buttonRef}>
      <span style={{width: 'fit-content'}}>Войти</span>
    </button>
  );
  };
  
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="WebLink Logo" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link to={ERROR_ROUTE}>Услуги</Link></li>
            <li><Link to={ERROR_ROUTE}>Портфолио</Link></li>
            <li><Link to={ERROR_ROUTE}>Контакты</Link></li>
          </ul>
        </nav>
        <div className={styles.login}>
            <MyButton />
        </div>
      </div>
    </header>
  );
};

export default Header;