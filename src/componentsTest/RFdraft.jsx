// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { post } from "../../helpers/post.js";

// function RegistrationForm(props) {
//   const { setItems } = props;
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();
//   const [error, setError] = useState("");

//   const onSubmit = async (data) => {
//     try {
//       const newItem = await post(data);
//       setItems((prev) => [...prev, newItem]);

//       reset();
//       setError("");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <>

//     <h1>RF</h1>
{/* //       <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
//         <section>
//           <label className="input input-bordered m-2 flex items-center gap-2">
//             Name:
//             <input type="text" className="grow" placeholder="Daisy" {...register("name", {required: "Name is required"})}/>
//           </label>
//           <p className="text-error">{errors.name?.message}</p>
//         </section>

//         <section>
//           <label className="input input-bordered m-2 flex items-center gap-2">
//             Email:
//             <input type="text" className="grow" placeholder="daisy@site.com" {...register("name", {required: "Name is required"})}/>
//           </label>
//           <p className="text-error">{errors.name?.message}</p>
//         </section>

//         <section>
//           <label className="input input-bordered flex m-2  items-center gap-2">
//             Jūsų amžius:
//       <input id="value" {...register("value", {required: "Value is required"})} type="text" placeholder="Value"  className="input input-bordered"/>
//           </label>
//           <p className="text-error">{errors.name?.message}</p>
//         </section>

//         <section>
//           <select */}
{/* //             {...register("category", { required: "Category is required" })}
//             id="category"
//             className="select select-info w-full m-2 ">
//             <option disabled selected>
//               Select gender
//             </option>
//             <option>Man</option>
//             <option>Woman</option>
//           </select> */}
{/* //           <p className="text-error">{errors.category?.message}</p>
//         </section> */}

{/* //         <section>
//           <label className="input input-bordered m-2 flex items-center gap-2">
//             BloodGroup:
//             <input */}
{/* //               type="text"
//               className="grow"
//               placeholder="Jūsų kraujo grupė"
//             />
//           </label> */}
{/* //           <p className="text-error">{errors.name?.message}</p>
//         </section> */}

{/* //         <div>
//           <button */}
{/* //             type="submit"
//             className="btn bg-green-500 btn-neutral flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-900 "
//           >
//             {" "}
//             Sign in
//           </button> */}
{/* //           {error && <p className="text-error">{error}</p>}
//         </div> */}
{/* //       </form> */}
//     </>
//   );
// }

// export default RegistrationForm;