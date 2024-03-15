const Fruit = () => {
  const fruit1 = "Banana";
  const fruit2 = "Pineapple";

  return (
    <ul>
      <li>Apple</li>
      <li>{fruit1.toUpperCase()}</li>
      <li>{fruit2}</li>
    </ul>
  );
};

export default Fruit;
