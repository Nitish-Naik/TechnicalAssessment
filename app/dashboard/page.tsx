"use client";
import { useEffect } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import { Box, Grid, Typography } from "@mui/material";
import MetricsCards from "./components/MetricsCards";
import RevenueChart from "./components/RevenueChart";

import VisitorInsights from "./components/VisitorInsights";

import CustomerSatisfaction from "./components/CustomerSatisfaction";

import TargetVsReality from "./components/TargetVsReality";

import TopProducts from "./components/TopProducts";

import SalesMappingByCountry from "./components/SalesMappingByCountry";

import VolumeVsService from "./components/VolumeVsService";

export default function DashboardPage() {
  const { fetchData } = useDashboardStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Box sx={{ backgroundColor: 'alabaster'}}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', mb: 4}}>
        <Box sx={{ width: 'calc(54% - 8px)' }}><MetricsCards /></Box>
        <Box sx={{ width: 'calc(46% - 8px)' }}><VisitorInsights /></Box>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', mb: 4}}>
        <Box sx={{ width: 'calc(40% - 8px)' }}><RevenueChart /></Box>
        <Box sx={{ width: 'calc(29.4% - 8px)' }}><CustomerSatisfaction /></Box>
        <Box sx={{ width: 'calc(30% - 8px)' }}><TargetVsReality /></Box>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px'}}>
        <Box sx={{ width: 'calc(40% - 8px)' }}><TopProducts /></Box>
        <Box sx={{ width: 'calc(29.4% - 8px)' }}><SalesMappingByCountry /></Box>
        <Box sx={{ width: 'calc(30% - 8px)' }}><VolumeVsService /></Box>
      </Box>
    </Box>
  );
}
