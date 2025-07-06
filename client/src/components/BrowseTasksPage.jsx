import { useState, useEffect, use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const BrowseTasksPage = () => {
    const { loading } = use(AuthContext)
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("https://work-window-server.vercel.app/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, []);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    }

    return (
        <div className="p-8 bg-base-100 rounded-lg shadow-md my-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary oswald underline">Browse All Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map((task) => (
                    <div key={task._id} className="card bg-base-200 shadow-lg p-4 h-full flex flex-col">
                        <div className='h-full'>
                            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
                            <p className=" text-sm mb-1">Category: <span className="font-medium">{task.category}</span></p>
                            <p className=" text-sm mb-1">Deadline: <span className="font-medium">{task.deadline}</span></p>
                            <p className=" font-bold text-lg mb-3">Budget: ${task.budget}</p>
                            <p className=" text-sm mb-4 line-clamp-2">{task.description}</p>

                            <div className="border border-dashed border-gray-100 p-3 rounded-xl ">
                                <p className="text-xs">Posted by:</p>
                                <p className=" font-medium text-sm">{task.userName}</p>
                                <p className=" text-xs">{task.userEmail}</p>
                            </div>
                        </div>
                        <Link to={`/tasks/${task._id}`} className="btn btn-primary my-3 roboto">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseTasksPage;
