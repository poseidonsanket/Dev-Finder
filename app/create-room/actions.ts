"use server";

import { getSession } from "@/lib/auth";
import { db } from "../db";
import { Room, room } from "../db/schema";
import { revalidatePath } from "next/cache";
import { createRoom } from "../data-access/room";

export async function createRoomAction(roomData: Omit<Room, "id" | "userId">) {
  const session = await getSession();
  console.log(session);
  if (!session) {
    throw new Error("you must be logged in to create this room");
  }

  const room = await createRoom(roomData, session.user.id);

  revalidatePath("/browse");

  return room;
}
