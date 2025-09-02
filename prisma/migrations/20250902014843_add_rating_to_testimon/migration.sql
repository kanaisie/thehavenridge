/*
  Warnings:

  - Added the required column `rating` to the `testimon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."testimon" ADD COLUMN     "photoUrl" TEXT,
ADD COLUMN     "rating" INTEGER NOT NULL;
