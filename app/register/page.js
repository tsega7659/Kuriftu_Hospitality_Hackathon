"use client";

import Image from "next/image";
import { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { userApi } from "../../lib/userStorage";

export default function RegisterPage() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConnected) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      setLoading(true);
      
      // Create user data object
      const userData = {
        name,
        email,
        phone,
        walletAddress: address,
        membershipTier: "Explorer", // Default tier for new users
        loyaltyCoins: 0,
        status: "Active",
        registrationDate: new Date().toISOString()
      };

      // Call the API to create the user
      const response = await userApi.createUser(userData);
      
      alert("Registration successful! Welcome to Kuriftu Hospitality.");
      
      // Optionally redirect to member page or dashboard
      window.location.href = "/member";
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration: " + error.message);
    } finally {
      setLoading(false);
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
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
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
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
              disabled={!isConnected || loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}