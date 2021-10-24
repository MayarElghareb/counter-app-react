import myImg from "../../assets/img.jpg";
function MyHome() {
  return (
    <div className="wrap justify-content-center container">
      {/* <h2>Home</h2> */}
      <div className="row m-0 align-items-center pt-5">
        <div className="col-md-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="col-md-6 img-fluid">
          <img src={myImg} alt="me" class=" w-75"></img>
        </div>
      </div>
    </div>
  );
}
export default MyHome;
