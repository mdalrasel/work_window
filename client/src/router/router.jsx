import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddTaskPage from "../components/AddTaskPage";
import TaskDetailsPage from "../components/TaskDetailsPage";
import MyPostedTasksPage from "../components/MyPostedTasksPage";
import BrowseTasksPage from "../components/BrowseTasksPage";
import TaskUpdatePage from "../components/TaskUpdatePage";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: 'logIn',
                Component: LogIn
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'add-task',
                element: <PrivateRoute><AddTaskPage /></PrivateRoute>
            },
            {
                path: 'tasks',
                element: <BrowseTasksPage />
            },
            {
                path: '/tasks/:id',
                loader: ({ params }) => fetch(`https://work-window-server.vercel.app/tasks/${params.id}`),
                element: <PrivateRoute><TaskDetailsPage></TaskDetailsPage></PrivateRoute>
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://work-window-server.vercel.app/tasks/${params.id}`),
                Component:TaskUpdatePage
            },
            {
                path: 'my-tasks',
                element: <PrivateRoute><MyPostedTasksPage /></PrivateRoute>
            },
        ]
    }
]);