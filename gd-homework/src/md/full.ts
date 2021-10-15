/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2021-10-14T11:17:37.328Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import {
    newAttribute,
    newMeasure,
    IAttribute,
    IMeasure,
    IMeasureDefinition,
    idRef,
} from "@gooddata/sdk-model";

/**
 * Attribute Title: Campaign Category
 * Attribute ID: attr.campaign_channels.category
 */
export const CampaignCategory: IAttribute = newAttribute("label.campaign_channels.category");
/**
 * Attribute Title: Campaign Channel ID
 * Attribute ID: attr.campaign_channels.campaign_channel_id
 */
export const CampaignChannelID: IAttribute = newAttribute("label.campaign_channels.campaign_channel_id");
/**
 * Attribute Title: Campaign ID
 * Attribute ID: attr.campaigns.campaign_id
 */
export const CampaignID: IAttribute = newAttribute("label.campaigns.campaign_id");
/**
 * Attribute Title: Campaign Name
 * Attribute ID: attr.campaigns.campaign_name
 */
export const CampaignName: IAttribute = newAttribute("label.campaigns.campaign_name");
/**
 * Attribute Title: Campaign Type
 * Attribute ID: attr.campaign_channels.type
 */
export const CampaignType: IAttribute = newAttribute("label.campaign_channels.type");
/**
 * Attribute Title: Customer City
 * Attribute ID: attr.customers.customercity
 */
export const CustomerCity = {
    /**
     * Display Form Title: Customer City
     * Display Form ID: label.customers.customercity
     */
    Default: newAttribute("label.customers.customercity"),
    /**
     * Display Form Title: Customer City Coordinates
     * Display Form ID: label.customers.customercity.customercitycoordinates
     */ Coordinates: newAttribute("label.customers.customercity.customercitycoordinates"),
};
/**
 * Attribute Title: Customer ID
 * Attribute ID: attr.csv_order_lines.customer_id
 */
export const CustomerID: IAttribute = newAttribute("label.csv_order_lines.customer_id");
/**
 * Attribute Title: Customer Name
 * Attribute ID: attr.csv_order_lines.customer_name
 */
export const CustomerName: IAttribute = newAttribute("label.csv_order_lines.customer_name");
/**
 * Attribute Title: Customer Region
 * Attribute ID: attr.customers.customerregion
 */
export const CustomerRegion: IAttribute = newAttribute("label.customers.customerregion");
/**
 * Attribute Title: Customer State
 * Attribute ID: attr.csv_order_lines.state
 */
export const CustomerState: IAttribute = newAttribute("label.csv_order_lines.state");
/**
 * Attribute Title: Order ID
 * Attribute ID: attr.csv_order_lines.order_id
 */
export const OrderID: IAttribute = newAttribute("label.csv_order_lines.order_id");
/**
 * Attribute Title: Order Line ID
 * Attribute ID: attr.csv_order_lines.order_line_id
 */
export const OrderLineID: IAttribute = newAttribute("label.csv_order_lines.order_line_id");
/**
 * Attribute Title: Order Status
 * Attribute ID: attr.csv_order_lines.order_status
 */
export const OrderStatus: IAttribute = newAttribute("label.csv_order_lines.order_status");
/**
 * Attribute Title: Product
 * Attribute ID: attr.csv_order_lines.product_name
 */
export const Product = {
    /**
     * Display Form Title: Product
     * Display Form ID: label.csv_order_lines.product_name
     */
    Default: newAttribute("label.csv_order_lines.product_name"),
    /**
     * Display Form Title: Product Hyperlink
     * Display Form ID: label.products.product_name.producthyperlink
     */ Hyperlink: newAttribute("label.products.product_name.producthyperlink"),
};
/**
 * Attribute Title: Product Category
 * Attribute ID: attr.csv_order_lines.category
 */
