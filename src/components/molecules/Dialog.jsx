const DialogCustom = ({ body, title, buttons, isDialog, nextLink }) => {
  return (
    <div className=" overflow-auto  left-0 top-0 bottom-0 right-0 w-full h-full fixed z-40 bg-black bg-opacity-20">
      <div className="overflow-visible relative bg-white shadow rounded-lg mt-7 text-left p-10 border border-bb-gray-50 relative mx-auto z-50 max-w-xl py-12">
        <div className="flex justify-between gap-x-6 mb-4">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className=" text-left w-full">{body}</div>

        <div className="flex items-center justify-between">
          {nextLink}
          <div className="flex items-center">
            <button
              className="cursor-pointer absolute right-10 bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105 no-underline"
              onClick={isDialog}
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogCustom;
