import Guarantee from "./Guarantee";

const Guarantees = ({ guaranteeList }) => {
  return (
    <div className="container">
      {guaranteeList.map((guarantee) => (
        <Guarantee
          src={guarantee.src}
          alt={guarantee.alt}
          title={guarantee.title}
          desc={guarantee.desc}
        />
      ))}
    </div>
  );
};

export default Guarantees;
