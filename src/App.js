import React from "react";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2> Our Menu</h2>

      

      {numPizzas > 0 ? (
        <>
          <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious
      </p>
        <ul className="pizzas">
          {pizzaData.map((pizzaObject, idx) => {
            return (
              <Pizza
                key={idx}
                name={pizzaObject.name}
                ingredients={pizzaObject.ingredients}
                price={pizzaObject.price}
                photoName={pizzaObject.photoName}
                soldOut={pizzaObject.soldOut}
              />
            );
          })}
        </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};
const Footer = () => {
  const hour = new Date().getHours();

  const [openHour, closeHour] = [12, 22];
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(hour >= openHour & hour <= closeHour) alert("We're currently open!!!")
  // else alert("Sorry we're closed!!!")

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 - {closeHour}:00
        </p>
      )}
    </footer>
  );
};

const Order = ({ openHour, closeHour }) => {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

const Pizza = ({ name, ingredients, price, photoName, soldOut }) => {
  // if (soldOut) return null;

  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : price}</span>
      </div>
    </li>
  );
};

export default App;
