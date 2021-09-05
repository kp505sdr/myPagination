import "../component/Card.css";

const Card = ({ img, email, fname, lname, id }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top img-fluid " alt={id} />
      <div className="card-body">
        <h2 className="card-title text-center ">ID:{id}</h2>
        <h2>First Name:-{fname}</h2>
        <h2>Last Name:-{lname}</h2>
        <h4>Email:-{email}</h4>
      </div>
    </div>
  );
};

export default Card;
