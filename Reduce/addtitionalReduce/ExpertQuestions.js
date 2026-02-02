// Expert Level Reduce Practice Questions

/*
Question 16: Multi-Currency Financial Portfolio
Context: Investment platform needs portfolio analysis across multiple currencies with real-time conversion rates.
Input:
*/
const portfolioData = [
  {symbol: "AAPL", shares: 100, price: 150, currency: "USD", sector: "Technology", dividendYield: 0.5},
  {symbol: "GOOGL", shares: 50, price: 2800, currency: "USD", sector: "Technology", dividendYield: 0},
  {symbol: "ASML", shares: 25, price: 600, currency: "EUR", sector: "Technology", dividendYield: 1.2},
  {symbol: "TSLA", shares: 75, price: 200, currency: "USD", sector: "Automotive", dividendYield: 0},
  {symbol: "SAP", shares: 40, price: 120, currency: "EUR", sector: "Technology", dividendYield: 1.8},
  {symbol: "NVDA", shares: 60, price: 500, currency: "USD", sector: "Technology", dividendYield: 0.1}
];

const exchangeRates = {USD: 1, EUR: 1.1}; // EUR to USD conversion

/*
Your Task: Use reduce to calculate (all values in USD):
- totalPortfolioValue: sum of all holdings in USD
- sectorAllocation: percentage allocation per sector
- currencyExposure: percentage exposure per currency
- dividendIncome: annual dividend income in USD
- topHoldings: top 3 stocks by value with percentage of portfolio
- riskMetrics: concentration risk (largest holding percentage)

Expected Output:
{
  totalPortfolioValue: 371500,
  sectorAllocation: {Technology: 89.23, Automotive: 10.77},
  currencyExposure: {USD: 59.41, EUR: 40.59},
  dividendIncome: 1441,
  topHoldings: [
    {symbol: "GOOGL", value: 140000, percentage: 37.68},
    {symbol: "NVDA", value: 30000, percentage: 8.07},
    {symbol: "ASML", value: 16500, percentage: 4.44}
  ],
  riskMetrics: {largestHoldingPercentage: 37.68, concentrationRisk: "High"}
}
*/

/*
Question 17: Supply Chain Optimization
Context: Manufacturing company needs to optimize supply chain costs, lead times, and supplier performance.
Input:
*/
const supplyChainData = [
  {orderId: "PO001", supplier: "SupplierA", material: "Steel", quantity: 1000, unitCost: 50, leadTime: 7, quality: 95, region: "North"},
  {orderId: "PO002", supplier: "SupplierB", material: "Aluminum", quantity: 500, unitCost: 80, leadTime: 10, quality: 98, region: "South"},
  {orderId: "PO003", supplier: "SupplierA", material: "Steel", quantity: 1500, unitCost: 48, leadTime: 8, quality: 94, region: "North"},
  {orderId: "PO004", supplier: "SupplierC", material: "Plastic", quantity: 2000, unitCost: 25, leadTime: 5, quality: 92, region: "East"},
  {orderId: "PO005", supplier: "SupplierB", material: "Steel", quantity: 800, unitCost: 52, leadTime: 12, quality: 96, region: "South"},
  {orderId: "PO006", supplier: "SupplierD", material: "Aluminum", quantity: 300, unitCost: 85, leadTime: 6, quality: 99, region: "West"}
];

