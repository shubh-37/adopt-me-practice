import Pet from "./Pet";

const PetResults = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            name={pet.name}
            location={`${pet.city} ${pet.state}`}
            image={pet.images}
            breed={pet.breed}
            id={pet.id}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default PetResults;
