import { useTaskContext } from '../../contexts/TaskContext/useTaxtContext';
import styles from './Styles.module.css';

export function CountDown() {
  const {state } = useTaskContext();
  
  return (
    <div className={styles.countDown}>{state.formattedSecondsRemaining}</div>
  );
}
