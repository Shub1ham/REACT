function Item2() {
    let todoname = "Go To Collage";
  let tododate = "4/10/2023";
  return (
    <div class="container">
      <div class="row todo-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger todo-button">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item2;
