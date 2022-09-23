const Person = ({ person = null }) => {
  return (
    <>
      {person && (
        <ul>
          <li>First name: {person.first_name}</li>
          <li>Last name: {person.last_name}</li>
          <li>Email: {person?.email}</li>
        </ul>
      )}
    </>
  );
};

export default Person;
