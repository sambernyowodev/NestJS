import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetUsersPramDto {
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?: number;
}