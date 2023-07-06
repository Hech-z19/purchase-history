import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PurchaseDto } from 'src/purchases/dtos/purchase.dto';
import { PurchasesService } from 'src/purchases/services/purchases.service';

@ApiTags('Purchases')
@Controller('purchases')
export class PurchasesController {
  constructor(private purchaseService: PurchasesService) {}

  @Post('/add')
  @ApiOperation({ summary: 'Registrar una nueva compra' })
  createPurchase(@Body() payload: PurchaseDto) {
    return this.purchaseService.createPurchase(payload);
  }

  @Get('/all')
  @ApiOperation({ summary: 'Ver todas las compras' })
  getAllPurchases() {
    return this.purchaseService.getAllPurchases();
  }

  @Put('/update/:id')
  @ApiOperation({ summary: 'Editar datos de una compra' })
  updatePurchase(@Param('id') id: string, @Body() payload: PurchaseDto) {
    return this.purchaseService.updatePurchase(id, payload);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Eliminar una compra de la base de datos' })
  deletePurchase(@Param('id') id: string) {
    return this.purchaseService.deletePurchase(id);
  }
}
