interface TagProps {
  children: React.ReactNode;
}

function Tag({ children }: TagProps) {
  return (
    <div className="bg-gray-200 rounded-full w-max px-3 mb-2 mr-1">
      <span>{children}</span>
    </div>
  );
}

export default Tag;
