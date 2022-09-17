import Hobby from "./Hobby";
const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <ul>
      {hobbies.map((hobby, index) => (
        <Hobby name={hobby} key={index} />
      ))}
    </ul>
  );
};

export default HobbyList;
