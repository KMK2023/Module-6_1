// const location = [
//   {
//     id: 1,
//     name: "Sentosa",
//     Category: "Beach",
//     image: "⛱",
//   },
//   {
//     id: 2,
//     name: "Kilimanjaro",
//     Category: "Mountain",
//     image: "⛰",
//   },
//   {
//     id: 3,
//     name: "East Coast",
//     Category: "Camping",
//     image: "⛺️",
//   },
//   {
//     id: 4,
//     name: "PIE",
//     Category: "RoadTrip",
//     image: " 🚘 ",
//   },
//   {
//     id: 5,
//     name: "Marina Bay",
//     Category: "Sunset",
//     image: "🌅",
//   },
//   {
//     id: 6,
//     name: "Little India",
//     Category: "Heritage",
//     image: " 🏯 ",
//   },
//   {
//     id: 7,
//     name: "China Town",
//     Category: "Tourism",
//     image: "🌠",
//   },
// ];
// // ----------------------------------------------------------------------------------------------------------------------
// function Singleloc({ id, name, Category, image, onRemoveLoc }) {
//   return (
//     <li>
//       <img src={image} width="400" alt={name} />
//       <h3>{name}</h3>
//       <em>({Category})</em>&nbsp;
//       <a onClick={() => onRemoveLoc(id)}>Delete</a>
//     </li>
//   );
// }
// // ----------------------------------------------------------------------------------------------------------------------
// function AddLocForm({ onAddLoc }) {
//   const [name, setName] = useState("");
//   const [Category, setCategory] = useState("");
//   const [imageURL, setImageURL] = useState("");

//   const handleAddLoc = (e) => {
//     e.preventDefault();
//     onAddLoc({ name, Category, image: imageURL });
//   };

//   return (
//     <form onSubmit={handleAddLoc}>
//       <h3>Add New Location</h3>
//       <label>
//         Name:
//         <input
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Latin Name:
//         <input
//           name="Category"
//           value={Category}
//           onChange={(e) => setCategory(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Image URL:
//         <input
//           name="imageURL"
//           value={imageURL}
//           onChange={(e) => setImageURL(e.target.value)}
//         />
//       </label>
//       <br />
//       <button>Add New Location</button>
//     </form>
//   );
// }

// // ----------------------------------------------------------------------------------------------------------------------
// function AllLocs() {
//   const [currentLoc, setCurrentLocs] = useState(Locs);

//   const handleSortLocs = () => {
//     let newLocs = [...currentLocs];
//     newLocs.sort((Loc1, Loc2) => (Loc1.name < Loc2.name ? -1 : 1));
//     setCurrentLocs(newLocs);
//   };

//   const handleReverseLocs = () => {
//     let newLocs = [...currentLocs];
//     newLocs.reverse();
//     setCurrentLocs(newLocs);
//   };

//   const handleFilterLocs = () => {
//     let newLocs = currentLocs.filter((Loc) => Loc.Category.startsWith("A"));
//     setCurrentLocs(newLocs);
//   };

//   const handleResetLocs = () => {
//     setCurrentLocs(Locs);
//   };

//   const handleAddLoc = (newLoc) => {
//     newLoc.id =
//       currentLocs.reduce((maxId, Loc) => Math.max(maxId, Loc.id), 0) + 1;
//     setCurrentLocs([...currentLocs, newLoc]);
//   };

//   const handleRemoveLoc = (deleteId) => {
//     let newLocs = currentLocs.filter((Loc) => Loc.id != deleteId);
//     setCurrentLocs(newLocs);
//   };

//   const LocList = currentLocs.map((Loc) => (
//     <SingleLoc
//       name={Loc.name}
//       Category={Loc.Category}
//       key={Loc.id}
//       image={Loc.image}
//       id={Loc.id}
//       onRemoveLoc={handleRemoveLoc}
//     />
//   ));

