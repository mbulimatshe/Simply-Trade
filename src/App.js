// src/App.tsx (or App.jsx)

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/card";
import AppNavigation from "./components/AppNavigation";

const offerings = [
  {
    title: "SimplyTrade Invest",
    description:
      "Automated investing with diversified, low-fee portfolios. Includes SRI & Halal options.",
  },
  {
    title: "SimplyTrade Trading",
    description:
      "Commission-free trading for stocks, ETFs & crypto. Fractional shares available.",
  },
  {
    title: "SimplyTrade Crypto",
    description:
      "Buy, sell, and hold Bitcoin, Ethereum, and more. Secure & beginner-friendly.",
  },
  {
    title: "SimplyTrade Cash",
    description:
      "Earn interest and spend smart with a hybrid account & prepaid Visa card.",
  },
  {
    title: "SimplyTrade Tax",
    description:
      "Smart, integrated tax filing to maximize returns effortlessly.",
  },
  {
    title: "SimplyTrade Retirement",
    description:
      "Plan your future with RRSP, TFSA, and RESP accounts designed around your goals.",
  },
  {
    title: "SimplyTrade Round-Up",
    description:
      "Invest your spare change automatically — set it and forget it.",
  },
  {
    title: "SimplyTrade Wealth Advisor",
    description:
      "Talk to real humans and get tailored advice from certified financial experts.",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AppNavigation />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">What can we help you with?</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offer, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>{offer.title}</CardTitle>
                <CardDescription>{offer.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="mt-4">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
