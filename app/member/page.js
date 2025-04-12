"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { KLC_TO_USD_RATE, KLC_TO_ETB_RATE } from "../../src/lib/constants";

export default function MemberPage() {
  const { address, isConnected } = useAccount();
  const [klcBalance, setKlcBalance] = useState(0); // Mock balance for now
  const [currency, setCurrency] = useState("KLC"); // Default currency display
  const [discounts, setDiscounts] = useState({ birthday: 0, seasonal: 0 });
  const [tier, setTier] = useState("NONE");

  // Mock fetching user data (replace with actual contract call)
  useEffect(() => {
    if (isConnected && address) {
      // Simulate fetching data from the smart contract
      const fetchUserData = async () => {
        // Mock data for the MVP
        setKlcBalance(500); // Mock 500 KLC
        setTier("NONE"); // Mock tier
        setDiscounts({ birthday: 0, seasonal: 0 }); // Mock discounts
      };
      fetchUserData();
    }
  }, [isConnected, address]);

  // Convert KLC to the selected currency
  const getBalanceInCurrency = () => {
    if (currency === "USD") {
      return (klcBalance * KLC_TO_USD_RATE).toFixed(2);
    } else if (currency === "ETB") {
      return (klcBalance * KLC_TO_ETB_RATE).toFixed(2);
    }
    return klcBalance;
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

  // Mock refresh data (replace with actual contract call)
  const refreshData = async () => {
    // Simulate refreshing data
    setKlcBalance(500); // Mock 500 KLC
    setTier("NONE");
    setDiscounts({ birthday: 0, seasonal: 0 });
  };

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Membership Dashboard</h1>
        <p>Please connect your wallet to view your membership details.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Membership Dashboard</h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => window.alert("Disconnecting wallet...")} // Replace with actual disconnect logic
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
              <strong>Wallet Address:</strong>{" "}
              {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "N/A"}
            </p>
            <p>
              <strong>Membership Tier:</strong> {tier}
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
          </div>
          <button
            onClick={refreshData}
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
              <strong>Birthday Discount:</strong> {discounts.birthday} %
            </p>
            <p>
              <strong>Seasonal Discount:</strong> {discounts.seasonal} %
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
            onClick={() => window.alert("Redeeming spa treatment...")} // Replace with actual redeem logic
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
}