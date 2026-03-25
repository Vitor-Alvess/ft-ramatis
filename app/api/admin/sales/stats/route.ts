import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/middleware';
import { getSalesStats } from '@/lib/db';
import { ApiResponse } from '@/lib/types';

export interface SalesStats {
  totalSales: number;
  totalRevenue: number;
  completedSales: number;
  pendingSales: number;
  cancelledSales: number;
  averageOrderValue: number;
}

const GET = withAuth(async (req: NextRequest) => {
  try {
    const userId = (req as any).userId;
    const stats = await getSalesStats(userId);

    const response: ApiResponse<SalesStats> = {
      success: true,
      data: stats as SalesStats,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Get stats error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' } as ApiResponse<null>,
      { status: 500 }
    );
  }
});

export { GET };
