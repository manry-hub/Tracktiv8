import AuthStatus from "@/components/auth/auth-status"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestAuthPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Authentication Test</h1>
        <p className="text-muted-foreground">Test your Firebase authentication setup</p>
      </div>

      <AuthStatus />

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Firebase Configuration</CardTitle>
          <CardDescription>Your Firebase project is configured with these settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Project ID:</span>
              <p className="text-muted-foreground">tracktiv8</p>
            </div>
            <div>
              <span className="font-medium">Auth Domain:</span>
              <p className="text-muted-foreground">tracktiv8.firebaseapp.com</p>
            </div>
            <div>
              <span className="font-medium">Storage Bucket:</span>
              <p className="text-muted-foreground">tracktiv8.firebasestorage.app</p>
            </div>
            <div>
              <span className="font-medium">App ID:</span>
              <p className="text-muted-foreground font-mono">1:1045807235395:web:7c3d0a57a40fbbad322ff6</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
