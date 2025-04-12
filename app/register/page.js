"use client";

import Image from "next/image";
import { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

export default function RegisterPage() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConnected) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const response = await fetch("/api/contract/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address, email }),
      });

      if (response.ok) {
        alert("Registration successful!");
      } else {
        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          alert(`Registration failed: ${errorData.error}`);
        } else {
          // Handle non-JSON response (e.g., HTML error page)
          const text = await response.text();
          console.error("Non-JSON response:", text);
          alert(`Registration failed: Server returned an unexpected response`);
        }
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration: " + error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/register-image.jpg"
            alt="Register"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              {isConnected ? (
                <>
                  <p className="text-sm text-gray-600">
                    Connected Wallet: {address}
                  </p>
                  <button
                    type="button"
                    onClick={() => disconnect()}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Disconnect Wallet
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => connect({ connector: injected() })}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Connect Wallet
                </button>
              )}
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
              disabled={!isConnected}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}