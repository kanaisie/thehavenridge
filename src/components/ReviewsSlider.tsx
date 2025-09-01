import { prisma } from "@/lib/db";
import ReviewCarousel, { TestimonItem } from "@/components/ReviewCarousel";

export default async function ReviewsSlider() {
  // Pull approved testimonials and pass JSON-safe data to the client slider
  const rows = await prisma.testimon.findMany({
    where: { status: "APPROVED" },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  const reviews: TestimonItem[] = rows.map((r:any) => ({
    id: r.id,
    name: r.name,
    rating: r.rating,
    message: r.message,
    photoUrl: r.photoUrl || null,
    createdAt: r.createdAt?.toISOString?.() ?? null,
  }));

  return (
    <div className="card-gradient">
      <div className="card-surface p-4 md:p-6">
        <ReviewCarousel reviews={reviews} />
      </div>
    </div>
  );
}
