import './style.scss';
import logo from '../../assets/images/logo-github.png';
import Menu from '../Menu';

export default function Header() {
  return (
    <div className="app-header">
      <img src={logo} alt="Github logo" />
      <Menu />
    </div>
  );
}
