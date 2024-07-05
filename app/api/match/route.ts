import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { date, organizerName, phoneNo } = await req.json();
    try {
      const user = await prisma.match.create({
        data: { date, organizerName,phoneNo },
      });
      return NextResponse.json(user, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
    }
  }