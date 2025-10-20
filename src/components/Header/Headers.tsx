import LeftPart from "./components/LeftPart";
import RightPart from "./components/RightPart";

function Header() {
  return (
    <nav>
      {/* Container for the entire nav */}
      <div className="bg-green-100   shadow-xl">
        {/* Container for the left and right section */}
        <div className="flex justify-between max-w-7xl mx-auto">
          {/* left */}
          <LeftPart></LeftPart>
          {/* right */}
          <RightPart></RightPart>
        </div>
      </div>
    </nav>
  );
}

export default Header;
