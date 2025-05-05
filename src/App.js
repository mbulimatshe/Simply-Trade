import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invest from "./pages/Invest";
import Trade from "./pages/Trade";
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
    <Router>
      <div className="bg-[#001F3F] min-h-screen text-white">
        <AppNavigation />

        <Routes>
          <Route
            path="/"
            element={
              <main className="px-4 md:px-20 py-10">
                <h1 className="text-4xl font-bold text-center mb-10">
                  What can we help you with?
                </h1>
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
            }
          />
          <Route path="/invest" element={<Invest />} />
          <Route path="/trade" element={<Trade />} />
        </Routes>
      </div>
    </Router>
  );
}
