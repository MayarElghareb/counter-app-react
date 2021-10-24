function MyCounter({ count, increment, decrement }) {
  return (
    <div className=" justify-content-center">
      <h2>{count}</h2>
      <div className="myClick">
        <button class="btn btn-danger m-3" onClick={increment}>
          Increment
        </button>
        <button class="btn btn-success" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
export default MyCounter;
