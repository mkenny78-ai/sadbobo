
import React from "react";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-6">
      {/* Hero Section */}
      <header className="text-center mt-10">
        <img
          src="/sadbobo.png"
          alt="SadBOBO Logo"
          className="w-48 mx-auto drop-shadow-lg"
        />
        <h1 className="text-5xl font-bold mt-6">SadBOBO</h1>
        <p className="text-lg text-gray-400 mt-2">
          The saddest meme coin on the Base network — but the happiest gains.
        </p>
        <div className="mt-6">
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-full shadow-lg"
            onClick={() =>
              window.open(
                "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x1fb499a763ee9ff8d9324d29cb649ff404181303&chain=base",
                "_blank"
              )
            }
          >
            🚀 Buy on Uniswap
          </Button>
        </div>
      </header>

      {/* Price Widget */}
      <section className="mt-12 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Live Price</h2>
        <iframe
          src="https://dexscreener.com/base/0x1fb499a763ee9ff8d9324d29cb649ff404181303?embed=1&theme=dark"
          title="DexScreener Chart"
          className="w-full h-[500px] rounded-lg shadow-lg border border-gray-800"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} SadBOBO — Meme coin for the Base network. Not financial advice.
        </p>
      </footer>
    </div>
  );
}
