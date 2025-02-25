import './Tools.css';
import {useState,useEffect, useRef} from 'react';
import { Link, NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export  function Top(){
    const [isMobile, setIsMobile] = useState(false);
    const [lastscrollpos, setlastscrollpos] = useState(0);
    const [fixmenu, setfixmenu] = useState(false);
    const[isMenuOPen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);


    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 800);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially to set the state
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    useEffect(()=>{
        const handleScroll = ()=>{
            const currentscrollpos = window.pageYOffset;

            if(currentscrollpos < lastscrollpos) {
                setfixmenu(true);
            }else{
                setfixmenu(false)
            }
            setlastscrollpos(currentscrollpos)
        };
        window.addEventListener('scroll', handleScroll);
        return ()=> {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    
    useEffect(()=>{
        const handleClickOutside = (event)=>{
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setMenuOpen(false)
            }
        }
        document.addEventListener('mousedown',handleClickOutside)

        return ()=>{
            document.removeEventListener('mousedown',handleClickOutside)
        }
    },[menuRef])
    
    const toggleMenu = ()=>{
        setMenuOpen(!isMenuOPen)
    }


   
  return(
      <div className='menucont'>
        <div className='menuBar' style={{position: `${fixmenu ? 'fixed' : 'absolute'}`}}>
        <h1  className='appname'><Link  id='appname' to='/'>am</Link></h1>
        {!isMobile && <nav role='navigation' aria-label='main-bar' className='menubarLinks'>
            <NavLink to="/" id='link' activeClassName={"active"}>home</NavLink>
            <NavLink to="/about" id='link' activeClassName={"active"}>about me</NavLink>
            <HashLink to="/#skills" scroll={(el)=> el.scrollIntoView({behavior: 'smooth'})} id='link'>expertise</HashLink>
            <HashLink to="/#projects" scroll={(el)=> el.scrollIntoView({behavior: 'smooth'})} id='link'>portfolio</HashLink>
            <NavLink to="/contact" id='link' activeClassName={"active"}>contact</NavLink>
        </nav>}
        {isMobile && <>
        {isMenuOPen ? <button id='menubut' onClick={toggleMenu}><img src={`${process.env.PUBLIC_URL}/images/close.png`} alt='X' /></button> : 
       <button id='menubut' onClick={toggleMenu}> <img src={`${process.env.PUBLIC_URL}/images/menu.png`} alt='menu'/></button>}</>}
       </div>

        {isMenuOPen &&(
        <div className={`dropdown ${isMenuOPen ? 'open': ''}`}  ref={menuRef}>
        <nav role='navigation' aria-label='main-dropdown' className="dropdown-menu">
            <NavLink to="/" id='link' onClick={toggleMenu} activeClassName={"active"}>home</NavLink>
            <NavLink to="/about" id='link' onClick={toggleMenu} activeClassName={"active"}>about me</NavLink>
            <HashLink to="/#skills" onClick={toggleMenu} scroll={(el)=> el.scrollIntoView({behavior: 'smooth'})} id='link'>expertise</HashLink>
            <HashLink to="/#projects" onClick={toggleMenu} scroll={(el)=> el.scrollIntoView({behavior: 'smooth'})} id='link'>portfolio</HashLink>
            <NavLink to="/contact" id='link' onClick={toggleMenu} activeClassName={"active"}>contact</NavLink>
            
        </nav>
        </div>
       )}
       </div>
    );

  }


  export  function Footer(){
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return(
        <footer className='Footer' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/back1.jpg)`}}>
           <div className='footerbackground'></div>
            <h3>Follow me #austinemark  <Link to='/contact' className='footercontact'>direct chat</Link></h3>
            <nav role='navigation' aria-label='footer-external-links' className='sociallinks'>
                <a href='https://github.com/austinemark001'><img src={`${process.env.PUBLIC_URL}/images/githubfill.png`} alt='git'/> github</a>
                <a href='https://dev.to/austinemark001'><img src={`${process.env.PUBLIC_URL}/images/devcofill.png`} alt='dev co'/> dev.to</a>
                {/*<a href='https://www.instagram.com/mark.a.101?igsh=YzljYTk1ODg3Zg=='><img src={`${process.env.PUBLIC_URL}/images/instagramfill.png`} alt='ig'/> instagram</a>*/}
                <a href='https://www.instagram.com/mark.a.101?igsh=YzljYTk1ODg3Zg=='><img src={`${process.env.PUBLIC_URL}/images/instagramfill.png`} alt='ig'/> instagram</a>
                <a href='https://www.linkedin.com/in/austine-mark-abb7282aa'><img src={`${process.env.PUBLIC_URL}/images/linkedinfill.png`} alt='in'/> linkedin</a>
                <a href='https://x.com/Austine19251417?t=XC13lUeb9F9VZrc50dxVqQ&s=09'><img src={`${process.env.PUBLIC_URL}/images/xfill.png`} alt='x'/> x</a>
            </nav>
               
            <p className='copywrite'>©2024- created with &#10084; by austine mark <img src={`${process.env.PUBLIC_URL}/images/up.png`} alt='scroll to top' onClick={scrollToTop}/></p>
            </footer> 
    )
}

// backgroundColor: `${theme === 'dark' ? '#30303e4d': '#f7f1f04d'}