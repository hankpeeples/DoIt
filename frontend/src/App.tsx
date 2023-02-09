import { useState } from 'react';
import { darkTheme, lightTheme, Theme } from './styles/theme';
import styles from './App.module.css';

function App() {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const changeTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <div className={styles.appWrapper}>
      <div className={styles.windowDrag} />
      <p>Text</p>
    </div>
  );
}

export default App;
