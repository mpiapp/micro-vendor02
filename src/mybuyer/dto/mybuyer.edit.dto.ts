import { ApiProperty } from "@nestjs/swagger"

export class MybuyerEditDTO {
    @ApiProperty()
    company_id: string;

    @ApiProperty()
    buyer_id: string;

    @ApiProperty()
    payment_term: string;

    @ApiProperty()
    initial_discount: number;

    @ApiProperty()
    product: object[];

    @ApiProperty()
    status: string;
}