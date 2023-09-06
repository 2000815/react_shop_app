const LoadingDialog = ({ body, title }) => {
  return (
    <div className=" overflow-auto  left-0 top-0 bottom-0 right-0 w-full h-full fixed z-40 bg-black bg-opacity-20">
      <div className="overflow-visible relative bg-white shadow rounded-lg mt-7 text-left p-10 border border-bb-gray-50 relative mx-auto z-50 max-w-xl py-12">
        <div className="flex justify-between gap-x-6 mb-4">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className=" text-left w-full">{body}</div>
      </div>
    </div>
  );
};

export default LoadingDialog;
