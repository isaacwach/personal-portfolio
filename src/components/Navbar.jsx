import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/logo.jpeg';
import {HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link href="#home">Home</Link>
                    <Link href="#link">Link</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt='log image' style={{ width: '50px' }} />
            </div>
            <ul className='hidden md:flex'>
                <li>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamberger */}
            <div onClick={handleClick} className='md: hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes/>}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>h</li>
                <li className='py-6 text-4xl'>h</li>
                <li className='py-6 text-4xl'>h</li>
                <li className='py-6 text-4xl'>h</li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            LinkedIn<FaLinkedin size={35}/>
                        </a>
                    </li>
                    <li className='w-[160px] h[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            GitHub<FaGithub size={35}/>
                        </a>
                    </li>
                    <li className='w-[160px] h[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#bde778]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Email<HiOutlineMail size={35}/>
                        </a>
                    </li>
                    <li className='w-[160px] h[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c0bebe]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Resume<BsFillPersonLinesFill size={35}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        </>
    )
}

export default Navbar
