import "./news.css";
import Contact from "../contacts/Contact";
import NewHome from "../../pr-3/ShowPages/NewHome";
import Profile from "../profilePage/Profile";

export default function News() {
  return (
    <div className="news">
        
        <div className="news-left"><Profile/></div>
        <div className="news-center"> 
        <NewHome/>
        </div>
        <div className="news-right"><Contact/> </div>
      
    </div>
  )
}
