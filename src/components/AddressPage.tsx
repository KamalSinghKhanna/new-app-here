import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";

const AddressPage: React.FC = () => {
  const [pincode, setPincode] = useState<string>("");
  const debouncedPincode = useDebounce(pincode, 500); // Debounce delay of 500ms
  const { data, loading, error } = useFetch(debouncedPincode);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
    }
  };

  return (
    <div className="flex flex-col items-center pt-10 gap-20 min-h-screen bg-gray-100">
      {/* <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"> */}
      <div>
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          Search By Pincode
        </h1>
        <div className="relative max-w-md">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 placeholder:text-gray-500 placeholder:text-sm leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="pincode"
            placeholder="Enter 6-digit Pin Code"
            value={pincode}
            onChange={handleChange}
          />

          {loading && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <div className="loader border-t-transparent border-solid animate-spin rounded-full border-blue-500 border-4 h-5 w-5"></div>
              </div>
            </div>
          )}
        </div>
        {error && (
          <p className="text-center text-red-500">
            {error === "No records found"
              ? "please enter a valid pincode"
              : "Error fetching data"}
          </p>
        )}
      </div>
      {data && data[0]?.PostOffice && (
        <div className="max-w-md w-full py-5 bg-white shadow-lg rounded-lg overflow-hidden mt-5">
          <div className="p-5">
            <h2 className="text-gray-800 text-2xl font-semibold">
              Pincode: {data[0]?.PostOffice[0]?.PINCode}
            </h2>
            <p className="text-gray-600 mt-2">
              City: {data[0]?.PostOffice[0]?.Name}
            </p>
            <p className="text-gray-600">
              District: {data[0]?.PostOffice[0]?.District}
            </p>
            <p className="text-gray-600">
              State: {data[0]?.PostOffice[0]?.State}
            </p>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
};

export default AddressPage;
