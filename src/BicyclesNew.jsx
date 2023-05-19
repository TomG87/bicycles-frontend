export function BicyclesNew(props) {

    const handleSubmit = (event) => {
      event.preventDefault();
      const params = new FormData(event.target);
     props.onCreateBicycle(params, () => event.target.reset());
   };
  return (
    <div>
      <h1>New Bike</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="number" />
        </div>
        <div>
          Color: <input name="color" type="text" />
        </div>
        <button type="submit">Create Bike</button>
      </form>
    </div>
  );
}