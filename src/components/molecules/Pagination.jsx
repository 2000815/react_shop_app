const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-6">
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-3 py-2 rounded-full ${
              currentPage === number
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:bg-yellow-500 transition"
            } cursor-pointer`}
          >
            <button
              className="focus:outline-none"
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
