import HomeComponent from "../component/HomeComponent";
import ItemService from "../service/itemService";
import axios from "axios";

function HomePage({ item, error }) {
  console.log(item);
  console.log("item");
  return (
    <div>
      <HomeComponent />
    </div>
  );
}

// HomePage.getInitialProps = async () => {
//   const res = await ItemService.getItem();
//   return { item: res.data };
// };
Home.getStaticProps = async (ctx) => {
  try {
    const res = await axios.get("http://localhost:8080/api/item");
    const item = res.data;
    return { item };
  } catch (error) {
    return { error };
  }
};

export default HomePage;
// export default function getStaticProps(){
// return{
//   props:{
//     data:{
//       recipes:[{title:"Warehouse Management System"}],
//     }
//   }
// }
// }
