import { NextRequest, NextResponse } from 'next/server';
import { extractTokenFromHeader } from './auth';
import { supabaseAdmin } from './supabase';

export function withAuth(
  handler: (req: NextRequest, context?: any) => Promise<NextResponse>
) {
  return async (req: NextRequest, context?: any) => {
    const authHeader = req.headers.get('authorization');
    const token = extractTokenFromHeader(authHeader);

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: No token provided' },
        { status: 401 }
      );
    }

    try {
      const {
        data: { user },
        error,
      } = await supabaseAdmin.auth.admin.getUserById(token);

      if (error || !user) {
        return NextResponse.json(
          { success: false, error: 'Unauthorized: Invalid token' },
          { status: 401 }
        );
      }

      // Attach user info to the request
      (req as any).user = user;
      (req as any).userId = user.id;

      return handler(req, context);
    } catch (err) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Token verification failed' },
        { status: 401 }
      );
    }
  };
}