/*
Your Task: Use reduce to calculate:
- supplierPerformance: total orders, average cost, lead time, quality score per supplier
- materialAnalysis: total quantity, average cost, best supplier per material
- regionalCosts: total procurement cost per region
- costOptimization: identify cheapest supplier per material with quality >= 95
- leadTimeAnalysis: average lead time per material and supplier combination

Expected Output:
{
  supplierPerformance: {
    SupplierA: {orders: 2, avgCost: 49, avgLeadTime: 7.5, avgQuality: 94.5, totalValue: 122000},
    SupplierB: {orders: 2, avgCost: 66, avgLeadTime: 11, avgQuality: 97, totalValue: 81600},
    SupplierC: {orders: 1, avgCost: 25, avgLeadTime: 5, avgQuality: 92, totalValue: 50000},
    SupplierD: {orders: 1, avgCost: 85, avgLeadTime: 6, avgQuality: 99, totalValue: 25500}
  },
  materialAnalysis: {
    Steel: {totalQuantity: 3300, avgCost: 50, bestSupplier: "SupplierA"},
    Aluminum: {totalQuantity: 800, avgCost: 81.25, bestSupplier: "SupplierD"},
    Plastic: {totalQuantity: 2000, avgCost: 25, bestSupplier: "SupplierC"}
  },
  regionalCosts: {North: 122000, South: 81600, East: 50000, West: 25500},
  costOptimization: {
    Steel: {supplier: "SupplierB", cost: 52, quality: 96},
    Aluminum: {supplier: "SupplierB", cost: 80, quality: 98}
  },
  leadTimeAnalysis: {
    "Steel-SupplierA": 7.5,
    "Aluminum-SupplierB": 10,
    "Steel-SupplierB": 12,
    "Plastic-SupplierC": 5,
    "Aluminum-SupplierD": 6
  }
}
*/

/*
Question 18: Healthcare Patient Analytics
Context: Hospital system needs patient flow analysis, treatment outcomes, and resource utilization metrics.
Input:
*/
const patientData = [
  {patientId: "P001", age: 45, department: "Cardiology", diagnosis: "Hypertension", lengthOfStay: 3, cost: 5000, outcome: "Improved", doctor: "Dr. Smith"},
  {patientId: "P002", age: 67, department: "Orthopedics", diagnosis: "Hip Fracture", lengthOfStay: 7, cost: 12000, outcome: "Recovered", doctor: "Dr. Johnson"},
  {patientId: "P003", age: 34, department: "Emergency", diagnosis: "Appendicitis", lengthOfStay: 2, cost: 8000, outcome: "Recovered", doctor: "Dr. Brown"},
  {patientId: "P004", age: 78, department: "Cardiology", diagnosis: "Heart Attack", lengthOfStay: 10, cost: 25000, outcome: "Stable", doctor: "Dr. Smith"},
  {patientId: "P005", age: 29, department: "Maternity", diagnosis: "Normal Delivery", lengthOfStay: 2, cost: 3000, outcome: "Recovered", doctor: "Dr. Wilson"},
  {patientId: "P006", age: 55, department: "Orthopedics", diagnosis: "Knee Surgery", lengthOfStay: 4, cost: 15000, outcome: "Improved", doctor: "Dr. Johnson"}
];

/*
Your Task: Use reduce to calculate:
- departmentMetrics: patient count, average stay, total revenue, success rate per department
- ageGroupAnalysis: patient distribution and outcomes by age groups (18-30, 31-50, 51-70, 70+)
- doctorPerformance: patients treated, average cost, success rate per doctor
- outcomeAnalysis: distribution of outcomes and associated costs
- resourceUtilization: total bed days and revenue per department
- costEfficiency: cost per day by department and diagnosis

Expected Output:
{
  departmentMetrics: {
    Cardiology: {patients: 2, avgStay: 6.5, totalRevenue: 30000, successRate: 50},
    Orthopedics: {patients: 2, avgStay: 5.5, totalRevenue: 27000, successRate: 50},
    Emergency: {patients: 1, avgStay: 2, totalRevenue: 8000, successRate: 100},
    Maternity: {patients: 1, avgStay: 2, totalRevenue: 3000, successRate: 100}
  },
  ageGroupAnalysis: {
    "18-30": {patients: 1, outcomes: {Recovered: 1}},
    "31-50": {patients: 2, outcomes: {Improved: 1, Recovered: 1}},
    "51-70": {patients: 2, outcomes: {Recovered: 1, Improved: 1}},
    "70+": {patients: 1, outcomes: {Stable: 1}}
  },
  doctorPerformance: {
    "Dr. Smith": {patients: 2, avgCost: 15000, successRate: 50},
    "Dr. Johnson": {patients: 2, avgCost: 13500, successRate: 50},
    "Dr. Brown": {patients: 1, avgCost: 8000, successRate: 100},
    "Dr. Wilson": {patients: 1, avgCost: 3000, successRate: 100}
  },
  outcomeAnalysis: {
    Recovered: {count: 3, avgCost: 7666.67},
    Improved: {count: 2, avgCost: 10000},
    Stable: {count: 1, avgCost: 25000}
  },
  resourceUtilization: {
    Cardiology: {bedDays: 13, revenue: 30000},
    Orthopedics: {bedDays: 11, revenue: 27000},
    Emergency: {bedDays: 2, revenue: 8000},
    Maternity: {bedDays: 2, revenue: 3000}
  },
  costEfficiency: {
    "Cardiology-Hypertension": 1666.67,
    "Cardiology-Heart Attack": 2500,
    "Orthopedics-Hip Fracture": 1714.29,
    "Orthopedics-Knee Surgery": 3750,
    "Emergency-Appendicitis": 4000,
    "Maternity-Normal Delivery": 1500
  }
}
*/

