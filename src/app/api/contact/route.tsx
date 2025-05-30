import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  // Save `body.name` and `body.email` to a database here
  console.log('Form data received:', body)

  return NextResponse.json({ message: 'Success' }, { status: 200 })
}