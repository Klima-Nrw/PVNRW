import axios from 'axios';
import { NextResponse } from 'next/server';

const allowedCountries = ['DE', 'PK', 'USA']; // Country codes for Germany (DE) and Pakistan (PK and USA)

// Middleware function to check user's country
export async function middleware(req) {
  const ip = req.headers.get('x-forwarded-for') || req.ip;

  try {
    // Fetch user location using ipinfo.io
    const response = await axios.get(`https://ipinfo.io/${ip}/json`);
    const userCountry = response.data.country;

    // Check if the user's country is allowed
    if (allowedCountries.includes(userCountry)) {
      return NextResponse.next(); // Allow access
    } else {
      // If country is not allowed, return a 403 response
      return new NextResponse('Access denied. This site is only available in Germany and the United States.', {
        status: 403,
      });
    }
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return new NextResponse('Error determining your location.', { status: 500 });
  }
}

// Middleware configuration to apply to specific paths
export const config = {
  matcher: ['/'], // Apply this middleware to the homepage or any route you want
};