//   return (
//     <div className="AllLocs">
//       <h2>All Locations</h2>
//       <ul>{LocList}</ul>
//       <div>
//         <button onClick={handleSortLocs}>Sort Alphabetically</button>
//         <button onClick={handleReverseLocs}>Reverse List</button>
//       </div>
//       <div>
//         <button onClick={handleFilterLocs}>Filter Pantheras</button>
//         <button onClick={handleResetLocs}>Reset List</button>
//       </div>
//       <AddLocForm onAddLoc={handleAddLoc} />
//     </div>
//   );
// }
// // ----------------------------------------------------------------------------------------------------------------------

import { useState } from "react";

const location = [
  {
    id: 1,
    name: "Sentosa",
    Category: "Beach",
    image: "../assets/Beach.jpg",
  },
  {
    id: 2,
    name: "Kilimanjaro",
    Category: "Mountain",
    image: "../assets/Mountain.jpg",
  },
  {
    id: 3,
    name: "East Coast",
    Category: "Camping",
    image: "../assets/Scenery.jpg",
  },
  {
    id: 4,
    name: "PIE",
    Category: "RoadTrip",
    image: " ../assets./TeaEstates.jpg ",
  },
  {
    id: 5,
    name: "Marina Bay",
    Category: "Sunset",
    image: "../assets/Tradition.jpg",
  },
  {
    id: 6,
    name: "Little India",
    Category: "Heritage",
    image: " ../assets/TeaEstates.jpg ",
  },
  {
    id: 7,
    name: "China Town",
    Category: "Tourism",
    image: "../assets/Waterfall.jpg",
  },
];

function Singleloc({ id, name, Category, image, onRemoveLoc }) {
  return (
    <li>
      <img src={image} width="00" alt={name} />
      <h3>{name}</h3>
      <em>({Category})</em>&nbsp;
      <a onClick={() => onRemoveLoc(id)}>Delete</a>
    </li>
  );
}

function AddLocForm({ onAddLoc }) {
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleAddLoc = (e) => {
    e.preventDefault();
    onAddLoc({ name, Category, image: imageURL });
  };

  return (
    <form onSubmit={handleAddLoc}>
      <h3>Add New Location</h3>
      <label>
        Name:
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Latin Name:
        <input
          name="Category"
          value={Category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          name="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </label>
      <br />
      <button>Add New Location</button>
    </form>
  );
}

function AllLocs() {
  const [currentLocs, setCurrentLocs] = useState(location);

  const handleSortLocs = () => {
    let newLocs = [...currentLocs];
    newLocs.sort((Loc1, Loc2) => (Loc1.name < Loc2.name ? -1 : 1));
    setCurrentLocs(newLocs);
  };

  const handleReverseLocs = () => {
    let newLocs = [...currentLocs];
    newLocs.reverse();
    setCurrentLocs(newLocs);
  };

  const handleFilterLocs = () => {
    let newLocs = currentLocs.filter((Loc) => Loc.Category.startsWith("A"));
    setCurrentLocs(newLocs);
  };

  const handleResetLocs = () => {
    setCurrentLocs(location);
  };

  const handleAddLoc = (newLoc) => {
    newLoc.id =
      currentLocs.reduce((maxId, Loc) => Math.max(maxId, Loc.id), 0) + 1;
    setCurrentLocs([...currentLocs, newLoc]);
  };

  const handleRemoveLoc = (deleteId) => {
    let newLocs = currentLocs.filter((Loc) => Loc.id !== deleteId);
    setCurrentLocs(newLocs);
  };

  const LocList = currentLocs.map((Loc) => (
    <Singleloc
      name={Loc.name}
      Category={Loc.Category}
      key={Loc.id}
      image={Loc.image}
      id={Loc.id}
      onRemoveLoc={handleRemoveLoc}
    />
  ));

  return (
    <div className="AllLocs">
      <h2>All Locations</h2>
      <ul>{LocList}</ul>
      <div>
        <button onClick={handleSortLocs}>Sort Alphabetically</button>
        <button onClick={handleReverseLocs}>Reverse List</button>
      </div>
      <div>
        <button onClick={handleFilterLocs}>Filter Locations</button>
        <button onClick={handleResetLocs}>Reset List</button>
      </div>
      <AddLocForm onAddLoc={handleAddLoc} />
    </div>
  );
}

export default AllLocs;
