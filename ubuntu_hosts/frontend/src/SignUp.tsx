import { Button } from "./components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"

export function  SignUp() {
  return (
<>
<NavBar />
    <div className="card_con" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign up for an account</CardTitle>
        <CardDescription>
          Enter your email below to create an account
        </CardDescription>
        <CardAction>
          <Link to="/login">
          <Button variant="link">Login</Button> </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" >
          Create Account
        </Button>
        <Button variant="outline" className="w-full">
         Sign up with Google
        </Button>
      </CardFooter>
    </Card>
    </div>
    </>
  )
}
