import "./profile.css";
import React, { useEffect, useState } from "react";
import { FcNews } from "react-icons/fc";

import {
  FcAddImage,
  FcEngineering,
  FcFullTrash,
  FcGallery,
} from "react-icons/fc";

export default function Profile() {
const [data,setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/posts");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);




  
  return (
    <div className="profile">
      <div className="profile-up">
        <div className="profile-image-name">
          <div class="container-fluid">
            <div className="image-border-set">
              <img
                src="https://media.istockphoto.com/id/1302676874/photo/open-book-close-up-at-the-library.webp?b=1&s=170667a&w=0&k=20&c=61UgD_-a3gi4RAyQ-0j-gPySkGXFFIqpJLInLWqWq20="
                alt=""
                className="profile-image"
              />

              <div className="author-name">Gavishka</div>
            </div>
          </div>
        </div>
        <div className="post">
          <div class="container-fluid">
            <div className="post-icon">
              <FcAddImage className="profile-icons" />{" "}
              <span className="icon-title-name">Create Post</span>
            </div>
          </div>
        </div>
        <div className="profile-create-post">
        <div class="container-fluid">
            <div className="post-icon">
              <FcGallery className="profile-icons" />{" "}
              <span className="icon-title-name"> Post</span>
            </div>
          </div>
        </div>
        <div className="profile-edit-post">
        <div class="container-fluid">
            <div className="post-icon">
              <FcEngineering className="profile-icons" />{" "}
              <span className="icon-title-name">Edit Post</span>
            </div>
          </div>
        </div>
        <div className="profile-delete-post">
        <div class="container-fluid">
            <div className="post-icon">
              <FcFullTrash className="profile-icons" />{" "}
              <span className="icon-title-name">Delete Post</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-down"></div>
    </div>
  );
}
