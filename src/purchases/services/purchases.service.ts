import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Purchase } from 'src/purchases/schemas/purchase.schema';
import { PurchaseDto } from 'src/purchases/dtos/purchase.dto';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectModel(Purchase.name) private purchaseModel: Model<Purchase>,
  ) {}

  async createPurchase(purchase: PurchaseDto): Promise<Purchase> {
    const createdPurchase = new this.purchaseModel(purchase);

    return await createdPurchase.save();
  }

  async getAllPurchases(): Promise<Purchase[]> {
    return this.purchaseModel.find().exec();
  }

  async updatePurchase(id: string, purchase: PurchaseDto): Promise<Purchase> {
    const fieldsToUpdate: any = {};

    if (purchase.title !== undefined) {
      fieldsToUpdate.title = purchase.title;
    }

    if (purchase.price !== undefined) {
      fieldsToUpdate.price = purchase.price;
    }

    if (purchase.products !== undefined) {
      fieldsToUpdate.products = purchase.products;
    }

    const updatedPurchase = await this.purchaseModel.findOneAndUpdate(
      { _id: id },
      { $set: fieldsToUpdate },
      { new: true },
    );

    return updatedPurchase;
  }

  async deletePurchase(id: string): Promise<string> {
    const deletedPurchase = await this.purchaseModel.findOneAndDelete({
      _id: id,
    });

    if (deletedPurchase) {
      return 'Success';
    } else {
      return 'Not Deleted';
    }
  }
}
