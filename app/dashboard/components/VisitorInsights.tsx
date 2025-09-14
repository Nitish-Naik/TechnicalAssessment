"use client";
import { useDashboardStore } from "@/store/dashboardStore";
import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function VisitorInsights() {
  const { visitorInsights } = useDashboardStore();
  if (!visitorInsights) return null;

  const data = visitorInsights.labels.map((day: string, i: number) => ({
    name: day,
    "Loyal Customers": visitorInsights.loyalCustomers[i],
    "New Customers": visitorInsights.newCustomers[i],
    "Unique Customers": visitorInsights.uniqueCustomers[i],
  }));

  return (
    <Card sx={{
        borderRadius: "16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#05004e" }}>Visitor Insights</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis ticks={[0, 100, 200, 300, 400]} domain={[0, 400]} />
            <Tooltip />
            <Legend wrapperStyle={{ color: "black" }} />
            <Line type="monotone" dataKey="Loyal Customers" stroke="#a700ff" legendType="square" strokeWidth={4} />
            <Line type="monotone" dataKey="New Customers" stroke="#ef4444" legendType="square" strokeWidth={4} />
            <Line type="monotone" dataKey="Unique Customers" stroke="#3cd856" legendType="square" strokeWidth={4}  />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
