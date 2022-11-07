import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Company, CompanySchema } from './schema/company.schema';

@Module({

  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),

    CompanyModule,],



  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule { }
