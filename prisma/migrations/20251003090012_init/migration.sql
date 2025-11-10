-- CreateEnum
CREATE TYPE "RoleName" AS ENUM ('ADMIN', 'MANAGER', 'USER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('REGIONAL', 'GLOBAL', 'GOVT', 'NON_GOVT', 'PRIVATE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" "RoleName" NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farmer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "phone" TEXT,
    "email" TEXT,
    "location" JSONB,
    "fieldSize" TEXT,
    "cropTypes" JSONB,
    "farmingMethod" TEXT,
    "waterSource" TEXT,
    "marketAccess" TEXT,
    "biggestChallenge" TEXT,
    "localTransport" TEXT,
    "digitalAccess" BOOLEAN,
    "additionalInfo" TEXT,
    "cooperativeId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Farmer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearchInstitution" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "sector" TEXT,
    "status" "Status",
    "numFarmers" INTEGER,
    "locations" JSONB,
    "collaborations" TEXT,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResearchInstitution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NGO" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
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
    "localTransport" TEXT,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NGO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cooperative" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "cropTypes" JSONB,
    "status" "Status",
    "numFarmers" INTEGER,
    "locations" JSONB,
    "fundingSource" TEXT,
    "govtCooperation" BOOLEAN,
    "govtDetails" TEXT,
    "localTransport" TEXT,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cooperative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "status" "Status",
    "totalArea" DOUBLE PRECISION,
    "availableArea" DOUBLE PRECISION,
    "tempControl" TEXT,
    "costPerUnit" TEXT,
    "localTransport" TEXT,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "capability" TEXT,
    "productionCapacity" TEXT,
    "availability" TEXT,
    "maintenanceTime" TEXT,
    "materialSource" TEXT,
    "personnel" TEXT,
    "manufactureTime" TEXT,
    "quotationTimes" TEXT,
    "workingHours" TEXT,
    "deliveryTime" TEXT,
    "status" "Status",
    "localTransport" TEXT,
    "longTermPartner" BOOLEAN,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "industry" TEXT,
    "deliveryTime" TEXT,
    "restockingTime" TEXT,
    "certifications" TEXT,
    "status" "Status",
    "localTransport" TEXT,
    "longTermPartner" BOOLEAN,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "investorType" TEXT,
    "sectors" JSONB,
    "ticketSize" TEXT,
    "locations" JSONB,
    "message" TEXT,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Investor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supermarket" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "numShops" INTEGER,
    "regions" JSONB,
    "status" "Status",
    "numFarmers" INTEGER,
    "procurementModel" TEXT,
    "locations" JSONB,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supermarket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Distributor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "industry" TEXT,
    "deliveryTime" TEXT,
    "distributionReach" TEXT,
    "status" "Status",
    "localTransport" TEXT,
    "longTermPartner" BOOLEAN,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Distributor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logistics" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "vehicles" JSONB,
    "deliveryTime" TEXT,
    "routeCoverage" TEXT,
    "status" "Status",
    "longTermPartner" BOOLEAN,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Logistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GovernmentBody" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "deptType" TEXT,
    "schemes" JSONB,
    "locations" JSONB,
    "programs" TEXT,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GovernmentBody_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "bankType" TEXT,
    "products" TEXT,
    "locations" JSONB,
    "interestRates" TEXT,
    "partnerships" TEXT,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExportHouse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "products" TEXT,
    "targetCountries" JSONB,
    "certifications" TEXT,
    "status" "Status",
    "delivery" TEXT,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExportHouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechProvider" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "techFocus" TEXT,
    "productsServices" TEXT,
    "deliveryModel" TEXT,
    "status" "Status",
    "support" TEXT,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TechProvider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingCenter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "focus" TEXT,
    "numFarmers" INTEGER,
    "locations" JSONB,
    "certification" BOOLEAN,
    "govtCooperation" BOOLEAN,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingCenter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsuranceProvider" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "products" TEXT,
    "premiumModels" TEXT,
    "claimTime" TEXT,
    "status" "Status",
    "govtPartnerships" TEXT,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InsuranceProvider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RuralEntrepreneur" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "responsible" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "location" JSONB,
    "serviceType" TEXT,
    "cost" TEXT,
    "availability" TEXT,
    "willingnessToPartner" BOOLEAN,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RuralEntrepreneur_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Token_accessToken_key" ON "Token"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "Token_refreshToken_key" ON "Token"("refreshToken");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "Farmer_cooperativeId_fkey" FOREIGN KEY ("cooperativeId") REFERENCES "Cooperative"("id") ON DELETE SET NULL ON UPDATE CASCADE;
