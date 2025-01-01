import axios from 'axios';
import { NextResponse } from 'next/server';

const allowedCountries = ['DE', 'PK', 'USA']; // Country codes for Germany (DE), Pakistan (PK), and USA (USA)

export async function middleware(req) {
  // Get the user's IP address from headers
 console.log("middleware working");

}
// Middleware configuration to apply to all routes
export const config = {
  matcher: ['/'],
};
