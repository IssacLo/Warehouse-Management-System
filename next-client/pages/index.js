import HomeComponent from "../component/HomeComponent";
import ItemService from "../service/itemService";
import axios from "axios";

function HomePage({ props, item }) {
  console.log("item", item);
  console.log("props", props);

  return (
    <div>
      <HomeComponent item={item} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await ItemService.getItem();

  return {
    props: {
      item: res.data,
    },
  };
};

export default HomePage;
