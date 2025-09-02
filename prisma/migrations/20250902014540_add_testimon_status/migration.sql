-- CreateEnum
CREATE TYPE "public"."TestimonStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "public"."testimon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "public"."TestimonStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "testimon_pkey" PRIMARY KEY ("id")
);
