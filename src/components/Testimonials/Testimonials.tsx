import { Card } from "./components";
function Testimonials() {
  return (
    <div className="mx-auto max-w-7xl mt-10">
      <div className="flex justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Recent Properties</h2>
      </div>
      <div className="grid grid-cols-3 mx-2">
        <Card name="Bob" position="Director">
          This is one of the best property websites I have ever used. Kudos to
          prime properties and the team.
        </Card>
        <Card name="Bob" position="Director">
          This is one of the best property websites I have ever used. Kudos to
          prime properties and the team.
        </Card>
        <Card name="Bob" position="Director">
          This is one of the best property websites I have ever used. Kudos to
          prime properties and the team.
        </Card>
      </div>
    </div>
  );
}

export default Testimonials;
