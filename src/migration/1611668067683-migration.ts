import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1611668067683 implements MigrationInterface {
    name = 'migration1611668067683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `potato` ADD `createdAt` timestamp NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `createdAt`");
    }

}
