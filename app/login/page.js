"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, LogIn } from "lucide-react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function LoginPage() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const handleLogin = () => {
    if (!isConnected) {
      connect({ connector: connectors[0] });
    }
  };

  if (isConnected) {
    router.push("/member");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="hidden md:block md:w-1/2 bg-gray-200 relative">
        <Image src="/login-image.jpg" alt="Kuriftu Resort" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
          <div className="p-12 text-white max-w-md">
            <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
            <p className="text-lg mb-6">
              Log in to access your Kuriftu Resorts membership account and check your loyalty coins balance.
            </p>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Member Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Track your loyalty coins</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Redeem exclusive rewards</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Access member-only offers</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Manage your reservations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Image src="/logo.png" alt="Kuriftu Resorts Logo" width={80} height={80} className="w-auto h-16" />
            </div>
            <CardTitle className="text-2xl font-bold">Log in to Your Account</CardTitle>
            <CardDescription>Connect your wallet to access your membership dashboard</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button
              onClick={handleLogin}
              className="bg-kuriftu-green hover:bg-green-600 text-white flex items-center"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Connect with MetaMask
            </Button>
          </CardContent>
          <div className="text-center w-full pb-6">
            <p className="text-gray-600 text-sm">
              Don’t have an account?{" "}
              <Link href="/register" className="text-kuriftu-green hover:underline">
                Register now
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}