// src/App.js
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AppNavigation from "./components/AppNavigation";
import { Button } from "./components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/Card";

const offerings = [
  {
    title: "SimplyTrade Invest",
    description: "Automated investing with diversified, low-fee portfolios. Includes SRI & Halal options.",
  },
  {
    title: "SimplyTrade Trading",
    description: "Commission-free trading for stocks, ETFs & crypto. Fractional shares available.",
  },
  {
    title: "SimplyTrade Crypto",
    description: "Buy, sell, and hold Bitcoin, Ethereum, and more. Secure & beginner-friendly.",
  },
  {
    title: "SimplyTrade Cash",
    description: "Earn interest and spend smart with a hybrid account & prepaid Visa card.",
  },
  {
    title: "SimplyTrade Tax",
    description: "Smart, integrated tax filing to maximize returns effortlessly.",
  },
  {
    title: "SimplyTrade Retirement",
    description: "Plan your future with RRSP, TFSA, and RESP accounts designed around your goals.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <AppNavigation />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Smart investing, simplified.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Build your wealth with the same tools the pros use — designed for everyone.
          </p>
          <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full">
            Get Started <ArrowRight className="inline ml-2" />
          </Button>
        </motion.section>

        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offer, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle>{offer.title}</CardTitle>
                  <CardDescription>{offer.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>
      </main>
      <footer className="text-center py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} SimplyTrade. All rights reserved.
      </footer>
    </div>
  );
}
