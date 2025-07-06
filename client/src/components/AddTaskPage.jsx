import React, { use, } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

const AddTaskPage = () => {
    const { user } = use(AuthContext);

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newTask = Object.fromEntries(formData.entries());

        newTask.userEmail = user?.email || "";
        newTask.userName = user?.displayName || user?.email || "";
        newTask.createdAt = new Date().toISOString();

        fetch('https://work-window-server.vercel.app/tasks', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700 flex justify-center items-center gap-2 oswald">
                <AiFillPlusCircle /> Add New Task
            </h2>
            <form
                onSubmit={handleAddTask}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-xl shadow-lg"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Task Title (e.g., E-commerce Website)"
                    className="input input-bordered w-full"
                    required
                />

                <select
                    name="category"
                    className="select select-bordered w-full"
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Design">Design</option>
                    <option value="Writing">Writing</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Data Entry">Data Entry</option>
                    <option value="Other">Other</option>
                </select>

                <input
                    type="date"
                    name="deadline"
                    className="input input-bordered w-full"
                    required
                />

                <input
                    type="number"
                    name="budget"
                    placeholder="Budget ($)"
                    className="input input-bordered w-full"
                    required
                />

                <textarea
                    name="description"
                    rows="4"
                    placeholder="Task Description"
                    className="textarea textarea-bordered w-full md:col-span-2"
                    required
                ></textarea>
                
                <input
                    type="email"
                    name="userEmail"
                    value={user?.email || 'Not showing'}
                    readOnly
                    className="input input-bordered w-full  cursor-not-allowed"
                />

                <input
                    type="text"
                    name="userName"
                    value={user?.displayName || user?.email || ''}
                    readOnly
                    className="input input-bordered w-full  cursor-not-allowed"
                />

                <button type='submit' className='btn btn-primary w-full flex col-span-2 roboto'>Add Task</button>
            </form>
        </div>
    );
};

export default AddTaskPage;