export const ProductCategory: IAttribute = newAttribute("label.csv_order_lines.category");
/**
 * Attribute Title: Product ID
 * Attribute ID: attr.csv_order_lines.product_id
 */
export const ProductID: IAttribute = newAttribute("label.csv_order_lines.product_id");
/**
 * Metric Title: # of Active Customers
 * Metric ID: abwjvygedcPi
 * Metric Type: MAQL Metric
 */
export const NrOfActiveCustomers: IMeasure<IMeasureDefinition> = newMeasure(idRef("abwjvygedcPi", "measure"));
/**
 * Metric Title: # of Orders
 * Metric ID: abJgSd1seIjM
 * Metric Type: MAQL Metric
 */
export const NrOfOrders: IMeasure<IMeasureDefinition> = newMeasure(idRef("abJgSd1seIjM", "measure"));
/**
 * Metric Title: # of Top Customers
 * Metric ID: acgjsXfgao3v
 * Metric Type: MAQL Metric
 */
export const NrOfTopCustomers: IMeasure<IMeasureDefinition> = newMeasure(idRef("acgjsXfgao3v", "measure"));
/**
 * Metric Title: # of Valid Orders
 * Metric ID: abjgThcwhbxs
 * Metric Type: MAQL Metric
 */
export const NrOfValidOrders: IMeasure<IMeasureDefinition> = newMeasure(idRef("abjgThcwhbxs", "measure"));
/**
 * Metric Title: % Revenue
 * Metric ID: acSjvKiha5pe
 * Metric Type: MAQL Metric
 */
export const PercentRevenue: IMeasure<IMeasureDefinition> = newMeasure(idRef("acSjvKiha5pe", "measure"));
/**
 * Metric Title: % Revenue from Top 10 Customers
 * Metric ID: ab0jPyBdgzqH
 * Metric Type: MAQL Metric
 */
export const PercentRevenueFromTop10Customers: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("ab0jPyBdgzqH", "measure"),
);
/**
 * Metric Title: % Revenue from Top 10 Products
 * Metric ID: acIjNnOUcbLJ
 * Metric Type: MAQL Metric
 */
export const PercentRevenueFromTop10Products: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("acIjNnOUcbLJ", "measure"),
);
/**
 * Metric Title: % Revenue from Top 10% Customers
 * Metric ID: adkjNCxybKzk
 * Metric Type: MAQL Metric
 */
export const PercentRevenueFromTop10PercentCustomers: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("adkjNCxybKzk", "measure"),
);
/**
 * Metric Title: % Revenue from Top 10% Products
 * Metric ID: aahjVDDGeOcC
 * Metric Type: MAQL Metric
 */
export const PercentRevenueFromTop10PercentProducts: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aahjVDDGeOcC", "measure"),
);
/**
 * Metric Title: % Revenue in Category
 * Metric ID: aaLjInK7d1HW
 * Metric Type: MAQL Metric
 */
export const PercentRevenueInCategory: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aaLjInK7d1HW", "measure"),
);
/**
 * Metric Title: % Revenue per Product
 * Metric ID: aa7jz0TWdM1j
 * Metric Type: MAQL Metric
 */
export const PercentRevenuePerProduct: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aa7jz0TWdM1j", "measure"),
);
/**
 * Metric Title: Campaign Spend
 * Metric ID: aaFlIZPDgumO
 * Metric Type: MAQL Metric
 */
export const CampaignSpend: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaFlIZPDgumO", "measure"));
/**
 * Metric Title: Order Amount
 * Metric ID: ab4gQSe3iBrr
 * Metric Type: MAQL Metric
 */
export const OrderAmount: IMeasure<IMeasureDefinition> = newMeasure(idRef("ab4gQSe3iBrr", "measure"));
/**
 * Metric Title: Revenue
 * Metric ID: aaZgQ8Oqib25
 * Metric Type: MAQL Metric
 */
