import { headerLogo } from "./../assets/images";
import { hamburger } from "./../assets/icons";
import { navLinks } from "../constants";

function Navbar() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              {item.label}
            </a>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
