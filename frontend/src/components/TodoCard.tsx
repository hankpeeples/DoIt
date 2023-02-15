import styles from './TodoCard.module.css';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  TrashIcon,
  PencilSquareIcon,
  DocumentDuplicateIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

type Props = {
  text: string,
  priority: string,
  today: boolean,
};

const TodoCard = ({ text, priority, today }: Props) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={`${priority} ${styles.prioTopBar}`} />
      <p>{text}</p>
      <div className={styles.iconContainer}>
        {today ? (
          <>
            <ArrowLeftIcon className={styles.icon} onClick={() => {}} />
            <div className={styles.iconContainerLeft}>
              <CheckIcon className={styles.icon} />
              <DocumentDuplicateIcon className={styles.icon} />
              <PencilSquareIcon className={styles.icon} />
              <TrashIcon className={styles.icon} />
            </div>
          </>
        ) : (
          <>
            <div className={styles.iconContainerLeft}>
              <TrashIcon className={styles.icon} />
              <PencilSquareIcon className={styles.icon} />
              <DocumentDuplicateIcon className={styles.icon} />
              <CheckIcon className={styles.icon} />
            </div>
            <ArrowRightIcon className={styles.icon} onClick={() => {}} />
          </>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
