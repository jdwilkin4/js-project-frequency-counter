type CardProps = {
  title: string;
  tags: string[];
};
export const Card = ({ title, tags }: CardProps) => {
  return (
    <div className="max-w-sm h-60 rounded overflow-hidden text-black bg-gray-100 hover:bg-green-700 hover:text-gray-200">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
