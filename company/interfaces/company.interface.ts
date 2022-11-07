import { Document } from 'mongoose';
export interface CompanyI extends Document {
    readonly id: string;
    readonly name: string;
    readonly adminUser: string;
    readonly email: string;
    readonly phone: number;
    readonly address: string;
    readonly created_at: string;
    readonly updated_at: string;
}