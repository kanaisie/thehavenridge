// src/app/api/testimon/upload/route.ts
import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const ok = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!ok.includes(file.type)) {
    return NextResponse.json({ error: "Invalid type" }, { status: 415 });
  }
  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "Max 5MB" }, { status: 413 });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;

  // Try Vercel Blob if token is present
  if (token) {
    try {
      const { put } = await import("@vercel/blob");
      const key = `testimon/${crypto.randomUUID()}-${file.name}`;
      const blob = await put(key, file, { access: "public", token });
      return NextResponse.json({ url: blob.url, storage: "blob" });
    } catch (e) {
      // fall through to local
      console.warn("Blob upload failed, falling back to local:", e);
    }
  }

  // Local fallback: save under /public/uploads
  const buffer = Buffer.from(await file.arrayBuffer());
  const fs = await import("fs/promises");
  const path = await import("path");
  const dir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(dir, { recursive: true });

  const ext = (file.name.match(/\.[a-z0-9]+$/i)?.[0] ?? "").toLowerCase();
  const name = `${crypto.randomUUID()}${ext}`;
  await fs.writeFile(path.join(dir, name), buffer);

  return NextResponse.json({ url: `/uploads/${name}`, storage: "local" });
}

