/*
  Warnings:

  - The values [MANAGER,USER] on the enum `RoleName` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `bankType` on the `Bank` table. All the data in the column will be lost.
  - You are about to drop the column `govtDetails` on the `Cooperative` table. All the data in the column will be lost.
  - You are about to drop the column `localTransport` on the `Cooperative` table. All the data in the column will be lost.
  - You are about to drop the column `locations` on the `Cooperative` table. All the data in the column will be lost.
  - You are about to drop the column `distributionReach` on the `Distributor` table. All the data in the column will be lost.
  - You are about to drop the column `localTransport` on the `Distributor` table. All the data in the column will be lost.
  - You are about to drop the column `localTransport` on the `Farmer` table. All the data in the column will be lost.
  - You are about to drop the column `govtPartnerships` on the `InsuranceProvider` table. All the data in the column will be lost.
  - You are about to drop the column `investorType` on the `Investor` table. All the data in the column will be lost.
  - You are about to drop the column `locations` on the `Investor` table. All the data in the column will be lost.
  - You are about to drop the column `localTransport` on the `Manufacturer` table. All the data in the column will be lost.
  - You are about to drop the column `maintenanceTime` on the `Manufacturer` table. All the data in the column will be lost.
  - You are about to drop the column `productionCapacity` on the `Manufacturer` table. All the data in the column will be lost.
  - You are about to drop the column `willingnessToPartner` on the `RuralEntrepreneur` table. All the data in the column will be lost.
  - You are about to drop the column `locations` on the `Supermarket` table. All the data in the column will be lost.
  - You are about to drop the column `localTransport` on the `Supplier` table. All the data in the column will be lost.
  - You are about to drop the column `productsServices` on the `TechProvider` table. All the data in the column will be lost.
  - You are about to drop the column `techFocus` on the `TechProvider` table. All the data in the column will be lost.
  - You are about to drop the column `costPerUnit` on the `Warehouse` table. All the data in the column will be lost.
  - You are about to drop the column `localTransport` on the `Warehouse` table. All the data in the column will be lost.
  - You are about to drop the `NGO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResearchInstitution` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Farmer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Investor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Manufacturer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Supplier` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Token` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Farmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Investor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Manufacturer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RoleName_new" AS ENUM ('ADMIN', 'FARMER', 'ORGANIZATION', 'INVESTOR', 'SUPPLIER', 'MANUFACTURER');
ALTER TABLE "Role" ALTER COLUMN "name" TYPE "RoleName_new" USING ("name"::text::"RoleName_new");
ALTER TYPE "RoleName" RENAME TO "RoleName_old";
ALTER TYPE "RoleName_new" RENAME TO "RoleName";
DROP TYPE "public"."RoleName_old";
COMMIT;

-- DropIndex
DROP INDEX "public"."User_email_idx";

-- AlterTable
ALTER TABLE "Bank" DROP COLUMN "bankType",
ADD COLUMN     "type" TEXT;

-- AlterTable
ALTER TABLE "Cooperative" DROP COLUMN "govtDetails",
DROP COLUMN "localTransport",
DROP COLUMN "locations",
ADD COLUMN     "location" TEXT,
ADD COLUMN     "transport" TEXT;

-- AlterTable
ALTER TABLE "Distributor" DROP COLUMN "distributionReach",
DROP COLUMN "localTransport",
ADD COLUMN     "reach" TEXT,
ADD COLUMN     "transport" TEXT;

-- AlterTable
ALTER TABLE "Farmer" DROP COLUMN "localTransport",
ADD COLUMN     "transport" TEXT,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "location" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "InsuranceProvider" DROP COLUMN "govtPartnerships",
ADD COLUMN     "govtSchemes" TEXT;

-- AlterTable
ALTER TABLE "Investor" DROP COLUMN "investorType",
DROP COLUMN "locations",
ADD COLUMN     "location" TEXT,
ADD COLUMN     "type" TEXT,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Manufacturer" DROP COLUMN "localTransport",
DROP COLUMN "maintenanceTime",
DROP COLUMN "productionCapacity",
ADD COLUMN     "maintenance" TEXT,
ADD COLUMN     "productionCap" TEXT,
ADD COLUMN     "transport" TEXT,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RuralEntrepreneur" DROP COLUMN "willingnessToPartner",
ADD COLUMN     "partnerWilling" BOOLEAN,
ALTER COLUMN "location" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Supermarket" DROP COLUMN "locations",
ADD COLUMN     "location" TEXT;

-- AlterTable
ALTER TABLE "Supplier" DROP COLUMN "localTransport",
ADD COLUMN     "transport" TEXT,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TechProvider" DROP COLUMN "productsServices",
DROP COLUMN "techFocus",
ADD COLUMN     "focus" TEXT,
ADD COLUMN     "services" TEXT;

-- AlterTable
ALTER TABLE "Warehouse" DROP COLUMN "costPerUnit",
DROP COLUMN "localTransport",
ADD COLUMN     "cost" TEXT,
ADD COLUMN     "transport" TEXT;

-- DropTable
DROP TABLE "public"."NGO";

-- DropTable
DROP TABLE "public"."ResearchInstitution";

-- CreateTable
CREATE TABLE "OrganizationProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "sector" TEXT,
    "status" "Status",
    "numFarmers" INTEGER,
    "locations" JSONB,
    "fundingSource" TEXT,
    "govtCooperation" BOOLEAN,
    "govtDetails" TEXT,
    "transport" TEXT,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrganizationProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationProfile_userId_key" ON "OrganizationProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_userId_key" ON "Farmer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Investor_userId_key" ON "Investor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer_userId_key" ON "Manufacturer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_userId_key" ON "Supplier"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Token_userId_key" ON "Token"("userId");

-- AddForeignKey
ALTER TABLE "OrganizationProfile" ADD CONSTRAINT "OrganizationProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "Farmer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investor" ADD CONSTRAINT "Investor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manufacturer" ADD CONSTRAINT "Manufacturer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
