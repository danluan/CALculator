-- AlterTable
ALTER TABLE "User" ALTER COLUMN "caloriesGoal" DROP NOT NULL;

-- CreateTable
CREATE TABLE "UserMetric" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserMetric_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserMetric_userId_key" ON "UserMetric"("userId");

-- AddForeignKey
ALTER TABLE "UserMetric" ADD CONSTRAINT "UserMetric_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
