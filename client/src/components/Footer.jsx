import { FaFacebook,  FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdLocationOn, MdMail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-6">
                        <Link to='/' className="text-xl font-semibold mb-4 rancho">WorkWindow</Link>
                        <p className="text-gray-300 flex items-center mb-2">
                            <MdLocationOn size={40} className="mr-2" />
                            <span>Collins Street West, Victoria Near Bank Road.</span>
                        </p>
                        <p className="text-gray-300 flex items-center mb-2">
                            <MdPhone size={20} className="mr-2" />
                            <span>+123 456 7890</span>
                        </p>
                        <p className="text-gray-300 flex items-center">
                            <MdMail size={20} className="mr-2" />
                            <span>workwindow@jobstock.com</span>
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a aria-label="Facebook" className="hover:text-blue-500 transition duration-300">
                                <FaFacebook size={24} />
                            </a>
                            <a aria-label="LinkedIn" className="hover:text-blue-700 transition duration-300">
                                <FaLinkedin size={24} />
                            </a>
                            <a aria-label="Twitter" className="hover:text-blue-400 transition duration-300">
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4 roboto">For Clients</h3>
                        <ul className="space-y-2">
                            <li><a  className="hover:text-gray-400 transition duration-300">Talent Marketplace</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Payroll Services</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Direct Contracts</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Hire Worldwide</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Hire in the USA</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">How to Hire</a></li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4 roboto roboto">Our Resources</h3>
                        <ul className="space-y-2">
                            <li><a className="hover:text-gray-400 transition duration-300">Free Business Tools</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Affiliate Program</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Success Stories</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Upwork Reviews</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Resources</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Help & Support</a></li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">The Company</h3>
                        <ul className="space-y-2">
                            <li><a className="hover:text-gray-400 transition duration-300">About Us</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Leadership</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Contact Us</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Investor Relations</a></li>
                            <li><a className="hover:text-gray-400 transition duration-300">Trust, Safety & Security</a></li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-4">Download Apps</h3>
                        <div>
                            <a href="https://play.google.com/store/games" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://developer.android.com/images/brand/en_generic_rgb_wo_45.png"
                                    alt="Get it on Google Play"
                                    style={{ height: '40px', display: 'block', marginBottom: '8px' }}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-sm text-gray-400">
                    <p>&copy; {currentYear} Work Window® Thameshub.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <div>
                            <p className="font-semibold text-white">2K+</p>
                            <p>Jobs Posted</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">1M+</p>
                            <p>Happy Customers</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">12K+</p>
                            <p>Freelancers</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">26+</p>
                            <p>Companies</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;