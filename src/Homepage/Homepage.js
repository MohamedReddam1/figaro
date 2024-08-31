import React, { useState, useEffect } from 'react';
import './Homepage.css'



//imported images
import FigaroLogo from '../Assets/figaroLogo.png'


//imported icons
import { FaCalendar } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";






export default function Homepage() {

    const [isOpen, setIsOpen] = useState(false);
    const [navbarBg, setNavbarBg] = useState('bg-transparent');

    // Toggle Navbar
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Change Navbar Background on Scroll
    useEffect(() => {
        const changeNavbarBg = () => {
            if (window.scrollY >= 80) {
                setNavbarBg('bg-black');
            } else {
                setNavbarBg('bg-transparent');
            }
        };

        window.addEventListener('scroll', changeNavbarBg);

        return () => {
            window.removeEventListener('scroll', changeNavbarBg);
        };
    }, []);


    const [showAll, setShowAll] = useState(false);

  const items = [
    { id: 1, name: 'Espresso-based', img: 'https://i.imgur.com/wGIs4Km.png' },
    { id: 2, name: 'Brewed Coffee', img: 'https://i.imgur.com/wYTE4AG.png' },
    { id: 3, name: 'Tea Selection', img: 'https://i.imgur.com/nRAeIIF.png' },
    { id: 4, name: 'Pastries & Desserts', img: 'https://i.imgur.com/n7eu2M7.png' },
    { id: 5, name: 'Espresso-based', img: 'https://i.imgur.com/wGIs4Km.png' },
    { id: 6, name: 'Brewed Coffee', img: 'https://i.imgur.com/wYTE4AG.png' },
    { id: 7, name: 'Tea Selection', img: 'https://i.imgur.com/nRAeIIF.png' },
    { id: 8, name: 'Pastries & Desserts', img: 'https://i.imgur.com/n7eu2M7.png' },
    { id: 9, name: 'Espresso-based', img: 'https://i.imgur.com/wGIs4Km.png' },
    { id: 10, name: 'Brewed Coffee', img: 'https://i.imgur.com/wYTE4AG.png' },
    { id: 11, name: 'Tea Selection', img: 'https://i.imgur.com/nRAeIIF.png' },
    { id: 12, name: 'Pastries & Desserts', img: 'https://i.imgur.com/n7eu2M7.png' },
  ];

  const displayedItems = showAll ? items : items.slice(0, 4);

  return (
    <div>
        {/* navbar */}
        <div className={`w-full fixed top-0 z-50 py-5 transition-colors duration-300 ${navbarBg}`}>
            <div className='flex justify-between items-center px-6 md:px-10'>
                <div>
                    <img src={FigaroLogo} alt="Logo" className='w-[120px] lg:w-[170px]' />
                </div>
                <div className='block lg:hidden'>
                    <button onClick={toggleNavbar} className='text-white text-2xl'>
                        ☰
                    </button>
                </div>
                
                    <div className='hidden lg:flex items-center'>
                        <li className='font-medium text-white mx-4 list-none'><a href="">Home</a></li>
                        <li className='font-medium text-white mx-4 list-none'><a href="">About Us</a></li>
                        <li className='font-medium text-white mx-4 list-none'><a href="">Menu</a></li>
                        <li className='font-medium text-white mx-4 list-none'><a href="">FAQ</a></li>
                        <div className='md:hidden text-center mt-10'>
                            <a href="" className='py-2 px-5 rounded-lg border-2 border-yellow-500 text-white'>Book a Table</a>
                        </div>
                    </div>
                <div className='hidden lg:block'>
                    <a href="" className='py-2 px-5 rounded-lg border-2 border-yellow-500 text-white'>Book a Table</a>
                </div>

                <div className={`fixed p-10 px-14 left-0 top-0 w-3/4 h-full bg-black bg-opacity-100 transition-transform duration-500 lg:hidden ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:static lg:bg-transparent lg:translate-x-0 lg:flex lg:items-center lg:w-auto`}>
                    <div>
                        <img src={FigaroLogo} alt="Logo" className='w-[120px]' />
                    </div>
                    <div className='flex flex-col items-start mt-10'>
                        <li className='font-medium text-white mx-4 list-none'><a href="">Home</a></li>
                        <li className='font-medium text-white mx-4 list-none mt-5'><a href="">About Us</a></li>
                        <li className='font-medium text-white mx-4 list-none mt-5'><a href="">Menu</a></li>
                        <li className='font-medium text-white mx-4 list-none mt-5'><a href="">FAQ</a></li>
                        <div className='md:hidden text-start mt-10'>
                            <a href="" className='text-nowrap py-2 px-5 rounded-lg border-2 border-yellow-500 text-white'>Book a Table</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* hero */}
        <div className="bg-[url('https://i.imgur.com/XcXOTWM.jpeg')] bg-cover bg-center h-[700px] w-full relative top-0 flex flex-col justify-center items-start sm:text-center sm:h-[500px] sm:bg-bottom lg:text-start">
            <h1 className='text-white text-4xl lg:text-6xl font-medium lg:px-28 lg:w-3/4 text-start sm:text-4xl px-10 sm:w-full PPP'>
                Your neighborhood sanctuary for exquisite coffee
            </h1>
            <p className='text-white text-lg lg:px-28 mt-5 sm:text-base px-10 text-start'>
                Enjoy expertly crafted beverages.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 lg:px-28 sm:flex-col px-10 text-start'>
                <a href="" className='py-2 px-5 bg-red-900 text-lg text-white rounded-md mx-3'>
                    Full Menu
                </a>
                <a href="" className='py-2 px-5 bg-yellow-600 text-lg text-black rounded-md mx-3 mt-3 lg:mt-0'>
                    More Info
                </a>
            </div>
        </div>


        {/* timing */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-red-900 py-10 gap-10 px-5'>
            <div className='flex justify-center items-center'>
                <div>
                    <FaCalendar className='text-6xl text-white'/>
                </div>
                <div className='mx-5 text-center md:text-left'>
                    <p className='text-white'>Mon - Fri <span className='ml-2 md:ml-5'>8 AM to 8 PM</span></p>
                    <p className='text-white'>Sat - Sun <span className='ml-2 md:ml-5'>7 AM to 9 PM</span></p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <IoLocation className='text-6xl text-white'/>
                </div>
                <div className='mx-5 text-center md:text-left'>
                    <p className='text-white'>123 Coffee Lane,</p>
                    <p className='text-white'>Bean Town, CA 90210</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <MdMessage className='text-6xl text-white'/>
                </div>
                <div className='mx-5 text-center md:text-left'>
                    <p className='text-white'>(123) 456-7890</p>
                    <p className='text-white'>FigaroCafe@email.com</p>
                </div>
            </div>
        </div>


        {/* section1 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-28 gap-10'>
            <div className='flex justify-center'>
                <img src="https://i.imgur.com/4OQIKSk.png" alt="" className='w-full max-w-[600px]'/>
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-3xl lg:text-5xl font-medium text-start lg:pr-20 PPP'>Enjoy expertly crafted beverages made from the finest coffee beans.</h1>
                <p className='my-5 text-lg'>Find delightful treats, and warm, inviting vibes.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 text-start gap-5 mt-5'>
                    <p className='flex justify-start items-center'> 
                        <FaCheck className='mr-3 text-xl text-red-950'/> Premium Quality
                    </p>
                    <p className='flex justify-start items-center'> 
                        <FaCheck className='mr-3 text-xl text-red-950'/> Community Focused
                    </p>
                    <p className='flex justify-start items-center'> 
                        <FaCheck className='mr-3 text-xl text-red-950'/> Cozy Atmosphere
                    </p>
                    <p className='flex justify-start items-center'> 
                        <FaCheck className='mr-3 text-xl text-red-950'/> Eco-Friendly Practices
                    </p>
                </div>
            </div>
        </div>


        {/* section2 */}
        <div className="bg-[url('https://i.imgur.com/46WmSUa.png')] h-[461px] w-full bg-cover bg-center flex justify-center items-center px-4 lg:px-28">
            <div className='text-center flex flex-col justify-center items-center max-w-3xl mx-auto'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-medium mb-4 PPP'>Enjoy the rich and robust flavors</h1>
                <p className='text-base sm:text-lg mb-5'>Locally roasted coffee, supporting both your taste buds and the local community.</p>
                <a href="" className='py-2 px-6 bg-red-950 text-white rounded-md text-lg w-full max-w-[250px]'>Learn More</a>
            </div>
        </div>


        {/* section3 */}
        <div className='px-4 md:px-20 lg:px-28 py-10 lg:py-20'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wider mb-10 PPP'>Explore our Foods</h1>
            <div className='text-center'>
                <div className={`grid gap-10 mb-14 ${showAll ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'grid-cols-2 sm:grid-cols-4'}`}>
                    {displayedItems.map(item => (
                        <div key={item.id} className='text-center'>
                            <img src={item.img} alt={item.name} className='w-full h-auto'/>
                            <h1 className='text-base sm:text-lg text-yellow-700 font-medium mt-5 tracking-wider'>{item.name}</h1>
                        </div>
                    ))}
                </div>
                <button 
                    onClick={() => setShowAll(!showAll)} 
                    className='text-base sm:text-lg py-3 px-5 bg-yellow-700 text-white rounded-md mt-5'
                >
                    {showAll ? 'Show Less' : 'See Full Menu'}
                </button>
            </div>
        </div>


        {/* section4 */}
        <div className="bg-[url('https://i.imgur.com/czfjjTP.png')] h-[342px] w-full bg-cover bg-center flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 xl:px-32">
            <h1 className='text-white text-2xl sm:text-3xl md:text-4xl text-center px-4 md:px-8 lg:px-28 text-wrap PPP'>
                We source our milk and dairy products from nearby family-owned farms.
            </h1>
            <a href="" className='mt-5 py-2 px-4 sm:py-3 sm:px-6 text-white bg-red-950 text-base sm:text-lg rounded-md'>
                Learn More
            </a>
        </div>


        {/* section5 */}
        <div className='text-center p-6 md:p-12 lg:p-20'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-medium PPP'>
                Book Your Table
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 px-4 md:px-8 lg:px-20 mt-10 md:mt-20'>
                <input type="text" className='px-3 py-2 border-2 border-black rounded-md text-base md:text-lg' placeholder='Name'/>
                <input type="text" className='px-3 py-2 border-2 border-black rounded-md text-base md:text-lg' placeholder='Email'/>
                <input type="text" className='px-3 py-2 border-2 border-black rounded-md text-base md:text-lg' placeholder='Phone'/>
                <input type="text" className='px-3 py-2 border-2 border-black rounded-md text-base md:text-lg' placeholder='Date'/>
                <input type="text" className='px-3 py-2 border-2 border-black rounded-md text-base md:text-lg' placeholder='Time'/>
                <button className='py-2 px-4 md:py-3 md:px-6 rounded-md bg-red-950 text-white text-base md:text-lg'>
                    Find a Table
                </button>
            </div>
        </div>


        {/* footer */}
        <div className='bg-red-900 px-6 sm:px-12 md:px-20 lg:px-28 py-10 flex flex-col items-stretch'>
    <div className='flex flex-col md:flex-row md:justify-between items-center'>
        <div>
            <img src={FigaroLogo} alt="" className='w-[150px] md:w-[170px]' />
        </div>
        <div className='flex flex-col md:flex-row md:items-center mt-4 md:mt-0'>
            <li className='font-medium text-white mx-2 md:mx-4 list-none'><a href="">Home</a></li>
            <li className='font-medium text-white mx-2 md:mx-4 list-none'><a href="">About Us</a></li>
            <li className='font-medium text-white mx-2 md:mx-4 list-none'><a href="">Menu</a></li>
            <li className='font-medium text-white mx-2 md:mx-4 list-none'><a href="">FAQ</a></li>
            <button className='text-lg py-2 px-4 bg-yellow-700 text-white rounded-md mt-4 md:mt-0 md:ml-4'>
                Full Menu
            </button>
        </div>
    </div>
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
        <div className='flex flex-col md:flex-row md:items-center'>
            <div>
                <IoLocation className='text-4xl md:text-6xl text-white'/>
            </div>
            <div className='mt-2 md:mt-0 md:ml-4'>
                <p className='text-white'>123 Coffee Lane,</p>
                <p className='text-white'>Bean Town, CA 90210</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:items-center'>
            <div>
                <MdMessage className='text-4xl md:text-6xl text-white'/>
            </div>
            <div className='mt-2 md:mt-0 md:ml-4'>
                <p className='text-white'>(123) 456-7890</p>
                <p className='text-white'>FigaroCafe@email.com</p>
            </div>
        </div>
        <div className='flex justify-center md:justify-between items-center mt-4 md:mt-3 lg:mt-0'>
            <LuInstagram className='text-3xl md:text-4xl text-white mx-2'/>
            <FaFacebook className='text-3xl md:text-4xl text-white mx-2'/>
            <FaXTwitter className='text-3xl md:text-4xl text-white mx-2'/>
            <FaTiktok className='text-3xl md:text-4xl text-white mx-2'/>
        </div>
    </div>
    
    
    <div className='text-center mt-10'>
        <p className='text-white text-sm md:text-base'>Designed By Mohamed Reddam, 2024 copyright</p>
    </div>
</div>

    </div>
  )
}
