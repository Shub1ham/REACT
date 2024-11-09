function Addtodo() {
  return (
    <div class="container cen">
      <div class="row sk-row">
        <div class="col-3">
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div class="col-3">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success sk-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
