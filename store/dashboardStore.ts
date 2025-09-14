import { create } from 'zustand';

interface DashboardState {
    metrics: Record<string, unknown> | null;
    revenue: Record<string, unknown> | null;
    visitorInsights: Record<string, unknown> | null;
    customerSatisfaction: Record<string, unknown> | null;
    targetVsReality: Record<string, unknown> | null;
    topProducts: Record<string, unknown>[] | null;
    salesByCountry: Record<string, unknown>[] | null;
    volumeVsService: Record<string, unknown>[] | null;
    fetchData: () => Promise<void>;
}

const metricsData = {
    totalSales: '$1k',
    totalOrders: '300',
    productsSold: '5',
    newCustomers: '8',
};

const revenueData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    onlineSales: [12000, 15000, 18000, 16000, 20000, 22000, 19000],
    offlineSales: [8000, 9000, 11000, 10000, 13000, 14000, 12000],
};

const visitorInsightsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    loyalCustomers: [280, 300, 320, 310, 330, 350, 340, 360, 370, 380, 390, 400],
    newCustomers: [180, 200, 220, 210, 230, 250, 240, 260, 270, 280, 290, 300],
    uniqueCustomers: [380, 400, 420, 410, 430, 450, 440, 460, 470, 480, 490, 500],
};

const customerSatisfactionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    LastMonth: [3004, 3200, 3100, 3300, 3400, 3200, 3500],
    ThisMonth: [4504, 4600, 4700, 4500, 4800, 4700, 4900],
};

const targetVsRealityData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    reality: [8823, 9500, 7000, 8000, 10000, 9000, 11000],
    target: [12122, 11000, 9000, 10000, 12000, 11000, 13000],
};

const topProductsData = [
    { id: 1, name: 'Home Decor Range', popularity: 45, sales: 45 },
    { id: 2, name: 'Disney Princess Pink Bag 18', popularity: 29, sales: 29 },
    { id: 3, name: 'Bathroom Essentials', popularity: 18, sales: 18 },
    { id: 4, name: 'Apple Smartwatches', popularity: 25, sales: 25 },
];

const salesByCountryData = [
    { "country": "USA", "sales": 2500 },
    { "country": "Brazil", "sales": 1800 },
    { "country": "Russia", "sales": 1500 },
    { "country": "China", "sales": 2200 },
    { "country": "India", "sales": 2000 },
    { "country": "Australia", "sales": 1700 },
];

const volumeVsServiceData = [
    { "name": "Day 1", "Volume": 300, "Services": 150 },
    { "name": "Day 2", "Volume": 400, "Services": 200 },
    { "name": "Day 3", "Volume": 350, "Services": 120 },
    { "name": "Day 4", "Volume": 320, "Services": 160 },
    { "name": "Day 5", "Volume": 250, "Services": 140 },
    { "name": "Day 6", "Volume": 280, "Services": 180 },
  ];


export const useDashboardStore = create<DashboardState>((set) => ({
    metrics: null,
    revenue: null,
    visitorInsights: null,
    customerSatisfaction: null,
    targetVsReality: null,
    topProducts: null,
    salesByCountry: null,
    volumeVsService: null,
    fetchData: async () => {
        set({ metrics: metricsData, revenue: revenueData, visitorInsights: visitorInsightsData, customerSatisfaction: customerSatisfactionData, targetVsReality: targetVsRealityData, topProducts: topProductsData, salesByCountry: salesByCountryData, volumeVsService: volumeVsServiceData });
    }
}));
