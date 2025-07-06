import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Bounce, Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className="hero py-3 md:py-5  " data-aos="fade-up">
            <Swiper
                modules={[Navigation, Pagination,Autoplay]}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                className="w-full max-w-7xl mx-auto"
            >

                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="hero-content flex flex-col md:flex-row px-8 lg:px-14">
                        <div className="flex-1 text-center lg:text-left">
                            <Bounce delay={300}>
                                <h1 className="text-5xl font-bold mb-2 text-primary oswald">
                                    <Typewriter
                                        words={['Efficient Task Management', 'Boost Your Productivity ']}
                                        loop={0}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </h1>
                            </Bounce>
                            <Fade delay={600}>
                                <p className="py-3 text-lg text-base-content roboto">Organize your daily tasks, set deadlines, and track your progress seamlessly. Achieve more with less effort.</p>
                            </Fade>
                            <Fade delay={900}>
                                <button className="btn btn-lg mt-2 btn-primary" data-aos="zoom-in" data-aos-delay="1200">Get Started</button>
                            </Fade>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/11/service8.jpg" alt="Slide 1" className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="hero-content  flex flex-col md:flex-row px-8 lg:px-14">
                        <div className="flex-1 text-center lg:text-left">
                            <Bounce delay={300}>
                                <h1 className="text-5xl font-bold mb-2 text-secondary oswald">Collaborate & Conquer</h1>
                            </Bounce>
                            <Fade delay={600}>
                                <p className="py-3 text-lg text-base-content roboto">Share tasks with your team, assign roles, and work together to meet common goals effectively.</p>
                            </Fade>
                            <Fade delay={900}>
                                <button className="btn btn-lg mt-2 btn-secondary  roboto" data-aos="zoom-in" data-aos-delay="1200">Learn More</button>
                            </Fade>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/11/service14-768x576.jpg" alt="Slide 2" className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="hero-content  flex flex-col md:flex-row px-8 lg:px-14">
                        <div className="flex-1 text-center lg:text-left">
                            <Bounce delay={300}>
                                <h1 className="text-5xl font-bold mb-2 text-accent">Stay On Track, Always!</h1>
                            </Bounce>
                            <Fade delay={600}>
                                <p className="py-3 text-lg text-base-content">With powerful reminders and intuitive dashboards, never miss a deadline again.</p>
                            </Fade>
                            <Fade delay={900}>
                                <button className="btn btn-lg mt-2 btn-accent" data-aos="zoom-in" data-aos-delay="1200">Explore Features</button>
                            </Fade>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/09/h4.png" alt="Slide 3" className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="hero-content  flex flex-col md:flex-row px-8 lg:px-14 py-10">
                        <div className="flex-1 text-center lg:text-left">
                            <Bounce delay={300}>
                                <h1 className="text-5xl font-bold mb-2 text-primary oswald">Visualize Progress Clearly</h1>
                            </Bounce>
                            <Fade delay={600}>
                                <p className="py-3 text-lg text-base-content roboto">Monitor task flow with charts and reports for better decision-making and performance analysis.</p>
                            </Fade>
                            <Fade delay={900}>
                                <button className="btn btn-lg mt-2 roboto btn-primary" data-aos="zoom-in" data-aos-delay="1200">See Insights</button>
                            </Fade>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/09/h1.jpg" alt="Slide 4" className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 5 */}
                <SwiperSlide>
                    <div className="hero-content  flex flex-col md:flex-row px-8 lg:px-14">
                        <div className="flex-1 text-center lg:text-left">
                            <Bounce delay={300}>
                                <h1 className="text-5xl font-bold mb-2 text-secondary oswald">Seamless Integration</h1>
                            </Bounce>
                            <Fade delay={600}>
                                <p className="py-3 text-lg text-base-content roboto">Easily integrate with your favorite tools like Google Calendar, Slack, and more.</p>
                            </Fade>
                            <Fade delay={900}>
                                <button className="btn btn-lg mt-2 roboto btn-secondary" data-aos="zoom-in" data-aos-delay="1200">Connect Now</button>
                            </Fade>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/11/service13-768x576.jpg" alt="Slide 5" className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
