import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyPostedTasksPage = () => {
  const { user, loading } = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const [currentTaskBids, setCurrentTaskBids] = useState([]); 

  useEffect(() => {
    if (user?.email) {
      fetch(`https://work-window-server.vercel.app/tasks?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => {
          const filteredTasks = data.filter(task => task.userEmail === user.email);
          setMyTasks(filteredTasks);
        })
        .catch(error => {
          console.error("Error fetching tasks:", error);
        });
    }
  }, [user]);

  const handleTaskDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://work-window-server.vercel.app/tasks/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              const remainingTask = myTasks.filter(task => task._id !== id);
              setMyTasks(remainingTask);
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
            } 
          })
          .catch(error => {
            console.error('Delete error:', error);
          });
      }
    });
  };

  const handleViewBids = (taskId) => {
    fetch(`https://work-window-server.vercel.app/bids/task/${taskId}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) { 
          return;
        }
        setCurrentTaskBids(data);
        document.getElementById('bids_modal').showModal();
      })
      .catch(error => {
        console.error("Error fetching bids for task:", error);
      });
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-lg shadow-md my-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary oswald underline">My Posted Tasks</h2>

      {myTasks.length === 0 ? (
        <div className="text-center text-gray-500 py-8 text-lg">
          You haven’t posted any tasks yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th>NO</th>
                <th>Title</th>
                <th>Category</th>
                <th>Budget</th>
                <th>Deadline</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.map((task, index) => (
                <tr key={task._id} className="hover:bg-blue-500">
                  <td>{index + 1}</td>
                  <td className="font-semibold">{task.title}</td>
                  <td>{task.category}</td>
                  <td>${task.budget}</td>
                  <td>{task.deadline}</td>
                  <td className="flex justify-center space-x-2">
                    <Link to={`/update/${task._id}`} className="btn btn-sm btn-info text-white roboto">Update</Link>
                    <button onClick={() => handleTaskDelete(task._id)} className="btn btn-sm btn-error text-white roboto">Delete</button>
                    <button onClick={() => handleViewBids(task._id)} className="btn btn-sm btn-success text-white roboto">Bids</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* DaisyUI Modal for Bids */}
      <dialog id="bids_modal" className="modal">
        <div className="modal-box p-8 rounded-lg shadow-lg max-w-lg w-full">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="text-2xl font-bold mb-4 text-center">Bids for this Task ({currentTaskBids.length})</h3>
          {currentTaskBids.length === 0 ? (
            <p className="text-center text-gray-600">No bids yet for this task.</p>
          ) : (
            <div className="max-h-80 overflow-y-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Bidder Name</th>
                    <th>Bidder Email</th>
                    <th>Bid Amount</th>
                    <th>Bid Date</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTaskBids.map((bid, index) => (
                    <tr key={index}>
                      <td>{bid.bidderName}</td>
                      <td>{bid.bidderEmail}</td>
                      <td>${bid.bidAmount}</td>
                      <td>{new Date(bid.bidDate).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} 
        </div>
      </dialog>
    </div>
  );
};

export default MyPostedTasksPage;