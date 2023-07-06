import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  IsCurrency,
} from 'class-validator';

export class PurchaseDto {
  @ApiProperty({
    description: 'Título de la compra',
    required: true,
    example: 'Mercado de la semana',
  })
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({
    description: 'Precio total de la compra',
    required: true,
    example: '1.00',
  })
  @IsCurrency()
  @IsNotEmpty()
  readonly price: string;

  @ApiProperty({
    description: 'Lista de productos comprados',
    required: true,
    examples: ['carne', 'pollo', 'pan'],
  })
  @IsArray()
  @IsString({ each: true })
  @ArrayNotEmpty()
  readonly products: string[];
}
