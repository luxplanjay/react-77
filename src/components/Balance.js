import { useSelector } from 'react-redux';

export const Balance = () => {
  const balance = useSelector(state => state.account.balance);
  return <p>Balance: {balance}$</p>;
};
