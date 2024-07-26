import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, members } from '@prisma/client';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  async member(
    memberWhereUniqueInput: Prisma.membersWhereUniqueInput,
  ): Promise<members | null> {
    return this.prisma.members.findUnique({
      where: memberWhereUniqueInput,
    });
  }

  async createMember(data: Prisma.membersCreateInput): Promise<members> {
    console.log(data);
    return this.prisma.members.create({
      data,
    });
  }
}
