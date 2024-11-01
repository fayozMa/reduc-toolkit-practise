import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, clear, update } from "./store/studentsSlice";

function App() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const [studentIdToUpdate, setStudentIdToUpdate] = useState(null);
  const handleAdd = (e) => {
    e.preventDefault();
    if (e.target.name.value && e.target.age.value && e.target.gender.value) {
      const student = {
        id: Date.now(),
        name: e.target.name.value,
        age: e.target.age.value,
        gender: e.target.gender.value,
      };
      dispatch(add(student));
      e.target.reset();
      document.getElementById("my_modal_2").close();
    } else {
      alert("Please fill all the fields");
    }
  };
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (e.target.name.value && e.target.age.value && e.target.gender.value) {
      const student = {
        id: studentIdToUpdate, // Use the stored ID
        name: e.target.name.value,
        age: e.target.age.value,
        gender: e.target.gender.value,
      };
      dispatch(update(student));
      e.target.reset();
      document.getElementById("my_modal_3").close();
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100 mb-20">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none flex gap-2">
          <button
            onClick={() => dispatch(clear())}
            className="btn w-40 btn-error"
          >
            Clear All Students
          </button>
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="btn w-40 btn-primary"
          >
            Add Student
          </button>
        </div>
      </div>
      <section>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.students &&
            students.students.map((student) => (
              <li
                key={student.id}
                className="p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between space-y-4"
              >
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {student.name}
                  </h2>
                  <p className="text-gray-600">
                    Age: <span className="font-medium">{student.age}</span>
                  </p>
                  <p className="text-gray-600">
                    Gender:{" "}
                    <span className="font-medium">{student.gender}</span>
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4 space-x-2">
                  <button
                    onClick={() => handleRemove(student.id)}
                    className="flex-1 btn btn-error text-white font-semibold"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => {
                      setStudentIdToUpdate(student.id);
                      document.getElementById("my_modal_3").showModal();
                    }}
                    className="flex-1 btn btn-info text-white font-semibold"
                  >
                    Update
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </section>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-3xl text-center">Add New Student</h3>
          <form className="mt-4 flex flex-col gap-5" onSubmit={handleAdd}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="age"
              min={0}
              placeholder="Age"
              className="input input-bordered w-full"
            />
            <div className="flex gap-4 justify-evenly">
              <label className="flex gap-2 items-center ">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="radio radio-primary"
                  defaultChecked
                />
                Male
              </label>
              <label className="flex gap-2 items-center ">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="radio radio-primary"
                />
                Female
              </label>
            </div>
            <div className="modal-action">
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-3xl text-center">Update Student</h3>
          <form className="mt-4 flex flex-col gap-5" onSubmit={handleUpdate}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="age"
              min={0}
              placeholder="Age"
              className="input input-bordered w-full"
            />
            <div className="flex gap-4 justify-evenly">
              <label className="flex gap-2 items-center ">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="radio radio-primary"
                  defaultChecked
                />
                Male
              </label>
              <label className="flex gap-2 items-center ">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="radio radio-primary"
                />
                Female
              </label>
            </div>
            <div className="modal-action">
              <button type="submit" className="btn">
                Update
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default App;
