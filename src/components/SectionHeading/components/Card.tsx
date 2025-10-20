interface CardProps {
  title: string;
  picture: string;
  children: React.ReactNode;
  price: string;
}

function Card({ title, picture, children, price }: CardProps) {
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
      <div className="mx-6 my-4">
        <span className="text-green-700 font-bold text-sm py-1 mr-2">
          {price}
        </span>
        <div>tag</div>
        <div>button</div>
      </div>
    </div>
  );
}

export default Card;
