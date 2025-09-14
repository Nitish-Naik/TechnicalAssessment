"use client";
import { useDashboardStore } from "@/store/dashboardStore";
import type { SalesByCountry } from "@/store/dashboardStore";
import { Card, CardContent, Typography } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// using a small helper function instead of d3-scale to avoid generic typing issues
import { Tooltip as ReactTooltip } from 'react-tooltip'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function SalesMappingByCountry() {
  const { salesByCountry } = useDashboardStore();
  if (!salesByCountry) return null;

  const salesValues: number[] = salesByCountry.map((d: SalesByCountry) => d.sales);

  const colors = [
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#ffa800",
  ];

  function colorForValue(value: number) {
    const min = Math.min(...salesValues);
    const max = Math.max(...salesValues);
    if (min === max) return colors[Math.floor(colors.length / 2)];
    const t = (value - min) / (max - min);
    const idx = Math.min(colors.length - 1, Math.floor(t * colors.length));
    return colors[idx];
  }

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
                const g = geo as unknown as Record<string, unknown>;
                const props = g.properties as Record<string, unknown> | undefined;
                const name = props && typeof props['name'] === 'string' ? (props['name'] as string) : String(g['id'] ?? '');
                const d = salesByCountry.find((s: SalesByCountry) => s.country === name);
                return (
                  <Geography
                    key={String((g['rsmKey'] ?? g['id'] ?? name))}
                    geography={geo}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`${name}: ${d ? d.sales : 'N/A'}`}
                    style={{
                      default: {
                        fill: d ? colorForValue(d.sales) : "#D6D6DA",
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