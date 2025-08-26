import Link from "next/link";

export default function Navigation(){
    return(
        <nav className=" dark:bg-gray-400 mt-4 mb-4 p-4 shadow-md shadow-gray-500/50">
            <Link href="/"> Home </Link>
            <span style={{margin: '0 2px'}}> | </span>
            <Link href="/about"> About </Link>
            <span style={{margin: '0 2px'}}> | </span>
            <Link href="/projects"> Projects </Link>
            <span style={{margin: '0 2px'}}> | </span>
            <Link href="/contact"> Contact </Link>
        </nav>
    )
}