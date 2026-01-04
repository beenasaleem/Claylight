import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="Claylight"
        className="cursor-pointer className h-14 md:h-16 w-auto"
      />
    </Link>
  );
}
