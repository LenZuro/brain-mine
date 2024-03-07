import { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNav = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div className="bg-n-8/90 border-n-6 lg:bg-n-8/90 fixed top-0 z-50 border-b backdrop-blur-sm lg:backdrop-blur-sm">
      <div className="lg:px-7.5 mt-3 flex items-center px-5 max-lg:py-4 xl:px-10">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="BrainWave" />
        </a>
        <nav className="bg-n-8 fixed bottom-0 left-0 right-0 top-[5rem] hidden lg:static lg:mx-auto lg:flex lg:bg-transparent">
          <div className="z-2 relative m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`font-code text-n-1 hover:text-color-1 relative block text-2xl uppercase
                  transition-colors ${item.onlyMobile ? "lg:hidden" : ""} lg:-mr-0.25 px-6 py-6 md:py-8
                  lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}
                  lg:hover:text-n-1 lg:leading-5 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
      </div>
    </div>
  );
};

export default Header;
