function Card() {
  const title = "Ocrhid Villa";
  const description =
    "Located in the suburbs of california, orchild villa offers luxury with a modern touch. Equipped with green lighting and rainwater harvesting system, this property is eco-friendly";
  const price = "$4,500,000";
  const picture = "./images/1.jpeg";
  return (
    <div>
      <img src={picture} alt="property" className="h-50 w-100"></img>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Card;
