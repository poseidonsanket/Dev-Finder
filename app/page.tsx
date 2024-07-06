import { db } from "./db";

export default async function Home() {
  // const items = await db.query.testing.findMany();
  return (
    <div>
      {/* {items.map((i) => (
        <div key={i.id}>{i.name}</div>
      ))} */}
      Hi
    </div>
  );
}
