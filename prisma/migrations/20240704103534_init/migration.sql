/*
  Warnings:

  - You are about to drop the column `organiZerName` on the `Ground` table. All the data in the column will be lost.
  - The `phoneNo` column on the `Ground` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `organiZerName` on the `Match` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[addressId]` on the table `Ground` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addressId` to the `Ground` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groundName` to the `Ground` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `dateOfRegistration` on the `Ground` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `organizerName` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ground" DROP COLUMN "organiZerName",
ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "groundName" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT[],
DROP COLUMN "dateOfRegistration",
ADD COLUMN     "dateOfRegistration" TIMESTAMP(3) NOT NULL,
DROP COLUMN "phoneNo",
ADD COLUMN     "phoneNo" TEXT[];

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "organiZerName",
ADD COLUMN     "organizerName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "addressLine" TEXT NOT NULL,
    "pinCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ground_addressId_key" ON "Ground"("addressId");

-- AddForeignKey
ALTER TABLE "Ground" ADD CONSTRAINT "Ground_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
