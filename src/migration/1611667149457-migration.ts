import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1611667149457 implements MigrationInterface {
    name = 'migration1611667149457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `potato` ADD `updatedAt` timestamp NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `updatedAt`");
    }

}
