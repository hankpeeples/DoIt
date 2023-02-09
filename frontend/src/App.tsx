import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.windowDrag} />
      <div className={styles.viewWrapper}>
        <div className={styles.halfContainer}>Left</div>
        <div className={styles.halfContainer}>Right</div>
      </div>
    </div>
  );
}

export default App;
