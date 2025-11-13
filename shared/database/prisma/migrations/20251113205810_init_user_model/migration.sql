/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `passwordHash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Bank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cooperative` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Distributor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExportHouse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Farmer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GovernmentBody` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InsuranceProvider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Investor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Logistics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Manufacturer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrganizationProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RuralEntrepreneur` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Supermarket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Supplier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TechProvider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TrainingCenter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Warehouse` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('FARMER', 'ORGANIZATION', 'ADMIN');

-- DropForeignKey
ALTER TABLE "public"."Farmer" DROP CONSTRAINT "Farmer_cooperativeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Farmer" DROP CONSTRAINT "Farmer_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Investor" DROP CONSTRAINT "Investor_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Manufacturer" DROP CONSTRAINT "Manufacturer_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OrganizationProfile" DROP CONSTRAINT "OrganizationProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Supplier" DROP CONSTRAINT "Supplier_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Token" DROP CONSTRAINT "Token_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_roleId_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "passwordHash",
DROP COLUMN "phone",
DROP COLUMN "roleId",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "UserRole" NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "public"."Bank";

-- DropTable
DROP TABLE "public"."Cooperative";

-- DropTable
DROP TABLE "public"."Distributor";

-- DropTable
DROP TABLE "public"."ExportHouse";

-- DropTable
DROP TABLE "public"."Farmer";

-- DropTable
DROP TABLE "public"."GovernmentBody";

-- DropTable
DROP TABLE "public"."InsuranceProvider";

-- DropTable
DROP TABLE "public"."Investor";

-- DropTable
DROP TABLE "public"."Logistics";

-- DropTable
DROP TABLE "public"."Manufacturer";

-- DropTable
DROP TABLE "public"."OrganizationProfile";

-- DropTable
DROP TABLE "public"."Role";

-- DropTable
DROP TABLE "public"."RuralEntrepreneur";

-- DropTable
DROP TABLE "public"."Supermarket";

-- DropTable
DROP TABLE "public"."Supplier";

-- DropTable
DROP TABLE "public"."TechProvider";

-- DropTable
DROP TABLE "public"."Token";

-- DropTable
DROP TABLE "public"."TrainingCenter";

-- DropTable
DROP TABLE "public"."Warehouse";

-- DropEnum
DROP TYPE "public"."RoleName";

-- DropEnum
DROP TYPE "public"."Status";
