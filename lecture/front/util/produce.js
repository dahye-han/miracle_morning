import { enableES5, produce } from 'immer';

 const produceFunction = (...args) => {
  enableES5();
  return produce(...args);
};

export default produceFunction;