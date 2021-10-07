import { Link } from 'react-router-dom';
import { BsCodeSlash } from 'react-icons/bs';
const Nav = ({ user }) => {
  return (
    <div className="flex justify-around bg-green-600 text-white text-bold font-mono text-bold text-lg p-2  ">
      <BsCodeSlash size="25" />
      <div>
        <nav>
          <div className="nav-bar">
            <Link className="m-32 hover:bg-white hover:text-gray-900" to="/">
              About
            </Link>
            <Link className="m-32 hover:bg-white hover:text-gray-900" to="/projects">
              Projects
            </Link>
            <Link className="m-32 hover:bg-white hover:text-gray-900 " to="/resume">
              Resume
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Nav;
