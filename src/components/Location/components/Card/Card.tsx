interface CardProps {
  title: string;
  picture: string;
  children: React.ReactNode;
}

function Card({ title, picture, children }: CardProps) {
  return (
    <div className="shadow-lg rounded-2xl m-2 overflow-hidden">
      <img
        src={picture}
        alt="property"
        className="w-full h-50 object-cover rounded-t-2xl"
      ></img>
      <div className="mx-6 my-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700">{children}</p>
      </div>
    </div>
  );
}

export default Card;
