import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorModule } from './vendor/vendor.module';
import { VerificationModule } from './verification/verification.module';
import { RoleModule } from './role/role.module';
import { MybuyerModule } from './mybuyer/mybuyer.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { SettingModule } from './setting/setting.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_SRV),
    VendorModule,
    VerificationModule,
    RoleModule,
    MybuyerModule,
    WarehouseModule,
    SettingModule
  ],
})
export class AppModule {}