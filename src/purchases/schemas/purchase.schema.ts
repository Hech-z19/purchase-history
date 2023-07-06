import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PurchaseDocument = HydratedDocument<Purchase>;

@Schema({ versionKey: false, timestamps: true })
export class Purchase {
  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  products: string[];
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);
