import Layout from "@/components/Layout"
import Image from "next/image"

export default function Projects(){
    const projects = [
        {
            id: 1,
            title: 'Blue Pearl Wedding Planners',
            description: 'App landing page for a business using HTML, CSS, Javascript and Bootstrap framwork.',
            tech: 'HTML, CSS, JS, Bootstrap',
            img: '/MyProject-1.jpg'
        },
        {
            id: 2,
            title: 'Mario Game',
            description: 'A simple web based game built using JS',
            tech: 'HTML, CSS, JS',
            img: '/MyProject-2.jpg'
        },
        {
            id: 3,
            title: 'We Help - Ticket Management',
            description: 'A Ticket Management web project which allows user to raise tickets and get them solved. This project is built using MERN technology.',
            tech: 'MongoDB, ExpressJS, ReactJS, NodeJS',
            img: '/MyProject-6.jpg'
        },
        {
            id: 4,
            title: 'Happy Reads',
            description: 'An Online Library web project which allows user to add books to cart and place order. This project is built using MERN technology.',
            tech: 'MongoDB, ExpressJS, ReactJS, NodeJS',
            img: '/MyProject-7.jpg'
        },
        {
            id: 5,
            title: 'Code Player',
            description: 'A website to code online - Code Player. This was built using HTML, CSS, Javascript and JQuery.',
            tech: 'HTML, CSS, JS, JQuery',
            img: '/MyProject-3.jpg'
        }
    ]

    return(
        <Layout>
            <h1 className="font-extrabold text-center"> My Projects </h1>
            <div>
                {projects.map(project=>(
                    <div key={project.id} className="bg-red-300 shadow-md shadow-red-200" style={{
                        border: '1px solid #ddd',
                        padding: '20px',
                        margin: '20px 0',
                        borderRadius: '8px',
                        height: '250px'
                    }}>
                        <Image src={project.img} alt="Project Image" width={300} height={200} className="float-right"/>
                        <h3 className="font-bold tracking-tight mb-2"> {project.title} </h3>
                        <p className="mb-2 text-md leading-6"> {project.description} </p>
                        <p><strong>Technologies : </strong> {project.tech} </p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}