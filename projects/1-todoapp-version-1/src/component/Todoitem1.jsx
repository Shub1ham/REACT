function Todoitem1() {
    let todoname='buy milk';
    let tododate='4/10/2023';
  return (
    <div class="container cen">
      <div class="row sk-row">
        <div class="col-3">{todoname}</div>
        <div class="col-3">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger sk-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem1;
