"use client";
import { useDashboardStore } from "@/store/dashboardStore";
import { Card, CardContent, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function RevenueChart() {
  const { revenue } = useDashboardStore();
  if (!revenue) return null;

  const data = revenue.labels.map((day: string, i: number) => ({
    name: day.slice(0, 3),
    Online: revenue.onlineSales[i],
    Offline: revenue.offlineSales[i],
  }));

  return (
    <Card sx={{
        borderRadius: "16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 10, color: "#05004e" }}>Total Revenue</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barCategoryGap="20%">
            <XAxis dataKey="name" interval={0} /> {/* show all labels */}
            <YAxis
              domain={[0, 25000]}
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              tickFormatter={(value) => `${value / 1000}K`}
              
            />
            <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
            <Legend />
            <Bar
              dataKey="Online"
              fill="#0095ff"
              legendType="circle"
              // radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="Offline"
              fill="#00e096"
              legendType="circle"
              
              // radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
