import { useLoaderData } from "react-router-dom";
import User from "../components/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
        All Users
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users &&
          users.map((user, index) => (
            <User key={user.id} user={user} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Users;
