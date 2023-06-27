import { Link } from "react-router-dom";

const Footer = () => {
    return (  
        <footer
            className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left fixed inset-x-0 bottom-0 z-50">
            <div className="p-4 text-center font-medium text-neutral-700 dark:text-neutral-200">
                © 2023 Copyright:   <Link to="#">BLOGGG</Link>
            </div>
        </footer>
    );
}
 
export default Footer;