import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  //for animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  //created an array of objects to show it in form
  const formFields = [
    { name: "street", type: "text", label: "Street", required: true },
    { name: "city", type: "text", label: "City", required: true },
    {
      name: "state",
      type: "dropdown",
      label: "State",
      options: ["California", "Texas", "New York"],
      required: true,
    },
    { name: "zipCode", type: "text", label: "Zip Code", required: false },
  ];
  //state for form
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  //managing the submit functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formFields.every((field) =>
      field.required ? formData[field.name] : true
    );
    if (isValid) {
      setSubmittedData([...submittedData, formData]);
      setFormData({});
      alert("Form submitted successfully");
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <>
      <Header />
      <div className=" flex justify-center min-h-[90vh] bg-gray-200 items-center">
        <div>
          <form action="" onSubmit={handleSubmit}>
            {formFields.map((field) => {
              return (
                <div key={field.name} className=" mt-5" data-aos="fade-right">
                  <div className=" mb-2">
                    <label>
                      {field.label} {field.required && "*"}
                    </label>
                  </div>
                  <div>
                    {field.type === "dropdown" ? (
                      <select
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          handleChange(field.name, e.target.value)
                        }
                        required={field.required}
                        className="p-1 rounded-md w-[100%]"
                      >
                        <option value="">Select</option>
                        {field.options.map((option) => {
                          return (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          );
                        })}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          handleChange(field.name, e.target.value)
                        }
                        required={field.required}
                        className="p-1 rounded-md w-[100%]"
                      />
                    )}
                  </div>
                </div>
              );
            })}
            <button
              type="submit"
              className=" bg-red-400 p-2 rounded-md mt-2 font-bold"
              data-aos="fade-left"
            >
              Submit
            </button>
          </form>
          <div className=" flex justify-center items-center max-w-[50vw] mb-5">
            {submittedData.length > 0 && (
              <div>
                <h2 className=" font-semibold mt-4 mb-4 underline">
                  Submitted Data :-
                </h2>
                <table>
                  <thead>
                    <tbody>
                      {submittedData.map((data, index) => (
                        <tr key={index} className=" flex flex-col">
                          <td>Street :- {data.street}</td>
                          <td>City:- {data.city}</td>
                          <td>State:- {data.state}</td>
                          <td>Zipcode:- {data.zipCode}</td>
                        </tr>
                      ))}
                    </tbody>
                  </thead>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
