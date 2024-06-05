import Cousin from "../Cousin/Cousin";

function Uncle() {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Rahim"}></Cousin>
        <Cousin name={"Mysha"}></Cousin>
      </section>
    </div>
  );
}

export default Uncle;
