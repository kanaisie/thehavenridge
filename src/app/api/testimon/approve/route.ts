


import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const adminKey = process.env.REVIEWS_ADMIN_KEY;
  const headerKey = req.headers.get("x-admin-key");
  if (!adminKey || headerKey !== adminKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await prisma.testimon.update({
    where: { id: Number(id) },
    data: { status: "APPROVED" },
  });

  revalidatePath("/");
  revalidatePath("/reviews");
  return NextResponse.json({ ok: true });
}
