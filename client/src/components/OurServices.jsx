import { Fade, Slide } from 'react-awesome-reveal';
import { MdOutlineDashboard, MdOutlineNotifications, MdOutlinePeopleAlt } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

const OurServices = () => {
    return (
        <section className="py-16 bg-base-200" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <Fade triggerOnce>
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary oswald">Our Core Features</h2>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* 1. Dashboard */}
                    <Slide direction="left" triggerOnce>
                        <div className="card bg-base-100 shadow-xl border border-gray-200 flex flex-col h-full">
                            <figure className="px-10 pt-10">
                                <MdOutlineDashboard className="text-5xl text-primary" />
                            </figure>
                            <div className="card-body items-center text-center flex-grow">
                                <h3 className="card-title text-xl font-semibold text-secondary roboto">Intuitive Dashboard</h3>
                                <p className="text-base-content">
                                    Easily manage and view all your tasks from a centralized, user-friendly dashboard.
                                </p>
                            </div>
                        </div>
                    </Slide>

                    {/* 2. Categorization */}
                    <Slide direction="right" triggerOnce>
                        <div className="card bg-base-100 shadow-xl border border-gray-200 flex flex-col h-full">
                            <figure className="px-10 pt-10">
                                <FaTasks className="text-5xl text-secondary" />
                            </figure>
                            <div className="card-body items-center text-center flex-grow">
                                <h3 className="card-title text-xl font-semibold text-secondary roboto">Smart Categorization</h3>
                                <p className="text-base-content">
                                    Categorize tasks for better organization and quick filtering based on your needs.
                                </p>
                            </div>
                        </div>
                    </Slide>

                    {/* 3. Notifications */}
                    <Slide direction="left" triggerOnce>
                        <div className="card bg-base-100 shadow-xl border border-gray-200 flex flex-col h-full">
                            <figure className="px-10 pt-10">
                                <MdOutlineNotifications className="text-5xl text-accent" />
                            </figure>
                            <div className="card-body items-center text-center flex-grow">
                                <h3 className="card-title text-xl font-semibold text-secondary roboto">Timely Reminders</h3>
                                <p className="text-base-content">
                                    Get timely notifications so you never miss an important deadline.
                                </p>
                            </div>
                        </div>
                    </Slide>

                    {/* 4. Collaboration */}
                    <Slide direction="right" triggerOnce>
                        <div className="card bg-base-100 shadow-xl border border-gray-200 flex flex-col h-full">
                            <figure className="px-10 pt-10">
                                <MdOutlinePeopleAlt className="text-5xl text-info" />
                            </figure>
                            <div className="card-body items-center text-center flex-grow">
                                <h3 className="card-title text-xl font-semibold text-secondary roboto">Seamless Collaboration</h3>
                                <p className="text-base-content">
                                    Collaborate with your team, assign tasks, and track shared progress.
                                </p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
