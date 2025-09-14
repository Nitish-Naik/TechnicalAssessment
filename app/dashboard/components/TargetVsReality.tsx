"use client";
import { useDashboardStore } from "@/store/dashboardStore";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";

export default function TargetVsReality() {
  const { targetVsReality } = useDashboardStore();
  if (!targetVsReality) return null;

  const data = targetVsReality.labels.map((month: string, i: number) => ({
    name: month,
    "Reality Sales": targetVsReality.reality[i],
    "Target Sales": targetVsReality.target[i],
  }));

  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <CardContent>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "#05004e"}}
        >
          Target vs Reality
        </Typography>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} barGap={20} barCategoryGap="25%">
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
            <Bar
              dataKey="Reality Sales"
              fill="#4ab58e"
              radius={[8, 8, 8, 8]}
              barSize={30}
              
            />
            <Bar
              dataKey="Target Sales"
              fill="#ffcf00"
              radius={[8, 8, 8, 8]}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>

        {/* Custom Legend */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 4,
            // mt: 3,
          }}
        >
          {/* Reality Sales */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Image src="/images/RealitySales.svg" width={40} height={40} alt="RS" />
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#05004e" }}>
                Reality Sales
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: "block", color: "#6b7280", fontSize: "12px" }}
              >
                Global
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: 600, color: "#10b981", ml: 2 }}>
              {targetVsReality.reality.reduce((a: number, b: number) => a + b, 0).toFixed(3)}
            </Typography>
          </Box>

          {/* Target Sales */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Image src="/images/TargetSales.svg" width={40} height={40} alt="TS" />
            <Box>
              <Typography sx={{ fontWeight: 700, color: "#05004e" }}>
                Target Sales
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: "block", color: "#6b7280", fontSize: "12px" }}
              >
                Commercial
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: 600, color: "#f59e0b", ml: 2 }}>
              {targetVsReality.target.reduce((a: number, b: number) => a + b, 0).toFixed(3)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
