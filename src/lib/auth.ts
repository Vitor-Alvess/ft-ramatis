import { supabaseAdmin } from './supabase';

export function extractTokenFromHeader(authHeader: string | null): string | null {
  if (!authHeader) return null;
  const parts = authHeader.split(' ');
  if (parts.length === 2 && parts[0] === 'Bearer') {
    return parts[1];
  }
  return null;
}

export async function verifySupabaseToken(token: string | null) {
  if (!token) return null;

  try {
    const {
      data: { user },
      error,
    } = await supabaseAdmin.auth.admin.getUserById(
      (await supabaseAdmin.auth.getUser()).data.user?.id || ''
    );

    if (error || !user) return null;
    return user;
  } catch (error) {
    return null;
  }
}
