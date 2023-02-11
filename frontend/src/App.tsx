import styles from './App.module.css';
import TodoCard from './components/TodoCard';

function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.windowDrag} />
      <div className={styles.viewWrapper}>
        <div className={styles.halfContainer}>
          <TodoCard text="Left card" />
        </div>
        <div className={styles.halfContainer}>
          <TodoCard text="Right card" />
        </div>
      </div>
    </div>
  );
}

export default App;
