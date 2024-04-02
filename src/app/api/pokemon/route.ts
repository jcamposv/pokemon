import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
  try {
    const { name, email, pokemonName } = await request.json();
    const result = await sql`
    INSERT INTO pokemon (name, email, pokemon_name)
    VALUES (${name}, ${email}, ${pokemonName})
    RETURNING *;
  `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}