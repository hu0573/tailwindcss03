interface ColumnProps {
  title: string;
  links: string[];
}

function Column({
  title = "Title",
  links = ["link1", "link2", "link3"],
}: ColumnProps) {
  return (
    <div className="m-3">
      <div className="text-green-600">{title}</div>
      {links.map((item) => (
        <div className="text-sm py-1" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Column;
