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
            <TodoCard text='Left card' priority='prioThree' today={false} />
            <TodoCard
              text='Left card with more content to see what happens and now I need more text'
              priority='prioOne'
              today={false}
            />
            <TodoCard text='Left card' priority='prioTwo' today={false} />
            <TodoCard text='Left card' priority='prioOne' today={false} />
          </div>
        </div>
        <div className={styles.halfContainer}>
          <h3 className={styles.halfHeading}>Today</h3>
          <div className={styles.listContainer}>
            <TodoCard text='Right card' priority='prioOne' today={true} />
            <TodoCard text='Right card' priority='prioTwo' today={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
