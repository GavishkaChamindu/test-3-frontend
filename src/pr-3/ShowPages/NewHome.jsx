import "./newhome.css";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiComment, BiLike } from "react-icons/bi";

export default function NewHome() {

const [data,setData] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/posts");
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);














  
  const [isLiked, setIsLiked] = useState(false);

  // Function to handle the "Like" button click
  const handleLikeClick = () => {
    // Toggle the liked state
    setIsLiked(!isLiked);
  };




  
  return (
    <div className="show-home-container">


hi
      


{data.map((item) => (







      
<div key={item.id} className="new-show-content">
<div className="new-show-up">
          <div className="authorName-image">
            <div className="author-image">
              <div class="container-fluid">
                <div className="image-border-set">
                  <img
                    src="https://media.istockphoto.com/id/1302676874/photo/open-book-close-up-at-the-library.webp?b=1&s=170667a&w=0&k=20&c=61UgD_-a3gi4RAyQ-0j-gPySkGXFFIqpJLInLWqWq20="
                    alt=""
                    className="profile-image"
                  />

                  <div className="author-name">
                  {item.author_name}
                    
                    <div className="post-date-time">{item.created_at}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="author-name"></div>
          </div>

          <div className="post-content">
            <div class="container-fluid">{item.content}</div>
          </div>
        </div>

        <div className="new-show-center">


          
          <img




            src={"http://localhost:8000/"+item.image}
            class="img-fluid"
            alt="..."
          />
        </div>
        <hr />

        <div className="new-show-down">
   

        <div className="like-left" onClick={handleLikeClick}>
           
            <div class="container-fluid">
            <BiLike className={`down-icon ${isLiked ? 'liked' : ''}`} />
              <span className={`edit-span ${isLiked ? 'liked' : ''}`}>
                {isLiked ? 'Liked' : 'Like'}
              </span>
            </div>
          </div>

          <div className="comment-center">
          <BiComment className="down-icon" /> 
          
          <span className="edit-span">Comment</span>

            
          
          </div>
          <div className="share-right">
            <AiOutlineDelete className="down-icon" /> 
            <span className="edit-span">Share</span>

          </div>

      
        </div>
       
        <hr />
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>

        <br />
        <br />
      </div>


      ))}
      
    </div>
  );
}
