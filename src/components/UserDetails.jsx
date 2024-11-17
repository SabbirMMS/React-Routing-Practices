/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const {
    id,
    name,
    username,
    email,
    address: { street, suite, city, zipcode, geo },
    phone,
    website,
    company: { name: companyName, catchPhrase, bs },
  } = useLoaderData();

  return (
    <div className="p-5 max-w-4xl mx-auto bg-gray-100 rounded-md shadow-md">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-600 mb-5">User Details</h1>

      {/* Basic Information */}
      <section className="p-4 mb-5 bg-blue-100 border-l-4 border-blue-500 rounded-md">
        <h2 className="text-xl font-semibold text-blue-700">Basic Information</h2>
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </section>

      {/* Address Information */}
      <section className="p-4 mb-5 bg-green-100 border-l-4 border-green-500 rounded-md">
        <h2 className="text-xl font-semibold text-green-700">Address</h2>
        <p>
          <strong>Street:</strong> {street}
        </p>
        <p>
          <strong>Suite:</strong> {suite}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
        <p>
          <strong>Zip Code:</strong> {zipcode}
        </p>
        <p>
          <strong>Geo Coordinates:</strong> Lat {geo.lat}, Lng {geo.lng}
        </p>
      </section>

      {/* Contact Information */}
      <section className="p-4 mb-5 bg-yellow-100 border-l-4 border-yellow-500 rounded-md">
        <h2 className="text-xl font-semibold text-yellow-700">Contact Information</h2>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {website}
          </a>
        </p>
      </section>

      {/* Company Information */}
      <section className="p-4 bg-red-100 border-l-4 border-red-500 rounded-md">
        <h2 className="text-xl font-semibold text-red-700">Company</h2>
        <p>
          <strong>Name:</strong> {companyName}
        </p>
        <p>
          <strong>Catch Phrase:</strong> {catchPhrase}
        </p>
        <p>
          <strong>BS:</strong> {bs}
        </p>
      </section>
    </div>
  );
};

export default UserDetails;