/*
Question 19: Gaming Analytics Platform
Context: Gaming company needs player behavior analysis, monetization metrics, and game balance insights.
Input:
*/
const gamingData = [
  {playerId: "PL001", level: 25, playtime: 120, purchases: 50, gameMode: "PvP", wins: 15, losses: 10, region: "NA"},
  {playerId: "PL002", level: 45, playtime: 300, purchases: 200, gameMode: "PvE", wins: 80, losses: 20, region: "EU"},
  {playerId: "PL003", level: 12, playtime: 60, purchases: 0, gameMode: "PvP", wins: 8, losses: 15, region: "ASIA"},
  {playerId: "PL004", level: 67, playtime: 450, purchases: 500, gameMode: "PvE", wins: 120, losses: 30, region: "NA"},
  {playerId: "PL005", level: 33, playtime: 200, purchases: 100, gameMode: "PvP", wins: 25, losses: 25, region: "EU"},
  {playerId: "PL006", level: 8, playtime: 30, purchases: 0, gameMode: "Casual", wins: 5, losses: 2, region: "ASIA"}
];

/*
Your Task: Use reduce to calculate:
- playerSegmentation: group players by spending (Whale: >$300, Dolphin: $50-300, Minnow: $1-49, F2P: $0)
- gameModeAnalysis: player count, average level, win rate per game mode
- regionalMetrics: total revenue, average playtime, player count per region
- monetizationMetrics: ARPU (Average Revenue Per User), conversion rate, LTV estimates
- gameBalance: win rate distribution and level progression analysis
- retentionIndicators: playtime vs level correlation, spending vs engagement

Expected Output:
{
  playerSegmentation: {
    Whale: {count: 1, totalSpending: 500, avgLevel: 67, avgPlaytime: 450},
    Dolphin: {count: 2, totalSpending: 300, avgLevel: 35, avgPlaytime: 210},
    Minnow: {count: 1, totalSpending: 50, avgLevel: 25, avgPlaytime: 120},
    F2P: {count: 2, totalSpending: 0, avgLevel: 10, avgPlaytime: 45}
  },
  gameModeAnalysis: {
    PvP: {players: 3, avgLevel: 23.33, winRate: 60.42},
    PvE: {players: 2, avgLevel: 56, winRate: 80},
    Casual: {players: 1, avgLevel: 8, winRate: 71.43}
  },
  regionalMetrics: {
    NA: {revenue: 550, avgPlaytime: 285, players: 2},
    EU: {revenue: 300, avgPlaytime: 250, players: 2},
    ASIA: {revenue: 0, avgPlaytime: 45, players: 2}
  },
  monetizationMetrics: {
    ARPU: 141.67,
    conversionRate: 66.67,
    totalRevenue: 850,
    avgSpendingPerPayer: 212.5
  },
  gameBalance: {
    overallWinRate: 67.37,
    levelDistribution: {
      "1-20": 3,
      "21-40": 2,
      "41-60": 0,
      "60+": 1
    }
  },
  retentionIndicators: {
    playtimePerLevel: 8.85,
    spendingEngagementRatio: 4.42,
    highEngagementPlayers: 2
  }
}
*/

