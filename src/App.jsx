import Card from "./components/card";
import eCommerceData from "./components/products";
console.log(eCommerceData);

function App() {
  return (
    <>
        <div className="flex flex-wrap -m-4">

      {eCommerceData.map((data) => (
        <Card
          key={data.id}
          category={data.category}
          description={data.description}
          image={data.image}
          price={data.price}
          title={data.title}
          rating={data.rating.rate}
        />
      ))}
</div>
    </>
  );
}
export default App;
