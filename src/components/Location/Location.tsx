import Card from "./components/Card";
function Location() {
  return (
    <div className="mt-5 mx-auto max-w-7xl px-8">
      <div className="flex justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Locations</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
        <Card title="New York" picture="./images/4.jpg">
          Located in the suburbs of california, orchild villa offers luxury with
          a modern touch. Equipped with green lighting and rainwater harvesting
          system, this property is eco-friendly
        </Card>
        <Card title="Chicago" picture="./images/5.webp">
          Located in the suburbs of california, orchild villa offers luxury with
          a modern touch. Equipped with green lighting and rainwater harvesting
          system, this property is eco-friendly
        </Card>
        <Card title="California" picture="./images/6.jpg">
          Located in the suburbs of california, orchild villa offers luxury with
          a modern touch. Equipped with green lighting and rainwater harvesting
          system, this property is eco-friendly
        </Card>
      </div>
    </div>
  );
}

export default Location;
