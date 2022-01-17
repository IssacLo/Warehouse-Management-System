import axios from "axios";
import ItemService from "../service/itemService";

// export const getStaticProps = async(() => {
//   const res = await ItemService.getItem();
//   const data = await res.json();

//   return {
//     props: {
//       item: { item: data },
//     },
//   };
// });

const HomeComponent = ({ item, error }) => {
  // console.log(item);
  // console.log(error);
  // console.log("123123");

  return (
    // <ul>
    //   {item.map((item) => {
    //     <li key={item.id}>{item.client}</li>;
    //   })}
    // </ul>
    <div>homeee</div>
  );
};

// HomeComponent.getStaticProps = async (ctx) => {
//   try {
//     const res = await axios.get("http://localhost:8080/api/item");
//     const item = res.data;
//     return { item };
//   } catch (error) {
//     return { error };
//   }
// };

export default HomeComponent;
