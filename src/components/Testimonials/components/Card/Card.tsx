interface CardProps {
  name: string;
  position: string;
  children: React.ReactNode;
}

function Card({ name, position, children }: CardProps) {
  return (
    <div className="shadow-2xl rounded-2xl p-5 m-5 max-w-72">
      <div>
        <span className="text-xl font-bold text-green-500 align-text-bottom mr-1">
          "
        </span>
        {children}
        <span className="text-xl font-bold text-green-500 align-text-bottom ml-1">
          "
        </span>
      </div>
      <div className="flex bg-green-200 rounded-full mt-2 h-12 items-center">
        <img
          className="h-12 w-12 bg-green-700 rounded-full"
          src="./images/people.png"
          alt=""
        />
        <div className="mx-2 text-sm">
          <div className="text-green-700 font-bold">{name}</div>
          <div>{position}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
