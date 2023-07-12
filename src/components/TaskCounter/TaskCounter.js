import { useSelector } from 'react-redux';
import { selectTaskCount } from 'redux/selectors';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
