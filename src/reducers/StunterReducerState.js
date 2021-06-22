import alicePowers from "../assets/alicePowers.jpg";
import daveOsbourne from "../assets/daveOsbourne.jpg";
import falconAmerica from "../assets/falconAmerica.jpg";
import sandraCowell from "../assets/sandraCowell.jpg";
import steveBobs from "../assets/steveBobs.jpg";

const initialStunterState = {
  currentStunter: null,
  dragging: false,
  zone: null,
  liked: false,
  disliked: false,
  savedStunters: [],
  showSaved: false,
  stunters: [
    {
      id: 0,
      firstName: "Dave",
      lastName: "Osbourne",
      age: 26,
      height: 173,
      weight: 80,
      skills: ["High falls", "Tumbling", "Martial arts", "Rappelling"],
      img: daveOsbourne,
    },
    {
      id: 1,
      firstName: "Falcon",
      lastName: "America",
      age: 29,
      height: 153,
      weight: 59,
      skills: ["Wire work", "Fighting", "Rappelling", "Precision Driving"],
      img: falconAmerica,
    },
    {
      id: 2,
      firstName: "Sandra",
      lastName: "Cowell",
      age: 34,
      height: 163,
      weight: 80,
      skills: ["High Falls", "Precision Driving", "Stair falls", "Air ram"],
      img: sandraCowell,
    },
    {
      id: 3,
      firstName: "Steve",
      lastName: "Bobs",
      age: 22,
      height: 163,
      weight: 80,
      skills: ["Vehicle impacts", "Tumbling", "Knife work", "Fire burns"],
      img: steveBobs,
    },
    {
      id: 4,
      firstName: "Alice",
      lastName: "Powers",
      age: 31,
      height: 163,
      weight: 80,
      skills: ["Fighting", "Horse falls", "Tumbling", "Air ram"],
      img: alicePowers,
    },
  ],
};

export { initialStunterState };
