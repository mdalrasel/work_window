import Banner from "../components/Banner";
import FeaturedJobs from "../components/FeaturedJobs";
import JobShowcaseSection from "../components/JobShowcaseSection";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        
        <div>
            <Banner />
            <FeaturedJobs />
            <OurServices />
            <JobShowcaseSection />
            <Testimonials />
        </div>
    );
};

export default Home;