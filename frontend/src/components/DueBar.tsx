import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon';
import CheckIcon from '@heroicons/react/24/outline/CheckIcon';
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon';
import styles from './DueBar.module.css';

type Props = {
  dueDate: string,
};

const DueBar = ({ dueDate }: Props) => {
  return (
    <div className={styles.dateWrapper}>
      <div className={styles.dueDate}>
        <CalendarIcon className={styles.calIcon} />
        {dueDate == '' ? <p>None</p> : <p>{dueDate} (2 days)</p>}
      </div>
      <div className={styles.iconButtonContainer}>
        <PencilSquareIcon className={styles.icon} />
        <CheckIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default DueBar;
