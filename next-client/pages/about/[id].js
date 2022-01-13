import { useRouter } from "next/router";

function aboutId() {
  const router = useRouter();
  console.log("router.pathname", router.pathname);
  console.log("route", router.query);

  return <div>aboutId</div>;
}

export default aboutId;
