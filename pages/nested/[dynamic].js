import { useRouter } from "next/router";

function NestedPage() {
  const Router = useRouter();
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>{Router.query.dynamic}</p>
    </div>
  );
}

export default NestedPage;
