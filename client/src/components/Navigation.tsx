import Link from 'next/link';
import { useRouter, NextRouter } from "next/router";

export default function Navigation() {

    const router:NextRouter = useRouter();
    let route:string = router.pathname;

    return(
        <nav className="mb-6">
            <span className="mr-3">Views:</span>
            <Link href="/">
                <input 
                    className={`${(route == "/") ? "bg-[#EEAA40]" : "bg-white hover:opacity-50"} text-[#035074] py-1 px-2 mr-2 rounded`} 
                    type="button" value="Selected" 
                    disabled={(route == "/") ? true : false} />
            </Link>

            <Link href="/all">
                <input 
                    className={`${(route == "/all") ? "bg-[#EEAA40]" : "bg-white hover:opacity-50"} text-[#035074] py-1 px-2 mr-2 rounded`} 
                    type="button" value="All" 
                    disabled={(route == "/all") ? true : false} />
            </Link>

            <Link href="/random">
                <input 
                    className="bg-white hover:opacity-50 text-[#035074] py-1 px-2 mr-2 rounded" 
                    type="button" value="Random" 
                    disabled />
            </Link>

            <Link href="/search">
                <input 
                    className="bg-white hover:opacity-50 text-[#035074] py-1 px-2 mr-2 rounded"
                    type="button" value="Search" 
                    disabled />
            </Link>
        </nav>
    );
}