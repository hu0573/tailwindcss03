function Header() {
  return (
    <nav>
      {/* Container for the entire nav */}
      <div className="bg-green-500 max-w-6xl mx-auto px-4">
        {/* Container for the left and right section */}
        <div className="flex justify-between py-3">
          {/* left */}
          <div>
            <a href="#" className="flex items-center">
              <img
                src="./images/logo.svg"
                alt="logo"
                className="pr-2 h-8 w-8"
              ></img>
              <span className="text-lg font-semibold text-gray-500">
                Prime Properties
              </span>
            </a>
          </div>
          {/* right */}
          <div>Right</div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
