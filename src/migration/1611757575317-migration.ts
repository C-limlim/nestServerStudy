import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1611757575317 implements MigrationInterface {
    name = 'migration1611757575317'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `createdAt`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `grade`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `isSold`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `price`");
        await queryRunner.query("ALTER TABLE `potato` ADD `context` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `potato` ADD `price` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `potato` ADD `randomcode` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `potato` ADD `reportedAt` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `potato` ADD `ip` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `potato` ADD `ques` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `potato` ADD `ans` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `ans`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `ques`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `ip`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `reportedAt`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `randomcode`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `price`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `context`");
        await queryRunner.query("ALTER TABLE `potato` ADD `price` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `potato` ADD `updatedAt` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `potato` ADD `name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `potato` ADD `isSold` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `potato` ADD `grade` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `potato` ADD `createdAt` timestamp NOT NULL");
    }

}
