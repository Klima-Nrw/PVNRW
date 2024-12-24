import axios from 'axios';
import { NextResponse } from 'next/server';

const allowedCountries = ['DE', 'PK', 'USA']; // Country codes for Germany (DE), Pakistan (PK), and USA (USA)

export async function middleware(req) {
  // Get the user's IP address from headers
  const ip = req.headers.get('x-forwarded-for') || req.ip;

  // If the IP is from localhost, skip geolocation check
  if (ip === '::1' || ip === '127.0.0.1:3000') {
    console.log('Running locally, skipping country check.');
    return NextResponse.next(); // Allow the request to continue
  }

  console.log(`User IP: ${ip}`);

  try {
    // Fetch user location using ipinfo.io
    const response = await axios.get(`https://ipinfo.io/${ip}/json`);
    const userCountry = response.data.country;

    console.log(`User Country: ${userCountry}`);

    // Check if the user's country is allowed
    if (allowedCountries.includes(userCountry)) {
      return NextResponse.next(); // Allow access
    } else {
      // If country is not allowed, return a 403 response
      return new NextResponse('Access denied.\n This site is only available in Germany.', {
        status: 403,
      });
    }
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return new NextResponse('Error determining your location.', { status: 500 });
  }
}

// Middleware configuration to apply to all routes
export const config = {
  matcher: ['/'],
};
