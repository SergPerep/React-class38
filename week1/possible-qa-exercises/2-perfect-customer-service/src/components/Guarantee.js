const Guarantee = ({ src, alt, title, desc }) => {
  return (
    <div className="guarantee">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Guarantee;
