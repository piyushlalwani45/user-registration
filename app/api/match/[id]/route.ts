import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { dateOfRegistration, groundName, phoneNo, imageUrl, address } =
    await req.json();
  try {
    const ground = await prisma.ground.update({
      where: { id: String(id) },
      data: { dateOfRegistration, groundName, phoneNo, imageUrl, address },
    });
    return NextResponse.json(ground);
  } catch (error) {
    return NextResponse.json({ error: "User update failed" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const result = await prisma.ground.delete({
      where: { id: String(id) },
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error deleting registration:", error);
    return NextResponse.json({ error: "User delete failed" }, { status: 500 });
  }
}
