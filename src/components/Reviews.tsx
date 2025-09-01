import { prisma } from "@/lib/db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

function Stars({ value }: { value: number }) {
  const v = Math.round(value);
  return (
    <div className="flex gap-1" aria-label={`${v} out of 5 stars`}>
      {[0,1,2,3,4].map(i => (
        <FontAwesomeIcon key={i} icon={i < v ? faStarSolid : faStarRegular} className="h-4 w-4 text-brand-600" />
      ))}
    </div>
  );
}

export default async function Reviews() {
  try {
    const rows = await prisma.testimon.findMany({
      where: { status: "APPROVED" },
      orderBy: { createdAt: "desc" },
      take: 12,
    });

    const avg = rows.length ? rows.reduce((a:any, r:any) => a + r.rating, 0) / rows.length : 0;

    return (
      <div className="grid gap-6">
        <div className="flex items-center gap-3">
          <Stars value={Math.round(avg)} />
          {/* <span className="text-sm text-gray-600">
            {rows.length ? `${avg.toFixed(1)} average · ${rows.length} reviews` : "No reviews yet"}
          </span> */}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((r:any) => (
            <article key={r.id} className="rounded-2xl border p-4 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                {r.photoUrl
                  ? <img src={r.photoUrl} alt={`${r.name} photo`} className="h-10 w-10 rounded-full object-cover border" />
                  : <div className="h-10 w-10 rounded-full bg-brand-100 border" />}
                <div className="flex-1">
                  <h3 className="font-medium text-brand-800">{r.name}</h3>
                  <Stars value={r.rating} />
                </div>
                <span className="text-xs text-gray-500">{new Date(r.createdAt).toLocaleDateString()}</span>
              </div>
              <p className="mt-3 text-gray-700">{r.message}</p>
            </article>
          ))}
        </div>
      </div>
    );
  } catch (e) {
    console.error("Reviews query failed:", e);
    return (
      <div className="rounded-xl border p-4 bg-white">
        <p className="text-sm text-gray-600">
          Reviews unavailable. In dev, run <code>npx prisma migrate dev</code>.
        </p>
      </div>
    );
  }
}
