-- DropIndex
DROP INDEX "public"."Token_userId_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phone" TEXT;
