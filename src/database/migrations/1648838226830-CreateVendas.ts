import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVendas1648838226830 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "vendas",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "quantidade",
            type: "varchar",
          },
          {
            name: "totalBruto",
            type: "varchar",
          },
          {
            name: "desconto",
            type: "varchar",
          },
          {
            name: "valorTotal",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
