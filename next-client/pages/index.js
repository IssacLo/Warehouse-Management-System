import HomeComponent from "../component/Home/HomeComponent";
import ItemService from "../service/itemService";
import axios from "axios";

<<<<<<< HEAD
function HomePage(props) {
  const { item, currentUser, setCurrentUser } = props;
  // console.log(item, "item");

  return (
    <div>
      <HomeComponent item={item} currentUser={currentUser} setCurrentUser={setCurrentUser} />
=======
function HomePage({ props, item }) {
  console.log("item", item);
  console.log("props", props);

  return (
    <div>
      <HomeComponent item={item} />
>>>>>>> 556f3498685ec5e3163d818e96b207c5ded958d1
    </div>
  );
}

<<<<<<< HEAD
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

=======
export const getStaticProps = async () => {
  const res = await ItemService.getItem();

  return {
    props: {
      item: res.data,
    },
  };
};

>>>>>>> 556f3498685ec5e3163d818e96b207c5ded958d1
export default HomePage;
