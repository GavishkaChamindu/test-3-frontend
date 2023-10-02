import "./header.css";

export default function HeaderPage() {
  return (
    <div className="header">
      <div className="header-up">
        <div className="h-left">
          <div>
            <h1 className="header-tit"> Plans </h1>
          </div>
          <div>
            <h1 className="header-tit-g">&</h1>
          </div>
          <div>
            <h1 className="header-tit">Pricing</h1>
          </div>
        </div>
      </div>
      <div className="header-down">
        <span className="down-title">
          Select the most convenient plan for you
        </span>
      </div>
      <br />
    </div>
  );
}
