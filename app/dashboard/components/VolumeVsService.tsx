"use client";
import { useDashboardStore } from "@/store/dashboardStore";
import type { VolumeServiceItem } from "@/store/dashboardStore";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function VolumeVsServiceLevel() {
  const { volumeVsService } = useDashboardStore(); // adjust your store key
  if (!volumeVsService) return null;

  const vvs = volumeVsService as VolumeServiceItem[];
  const data = vvs.map((item) => ({
    name: item.name,
    Volume: item.Volume,
    Services: item.Services,
  }));

  // Totals
  const totalVolume = vvs.reduce((a, b) => a + b.Volume, 0);
  const totalServices = vvs.reduce((a, b) => a + b.Services, 0);

  return (
    <Card sx={{
        borderRadius: "16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}>
      <CardContent>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "#05004e" }}
        >
          Volume vs Service Level
        </Typography>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} barSize={20} barGap={15}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />

            <Bar
              dataKey="Volume"
              stackId="a"
              fill="#0095ff"
              width={4}
            //   radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="Services"
              stackId="a"
              fill="#00e096"
            //   radius={[0, 0, 8, 8]}
            />
          </BarChart>
        </ResponsiveContainer>

        {/* Custom Legend with divider + totals */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            mt: 3,
            borderTop: "1px solid #eee",
            pt: 2,
          }}
        >
          {/* Volume */}
          <Box display="flex" flexDirection="column" alignItems="center" sx={{ flex: 1 }}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Box
                sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#0095ff" }}
              />
              <Typography variant="body2" sx={{ color: "#777" }}>
                Volume
              </Typography>
            </Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {totalVolume.toLocaleString()}
            </Typography>
          </Box>

          {/* Divider */}
          <Box sx={{ width: "1px", bgcolor: "#ddd", height: "40px" }} />

          {/* Services */}
          <Box display="flex" flexDirection="column" alignItems="center" sx={{ flex: 1 }}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Box
                sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#00e096" }}
              />
              <Typography variant="body2" sx={{ color: "#777" }}>
                Services
              </Typography>
            </Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {totalServices.toLocaleString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
