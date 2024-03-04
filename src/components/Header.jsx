import { brainwave } from "../assets";

const Header = () => {
  return (
    <div className="bg-n-8/90 border-n-6 lg:bg-n-8/90 fixed top-0 z-50 border-b backdrop-blur-sm lg:backdrop-blur-sm">
      <div className="lg:px-7.5 mt-3 flex items-center px-5 max-lg:py-4 xl:px-10">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="BrainWave" />
        </a>
      </div>
    </div>
  );
};

export default Header;
