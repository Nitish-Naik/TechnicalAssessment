"use client";
import { useDashboardStore } from "@/store/dashboardStore";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CustomerSatisfaction() {
  const { customerSatisfaction } = useDashboardStore();
  if (!customerSatisfaction) return null;

  const data = customerSatisfaction.labels.map((day: string, i: number) => ({
    name: day,
    lastMonth: customerSatisfaction.LastMonth[i],
    thisMonth: customerSatisfaction.ThisMonth[i],
  }));

  const totalLastMonth = customerSatisfaction.LastMonth.reduce((a, b) => a + b, 0);
  const totalThisMonth = customerSatisfaction.ThisMonth.reduce((a, b) => a + b, 0);

  return (
    <Card sx={{
        borderRadius: "16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}>
      <CardContent>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "#05004e", mb: 4.5 }}
        >
          Customer Satisfaction
        </Typography>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorLast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0095ff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#0095ff" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorThis" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00e096" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#00e096" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="lastMonth"
              stroke="#0095ff"
              fill="url(#colorLast)"
              dot={{ r: 4 }}
              strokeWidth={3}
            />
            <Area
              type="monotone"
              dataKey="thisMonth"
              stroke="#00e096"
              fill="url(#colorThis)"
              dot={{ r: 4 }}
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Custom Legend with divider + totals */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            mt: 2,
            borderTop: "1px solid #eee",
            pt: 2,
          }}
        >
          {/* Last Month */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ flex: 1 }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: "#0095ff",
                }}
              />
              <Typography variant="body2" sx={{ color: "#777" }}>
                Last Month
              </Typography>
            </Box>
            <Typography variant="subtitle1" fontWeight={600}>
              ${totalLastMonth.toLocaleString()}
            </Typography>
          </Box>

          {/* Divider line */}
          <Box
            sx={{
              width: "1px",
              bgcolor: "#ddd",
              height: "40px",
            }}
          />

          {/* This Month */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ flex: 1 }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: "#00e096",
                }}
              />
              <Typography variant="body2" sx={{ color: "#777" }}>
                This Month
              </Typography>
            </Box>
            <Typography variant="subtitle1" fontWeight={600}>
              ${totalThisMonth.toLocaleString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
