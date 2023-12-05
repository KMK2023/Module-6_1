import Emoji from './Emoji';


const places = [
  { id: 1, name: "United States", Capital: "Washington DC" },
  { id: 2, name: "France", Capital: "Paris" },
  { id: 3, name: "Japan", Capital: "Tokyo" },
  { id: 4, name: "Brazil", Capital: "Brasília" },
  { id: 5, name: "Australia", Capital: "Canberra" },
  { id: 6, name: "South Africa", Capital: "Cape Town" },
  { id: 7, name: "India", Capital: " New Delhi" },
];

function Places() {
  const placeList = places.map((places) => (
    <li key={places.id}>
      <h3>{places.name}</h3>
      <em>(Capital city : {places.Capital})</em><Emoji/>
    </li>
  ));

  return (
    <div className="Places">
      <h2>Places and their capitals</h2>
      <ul>{placeList}</ul>
    </div>
  );
}

export default Places;
