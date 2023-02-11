import styles from './App.module.css';
import TodoCard from './components/TodoCard';

function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.windowDrag} />
      <div className={styles.viewWrapper}>
        <div className={styles.halfContainer}>
          <h3 className={styles.halfHeading}>All Tasks</h3>
          <div className={styles.listContainer}>
            <TodoCard text="Left card" />
            <TodoCard text="Left card with more content to see what happens" />
            <TodoCard text="Left card" />
            <TodoCard text="Left card" />
          </div>
        </div>
        <div className={styles.halfContainer}>
          <h3 className={styles.halfHeading}>Today</h3>
          <div className={styles.listContainer}>
            <TodoCard text="Right card" />
            <TodoCard text="Right card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
