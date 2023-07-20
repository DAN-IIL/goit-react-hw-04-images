import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export default Loader;

function Loader() {
  return (
    <div className={css.infinity_spin}>
      <InfinitySpin width="200" />
    </div>
  );
}