export const Revenue: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaZgQ8Oqib25", "measure"));
/**
 * Metric Title: Revenue (Clothing)
 * Metric ID: afcNseOVbs5T
 * Metric Type: MAQL Metric
 */
export const RevenueClothing: IMeasure<IMeasureDefinition> = newMeasure(idRef("afcNseOVbs5T", "measure"));
/**
 * Metric Title: Revenue (Electronic)
 * Metric ID: aeENuVEEiDt1
 * Metric Type: MAQL Metric
 */
export const RevenueElectronic: IMeasure<IMeasureDefinition> = newMeasure(idRef("aeENuVEEiDt1", "measure"));
/**
 * Metric Title: Revenue (Home)
 * Metric ID: afvNfa3ae3ll
 * Metric Type: MAQL Metric
 */
export const RevenueHome: IMeasure<IMeasureDefinition> = newMeasure(idRef("afvNfa3ae3ll", "measure"));
/**
 * Metric Title: Revenue (Midwest)
 * Metric ID: aafleEPYgYPr
 * Metric Type: MAQL Metric
 */
export const RevenueMidwest: IMeasure<IMeasureDefinition> = newMeasure(idRef("aafleEPYgYPr", "measure"));
/**
 * Metric Title: Revenue (Northeast)
 * Metric ID: acwkS3VZg9Ru
 * Metric Type: MAQL Metric
 */
export const RevenueNortheast: IMeasure<IMeasureDefinition> = newMeasure(idRef("acwkS3VZg9Ru", "measure"));
/**
 * Metric Title: Revenue (Outdoor)
 * Metric ID: afFNgEAjcTuU
 * Metric Type: MAQL Metric
 */
export const RevenueOutdoor: IMeasure<IMeasureDefinition> = newMeasure(idRef("afFNgEAjcTuU", "measure"));
/**
 * Metric Title: Revenue (South)
 * Metric ID: acIkPctydD25
 * Metric Type: MAQL Metric
 */
export const RevenueSouth: IMeasure<IMeasureDefinition> = newMeasure(idRef("acIkPctydD25", "measure"));
/**
 * Metric Title: Revenue (West)
 * Metric ID: aaTlb39sefZK
 * Metric Type: MAQL Metric
 */
export const RevenueWest: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaTlb39sefZK", "measure"));
/**
 * Metric Title: Revenue / Top 10
 * Metric ID: abejI8QfeQfs
 * Metric Type: MAQL Metric
 */
export const RevenueTop10: IMeasure<IMeasureDefinition> = newMeasure(idRef("abejI8QfeQfs", "measure"));
/**
 * Metric Title: Revenue / Top 10%
 * Metric ID: ab1jONzgezQt
 * Metric Type: MAQL Metric
 */
export const RevenueTop10Percent: IMeasure<IMeasureDefinition> = newMeasure(idRef("ab1jONzgezQt", "measure"));
/**
 * Metric Title: Revenue per Customer
 * Metric ID: aaEjvRpdbi2z
 * Metric Type: MAQL Metric
 */
export const RevenuePerCustomer: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaEjvRpdbi2z", "measure"));
/**
 * Metric Title: Revenue per Dollar Spent
 * Metric ID: aaKlIuWsfsES
 * Metric Type: MAQL Metric
 */
export const RevenuePerDollarSpent: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aaKlIuWsfsES", "measure"),
);
/**
 * Metric Title: Target Quarter Revenue
 * Metric ID: adqRcst5d10N
 * Metric Type: MAQL Metric
 */
export const TargetQuarterRevenue: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("adqRcst5d10N", "measure"),
);
/**
 * Metric Title: Total Quarter Revenue Previous Year
 * Metric ID: ac4RcLfDaVGC
 * Metric Type: MAQL Metric
 */
export const TotalQuarterRevenuePreviousYear: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("ac4RcLfDaVGC", "measure"),
);
/**
 * Metric Title: Total Revenue
 * Metric ID: abljxJ9HatLT
 * Metric Type: MAQL Metric
 */
