import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/middleware';
import { createSale, getSalesByAdminId } from '@/lib/db';
import { ApiResponse, CreateSaleRequest, Sale } from '@/lib/types';

const GET = withAuth(async (req: NextRequest) => {
  try {
    const userId = (req as any).userId;
    const sales = await getSalesByAdminId(userId);

    const response: ApiResponse<Sale[]> = {
      success: true,
      data: sales as Sale[],
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Get sales error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' } as ApiResponse<null>,
      { status: 500 }
    );
  }
});

const POST = withAuth(async (req: NextRequest) => {
  try {
    const userId = (req as any).userId;
    const body: CreateSaleRequest = await req.json();
    const { productName, quantity, price } = body;

    if (!productName || !quantity || !price) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' } as ApiResponse<null>,
        { status: 400 }
      );
    }

    if (quantity <= 0 || price <= 0) {
      return NextResponse.json(
        { success: false, error: 'Quantity and price must be greater than 0' } as ApiResponse<null>,
        { status: 400 }
      );
    }

    const sale = await createSale(userId, productName, quantity, price);

    const response: ApiResponse<Sale> = {
      success: true,
      data: sale as Sale,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Create sale error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' } as ApiResponse<null>,
      { status: 500 }
    );
  }
});

export { GET, POST };
