export default function ItemMenu(props){
    return(
        <>
        <span className={`px-5 py-2 font-semibold duration-200 rounded-lg ${props.active!=true ? `text-gray-50` : `text-amber-500`}  hover:bg-purple-900`}>
            {props.name}
        </span>
        </>
    );
}