import Layout from "@/components/Layout";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


export default function About(){
    return(
        <Layout>
        <div>
            <h1 className="font-extrabold text-center mb-2"> About Me </h1>

            <p> Hi! My name is Sufiya and I am from Bengaluru, India. I am a graduate in Computer Application.</p>
            <p> I am a tech enthusiast, quick at learning new technologies. I have experience of over a year working with <b>MERN Stack Technology</b>. </p><br/>
            <p> You can find me on : </p>
            <p>   
                <a href="https://www.linkedin.com/in/sufiya-j-b3499a21b/" target="_blank"><span className="text-3xl text-red-400 pr-2"><FaLinkedin style={{ display: 'inline'}}/></span></a>
                <a href="https://github.com/Sufi-mystic" target="_blank"><span className="text-3xl text-red-400 pr-2"><FaGithub style={{ display: 'inline'}}/></span></a>
                <a href="https://www.instagram.com/_sufi_mystic/" target="_blank"><span className="text-3xl text-red-400 pr-2"><FaInstagramSquare style={{ display: 'inline'}}/></span></a>
            </p><br/>
            <p> I am also a passionate <b>Educator</b>. I have over 3 years of experience working as an Online Coding Instructor for students across the globe. </p>
            <br/>
        </div>
        </Layout>
    )
}