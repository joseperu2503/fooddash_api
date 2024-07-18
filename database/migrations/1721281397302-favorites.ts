import { MigrationInterface, QueryRunner } from "typeorm";

export class Favorites1721281397302 implements MigrationInterface {
    name = 'Favorites1721281397302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorite_dishes" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "dish_id" integer, "user_id" integer, CONSTRAINT "PK_d2d47cee2f5cc435b4bf4ba27d8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "favorite_restaurants" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "restaurant_id" integer, "user_id" integer, CONSTRAINT "PK_a330ec4fa688ad09dd8c2b6b11c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "favorite_dishes" ADD CONSTRAINT "FK_aa1622b0e3b36f635c7c1fcd6d1" FOREIGN KEY ("dish_id") REFERENCES "dishes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorite_dishes" ADD CONSTRAINT "FK_6b70e98bf31fb7b780f6952ed05" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorite_restaurants" ADD CONSTRAINT "FK_29a77529313254e82b11861203e" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorite_restaurants" ADD CONSTRAINT "FK_0c98259b50d4df4e78652d13fea" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorite_restaurants" DROP CONSTRAINT "FK_0c98259b50d4df4e78652d13fea"`);
        await queryRunner.query(`ALTER TABLE "favorite_restaurants" DROP CONSTRAINT "FK_29a77529313254e82b11861203e"`);
        await queryRunner.query(`ALTER TABLE "favorite_dishes" DROP CONSTRAINT "FK_6b70e98bf31fb7b780f6952ed05"`);
        await queryRunner.query(`ALTER TABLE "favorite_dishes" DROP CONSTRAINT "FK_aa1622b0e3b36f635c7c1fcd6d1"`);
        await queryRunner.query(`DROP TABLE "favorite_restaurants"`);
        await queryRunner.query(`DROP TABLE "favorite_dishes"`);
    }

}
