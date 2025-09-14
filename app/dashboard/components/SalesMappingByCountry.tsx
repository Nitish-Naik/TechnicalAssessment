"use client";
import { useDashboardStore } from "@/store/dashboardStore";
import type { SalesByCountry } from "@/store/dashboardStore";
import { Card, CardContent, Typography } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { Tooltip as ReactTooltip } from 'react-tooltip'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function SalesMappingByCountry() {
  const { salesByCountry } = useDashboardStore();
  if (!salesByCountry) return null;

  const colorScale = scaleQuantile()
    .domain(salesByCountry.map((d: SalesByCountry) => d.sales))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#ffa800",
    ]);

  return (
    <Card sx={{
        borderRadius: "16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 4.4, color: "#05004e" }}>Sales Mapping by Country</Typography>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = salesByCountry.find((s: SalesByCountry) => s.country === geo.properties.name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`${geo.properties.name}: ${d ? d.sales : 'N/A'}`}
                    style={{
                      default: {
                        fill: d ? colorScale(d.sales) : "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#6993ff",
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: "#ffa800",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <ReactTooltip id="my-tooltip" />
      </CardContent>
    </Card>
  );
}