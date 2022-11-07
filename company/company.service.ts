import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserI } from 'src/user/interfaces/user.interface';
import { Company, CompanyDocument } from './schema/company.schema';
@Injectable()
export class CompanyService {
    // [x: string]: any;
    constructor(@InjectModel(Company.name)
    private companyModel: Model<Document>,


    ) { }

    async createCompany(id: number, name: string, adminUser: string, email: string, phone: number, address: string, user: UserI) {
        console.log(user);
        //const user1 = await this.userModel.findOne({user.userType  });

        if (user.userType == 'admin') {
            const company = {
                id: id,
                name: name,
                adminUser: adminUser,
                email: email,
                phone: phone,
                address: address,
            }
            const createdCompany = await this.companyModel.create(company)
            // createdUser.save();
            return createdCompany;
        }
        else {
            throw new UnauthorizedException('Sorry!! You are not admin');
        }

    }

    async find(id: string) {
        return await this.companyModel.findById(id);
    }
    async update(id: string, companyDocument: CompanyDocument) {
        return this.companyModel.findByIdAndUpdate(id, companyDocument);
    }


}
