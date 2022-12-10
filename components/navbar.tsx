import Link from "next/link";
import {AiFillHome} from "react-icons/ai";
import ItemMenu from "./item-menu";

export default function Navbar(props){
    return(
        <>
        <div className="flex items-center justify-between w-full px-10 py-5 bg-purple-700">
            <Link href="/">
                <div className="flex items-end gap-2">
                        <AiFillHome size={30} color="#fff"/>
                        <span className="text-xl font-bold text-gray-50">Home Logo</span>
                </div>
            </Link>
            <div className="flex items-center gap-3">
                <Link href="/">
                    <ItemMenu active={props.page == 'Home' ? true : false} name="Beranda"/>
                </Link>
                <Link href="/example">
                    <ItemMenu active={props.page == 'Example Page' ? true : false} name="Example"/>
                </Link>
                <Link href="/about">
                    <ItemMenu active={props.page == 'About' ? true : false} name="About"/>
                </Link>
                <Link href="/login">
                    <button className="btn-light">Login</button>
                </Link>
            </div>
        </div>
        </>
    );
}