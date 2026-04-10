import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { prisma } from '@/lib/db';
import { ApiResponse, LoginResponse } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { success: false, error: 'Email, password, and name are required' } as ApiResponse<null>,
        { status: 400 }
      );
    }

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError || !authData.user) {
      return NextResponse.json(
        { success: false, error: authError?.message || 'Failed to create user' } as ApiResponse<null>,
        { status: 400 }
      );
    }

    const { data: sessionData } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

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
