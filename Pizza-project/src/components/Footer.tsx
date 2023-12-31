const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 2;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(hour);
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>we're open until {closeHour}:00. come visit us or order online.</p>
          <button className="btn">order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
