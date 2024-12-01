import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { postdata } from "../helpers/post";
import { useState } from "react";

function RegistrationForm({ setUpdate }) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = async (data) => {
    try {
      await postdata({ ...data });
      // await postdata({ ...data, likes: 0 });
      setUpdate((prev) => prev + 1);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <NavLink to="/">Back to Homepage</NavLink>

      <h1 className="text-3xl mx-auto">Registration Form</h1>

      <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
        <div className="p-3">
          <label htmlFor="firstname">Name:</label>
          <input
            type="text"
            id="firstname"
            {...register("firstname", {
              required: "User Name is required",
            })}
          />
          <div className="error">{errors.firstname?.message}</div>
        </div>

        <div className="p-3">
          <label htmlFor="lastname">Lastname:</label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", {
              required: "User Name is required",
            })}
          />
          <div className="error">{errors.Lastname?.message}</div>
        </div>

        <section className="p-2">
          <select
            {...register("gender", { required: "Category is required" })}
            className="select select-bordered"
            id="category"
          >
            <option value="man">man</option>
            <option value="woman">woman</option>
          </select>
          <p className="text-error">{errors.category?.message}</p>
        </section>

        <div className="p-3">
          <label htmlFor="">
            blood group:
            <input
              type="text"
              id="bl"
              {...register("bloodgroup", {
                required: "User Name is required",
              })}
            />
          </label>
          <div className="error">{errors.bloodgroup?.message}</div>
        </div>

        <div className="p-3">
          <label htmlFor="channel">Age:</label>
          <input type="number" id="channel" {...register("age")} />
        </div>
        <div className="p-3">
          <input
            type="submit"
            value="Submit"
            className="btn bg-green-500 btn-neutral p-3"
          />
        </div>
      </form>

      {error && <p className="text-red-700">{error}</p>}
    </>
  );
}

export default RegistrationForm;





