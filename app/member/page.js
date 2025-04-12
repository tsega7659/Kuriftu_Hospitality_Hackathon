"use client";

import { useState, useEffect, useCallback } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { KLC_TO_USD_RATE, KLC_TO_ETB_RATE } from "../../src/lib/constants";
import { userApi } from "../../lib/userStorage";

export default function MemberPage() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState("KLC"); // Default currency display

  // Fetch user data from the backend API
  const fetchUserData = useCallback(async () => {
    if (!isConnected || !address) return;
    
    try {
      setLoading(true);
      setError(null);
      
      // Get all users from the API
      const users = await userApi.getAllUsers();
      
      // Find the user with the matching wallet address
      const user = users.find(u => u.walletAddress && 
        u.walletAddress.toLowerCase() === address.toLowerCase());
      
      if (user) {
        setUserData(user);
      } else {
        setError("User not found. Please register first.");
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("Failed to load user data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [isConnected, address]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Convert KLC to the selected currency
  const getBalanceInCurrency = () => {
    if (!userData) return "0";
    
    const balance = userData.loyaltyCoins || 0;
    
    if (currency === "USD") {
      return (balance * KLC_TO_USD_RATE).toFixed(2);
    } else if (currency === "ETB") {
      return (balance * KLC_TO_ETB_RATE).toFixed(2);
    }
    return balance.toString();
  };

  // Handle currency toggle
  const toggleCurrency = () => {
    if (currency === "KLC") {
      setCurrency("USD");
    } else if (currency === "USD") {
      setCurrency("ETB");
    } else {
      setCurrency("KLC");
    }
  };

  // Calculate discounts based on membership tier
  const calculateDiscounts = () => {
    if (!userData) return { birthday: 0, seasonal: 0 };
    
    const tier = userData.membershipTier || "Explorer";
    
    switch (tier) {
      case "Explorer":
        return { birthday: 5, seasonal: 3 };
      case "Adventurer":
        return { birthday: 10, seasonal: 7 };
      case "Pioneer":
        return { birthday: 15, seasonal: 12 };
      default:
        return { birthday: 0, seasonal: 0 };
    }
  };

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Membership Dashboard</h1>
        <p>Please connect your wallet to view your membership details.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Membership Dashboard</h1>
        <p>Loading your membership details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Membership Dashboard</h1>
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => window.location.href = "/register"}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Register Now
        </button>
      </div>
    );
  }

  const discounts = calculateDiscounts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Membership Dashboard</h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => disconnect()}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Disconnect
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Your Profile */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
          <p className="text-gray-600 mb-4">Overview of your membership details</p>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {userData?.name || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {userData?.email || "N/A"}
            </p>
            <p>
              <strong>Phone:</strong> {userData?.phone || "N/A"}
            </p>
            <p>
              <strong>Wallet Address:</strong>{" "}
              {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "N/A"}
            </p>
            <p>
              <strong>Membership Tier:</strong> {userData?.membershipTier || "Explorer"}
            </p>
            <p>
              <strong>Loyalty Coins:</strong>{" "}
              {getBalanceInCurrency()} {currency}
              <button
                onClick={toggleCurrency}
                className="ml-2 text-blue-500 underline"
              >
                (Switch to {currency === "KLC" ? "USD" : currency === "USD" ? "ETB" : "KLC"})
              </button>
            </p>
            <p>
              <strong>Status:</strong> {userData?.status || "Active"}
            </p>
            <p>
              <strong>Member Since:</strong> {userData?.registrationDate ? new Date(userData.registrationDate).toLocaleDateString() : "N/A"}
            </p>
          </div>
          <button
            onClick={fetchUserData}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Refresh Data
          </button>
        </div>

        {/* Available Discounts */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Available Discounts</h2>
          <p className="text-gray-600 mb-4">Special offers based on your tier</p>
          <div className="space-y-2">
            <p>
              <strong>Birthday Discount:</strong> {discounts.birthday}%
            </p>
            <p>
              <strong>Seasonal Discount:</strong> {discounts.seasonal}%
            </p>
          </div>
        </div>
      </div>

      {/* Rewards */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Rewards</h2>
        <p className="text-gray-600 mb-4">Redeem your loyalty coins for exclusive perks</p>
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center">
            <span className="text-green-500 mr-2">🎁</span>
            <div>
              <p className="font-medium">Spa Treatment</p>
              <p className="text-gray-600">
                100 KLC ≈ {(100 * KLC_TO_USD_RATE).toFixed(2)} USD ≈{" "}
                {(100 * KLC_TO_ETB_RATE).toFixed(2)} ETB
              </p>
            </div>
          </div>
          <button
            onClick={() => window.alert("Redeeming spa treatment...")}
            className="bg-green-500 text-white px-4 py-2 rounded"
            disabled={!userData || (userData.loyaltyCoins || 0) < 100}
          >
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
}