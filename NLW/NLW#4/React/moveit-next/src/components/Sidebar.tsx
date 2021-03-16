import { useRouter } from 'next/router';
import { useContext } from 'react';
import { BiHomeAlt, BiMedal, BiMoon, BiSun } from "react-icons/bi";
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import styles from '../style/components/Sidebar.module.css';

export function Sidebar({ toggleTheme }) {
  const router = useRouter();
  const { colors, title } = useContext(ThemeContext);
  return (
    <aside className={styles.sidebarContainer}>
      <header className={styles.header}>
        <a href="/" title="Testando o Move.it 2.0!" >
          <img src="/icons/moveon.svg" alt="MoveIt" title="Testando o Move.it!"/>
        </a>
      </header>
      <nav className={styles.nav}>
        <ul>
          <li className={ router.pathname === '/' ? styles.active : '' } >
            <a href="/" title="Desafios" ><BiHomeAlt /></a>
          </li>
            <li className={ router.pathname === '/leaderboard' ? styles.active : '' } >
            <a href="/leaderboard" title="Ranking" ><BiMedal /></a>
          </li> 
        </ul>
      </nav>
      <footer className={styles.footer}>
        <i>{(title === 'dark') ? <BiSun /> : <BiMoon /> }</i>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={12}
          width={36}
          handleDiameter={18}
          offHandleColor={colors.text}
          onHandleColor={colors.textHighlight}
          offColor={colors.grayLine}
          onColor={colors.text}
        />
      </footer>
    </aside>
  );
}