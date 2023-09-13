import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1694598248872 implements MigrationInterface {
    name = 'Initial1694598248872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "authors" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "chapters" integer NOT NULL, "pages" integer NOT NULL, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books_authors" ("book_id" integer NOT NULL, "author_id" integer NOT NULL, CONSTRAINT "PK_ec21802e4c7a8a22887600d7709" PRIMARY KEY ("book_id", "author_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bf3c609a7c91bc032b805bbe14" ON "books_authors" ("book_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_738bc3574491eddb6cdd06896c" ON "books_authors" ("author_id") `);
        await queryRunner.query(`ALTER TABLE "books_authors" ADD CONSTRAINT "FK_bf3c609a7c91bc032b805bbe14d" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "books_authors" ADD CONSTRAINT "FK_738bc3574491eddb6cdd06896c6" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books_authors" DROP CONSTRAINT "FK_738bc3574491eddb6cdd06896c6"`);
        await queryRunner.query(`ALTER TABLE "books_authors" DROP CONSTRAINT "FK_bf3c609a7c91bc032b805bbe14d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_738bc3574491eddb6cdd06896c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bf3c609a7c91bc032b805bbe14"`);
        await queryRunner.query(`DROP TABLE "books_authors"`);
        await queryRunner.query(`DROP TABLE "books"`);
        await queryRunner.query(`DROP TABLE "authors"`);
    }

}
