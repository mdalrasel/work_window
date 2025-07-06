import { use, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';


const FeaturedJobs = () => {
    const { loading } = use(AuthContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://work-window-server.vercel.app/tasks')
            .then(res => res.json())
            .then(data => {
                const sorted = data.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
                setTasks(sorted.slice(0, 6));
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-48">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="py-8 bg-base-100 rounded-lg  my-8" >
            <div className="container mx-auto px-4">
                <Fade triggerOnce>
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary oswald">--- Featured Tasks ---</h2>
                </Fade>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tasks.map(task => (
                        <Fade key={task._id} triggerOnce>
                            <div className="card bg-base-200 shadow-lg p-4 h-full flex flex-col">
                                <div className='h-full'>
                                    <h3 className="text-xl font-semibold mb-2 roboto">{task.title}</h3>
                                    <p className=" text-sm mb-1">Category: <span className="font-medium">{task.category}</span></p>
                                    <p className=" text-sm mb-1">Deadline: <span className="font-medium">{task.deadline}</span></p>
                                    <p className=" font-bold text-lg mb-3">Budget: ${task.budget}</p>
                                    <p className=" text-sm mb-4 line-clamp-2">{task.description}</p>

                                    <div className="border border-gray-100 border-dashed  p-3  rounded-xl">
                                        <p className=" text-xs">Posted by:</p>
                                        <p className=" font-medium text-sm">{task.userName}</p>
                                        <p className=" text-xs">{task.userEmail}</p>
                                    </div>
                                </div>
                                <Link to={`/tasks/${task._id}`} className="btn btn-primary my-5">
                                    View Details
                                </Link>
                            </div>

                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;