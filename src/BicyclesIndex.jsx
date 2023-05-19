export function BicyclesIndex (props) {

  return (
    <div>
      {props.bicycles.map((bicycle) => (
        <div key={bicycle.id}>
          <h2>{bicycle.name}</h2>
          <p>Price: {bicycle.price}</p>
          <p>Color: {bicycle.color}</p>
        </div>
      ))}
  </div>
  );
}