import "./post.css";
import React, { useEffect, useState } from "react";

export default function CreatePost() {
  const [selectedImage, setSelectedImage] = useState("");
  function handleImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <div className="create">
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                <h6 className="post-header">Create Post</h6>
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="post-content-center">
                <div className="post-up">
                  <div className="post-profile-image-content">
                    <div className="profile-image-border">
                      <img
                        src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                        alt=""
                        className="pro"
                      />
                    </div>

                    <div className="author-name-set">
                      <br />
                      <span className="public">Gavishka</span>
                    </div>
                  </div>
                  <br />

                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">Title</label>
                  </div>
                  <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">
                      User ID
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                  <br />

                  <div className="image-input">
                    <div class="input-group mb-3">
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile02"
                        onChange={handleImageChange}
                      />{" "}
                      <label class="input-group-text" for="inputGroupFile02">
                        Upload
                      </label>
                    </div>
                  </div>
                  <div className="post-content-title">
                    <div className="display-image">
                      <img
                        src={
                          selectedImage ||
                          "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                        }
                        className="img-fluid"
                        alt="Selected Image"
                        id="selectedImage"
                      />
                    </div>
                    <br />

                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                      ></textarea>
                      <label for="floatingTextarea">Whats your mind ...</label>
                    </div>
                  </div>
                </div>

                <div className="post-down">
                  <div className="image-adder">
                    <div className="image-add-fi"></div>
                    <div className="show-added-image"></div>
                  </div>

                  <div className="button-post"></div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        class="btn btn-primary"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        button
      </button>
    </div>
  );
}
