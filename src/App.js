import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/Card";
import AppNavigation from "./components/AppNavigation";
import logo from "./logo.svg";

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
];

export default function App() {
  return (
    <div className="bg-[#001F3F] min-h-screen text-white">
      <AppNavigation />
      <header className="flex flex-col items-center justify-center pt-10">
        <img src={logo} alt="SimplyTrade logo" className="w-48 h-auto mb-4" />
        <h1 className="text-4xl font-bold">What can we help you with?</h1>
      </header>

      <main className="px-4 md:px-20 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map((item, index) => (
            <Card
              key={index}
              className="bg-[#003366] text-white shadow-lg rounded-xl hover:shadow-xl transition duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
