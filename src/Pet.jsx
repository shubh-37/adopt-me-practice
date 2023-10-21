const Pet = ({ animal, name, location, breed, image, id }) => {
  let hero = "http://pets-v2.dev-apis.com/pets/none.jpg";
  if (image.length) {
    hero = image[0];
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </a>
  );
};

export default Pet;
