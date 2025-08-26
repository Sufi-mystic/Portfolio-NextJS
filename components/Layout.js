import Navigation from "./Navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Layout({children}) {
    return(
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
            <h1 className="text-3xl font-extrabold tracking-tight text-red-400"> Sufiya J - Web Developer </h1>
            <Navigation/>
            <main> {children} </main>
            <footer className="dark:bg-gray-950 h-20" style={{
                marginTop: '40px',
                marginBottom: '0px',
                textAlign: 'center',
                color: '#666'
            }}>
                <p className="pt-2"> &copy; 2025 My Portfolio. Built With NextJS </p>
                <p>   
                        <a href="https://www.linkedin.com/in/sufiya-j-b3499a21b/" target="_blank"><span className="text-3xl text-gray-400 pr-2"><FaLinkedin style={{ display: 'inline'}}/></span></a>
                        <a href="https://github.com/Sufi-mystic" target="_blank"><span className="text-3xl text-gray-400 pr-2"><FaGithub style={{ display: 'inline'}}/></span></a>
                        <a href="https://www.instagram.com/_sufi_mystic/" target="_blank"><span className="text-3xl text-gray-400 pr-2"><FaInstagramSquare style={{ display: 'inline'}}/></span></a>
                </p>
            </footer>
        </div>
    )
}