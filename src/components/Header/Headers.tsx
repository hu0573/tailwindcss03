import LeftPart from "./components/LeftPart";
import RightPart from "./components/RightPart";

interface HeaderProps {
  ToggleDarkMode: () => void;
}

function Header({ ToggleDarkMode }: HeaderProps) {
  return (
    <nav>
      {/* Container for the entire nav */}
      <div className="bg-green-100 dark:bg-green-900 shadow-xl">
        {/* Container for the left and right section */}
        <div className="flex justify-between max-w-7xl mx-auto">
          {/* left */}
          <LeftPart></LeftPart>
          {/* right */}
          <RightPart ToggleDarkMode={ToggleDarkMode}></RightPart>
        </div>
      </div>
    </nav>
  );
}

export default Header;
