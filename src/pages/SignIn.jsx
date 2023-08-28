export default function SignIn() {
  return (
    <div>
      <main className="main-form">
        <article>
          <h1 className="h1-form">My Tinerary</h1>
        </article>
        <aside className="father-form">
          <form className="container-form">
            <h6 className="step-form">step 1 of 2</h6>
            <h3 className="create-text">Sign in</h3>
            <p>New user? <a href=""> Create an account</a></p>
            <div className="row mb-3 email-form">
              <div className="col-sm-10">
                <input
                  type="email"
                  name="mail"
                  className="form-control"
                  id="mail"
                  placeholder="Email"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-form">
              Continue
            </button>
            <hr className="hr" />
            <div className="d-grid gap-3 col-9 my-5 mx-4 container-gf">
              <button className="btn btn-primary rounded-pill continue-g" type="button"><img src="img/2000px-Google_G_Logo.svg_.png" className="boton-google"  alt="btn google" />Continue with google </button>
              <button className="btn btn-primary rounded-pill continue-f" type="button"><img src="img/facebook-white.png" className="boton-fb" alt="btn-fb" />Continue with facebook </button>
            </div>
          </form>
        </aside>
      </main>
    </div>
  );
}
