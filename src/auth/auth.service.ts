import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

//TODO: 패스워드 암호화 필요
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      console.log(password);
      return result;
    }
    return null;
  }

  async login(username: string, pass: string) {
    const payload = { username: username, sub: pass };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
