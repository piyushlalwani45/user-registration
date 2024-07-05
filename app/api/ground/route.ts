import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const grounds = await prisma.ground.findMany();
  return NextResponse.json(grounds);
}

export async function POST(req: Request) {
  const { dateOfRegistration, groundName, phoneNo, imageUrl, addressLine } =
    await req.json();

  try {
    const ground = await prisma.ground.create({
      data: { dateOfRegistration, groundName, phoneNo, imageUrl, add },
    });
    return NextResponse.json(ground, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Ground creation failed" },
      { status: 500 }
    );
  }
}
