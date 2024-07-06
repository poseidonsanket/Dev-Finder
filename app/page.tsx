import { db } from "./db";

export default async function Home() {
  const items = await db.query.room.findMany();
  return (
    <div>
      {items.map((i) => (
        <div key={i.id}>{i.name}</div>
      ))}
      Hi
    </div>
  );
}
