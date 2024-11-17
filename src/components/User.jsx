/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function User({ user, index }) {
  const { id, name, email } = user;
  const navigate = useNavigate();

  const cardStyle =
    index % 2 === 0
      ? "bg-blue-100 border-blue-300"
      : "bg-green-100 border-green-300";

  return (
    <div
      className={`p-6 border rounded-lg shadow-md flex flex-col items-start ${cardStyle}`}
    >
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        <span className="font-bold text-gray-900">ID:</span> {id}
      </h2>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-gray-600 mb-4">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <button
        className="py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all"
        onClick={() => navigate(`/users/${id}`)}
      >
        View Details
      </button>
    </div>
  );
}

export default User;
