/*
  Warnings:

  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - Added the required column `passwordHash` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "password",
ADD COLUMN     "passwordHash" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- CreateTable
CREATE TABLE "check_ins" (
    "check_in_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validatedAt" TIMESTAMP(3),

    CONSTRAINT "check_ins_pkey" PRIMARY KEY ("check_in_id")
);

-- CreateTable
CREATE TABLE "gyms" (
    "check_in_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "phone" TEXT,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "gyms_pkey" PRIMARY KEY ("check_in_id")
);
