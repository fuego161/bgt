-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'PUBLISHER', 'DESIGNER');

-- CreateEnum
CREATE TYPE "State" AS ENUM ('OWNED', 'PREVIOUSLY_OWNED', 'WANT_PLAY', 'WANT_BUY');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "passwordUpdatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoardGame" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" VARCHAR(191) NOT NULL,
    "publisherName" TEXT NOT NULL,
    "designerName" TEXT NOT NULL,
    "minPlayers" INTEGER NOT NULL,
    "maxPlayers" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "BoardGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBoardGame" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "boardGameId" INTEGER NOT NULL,
    "rating" INTEGER,
    "status" "State",
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "UserBoardGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoardGameCategory" (
    "categoryId" INTEGER NOT NULL,
    "boardGameId" INTEGER NOT NULL,

    CONSTRAINT "BoardGameCategory_pkey" PRIMARY KEY ("categoryId","boardGameId")
);

-- CreateTable
CREATE TABLE "Mechanic" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Mechanic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoardGameMechanic" (
    "mechanicId" INTEGER NOT NULL,
    "boardGameId" INTEGER NOT NULL,

    CONSTRAINT "BoardGameMechanic_pkey" PRIMARY KEY ("mechanicId","boardGameId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BoardGame_slug_key" ON "BoardGame"("slug");

-- CreateIndex
CREATE INDEX "BoardGame_title_idx" ON "BoardGame"("title");

-- CreateIndex
CREATE INDEX "UserBoardGame_status_idx" ON "UserBoardGame"("status");

-- CreateIndex
CREATE INDEX "UserBoardGame_rating_idx" ON "UserBoardGame"("rating");

-- CreateIndex
CREATE UNIQUE INDEX "UserBoardGame_userId_boardGameId_key" ON "UserBoardGame"("userId", "boardGameId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_title_key" ON "Category"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Mechanic_title_key" ON "Mechanic"("title");

-- AddForeignKey
ALTER TABLE "UserBoardGame" ADD CONSTRAINT "UserBoardGame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBoardGame" ADD CONSTRAINT "UserBoardGame_boardGameId_fkey" FOREIGN KEY ("boardGameId") REFERENCES "BoardGame"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardGameCategory" ADD CONSTRAINT "BoardGameCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardGameCategory" ADD CONSTRAINT "BoardGameCategory_boardGameId_fkey" FOREIGN KEY ("boardGameId") REFERENCES "BoardGame"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardGameMechanic" ADD CONSTRAINT "BoardGameMechanic_mechanicId_fkey" FOREIGN KEY ("mechanicId") REFERENCES "Mechanic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardGameMechanic" ADD CONSTRAINT "BoardGameMechanic_boardGameId_fkey" FOREIGN KEY ("boardGameId") REFERENCES "BoardGame"("id") ON DELETE CASCADE ON UPDATE CASCADE;
