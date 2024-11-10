const Errormessage = ({items}) => {
//   let fooditems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      {items.length === 0 && <h3>i am still hungry</h3>}
    </>
  );
};

export default Errormessage;
