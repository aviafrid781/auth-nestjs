import { Document } from 'mongoose';
import { UserRole } from '../model/user.type.enum';
export interface UserI extends Document {

  readonly fname: string;
  readonly lname: string;
  readonly password: string;
  readonly email: string;
  readonly phone: number;
  readonly address: string;
  readonly userType: string
  readonly created_at: string;
  readonly updated_at: string;
}
