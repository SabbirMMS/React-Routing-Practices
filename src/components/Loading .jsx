const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-75"></div>
      <p className="mt-4 text-lg font-medium text-gray-700">{"Loading..."}</p>
    </div>
  );
};

export default Loading;
