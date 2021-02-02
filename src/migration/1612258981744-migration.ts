import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1612258981744 implements MigrationInterface {
    name = 'migration1612258981744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `potato` (`id` int NOT NULL AUTO_INCREMENT, `context` varchar(255) NOT NULL, `randomcode` varchar(255) NOT NULL, `status` varchar(255) NOT NULL DEFAULT 'reported', `ip` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `potato`");
    }

}
