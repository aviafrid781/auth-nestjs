import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/user/get-user.decorator';
import { UserI } from 'src/user/interfaces/user.interface';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyDocument } from './schema/company.schema';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService,


    ) { }


    @Post()
    @UseGuards(AuthGuard('jwt'))
    async createCompany(@Body() CreateCompanyDto: CreateCompanyDto, @GetUser() user: UserI) {
       // const { email } = createUserDto;

        return await this.companyService.createCompany(CreateCompanyDto.id, CreateCompanyDto.name, CreateCompanyDto.adminUser, CreateCompanyDto.email, CreateCompanyDto.phone, CreateCompanyDto.address, user)

    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return this.companyService.find(id);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body('') companyDocument: CompanyDocument) {
        return this.companyService.update(id, companyDocument);
    }

    @Post('test')
    @UseGuards(AuthGuard('jwt'))
    test(@Req() req, @GetUser() user: UserI) {
        console.log(req);
        return { message: "User is authenticated", user: user }
    }




}
