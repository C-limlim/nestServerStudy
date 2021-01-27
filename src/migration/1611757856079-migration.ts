import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1611757856079 implements MigrationInterface {
    name = 'migration1611757856079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `question` (`id` int NOT NULL AUTO_INCREMENT, `ques` varchar(255) NOT NULL, `ans` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `ans`");
        await queryRunner.query("ALTER TABLE `potato` DROP COLUMN `ques`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `potato` ADD `ques` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `potato` ADD `ans` varchar(255) NOT NULL");
        await queryRunner.query("DROP TABLE `question`");
    }

}
