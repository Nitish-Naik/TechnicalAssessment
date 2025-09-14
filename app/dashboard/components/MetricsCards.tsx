
"use client";
import { useDashboardStore } from "@/store/dashboardStore";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import Image from 'next/image';
import TotalSales from "@/public/images/TotalSales.svg";
import TotalOrder from "@/public/images/TotalOrder.svg";
import NewCustomers from "@/public/images/NewCustomers.svg";
import ProductSold from "@/public/images/ProductSold.svg";
import { Button } from "@mui/material"
export default function MetricsCards() {
  const { metrics } = useDashboardStore();
  if (!metrics) return null;

  const items = [
    { label: "Total Sales", value: metrics.totalSales, color: "#ffe2e5", icon: TotalSales, msg: "+8% from yesterday" },
    { label: "Total Orders", value: metrics.totalOrders, color: "#fff4de", icon: TotalOrder, msg: "+5% from yesterday" },
    { label: "Products Sold", value: metrics.productsSold, color: "#dcfce7", icon: ProductSold, msg: "+1.2% from yesterday" },
    { label: "New Customers", value: metrics.newCustomers, color: "#f3e8ff", icon: NewCustomers, msg: "0.5% from yesterday" },
  ];

  return (
    <Card sx={{ height: '100%', borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#05004e" }}>
              Today&apos;s Sales
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "", color: "#d1d5db" }}>
              Sales Summary
            </Typography>
          </div>

          <Button
            variant="outlined"
            size="small"
            startIcon={<Image src="/images/Export.svg" alt="Export" width={16} height={16} />}
            onClick={() => console.log("Export clicked")}
            sx={{
              textTransform: "none",
              color: "gray",
              borderColor: "gray",
              "&:hover": {
                borderColor: "gray",
                backgroundColor: "rgba(128, 128, 128, 0.04)",
              },
            }}
          >
            Export
          </Button>
        </div>
        
        <Grid container spacing={3} sx={{ mt: 6, height: 'calc(100% - 48px)' }}>
          {items.map((item) => {
            const IconComponent = item.icon;
            return (
              <Grid item xs={6} md={3} key={item.label} sx={{ height: '200px' }}>
                <Card sx={{ backgroundColor: item.color, height: '100%', minHeight: '160px'}}>
                  <CardContent sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between', 
                    height: '100%',
                    gap: '8px',
                    width: 'full',
                  }}>
                    <IconComponent width={40} height={40} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '24px' }}>
                      {item.value}
                    </Typography>
                    <Typography color="textSecondary" sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                      {item.label}
                    </Typography>
                    <Typography color="blue" sx={{ fontWeight: 'normal', fontSize: '16px' }}>
                      {item.msg}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
}