import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:bSYlGlrTczvW7n4N@purchases.ggkczwg.mongodb.net/?retryWrites=true&w=majority',
    ),
    PurchasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
