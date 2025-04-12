"use client";

import { useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { KLC_TO_USD_RATE, KLC_TO_ETB_RATE } from "../../src/lib/constants";

const DEMO_DATA = {
  kycVerified: true,
  tier: "Pioneer",
  discounts: {
    birthday: 15,
    seasonal: 10,
  },
  initialBalance: 1000,
};

export default function MemberPage() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [klcBalance, setKlcBalance] = useState(DEMO_DATA.initialBalance);
  const [currency, setCurrency] = useState("USD");
  const [discounts] = useState(DEMO_DATA.discounts);
  const [tier] = useState(DEMO_DATA.tier);
  const [kycVerified] = useState(DEMO_DATA.kycVerified);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [depositAmount, setDepositAmount] = useState("");

  const handleDeposit = async () => {
    if (!kycVerified) {
      setError("KYC verification required to deposit KLC.");
      return;
    }

    const amount = parseFloat(depositAmount);
    if (!amount || amount <= 0) {
      setError("Please enter a valid deposit amount.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setKlcBalance((prev) => prev + amount);
      window.alert(`Successfully deposited ${amount} KLC into your MetaMask wallet!`);
      setDepositAmount("");
    } catch (err) {
      setError("Failed to deposit KLC. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRedeem = async (amount) => {
    if (klcBalance < amount) {
      setError(`You need at least ${amount} KLC to redeem this reward.`);
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setKlcBalance((prev) => prev - amount);
      window.alert(`Successfully redeemed ${amount} KLC!`);
    } catch (err) {
      setError("Failed to redeem. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getBalanceInCurrency = () => {
    if (currency === "USD") {
      return (klcBalance * KLC_TO_USD_RATE).toFixed(2);
    } else if (currency === "ETB") {
      return (klcBalance * KLC_TO_ETB_RATE).toFixed(2);
    }
    return klcBalance.toFixed(2);
  };

  const toggleCurrency = () => {
    setCurrency((prev) =>
      prev === "KLC" ? "USD" : prev === "USD" ? "ETB" : "KLC"
    );
  };

  const refreshData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
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

      <div className="flex justify-between mb-4">
        <button
          onClick={() => disconnect()}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Disconnect
        </button>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
          <p className="text-gray-600 mb-4">Overview of your membership details</p>

          <div className="space-y-2">
            <p>
              <strong>Wallet Address:</strong>{" "}
              {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "N/A"}
            </p>
            <p>
              <strong>KYC Status:</strong>{" "}
              <span className={kycVerified ? "text-green-500" : "text-red-500"}>
                {kycVerified ? "Verified" : "Not Verified"}
              </span>
            </p>
            <p>
              <strong>Membership Tier:</strong>{" "}
              <span className="font-semibold text-blue-600">{tier}</span>
            </p>
            <p>
              <strong>Loyalty Coins:</strong>{" "}
              {loading ? "Loading..." : getBalanceInCurrency()} {currency}
              <button
                onClick={toggleCurrency}
                className="ml-2 text-blue-500 underline"
              >
                (Switch to {currency === "KLC" ? "USD" : currency === "USD" ? "ETB" : "KLC"})
              </button>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Deposit KLC to MetaMask</h3>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                placeholder="Enter KLC amount"
                className="border rounded px-3 py-2 w-full"
                disabled={loading || !kycVerified}
              />
              <button
                onClick={handleDeposit}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={loading || !kycVerified}
              >
                {loading ? "Depositing..." : "Deposit"}
              </button>
            </div>
            {!kycVerified && (
              <p className="text-red-500 text-sm mt-2">
                KYC verification required to deposit KLC.
              </p>
            )}
          </div>

          <button
            onClick={refreshData}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full"
            disabled={loading}
          >
            {loading ? "Refreshing..." : "Refresh Data"}
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Available Discounts</h2>
          <p className="text-gray-600 mb-4">Special offers based on your tier</p>

          <div className="space-y-2">
            <p>
              <strong>Birthday Discount:</strong>{" "}
              <span className="text-green-500">{discounts.birthday}%</span>
            </p>
            <p>
              <strong>Seasonal Discount:</strong>{" "}
              <span className="text-green-500">{discounts.seasonal}%</span>
            </p>
            <p className="text-sm text-gray-500 mt-4">
              {tier === "Pioneer"
                ? "As a Pioneer member, you get exclusive discounts!"
                : "Upgrade your tier for better discounts"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Rewards</h2>
        <p className="text-gray-600 mb-4">Redeem your loyalty coins for exclusive perks</p>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">💆</span>
              <div>
                <p className="font-medium">Spa Treatment</p>
                <p className="text-gray-600">
                  100 KLC ≈ {(100 * KLC_TO_USD_RATE).toFixed(2)} USD ≈{" "}
                  {(100 * KLC_TO_ETB_RATE).toFixed(2)} ETB
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRedeem(100)}
              className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
              disabled={loading || klcBalance < 100}
            >
              {loading ? "Processing..." : "Redeem"}
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">🍽️</span>
              <div>
                <p className="font-medium">Fine Dining Experience</p>
                <p className="text-gray-600">
                  250 KLC ≈ {(250 * KLC_TO_USD_RATE).toFixed(2)} USD ≈{" "}
                  {(250 * KLC_TO_ETB_RATE).toFixed(2)} ETB
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRedeem(250)}
              className="bg-yellow-500 text-white px-4 py-2 rounded disabled:opacity-50"
              disabled={loading || klcBalance < 250}
            >
              {loading ? "Processing..." : "Redeem"}
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">🏨</span>
              <div>
                <p className="font-medium">Luxury Suite Upgrade</p>
                <p className="text-gray-600">
                  500 KLC ≈ {(500 * KLC_TO_USD_RATE).toFixed(2)} USD ≈{" "}
                  {(500 * KLC_TO_ETB_RATE).toFixed(2)} ETB
                </p>
                <p className="text-xs text-blue-600">
                  {tier === "Pioneer" ? "Available" : "Upgrade to Pioneer tier"}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRedeem(500)}
              className={`px-4 py-2 rounded ${
                tier === "Pioneer" && klcBalance >= 500
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
              disabled={loading || tier !== "Pioneer" || klcBalance < 500}
            >
              {loading ? "Processing..." : tier === "Pioneer" ? "Redeem" : "Tier Restricted"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
