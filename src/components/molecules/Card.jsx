const Card = ({ result }) => {
  return (
    <div className="flex items-center p-4 pl-6 bg-white border border-bb-gray-20 rounded-lg cursor-pointer hover:border-bb-gray h-full">
      <div className="flex-shrink-0 ">
        <img
          src={result.logo_image}
          alt={result.name}
          className="w-48 h-52 rounded-lg"
        />
      </div>

      <div className="ml-4">
        <p className="text-xl font-bold">{result.name}</p>
        <p className="mt-2">アクセス方法</p>
        <p>{result.access}</p>
      </div>
    </div>
  );
};

export default Card;
