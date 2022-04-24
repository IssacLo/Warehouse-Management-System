import HomeComponent from "../component/Home/HomeComponent";
import ItemService from "../service/itemService";
import axios from "axios";

function HomePage(props) {
  const { item, currentUser, setCurrentUser } = props;
  // console.log(item, "item");

  return (
    <div>
      <HomeComponent item={item} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

// HomePage.getInitialProps = async () => {
//   const res = await ItemService.getItem();
//   return { item: res.data };
// };

// HomePage.getStaticProps = async (ctx) => {
//   try {
//     const res = await axios.get("http://localhost:8080/api/item");
//     const item = res.data;
//     return { item };
//   } catch (error) {
//     return { error };
//   }
// };

// export async function getStaticProps() {
//   const res = await ItemService.getItem();
//   const item = res.data;

//   return {
//     props: { item },
//   };
// }

export const getStaticProps = async () => {
  const res = await ItemService.getItem();

  return {
    props: {
      item: res.data,
    },
  };
};

export default HomePage;
