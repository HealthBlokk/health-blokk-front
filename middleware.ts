import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Define paths that are protected (require authentication)
  const isProtectedPath = path.startsWith("/dashboard")

  // Get the authentication cookie
  const authCookie = request.cookies.get("auth")?.value
  const isAuthenticated = authCookie === "authenticated"

  // If the path is protected and the user is not authenticated,
  // redirect to the login page
  if (isProtectedPath && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url)
    // Add the original URL as a parameter to redirect after login
    loginUrl.searchParams.set("from", path)
    return NextResponse.redirect(loginUrl)
  }

  // If the user is already authenticated and trying to access login page,
  // redirect to dashboard
  if (path === "/login" && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Continue with the request
  return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ["/dashboard/:path*", "/login"],
}
