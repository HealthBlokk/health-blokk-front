"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Check if the user is authenticated
export async function isAuthenticated() {
  const cookieStore = cookies()
  return cookieStore.get("auth")?.value === "authenticated"
}

// Logout function (for server components)
export async function logout() {
  cookies().set("auth", "", {
    expires: new Date(0),
    path: "/",
  })
  redirect("/login")
}

// Get authentication status
export async function getAuthStatus() {
  const isAuth = await isAuthenticated()
  return { isAuthenticated: isAuth }
}
