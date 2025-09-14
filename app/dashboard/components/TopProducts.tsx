"use client";
import { useDashboardStore } from "@/store/dashboardStore";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  LinearProgress,
  Box,
} from "@mui/material";

const colors = ["#0095ff", "#00e096", "#8f50ff", "#ffb822"];

export default function TopProducts() {
  const { topProducts } = useDashboardStore();
  if (!topProducts) return null;

  return (
    <Card sx={{
        borderRadius: "16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}>
      <CardContent>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 2.5, color: "#05004e", ml: 2}}
        >
          Top Products
        </Typography>

        {/* Table */}
        <Box sx={{ overflowX: 'auto' }}>
          <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 400, color: "#96a5b8" }}>#</TableCell>
              <TableCell sx={{ fontWeight: 400, color: "#96a5b8" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 400, color: "#96a5b8" }}>Popularity</TableCell>
              <TableCell sx={{ fontWeight: 400, color: "#96a5b8" }}>Sales</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {topProducts.map((product: any, index: number) => (
              <TableRow key={product.id}>
                {/* Index */}
                <TableCell sx={{ fontWeight: 600, color: "#444a6d" }}>
                  {String(index + 1).padStart(2, "0")}
                </TableCell>

                {/* Product Name */}
                <TableCell sx={{ fontWeight: 500, color: "#444a6d" }}>
                  {product.name}
                </TableCell>

                {/* Popularity with colored progress bar */}
                <TableCell>
                  <Box sx={{ width: 200 }}>
                    <LinearProgress
                      variant="determinate"
                      value={product.popularity}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        backgroundColor: "#f3f4f6",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 5,
                          backgroundColor: colors[index % colors.length],
                        },
                      }}
                    />
                  </Box>
                </TableCell>

                {/* Sales pill */}
                <TableCell>
                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      border: `1px solid ${colors[index % colors.length]}`,
                      color: colors[index % colors.length],
                      fontWeight: 600,
                      fontSize: "14px",
                      textAlign: "center",
                      display: "inline-block",
                      minWidth: "45px",
                    }}
                  >
                    {product.sales}%
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Box>
      </CardContent>
    </Card>
  );
}
