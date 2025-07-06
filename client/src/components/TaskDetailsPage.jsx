import { use, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2'; 
import { Tooltip } from 'react-tooltip';

const TaskDetailsPage = () => {
  const { loading, user } = use(AuthContext);
  const task = useLoaderData();
  const navigate = useNavigate();
  const [bidsCount, setBidsCount] = useState(0);
  const [hasUserAlreadyBid, setHasUserAlreadyBid] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://work-window-server.vercel.app/bids/count/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setBidsCount(data.bidsCount);
        })
        .catch(error => {
          console.error("Error fetching bids count:", error);
        });

      fetch(`https://work-window-server.vercel.app/bids/check-bid/${task._id}/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setHasUserAlreadyBid(data.hasBid);
        })
        .catch(error => {
          console.error("Error checking if user has bid:", error);
        });
    }
  }, [user, task._id]);

  if (!loading && !user) {
    navigate('/login');
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const isBidButtonDisabled = !user || user.email === task.userEmail || loading || hasUserAlreadyBid;

  const handleBidNow = () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Login Required',
        text: 'You need to be logged in to bid on tasks.',
      });
      return;
    }

    if (hasUserAlreadyBid) {
      Swal.fire({
        icon: 'warning',
        title: 'Already Bid!',
        text: 'You have already placed a bid on this task.',
      });
      return;
    }

    const bidData = {
      taskId: task._id,
      taskTitle: task.title,
      taskOwnerEmail: task.userEmail,
      bidderEmail: user.email,
      bidderName: user.displayName,
      bidAmount: task.budget,
      bidDate: new Date().toISOString(),
    };

    fetch('https://work-window-server.vercel.app/bids', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bidData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Bid Placed!',
            text: 'Your bid has been successfully placed.',
          });
          setBidsCount(prevCount => prevCount + 1);
          setHasUserAlreadyBid(true);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Failed to Bid',
            text: data.message || 'There was an error placing your bid. Please try again.',
          });
        }
      })
      .catch(error => {
        console.error('Error placing bid:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
        });
      });
  };

  return (
    <div>
      <div className="p-8 rounded-lg shadow-md max-w-3xl mx-auto my-8">
        <p className="text-xl font-medium text-center mb-4">
          You bid for <span className="font-bold text-primary">{bidsCount}</span> opportunities.
        </p>
        <h2 className="text-3xl font-bold mb-6 text-center oswald">Task Details</h2>
        <div className="space-y-4">
          <div>
            <p className="text-xl font-medium roboto">Title:</p>
            <p className=" font-semibold">{task.title}</p>
          </div>
          <div>
            <p className="text-xl font-medium roboto">Category:</p>
            <p className="font-semibold ">{task.category}</p>
          </div>
          <div>
            <p className="text-xl font-medium roboto">Description:</p>
            <p className=" whitespace-pre-wrap">{task.description}</p>
          </div>
          <div>
            <p className="text-xl font-medium roboto">Deadline:</p>
            <p className=" ">{task.deadline}</p>
          </div>
          <div>
            <p className="text-xl font-medium roboto">Budget:</p>
            <p className=" font-bold text-green-700">${task.budget}</p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <p className="text-xl font-medium roboto">Posted by:</p>
            <p className="text-lg ">{task.userName}</p>
            <p className="text-base ">{task.userEmail}</p>
          </div>
          <div
            data-tooltip-id="bid-tooltip"
            data-tooltip-content={
              user && user.email === task.userEmail
                ? "You cannot bid on your own task"
                : hasUserAlreadyBid
                  ? "You have already bid on this task"
                  : "Bid Now"
            }
            data-tooltip-float="true"
          >
            <button
              onClick={handleBidNow}
              className="btn btn-primary w-full mt-6"
              disabled={isBidButtonDisabled}
            >
              Bid Now
            </button>
          </div>
          <Tooltip id="bid-tooltip" />
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPage;