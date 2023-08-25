function Header() {
  return (
    <div className="header">
      <div className="welcome-wrapper">
        <div className="text-wrap">
          Welcome to Bill Generator,
          <br />
          Generate bill <br />
          in pdf format
        </div>
        <button className="starter-btn">Start Generating</button>
      </div>
    </div>
  );
}

export default Header;
