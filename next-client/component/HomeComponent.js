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
  // console.log(error);
  // console.log("123123");

  return (
    <div>
      {item.map((item) => {
        <div>{item.client}</div>;
      })}
    </div>
  );
};

export default HomeComponent;
