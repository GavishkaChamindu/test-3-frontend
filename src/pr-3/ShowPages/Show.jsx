import "./show.css";
import React from "react";

const YourComponent = () => {
  return (
    <div className="container">
      <div className="show-contains">
        <div className="show-up">
          up contains
          <div class="container-fluid">
            <div className="up-c">
              <div className="pr-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdHtP2TCccokEERA5PlgbB-zLk6rSNCgGun-2BkCeEg&s"
                  alt=""
                  className="profile-image"
                />
              </div>

              <div className="author-name"></div>
              <div className="show-title"></div>
            </div>
          </div>
        </div>
        <div className="show-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdHtP2TCccokEERA5PlgbB-zLk6rSNCgGun-2BkCeEg&s"
            alt=""
          />
          image and other
        </div>
        <div className="edit-delete-comment">edit delete comment </div>
        <div className="show-comment"></div>
        <div className="write-comment"></div>
      </div>
    </div>
  );
};

export default YourComponent;
