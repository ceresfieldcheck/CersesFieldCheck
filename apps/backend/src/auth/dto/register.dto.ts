import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator';
import { UserRole } from '../user-role.enum';

export class RegisterDto {
  @IsEmail({}, { message: 'Please enter a valid email address.' })
  email: string;

  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsString()
  password: string;

  @IsEnum(UserRole, {
    message: 'Invalid role selected. Must be either FARMER or ORGANIZATION.',
  })
  role: UserRole;
}
