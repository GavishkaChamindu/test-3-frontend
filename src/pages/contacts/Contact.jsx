import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <hr />
        <div className="contact-up">
            <div className="recently-add">
            <div class="container-fluid">
             <span className="recently-span">Recently Added</span>
             </div>
            </div>
            <div className="event-set">
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
            <hr />
        </div>


        
        <div className="contact-down">
            <div className="contact-list">
            <div class="container-fluid">
                <div className="contact-set">
                <span className="contact-list-profiles">Contact</span>
                <div className="all-contact">
                    <div className="inside-contact">
                        1 <br />2 <br /> 3
                    </div>
                </div>
                
                </div>
             </div>
            </div>
        </div>
      </div>
    </div>
  );
}
