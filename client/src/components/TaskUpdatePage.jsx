import { FaPenNib } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const TaskUpdatePage = () => {
    const task = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTask = Object.fromEntries(formData.entries());

        fetch(`https://work-window-server.vercel.app/tasks/${task._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/my-tasks'); // চাইলে এখানে অন্য পেজে রিডাইরেক্ট করতে পারেন
                }
            });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-emerald-700 flex justify-center items-center gap-2 oswald underline">
                <FaPenNib className="text-red-500" /> Update Task
            </h2>

            <form
                onSubmit={handleUpdateTask}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-xl shadow-lg"
            >
                <input
                    type="text"
                    name="title"
                    defaultValue={task.title}
                    placeholder="Task Title"
                    className="input input-bordered w-full"
                    required
                />

                <select
                    name="category"
                    defaultValue={task.category}
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
                    defaultValue={task.deadline}
                    className="input input-bordered w-full"
                    required
                />

                <input
                    type="number"
                    name="budget"
                    defaultValue={task.budget}
                    placeholder="Budget ($)"
                    className="input input-bordered w-full"
                    required
                />

                <textarea
                    name="description"
                    defaultValue={task.description}
                    rows="4"
                    placeholder="Task Description"
                    className="textarea textarea-bordered w-full md:col-span-2"
                    required
                ></textarea>

                <input
                    type="email"
                    name="userEmail"
                    value={task.userEmail}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                />

                <input
                    type="text"
                    name="userName"
                    value={task.userName}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                />

                <button
                    type="submit"
                    className="md:col-span-2 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-all duration-300"
                >
                    Update Task
                </button>
            </form>
        </div>
    );
};

export default TaskUpdatePage;
