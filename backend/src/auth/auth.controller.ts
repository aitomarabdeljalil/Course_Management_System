import { Controller, Post, Body, Req, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    return this.authService.login(loginDto);
  }

  @Post('logout')
  async logout(@Req() req: Request) {
    return this.authService.logout(req);
  }
}