/*
Question 20: Climate Data Analysis
Context: Environmental monitoring system needs climate trend analysis, anomaly detection, and regional comparisons.
Input:
*/
const climateData = [
  {stationId: "ST001", region: "Arctic", date: "2026-01-15", temperature: -15, humidity: 65, windSpeed: 25, precipitation: 5},
  {stationId: "ST002", region: "Temperate", date: "2026-01-15", temperature: 8, humidity: 70, windSpeed: 15, precipitation: 12},
  {stationId: "ST003", region: "Tropical", date: "2026-01-15", temperature: 28, humidity: 85, windSpeed: 10, precipitation: 25},
  {stationId: "ST001", region: "Arctic", date: "2026-01-16", temperature: -12, humidity: 68, windSpeed: 30, precipitation: 8},
  {stationId: "ST002", region: "Temperate", date: "2026-01-16", temperature: 12, humidity: 65, windSpeed: 20, precipitation: 8},
  {stationId: "ST003", region: "Tropical", date: "2026-01-16", temperature: 32, humidity: 90, windSpeed: 8, precipitation: 30},
  {stationId: "ST004", region: "Desert", date: "2026-01-15", temperature: 35, humidity: 20, windSpeed: 5, precipitation: 0},
  {stationId: "ST004", region: "Desert", date: "2026-01-16", temperature: 38, humidity: 18, windSpeed: 8, precipitation: 0}
];

/*
Your Task: Use reduce to calculate:
- regionalAverages: average temperature, humidity, wind speed, precipitation per region
- temperatureRanges: min, max, range per region
- weatherPatterns: identify extreme conditions (temp >35°C or <-10°C, wind >25 mph)
- dailyTrends: compare day-to-day changes in temperature across regions
- climateClassification: categorize regions by temperature and precipitation patterns
- anomalyDetection: identify readings that deviate significantly from regional averages

Expected Output:
{
  regionalAverages: {
    Arctic: {temperature: -13.5, humidity: 66.5, windSpeed: 27.5, precipitation: 6.5},
    Temperate: {temperature: 10, humidity: 67.5, windSpeed: 17.5, precipitation: 10},
    Tropical: {temperature: 30, humidity: 87.5, windSpeed: 9, precipitation: 27.5},
    Desert: {temperature: 36.5, humidity: 19, windSpeed: 6.5, precipitation: 0}
  },
  temperatureRanges: {
    Arctic: {min: -15, max: -12, range: 3},
    Temperate: {min: 8, max: 12, range: 4},
    Tropical: {min: 28, max: 32, range: 4},
    Desert: {min: 35, max: 38, range: 3}
  },
  weatherPatterns: {
    extremeHeat: 2,
    extremeCold: 2,
    highWind: 2,
    extremeConditions: ["ST001-2026-01-15", "ST001-2026-01-16", "ST004-2026-01-15", "ST004-2026-01-16"]
  },
  dailyTrends: {
    Arctic: {temperatureChange: 3},
    Temperate: {temperatureChange: 4},
    Tropical: {temperatureChange: 4},
    Desert: {temperatureChange: 3}
  },
  climateClassification: {
    Arctic: "Cold-Dry",
    Temperate: "Mild-Moderate",
    Tropical: "Hot-Humid",
    Desert: "Hot-Arid"
  },
  anomalyDetection: {
    temperatureAnomalies: 0,
    humidityAnomalies: 0,
    windAnomalies: 2,
    precipitationAnomalies: 0
  }
}
*/