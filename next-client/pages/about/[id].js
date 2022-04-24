import { useRouter } from "next/router";

function AboutId() {
  const router = useRouter();
  console.log("router.pathname", router.pathname);
  console.log("route", router.query);

  return <div>aboutId</div>;
}

export default AboutId;
