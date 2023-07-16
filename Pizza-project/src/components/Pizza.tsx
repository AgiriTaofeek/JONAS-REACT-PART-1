type PizzaObjType = {
  pizzaObj: PizzaProps;
};
type PizzaProps = {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
  soldOut: boolean;
};

const Pizza = ({
  pizzaObj: { name, ingredients, photoName, price, soldOut },
}: PizzaObjType): JSX.Element => {
  // console.log(pizza);
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold out" : price}</span>
      </div>
    </li>
  );
};

export default Pizza;
