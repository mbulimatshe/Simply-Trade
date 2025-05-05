import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`bg-white rounded shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="text-gray-500 text-sm">{children}</p>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
