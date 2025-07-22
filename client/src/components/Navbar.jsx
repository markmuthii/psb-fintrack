import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5">
      <h1 className="font-bold text-2xl">FIN-TRACK</h1>
      <ul className="links flex gap-4">
        <li className="nav-item cursor-pointer">
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li className="nav-item cursor-pointer">
          <Link to={"/register"}>Register</Link>
        </li>
        <li className="nav-item cursor-pointer">
          <Link to={"/login"}>Login</Link>
        </li>
        <li className="nav-item cursor-pointer">
          <Link to={"/profile"}>Profile</Link>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <img
          src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/b/b0/Aang_img.jpg"
          alt="Avatar"
          width="50px"
          className="rounded-full"
        />
        <a href="login.html">
          <span>Welcome, John Wick</span>
        </a>
      </div>
    </nav>
  );
};

export { Navbar };
