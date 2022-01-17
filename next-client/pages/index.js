import HomeComponent from "../component/HomeComponent";
import ItemService from "../service/itemService";

function HomePage() {
  return (
    <div>
      <HomeComponent />
    </div>
  );
}

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
