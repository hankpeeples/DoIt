import styles from './TodoCard.module.css';

type Props = {
  text: string,
};

const TodoCard = ({ text }: Props) => {
  return <div className={styles.cardWrapper}>{text}</div>;
};

export default TodoCard;
