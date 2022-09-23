import { useEffect, useState } from "react";
import Person from "./Person";
const PersonController = () => {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    const getPerson = async () => {
      try {
        const data = await fetch("https://randomuser.me/api?result=1");
        const dataJson = await data.json();
        const personObject = dataJson.results[0];
        setPerson({
          first_name: personObject?.name?.first,
          last_name: personObject?.name?.last,
          email: personObject?.email,
        });
      } catch (error) {
        console.error(error);
      }
    };
    getPerson();
  }, []);
  return <Person person={person} />;
};

export default PersonController;
