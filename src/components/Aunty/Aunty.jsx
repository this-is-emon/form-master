import Cousin from "../Cousin/Cousin";

function Aunty() {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Karim"}></Cousin>
        <Cousin name={"Aysha"}></Cousin>
      </section>
    </div>
  );
}

export default Aunty;
