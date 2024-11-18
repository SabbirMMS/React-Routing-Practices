function UserError() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-800 border-opacity-75"></div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 bg-red-100 py-4 px-6 rounded-lg shadow-md">
          User Not Found
        </h1>
        <p className="text-gray-600">
          Please check the username or try again later.
        </p>
      </div>
    </div>
  );
}

export default UserError;
