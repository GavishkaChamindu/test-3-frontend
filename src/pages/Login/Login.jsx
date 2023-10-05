import "./login.css";

export default function Login() {
  return (

    <div class="container-fluid">

    <div className="login">

        <div className="set-padding">
      <div className="login-header">
        <h6 className="l-title">Login to BlogPost</h6>
      </div>
      <br /><br />
      <div className="login-content">
        <div className="content-title"></div>
        <div className="login-down">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
           
            <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Login</button>
</div>
          </form>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
