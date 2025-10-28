import Card from "./components/Card";
function SectionHeading() {
  return (
    <div className="mt-5 mx-auto max-w-7xl px-8">
      <div className="flex justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Recent Properties</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
        <Card
          title="Ocrhid Villa"
          picture="./images/1.jpeg"
          price="$4,500,000"
          tags={["7 Beds", "7 Baths"]}
        >
          Located in the suburbs of california, orchild villa offers luxury with
          a modern touch. Equipped with green lighting and rainwater harvesting
          system, this property is eco-friendly
        </Card>
        <Card title="Ocrhid Villa" picture="./images/2.jpeg" price="$4,500,000">
          Located in the suburbs of california, orchild villa offers luxury with
          a modern touch. Equipped with green lighting and rainwater harvesting
          system, this property is eco-friendly
        </Card>
        <Card title="Ocrhid Villa" picture="./images/3.jpeg" price="$4,500,000">
          Located in the suburbs of california, orchild villa offers luxury with
          a modern touch. Equipped with green lighting and rainwater harvesting
          system, this property is eco-friendly
        </Card>
      </div>
    </div>
  );
}

export default SectionHeading;
