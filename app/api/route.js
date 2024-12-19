import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://pantip.com/api/community-service/room/get_all?limit=50', {
      method: 'GET',
      credentials: 'include', // หรือ 'same-origin'
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
