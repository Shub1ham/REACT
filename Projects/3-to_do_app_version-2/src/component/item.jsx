function Item({todoname,tododate}) {
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger todo-button">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
