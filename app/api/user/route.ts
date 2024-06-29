import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const { firstName, lastName, email, phoneNo } = await req.json();
  try {
    const user = await prisma.user.create({
      data: { firstName, lastName, email, phoneNo },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
  }
}
