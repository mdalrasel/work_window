import { FaCheck, FaCheckCircle } from "react-icons/fa";

const JobShowcaseSection = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center" >
                    <img
                        src="https://i.ibb.co/VfcWjhj/Screenshot-2025-05-20-070925.png"
                        alt="Trusted & Popular Job Portal"
                        className="rounded-xl shadow-md w-full max-w-md h-auto"
                    />
                </div>

                <div className="space-y-5" >
                    <h2 className="text-4xl font-bold text-primary oswald">
                        Trusted & Popular Job Portal
                    </h2>
                    <p className="text-base text-base-content">
                        This platform is known as a reliable and popular job search platform for users, featuring #1 Quality Jobs, Top Companies, and International Job opportunities.
                    </p>
                    <div className="space-y-4 roboto">
                        {[
                            { title: "#1 Quality Job" },
                            { title: "Top Companies" },
                            { title: "International Jobs" },
                            { title: "No Extra Charges" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <FaCheckCircle className="text-3xl text-green-500 mt-1" />
                                <div>
                                    <h4 className="text-xl font-semibold text-secondary">{item.title}</h4>
                                    <p className="text-sm text-base-content">At vero eos et accusamus et iusto odio dignissimos ducimus...</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
                <div className="space-y-5 order-2 md:order-1" >
                    <h2 className="text-4xl font-bold text-primary oswald">
                        Best Job Search Platform Experience for You
                    </h2>
                    <p className="text-base text-base-content">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {[
                            "Corporate Business jobs",
                            "Company Showcase",
                            "Creative Services",
                            "Easy To Upload Resume",
                            "Online E-commerce",
                            "Hire Expert Candidates"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-base-content">
                                <FaCheck className="text-green-500" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 bg-primary hover:bg-primary-focus text-white font-semibold px-6 py-2 rounded-md shadow-md transition roboto">
                        Explore More Jobs
                    </button>
                </div>
                <div className="flex justify-center order-1 md:order-2" >
                    <img
                        src="https://i.ibb.co/C3hpVDjf/Screenshot-2025-05-20-070916.png"
                        alt="Job Search Platform"
                        className="rounded-xl shadow-md w-full max-w-md h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default JobShowcaseSection;
