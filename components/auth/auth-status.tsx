"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function AuthStatus() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Checking Authentication...
          </CardTitle>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {user ? (
            <>
              <CheckCircle className="h-5 w-5 text-green-500" />
              Authentication Status
            </>
          ) : (
            <>
              <XCircle className="h-5 w-5 text-red-500" />
              Authentication Status
            </>
          )}
        </CardTitle>
        <CardDescription>Current Firebase authentication state</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Status:</span>
          <Badge variant={user ? "default" : "secondary"}>{user ? "Authenticated" : "Not Authenticated"}</Badge>
        </div>

        {user && (
          <>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Email:</span>
              <span className="text-sm text-muted-foreground">{user.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">User ID:</span>
              <span className="text-sm text-muted-foreground font-mono">{user.uid.substring(0, 8)}...</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Email Verified:</span>
              <Badge variant={user.emailVerified ? "default" : "outline"}>{user.emailVerified ? "Yes" : "No"}</Badge>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
