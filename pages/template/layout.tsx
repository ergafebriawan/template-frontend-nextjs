import Head from "next/head";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Layout(props){
    return(
        <>
        <Head>
            <title>{props.title}</title>
        </Head>
        <Navbar/>
        <div>
            {props.childern}
        </div>
        <Footer/>
        </>
    );
}