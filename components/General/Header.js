import Link from "next/link";
import Button from "./Button";
import { HamburgerIcon, Logo } from "./Icons";

const Header = () => {
  return (
    <header className="sticky z-40 top-0 bg-white">
      <nav className="custom-container flex justify-between item-center">
        <div className="my-auto">
          <Link href="/" passHref>
            <a className="w-20 h-5 block">
              <Logo />
            </a>
          </Link>
        </div>
        <div className="lg:hidden my-auto">
          <Link href="/" passHref>
            <a className="w-8 h-5 block">
              <HamburgerIcon />
            </a>
          </Link>
        </div>
        <div className="lg:flex lg:space-x-5 hidden">
          <div>
            <Button className="bg-indigo-500 text-white hover:bg-indigo-600">
              Sign up
            </Button>
          </div>
          <div>
            <Button className="hover:bg-indigo-100 text-indigo-500">
              Sign in
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