export const TotalRevenue: IMeasure<IMeasureDefinition> = newMeasure(idRef("abljxJ9HatLT", "measure"));
/**
 * Metric Title: Total Revenue (No Filters)
 * Metric ID: aa9jyo8Rc8gy
 * Metric Type: MAQL Metric
 */
export const TotalRevenueNoFilters: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aa9jyo8Rc8gy", "measure"),
);
/**
 * Metric Title: Total Revenue This Quarter
 * Metric ID: aceRa2RVaVEJ
 * Metric Type: MAQL Metric
 */
export const TotalRevenueThisQuarter: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aceRa2RVaVEJ", "measure"),
);
/**
 * Fact Title: Budget
 * Fact ID: fact.campaign_channels.budget
 */
export const Budget = {
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: fact.csv_order_lines.price
 */
export const Price = {
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: fact.csv_order_lines.quantity
 */
export const Quantity = {
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: fact.campaign_channels.spend
 */
export const Spend = {
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("runsum")),
};
/**
 * Attribute Title: Year (Date)
 * Attribute ID: date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateYear: IAttribute = newAttribute("date.year.default");
/**
 * Attribute Title: Quarter (Date)
 * Attribute ID: date.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarter: IAttribute = newAttribute("date.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date)
 * Attribute ID: date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date)
     * Display Form ID: date.week.wk_year
     */
    WeekNrYear: newAttribute("date.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Date)
     * Display Form ID: date.week.starting
     */ WeekStarting: newAttribute("date.week.starting"),
    /**
     * Display Form Title: From - To (Date)
     * Display Form ID: date.week.from_to
     */ FromTo: newAttribute("date.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date)
     * Display Form ID: date.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("date.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
     * Display Form ID: date.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("date.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date)
     * Display Form ID: date.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("date.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date)
 * Attribute ID: date.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekSunSat: IAttribute = newAttribute("date.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date)
 * Attribute ID: date.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekSunSatOfQtr: IAttribute = newAttribute("date.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date)
 * Attribute ID: date.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date)
     * Display Form ID: date.euweek.wk_year
     */
    WeekNrYear: newAttribute("date.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Date)
     * Display Form ID: date.euweek.starting
     */ WeekStarting: newAttribute("date.euweek.starting"),
    /**
     * Display Form Title: From - To (Date)
     * Display Form ID: date.euweek.from_to
     */ FromTo: newAttribute("date.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date)
 * Attribute ID: date.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekMonSun: IAttribute = newAttribute("date.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date)
 * Attribute ID: date.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekMonSunOfQtr: IAttribute = newAttribute("date.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Date)
 * Attribute ID: date.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonth = {
    /**
     * Display Form Title: Short (Jan) (Date)
     * Display Form ID: date.month.in.year.short
     */
    Short: newAttribute("date.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Date)
     * Display Form ID: date.month.in.year.long
     */ Long: newAttribute("date.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Date)
     * Display Form ID: date.month.in.year.number
     */ Number: newAttribute("date.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date)
     * Display Form ID: date.month.in.year.m_q
     */ MQ: newAttribute("date.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Date)
 * Attribute ID: date.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthOfQuarter: IAttribute = newAttribute("date.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Date)
 * Attribute ID: date.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfYear: IAttribute = newAttribute("date.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date)
 * Attribute ID: date.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date)
     * Display Form ID: date.day.in.week.short
     */
    Short: newAttribute("date.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Date)
     * Display Form ID: date.day.in.week.long
     */ Long: newAttribute("date.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Date)
     * Display Form ID: date.day.in.week.number
     */ Number: newAttribute("date.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date)
 * Attribute ID: date.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date)
     * Display Form ID: date.day.in.euweek.short
     */
    Short: newAttribute("date.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Date)
     * Display Form ID: date.day.in.euweek.long
     */ Long: newAttribute("date.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Date)
     * Display Form ID: date.day.in.euweek.number
     */ Number: newAttribute("date.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Date)
 * Attribute ID: date.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfQuarter: IAttribute = newAttribute("date.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Date)
 * Attribute ID: date.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfMonth: IAttribute = newAttribute("date.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Date)
 * Attribute ID: date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterYear: IAttribute = newAttribute("date.quarter.short_us");
/**
 * Attribute Title: Month/Year (Date)
 * Attribute ID: date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date)
     * Display Form ID: date.month.short
     */
    Short: newAttribute("date.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Date)
     * Display Form ID: date.month.long
     */ Long: newAttribute("date.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Date)
     * Display Form ID: date.month.number
     */ Number: newAttribute("date.month.number"),
};
/**
 * Attribute Title: Date (Date)
 * Attribute ID: date.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Date)
     * Display Form ID: date.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("date.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date)
     * Display Form ID: date.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("date.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date)
     * Display Form ID: date.date.day.us.m_d_yy
     */ MDYy: newAttribute("date.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
     * Display Form ID: date.date.day.us.long
     */ Long: newAttribute("date.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date)
     * Display Form ID: date.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("date.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date)
     * Display Form ID: date.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("date.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Date)
 * Attribute ID: date.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateUSWeekYear: IAttribute = newAttribute("date.year.for.week.number");
/**
 * Attribute Title: US Week Quarter (Date)
 * Attribute ID: date.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateUSWeekQuarter: IAttribute = newAttribute("date.quarter.for.week.number");
/**
 * Attribute Title: EU Week Year (Date)
 * Attribute ID: date.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateEUWeekYear: IAttribute = newAttribute("date.year.for.euweek.number");
/**
 * Attribute Title: EU Week Quarter (Date)
 * Attribute ID: date.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateEUWeekQuarter: IAttribute = newAttribute("date.quarter.for.euweek.number");
/** Available Date Data Sets */
export const DateDatasets = {
    /**
     * Date Data Set Title: Date (Date)
     * Date Data Set ID: date.dataset.dt
     */
    Date: {
        ref: idRef("date.dataset.dt", "dataSet"),
        identifier: "date.dataset.dt",
        /**
         * Date Attribute: Year (Date)
         * Date Attribute ID: date.year
         */ Year: {
            ref: idRef("date.year", "attribute"),
            identifier: "date.year",
            /**
             * Display Form Title: Year (Date)
             * Display Form ID: date.year.default
             */ Default: newAttribute("date.year.default"),
        },
        /**
         * Date Attribute: Quarter (Date)
         * Date Attribute ID: date.quarter.in.year
         */ Quarter: {
            ref: idRef("date.quarter.in.year", "attribute"),
            identifier: "date.quarter.in.year",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.quarter.in.year.default
             */ Default: newAttribute("date.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date)
         * Date Attribute ID: date.week
         */ WeekSunSatYear: {
            ref: idRef("date.week", "attribute"),
            identifier: "date.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date)
             * Display Form ID: date.week.wk_year
             */ WeekNrYear: newAttribute("date.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Date)
             * Display Form ID: date.week.starting
             */ WeekStarting: newAttribute("date.week.starting"),
            /**
             * Display Form Title: From - To (Date)
             * Display Form ID: date.week.from_to
             */ FromTo: newAttribute("date.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date)
             * Display Form ID: date.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("date.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
             * Display Form ID: date.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("date.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date)
             * Display Form ID: date.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("date.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date)
         * Date Attribute ID: date.week.in.year
         */ WeekSunSat: {
            ref: idRef("date.week.in.year", "attribute"),
            identifier: "date.week.in.year",
            /**
             * Display Form Title: Number US (Date)
             * Display Form ID: date.week.in.year.number_us
             */ NumberUS: newAttribute("date.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date)
         * Date Attribute ID: date.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date.week.in.quarter", "attribute"),
            identifier: "date.week.in.quarter",
            /**
             * Display Form Title: Number US (Date)
             * Display Form ID: date.week.in.quarter.number_us
             */ NumberUS: newAttribute("date.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date)
         * Date Attribute ID: date.euweek
         */ WeekMonSunYear: {
            ref: idRef("date.euweek", "attribute"),
            identifier: "date.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date)
             * Display Form ID: date.euweek.wk_year
             */ WeekNrYear: newAttribute("date.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Date)
             * Display Form ID: date.euweek.starting
             */ WeekStarting: newAttribute("date.euweek.starting"),
            /**
             * Display Form Title: From - To (Date)
             * Display Form ID: date.euweek.from_to
             */ FromTo: newAttribute("date.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date)
         * Date Attribute ID: date.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date.euweek.in.year", "attribute"),
            identifier: "date.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date)
             * Display Form ID: date.euweek.in.year.number_eu
             */ NumberEU: newAttribute("date.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date)
         * Date Attribute ID: date.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date.euweek.in.quarter", "attribute"),
            identifier: "date.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date)
             * Display Form ID: date.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("date.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Date)
         * Date Attribute ID: date.month.in.year
         */ Month: {
            ref: idRef("date.month.in.year", "attribute"),
            identifier: "date.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date)
             * Display Form ID: date.month.in.year.short
             */ Short: newAttribute("date.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Date)
             * Display Form ID: date.month.in.year.long
             */ Long: newAttribute("date.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Date)
             * Display Form ID: date.month.in.year.number
             */ Number: newAttribute("date.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date)
             * Display Form ID: date.month.in.year.m_q
             */ MQ: newAttribute("date.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date)
         * Date Attribute ID: date.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date.month.in.quarter", "attribute"),
            identifier: "date.month.in.quarter",
            /**
             * Display Form Title: Number (Date)
             * Display Form ID: date.month.in.quarter.number
             */ Number: newAttribute("date.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Date)
         * Date Attribute ID: date.day.in.year
         */ DayOfYear: {
            ref: idRef("date.day.in.year", "attribute"),
            identifier: "date.day.in.year",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.day.in.year.default
             */ Default: newAttribute("date.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date)
         * Date Attribute ID: date.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date.day.in.week", "attribute"),
            identifier: "date.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date)
             * Display Form ID: date.day.in.week.short
             */ Short: newAttribute("date.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Date)
             * Display Form ID: date.day.in.week.long
             */ Long: newAttribute("date.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Date)
             * Display Form ID: date.day.in.week.number
             */ Number: newAttribute("date.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date)
         * Date Attribute ID: date.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date.day.in.euweek", "attribute"),
            identifier: "date.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date)
             * Display Form ID: date.day.in.euweek.short
             */ Short: newAttribute("date.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Date)
             * Display Form ID: date.day.in.euweek.long
             */ Long: newAttribute("date.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Date)
             * Display Form ID: date.day.in.euweek.number
             */ Number: newAttribute("date.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Date)
         * Date Attribute ID: date.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date.day.in.quarter", "attribute"),
            identifier: "date.day.in.quarter",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.day.in.quarter.default
             */ Default: newAttribute("date.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Date)
         * Date Attribute ID: date.day.in.month
         */ DayOfMonth: {
            ref: idRef("date.day.in.month", "attribute"),
            identifier: "date.day.in.month",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.day.in.month.default
             */ Default: newAttribute("date.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Date)
         * Date Attribute ID: date.quarter
         */ QuarterYear: {
            ref: idRef("date.quarter", "attribute"),
            identifier: "date.quarter",
            /**
             * Display Form Title: US Short (Date)
             * Display Form ID: date.quarter.short_us
             */ USShort: newAttribute("date.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Date)
         * Date Attribute ID: date.month
         */ MonthYear: {
            ref: idRef("date.month", "attribute"),
            identifier: "date.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date)
             * Display Form ID: date.month.short
             */ Short: newAttribute("date.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Date)
             * Display Form ID: date.month.long
             */ Long: newAttribute("date.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Date)
             * Display Form ID: date.month.number
             */ Number: newAttribute("date.month.number"),
        },
        /**
         * Date Attribute: Date (Date)
         * Date Attribute ID: date.date
         */ Date: {
            ref: idRef("date.date", "attribute"),
            identifier: "date.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date)
             * Display Form ID: date.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("date.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date)
             * Display Form ID: date.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("date.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date)
             * Display Form ID: date.date.day.us.m_d_yy
             */ MDYy: newAttribute("date.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
             * Display Form ID: date.date.day.us.long
             */ Long: newAttribute("date.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date)
             * Display Form ID: date.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("date.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date)
             * Display Form ID: date.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("date.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Date)
         * Date Attribute ID: date.year.for.week
         */ USWeekYear: {
            ref: idRef("date.year.for.week", "attribute"),
            identifier: "date.year.for.week",
            /**
             * Display Form Title: Week Year (Date)
             * Display Form ID: date.year.for.week.number
             */ WeekYear: newAttribute("date.year.for.week.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Date)
         * Date Attribute ID: date.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("date.quarter.for.week", "attribute"),
            identifier: "date.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Date)
             * Display Form ID: date.quarter.for.week.number
             */ WeekQuarter: newAttribute("date.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Date)
         * Date Attribute ID: date.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("date.year.for.euweek", "attribute"),
            identifier: "date.year.for.euweek",
            /**
             * Display Form Title: Week Year (Date)
             * Display Form ID: date.year.for.euweek.number
             */ WeekYear: newAttribute("date.year.for.euweek.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Date)
         * Date Attribute ID: date.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("date.quarter.for.euweek", "attribute"),
            identifier: "date.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Date)
             * Display Form ID: date.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("date.quarter.for.euweek.number"),
        },
    },
};
export const Insights = {
    /**
     * Insight Title: % Revenue per Product by Customer and Category
     * Insight ID: aaLjHIqDdLyg
     */
    PercentRevenuePerProductByCustomerAndCategory: "aaLjHIqDdLyg",
    /**
     * Insight Title: Top X Demo
     * Insight ID: aaejVzt7co9Z
     */ TopXDemo: "aaejVzt7co9Z",
    /**
     * Insight Title: Revenue by Product
     * Insight ID: aaOjWocLe5aZ
     */ RevenueByProduct: "aaOjWocLe5aZ",
    /**
     * Insight Title: Revenue per $ vs Spend by Campaign
     * Insight ID: aaHlJW8Piiyw
     */ RevenuePer$VsSpendByCampaign: "aaHlJW8Piiyw",
    /**
     * Insight Title: Top 10 Products
     * Insight ID: aafs9dQFb85X
     */ Top10Products: "aafs9dQFb85X",
    /**
     * Insight Title: Revenue Trend
     * Insight ID: aactay7Pgrwu
     */ RevenueTrend: "aactay7Pgrwu",
    /**
     * Insight Title: Customers Trend
     * Insight ID: aautd5gAd4OE
     */ CustomersTrend: "aautd5gAd4OE",
    /**
     * Insight Title: Product Categories Pie Chart
     * Insight ID: aahthxJriFZ8
     */ ProductCategoriesPieChart: "aahthxJriFZ8",
    /**
     * Insight Title: Top 10 Customers
     * Insight ID: aaQtejsQd5X6
     */ Top10Customers: "aaQtejsQd5X6",
    /**
     * Insight Title: Revenue and Quantity by Product and Category
     * Insight ID: aexGsWaGfAa2
     */ RevenueAndQuantityByProductAndCategory: "aexGsWaGfAa2",
    /**
     * Insight Title: Top 10 Customers
     * Insight ID: agifB6TsgdrR
     */ Top10Customers_1: "agifB6TsgdrR",
    /**
     * Insight Title: Product Saleability
     * Insight ID: ab8nXxb6fbUE
     */ ProductSaleability: "ab8nXxb6fbUE",
    /**
     * Insight Title: Revenue by Category Trend
     * Insight ID: adXnWX29aQNR
     */ RevenueByCategoryTrend: "adXnWX29aQNR",
    /**
     * Insight Title: Product Revenue Comparison (over previous period)
     * Insight ID: adwnWKSlaPYU
     */ ProductRevenueComparisonOverPreviousPeriod: "adwnWKSlaPYU",
    /**
     * Insight Title: Campaign Spend
     * Insight ID: adGnXZr9fbYZ
     */ CampaignSpend_1: "adGnXZr9fbYZ",
    /**
     * Insight Title: Product Breakdown
     * Insight ID: abJNsa4nbrNC
     */ ProductBreakdown: "abJNsa4nbrNC",
    /**
     * Insight Title: Percentage of Customers by Region
     * Insight ID: aesTLykVhI02
     */ PercentageOfCustomersByRegion: "aesTLykVhI02",
    /**
     * Insight Title: Total Spend to Budget Chart
     * Insight ID: aa7zzgyYc9BV
     */ TotalSpendToBudgetChart: "aa7zzgyYc9BV",
    /**
     * Insight Title: Revenue and Customer Distribution in the US
     * Insight ID: aa1RGB48dqil
     */ RevenueAndCustomerDistributionInTheUS: "aa1RGB48dqil",
    /**
     * Insight Title: Total Quarter Revenue to Target
     * Insight ID: ab8RbNlUd2KM
     */ TotalQuarterRevenueToTarget: "ab8RbNlUd2KM",
    /**
     * Insight Title: Customer Order History Detail
     * Insight ID: acrkSpkdhp6W
     */ CustomerOrderHistoryDetail: "acrkSpkdhp6W",
    /**
     * Insight Title: Order Detail
     * Insight ID: acklnHmzcsZ0
     */ OrderDetail: "acklnHmzcsZ0",
    /**
     * Insight Title: Returning Customers
     * Insight ID: aaqlzfIqbjCZ
     */ ReturningCustomers: "aaqlzfIqbjCZ",
    /**
     * Insight Title: Customer Distribution
     * Insight ID: ab9kR2ZBhaqM
     */ CustomerDistribution: "ab9kR2ZBhaqM",
    /**
     * Insight Title: Campaign Budget
     * Insight ID: aaTlbQHfde8b
     */ CampaignBudget: "aaTlbQHfde8b",
    /**
     * Insight Title: Campaign Revenue Detail Breakdown
     * Insight ID: aalloglHc6Cv
     */ CampaignRevenueDetailBreakdown: "aalloglHc6Cv",
    /**
     * Insight Title: Revenue per $ vs Budget by Campaign
     * Insight ID: aayliajWdJIv
     */ RevenuePer$VsBudgetByCampaign: "aayliajWdJIv",
};
export const Dashboards = {
    /**
     * Dashboard Title: 1.  Overview
     * Dashboard ID: aaAxaLgZdXxf
     */
    _1Overview: "aaAxaLgZdXxf",
    /**
     * Dashboard Title: 2. Product Details
     * Dashboard ID: adJns8Jacu8W
     */ _2ProductDetails: "adJns8Jacu8W",
    /**
     * Dashboard Title: 3. Customer Details
     * Dashboard ID: acD797eDcNze
     */ _3CustomerDetails: "acD797eDcNze",
    /**
     * Dashboard Title: 4. Campaign Details
     * Dashboard ID: adi8ao7sdiNb
     */ _4CampaignDetails: "adi8ao7sdiNb",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aaTI3migihpI
     */ Untitled: "aaTI3migihpI",
};
