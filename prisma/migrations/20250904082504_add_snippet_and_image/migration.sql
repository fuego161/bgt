/*
  Warnings:

  - Added the required column `imagePath` to the `BoardGame` table without a default value. This is not possible if the table is not empty.
  - Added the required column `snippet` to the `BoardGame` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."BoardGame" ADD COLUMN     "imagePath" TEXT NOT NULL,
ADD COLUMN     "snippet" TEXT NOT NULL;
