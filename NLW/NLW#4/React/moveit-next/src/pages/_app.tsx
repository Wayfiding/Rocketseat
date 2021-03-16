import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Sidebar } from '../components/Sidebar';
import GlobalStyle from '../style/global';
import dark from '../style/themes/dark';
import light from '../style/themes/light';
import usePersistedState from '../utils/usePersistedState';

import '../style/global.css'





function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
 
  return (
    
    <ThemeProvider theme={theme}>
      <Sidebar toggleTheme={toggleTheme}/>
      <GlobalStyle />
      

      <div className="wrapper">
      
        <Component {...pageProps} toggleTheme={toggleTheme}  />
        </div>
        </ThemeProvider>
  )
}

export default MyApp
