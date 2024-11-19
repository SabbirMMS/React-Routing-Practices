import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import Loading from "../components/Loading ";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  const mVal = JSON.stringify(user, null, 2); // Get the full object as a string

  return (
    <div className="min-h-screen bg-base-100 text-primary">
      <header className="relative w-full bg-gradient-to-r from-primary to-primary-accent-300 text-white py-20">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold">
            {user ? `Welcome, ${user.displayName}!` : "Welcome to Our Website"}
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-white/80">
            {user ? "Explore your profile and enjoy our services!" : "Sign up or log in to get started."}
          </p>
          {!user && (
            <div className="mt-6">
              <Link
                to="/login"
                className="px-6 py-3 bg-white text-primary rounded-md shadow-md font-medium text-sm uppercase hover:bg-primary-accent-100"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
        {user && user.photoURL && (
          <div className="absolute top-10 right-10 flex items-center">
            <img
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              src={user.photoURL}
              alt="User Avatar"
            />
          </div>
        )}
      </header>

      {user && (
        <main className="py-12 bg-base-200 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-primary">
              Welcome back, {user.displayName}!
            </h2>
            <p className="mt-4 text-lg text-primary/80">Here is your profile information:</p>
            <div className="mt-6 bg-white shadow-lg rounded-lg p-6 text-left">
              <h3 className="text-xl font-semibold">User Details:</h3>
              <pre className="mt-4 p-4 bg-gray-100 text-sm rounded-md overflow-auto">
                {mVal}
              </pre>
            </div>
          </div>
        </main>
      )}

     
    </div>
  );
};

export default Home;
