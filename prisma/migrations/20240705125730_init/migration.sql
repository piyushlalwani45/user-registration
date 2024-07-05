/*
  Warnings:

  - You are about to drop the column `addressId` on the `Ground` table. All the data in the column will be lost.
  - Added the required column `addressLine` to the `Ground` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Ground` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pinCode` to the `Ground` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Ground` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ground" DROP CONSTRAINT "Ground_addressId_fkey";

-- DropIndex
DROP INDEX "Ground_addressId_key";

-- AlterTable
ALTER TABLE "Ground" DROP COLUMN "addressId",
ADD COLUMN     "addressLine" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "pinCode" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;
