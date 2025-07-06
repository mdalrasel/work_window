import { Fade, Slide } from 'react-awesome-reveal';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <section className="py-16 bg-base-100" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <Fade triggerOnce>
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary oswald">What Our Users Say</h2>
                </Fade>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Slide direction="right" triggerOnce>
                        <div className="card bg-base-200 shadow-xl p-6 border border-gray-200 flex flex-col h-full">
                            <FaQuoteLeft className="text-4xl text-primary mb-4" />
                            <p className="text-lg italic text-base-content mb-4">
                                "WorkWindow has revolutionized how our team manages projects. The deadlines feature is a lifesaver!"
                            </p>
                            <div className="flex items-center mt-auto">
                                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Alice Johnson" className="w-12 h-12 rounded-full mr-4 object-cover" />
                                <div>
                                    <p className="font-semibold text-secondary">Alice Johnson</p>
                                    <p className="text-sm text-base-content">Project Manager, Tech Solutions</p>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    <Slide direction="left" triggerOnce>
                        <div className="card bg-base-200 shadow-xl p-6 border border-gray-200 flex flex-col h-full">
                            <FaQuoteLeft className="text-4xl text-primary mb-4" />
                            <p className="text-lg italic text-base-content mb-4">
                                "I never thought task management could be this easy. The intuitive interface is a game-changer."
                            </p>
                            <div className="flex items-center mt-auto">
                                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Bob Williams" className="w-12 h-12 rounded-full mr-4 object-cover" />
                                <div>
                                    <p className="font-semibold text-secondary">Bob Williams</p>
                                    <p className="text-sm text-base-content">Freelance Designer</p>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    <Slide direction="right" triggerOnce>
                        <div className="card bg-base-200 shadow-xl p-6 border border-gray-200 flex flex-col h-full">
                            <FaQuoteLeft className="text-4xl text-primary mb-4" />
                            <p className="text-lg italic text-base-content mb-4">
                                "Highly recommend WorkWindow for anyone looking to boost their productivity. It's simply the best!"
                            </p>
                            <div className="flex items-center mt-auto">
                                <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Carol White" className="w-12 h-12 rounded-full mr-4 object-cover" />
                                <div>
                                    <p className="font-semibold text-secondary">Carol White</p>
                                    <p className="text-sm text-base-content">Startup Founder, Creative Minds</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
