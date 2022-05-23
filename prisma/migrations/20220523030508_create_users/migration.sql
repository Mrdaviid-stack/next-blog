-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_uuid" TEXT NOT NULL,
    "user_lastname" TEXT NOT NULL,
    "user_firstname" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_username" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "user_createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_uuid_key" ON "users"("user_uuid");
