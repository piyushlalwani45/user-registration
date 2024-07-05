-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "organiZerName" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ground" (
    "id" TEXT NOT NULL,
    "dateOfRegistration" TEXT NOT NULL,
    "organiZerName" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,

    CONSTRAINT "Ground_pkey" PRIMARY KEY ("id")
);
