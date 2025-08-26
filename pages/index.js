import Layout from "@/components/Layout";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


export default function Home(){
  return(
    <Layout>
      <h1 className="font-extrabold tracking-tight text-center mb-2"> Welcome to my Portfolio </h1>
      <p>
        I am a <b>Developer</b> with knowledge in web development and design,
        I offer the best projects resulting in quality work.
      </p>
      <p> This site was built with NextJS to showcase the power of modern web development! </p>
      <br/><br/>
    </Layout>
  )
}