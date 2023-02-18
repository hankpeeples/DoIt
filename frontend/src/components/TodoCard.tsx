import styles from './TodoCard.module.css';
import DueBar from './DueBar';

type Props = {
  text: string,
  priority: string,
  today: boolean,
  dueDate: string,
};

const TodoCard = ({ text, priority, today, dueDate }: Props) => {
  return (
    <div className={`${styles.cardWrapper} ${priority}`}>
      <DueBar dueDate={dueDate} />
      <p>{text}</p>
    </div>
  );
};

export default TodoCard;
