/*
  Warnings:

  - Added the required column `gymId` to the `check_ins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `check_ins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "check_ins" ADD COLUMN     "gymId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "gyms"("check_in_id") ON DELETE RESTRICT ON UPDATE CASCADE;
