import Card from "./components";
function SectionHeading() {
  return (
    <div className="mt-5 mx-auto max-w-7xl px-8">
      <div className="flex justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Recent Properties</h2>
      </div>
      <div className="grid grid-cols-3">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default SectionHeading;
