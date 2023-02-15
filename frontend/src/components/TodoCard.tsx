import { useState } from 'react';
import styles from './TodoCard.module.css';
import {
  ArrowRightCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/solid';

type Props = {
  text: string,
  priority?: string,
};

const TodoCard = ({ text, priority }: Props) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.row}>
        <p>{text}</p>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.iconContainerLeft}>
          <TrashIcon className={styles.icon} />
          <PencilSquareIcon className={styles.icon} />
          <DocumentDuplicateIcon className={styles.icon} />
        </div>
        <ArrowRightCircleIcon className={styles.icon} onClick={() => {}} />
      </div>
    </div>
  );
};

export default TodoCard;
