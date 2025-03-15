/*
  Warnings:

  - You are about to drop the `token_blacklist` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "token" TEXT;

-- DropTable
DROP TABLE "token_blacklist";
