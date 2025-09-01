import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const { name, rating, message } = await req.json();

    if (!name || !message || typeof rating !== "number")
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });

    if (rating < 1 || rating > 5)
      return NextResponse.json({ error: "Rating must be 1-5" }, { status: 400 });

    // Basic length guards (light spam control)
    if (String(name).length > 80 || String(message).length > 1000)
      return NextResponse.json({ error: "Too long" }, { status: 400 });

    await prisma.review.create({
      data: { name: String(name), rating: Math.round(rating), message: String(message) },
    });

    // Update cached pages that show reviews
    revalidatePath("/");
    revalidatePath("/reviews");

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Failed to submit review" }, { status: 500 });
  }
}

export async function GET() {
  // Public list (approved only)
  const reviews = await prisma.review.findMany({
    where: { status: "APPROVED" },
    orderBy: { createdAt: "desc" },
    take: 20,
  });
  return NextResponse.json({ reviews });
}
