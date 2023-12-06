/*
  Warnings:

  - You are about to drop the `db_collection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `db_collection`;

-- CreateTable
CREATE TABLE `tb_Collection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anime_mal_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `anime_image` VARCHAR(191) NULL,
    `anime_title` VARCHAR(191) NULL,
    `anime_genres` VARCHAR(191) NULL,

    UNIQUE INDEX `tb_Collection_user_email_anime_mal_id_key`(`user_email`, `anime_mal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
