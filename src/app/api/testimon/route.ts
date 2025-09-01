import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const runtime = "nodejs"; // Prisma must run on Node, not Edge

export async function POST(req: Request) {
  try {
    const { name, rating, message, photoUrl } = await req.json();

    if (!name || !message || typeof rating !== "number") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be 1–5" }, { status: 400 });
    }
    if (String(name).length > 80 || String(message).length > 1000) {
      return NextResponse.json({ error: "Too long" }, { status: 400 });
    }

    await prisma.testimon.create({
      data: {
        name: String(name),
        rating: Math.round(rating),
        message: String(message),
        photoUrl: photoUrl ? String(photoUrl) : null,
      },
    });

    revalidatePath("/");
    revalidatePath("/reviews");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}

export async function GET() {
  const rows = await prisma.testimon.findMany({
    where: { status: "APPROVED" },
    orderBy: { createdAt: "desc" },
    take: 20,
  });
  return NextResponse.json({ reviews: rows });
}
