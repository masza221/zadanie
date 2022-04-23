import fetch from "../fetch";

const Welcome = (props) => {




  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(e.target.to.value && e.target.to.value ) 
    { 
      const toPosition = await fetch(e.target.to.value);
      const fromPosition = await fetch(e.target.from.value);
  
      const geo = {
        from: fromPosition,
        to: toPosition,
      };
      props.obj(geo);
      props.showmap(true);
    }
    else {
      alert('Pass data to form')
    }
    
   
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="from"
            placeholder="Country, City, Street, Number "
          ></input>
          <input
            type="text"
            name="to"
            placeholder="Country, City, Street, Number "
          ></input>
          <button className="button-3" type="submit">Prowadź</button>
          <button className="button-3" onClick={(e)=> {e.preventDefault(); props.showmap(false);}}>Wróć</button>
        </form>
      </div>
    </>
  );
};

export default Welcome;
