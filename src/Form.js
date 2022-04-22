import Fetch from "./Fetch";

const Form = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const toPosition = await Fetch(e.target.to.value);
    const fromPosition = await Fetch(e.target.from.value);

    const geo = {
      from: fromPosition,
      to: toPosition,
    };
    props.obj(geo);
    props.showmap(true);
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="from"
            placeholder="Podaj pierwszy adres"
          ></input>
          <input
            type="text"
            name="to"
            placeholder="Podaj pierwszy adres"
          ></input>
          <button type="submit">Prowadź</button>
        </form>
      </div>
    </>
  );
};

export default Form;
