import "./register.css";

export default function Register() {
  return (
    <div class="container-fluid">
      <div className="login">
        <div className="set-padding">
          <div className="login-header">
            <h6 className="l-title">Login to BlogPost</h6>
          </div>
          <br />
          <br />
          <div className="login-content">
            <div className="content-title"></div>
            <div className="login-down">
              <form>
              <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>


                <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>




<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
  <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

                <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02"/>
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>


                

                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
