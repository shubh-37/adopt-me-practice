import { useState } from "react";
import useBreedList from "./useBreedList";
import PetResults from "./PetResults";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];
const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [searchParams, setSearchParams] = useState({
    animal: "",
    location: "",
    breed: "",
  });
  const [breedList] = useBreedList(animal);
  const results = useQuery(["/pets", searchParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setSearchParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            name="location"
            id="location"
            type="text"
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name=""
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />{" "}
            {ANIMALS.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select name="breed" disabled={breedList.length === 0} id="breed">
            <option />
            {breedList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <PetResults pets={pets} />
    </div>
  );
};

export default SearchParams;
