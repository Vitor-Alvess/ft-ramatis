import { findAllItems, prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const items = await findAllItems();
    return NextResponse.json(items);
}