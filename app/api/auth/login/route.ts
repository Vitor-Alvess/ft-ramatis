import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { prisma } from '@/lib/db';
import { LoginRequest, ApiResponse, LoginResponse } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body: LoginRequest = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' } as ApiResponse<null>,
        { status: 400 }
      );
    }

    const { data: sessionData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError || !sessionData.user) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' } as ApiResponse<null>,
        { status: 401 }
      );
    }

    const response: ApiResponse<LoginResponse> = {
      success: true,
      data: {
        token: sessionData.session?.access_token || ''
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' } as ApiResponse<null>,
      { status: 500 }
    );
  }
}
