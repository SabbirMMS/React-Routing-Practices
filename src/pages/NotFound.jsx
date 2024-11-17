import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="p-32 h-[100vh] flex flex-col justify-center items-center">
      <button
        className="mt-32 py-3 px-16 bg-black text-xl text-white rounded-lg hover:bg-gray-800 "
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
      <img
        className="h-[100vh] w-[100vw]"
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
        alt=""
      />
    </div>
  );
};

export default NotFound;
