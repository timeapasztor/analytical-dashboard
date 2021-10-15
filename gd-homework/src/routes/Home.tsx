import React, { useState } from "react";
import Page from "../components/Page";
import "@gooddata/sdk-ui-charts/styles/css/main.css";
import { LineChart } from "@gooddata/sdk-ui-charts";
import { ErrorComponent, Execute, LoadingComponent } from "@gooddata/sdk-ui";
import * as Md from "../md/full";
import {
    DateFilter,
    DateFilterHelpers,
    DateFilterOption,
    IDateFilterOptionsByType,
} from "@gooddata/sdk-ui-filters";
import { DateFilterGranularity } from "@gooddata/sdk-backend-spi";

const measures = [Md.Revenue];

const availableGranularities: DateFilterGranularity[] = ["GDC.time.year"];

const defaultDateFilterOptions: IDateFilterOptionsByType = {
    allTime: {
        localIdentifier: "ALL_TIME",
        type: "allTime",
        name: "",
        visible: true,
    },
    absolutePreset: [
        {
            from: "2016-01-01",
            to: "2016-12-31",
            name: "Year 2016",
            localIdentifier: "year2016",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2017-01-01",
            to: "2017-12-31",
            name: "Year 2017",
            localIdentifier: "year2017",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2018-01-01",
            to: "2018-12-31",
            name: "Year 2018",
            localIdentifier: "year2018",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2019-01-01",
            to: "2019-12-31",
            name: "Year 2019",
            localIdentifier: "year2019",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2020-01-01",
            to: "2020-12-31",
            name: "Year 2020",
            localIdentifier: "year2020",
            visible: true,
            type: "absolutePreset",
        },
    ],
};

interface IDateFilterComponentExampleState {
    selectedFilterOption: DateFilterOption;
    excludeCurrentPeriod: boolean;
}

const dateFilterContainerStyle = { width: 200 };
const columnChartContainerStyle = {
    height: "450px",
    width: "70%",
    display: "inline-block",
    marginRight: "70px",
};
const style = { border: "1px black solid" };

const CustomErrorComponent = ({ error }: { error: any }) => (
    <div>
        <ErrorComponent
            message="There was an error getting your execution"
            description={JSON.stringify(error, null, 2)}
        />
    </div>
);

const CustomLoadingComponent = () => (
    <div>
        <div className="gd-message progress">
            <div className="gd-message-text">Loading…</div>
        </div>
        <LoadingComponent />
    </div>
);

const Home: React.FC = () => {
    const [state, setState] = useState<IDateFilterComponentExampleState>({
        selectedFilterOption: defaultDateFilterOptions.allTime!,
        excludeCurrentPeriod: false,
    });

    const onApply = (selectedFilterOption: DateFilterOption, excludeCurrentPeriod: boolean) => {
        setState({
            selectedFilterOption,
            excludeCurrentPeriod,
        });
    };

    const dateFilter = DateFilterHelpers.mapOptionToAfm(
        state.selectedFilterOption,
        Md.DateDatasets.Date.ref,
        state.excludeCurrentPeriod,
    );

    let helper: any = {},
        products: any = [],
        i: string,
        finalMax: any = {},
        finalMin: any = {};
    const renderResult = (slices: any) => {
        slices.forEach((slice: any) => {
            const sliceTitles = slice.sliceTitles();
            helper[sliceTitles] = parseInt(slice.dataPoints()[0].rawValue);

            if (!products.includes(sliceTitles[0])) {
                products.push(sliceTitles[0]);
            }
        });
        products.forEach((product: string) => {
            finalMax[product] = 0;
            for (i in helper) {
                let prefix = i.split(",")[0];
                if (prefix === product) {
                    finalMin[product] = helper[i];
                    return;
                }
            }
        });
        products.forEach((product: string) => {
            for (i in helper) {
                let prefix = i.split(",")[0];
                if (prefix === product) {
                    if (finalMax[product] < helper[i]) {
                        finalMax[product] = helper[i];
                    }
                    if (finalMin[product] > helper[i]) {
                        finalMin[product] = helper[i];
                    }
                }
            }
        });

        return products.map((product: string, index: number) => {
            let minValue = finalMin[product];
            let maxValue = finalMax[product];
            return (
                <tr key={`${product}-${index}`} style={style}>
                    <td style={style}>{product}</td>
                    <td style={style}>{minValue}</td>
                    <td style={style}>{maxValue}</td>
                </tr>
            );
        });
    };

    return (
        <Page>
            <div className="maincontent col dahsboard">
                <div className="dash-header-wrapper">
                    <div className="dash-header">
                        <div className="dash-header-inner">
                            <div className="dash-title-wrapper">
                                <div className="s-dash-title dash-title-static">My Dashboard</div>
                                <div style={dateFilterContainerStyle}>
                                    <DateFilter
                                        excludeCurrentPeriod={state.excludeCurrentPeriod}
                                        selectedFilterOption={state.selectedFilterOption}
                                        filterOptions={defaultDateFilterOptions}
                                        availableGranularities={availableGranularities}
                                        customFilterName="Selected date range"
                                        dateFilterMode="active"
                                        onApply={onApply}
                                    />
                                </div>
                                <div style={columnChartContainerStyle}>
                                    <LineChart
                                        measures={measures}
                                        trendBy={Md.DateDatasets.Date.MonthYear.Short}
                                        segmentBy={Md.Product.Default}
                                        filters={dateFilter ? [dateFilter] : []}
                                    />
                                </div>
                                {dateFilter !== null && (
                                    <div style={{ display: "inline-flex" }}>
                                        <Execute
                                            seriesBy={[Md.Revenue]}
                                            slicesBy={[
                                                Md.Product.Default,
                                                Md.DateDatasets.Date.MonthYear.Short,
                                            ]}
                                            filters={dateFilter ? [dateFilter] : []}
                                            LoadingComponent={CustomLoadingComponent}
                                            ErrorComponent={CustomErrorComponent}
                                        >
                                            {({ result }) => {
                                                const slices = result!
                                                    .data()
                                                    .slices()
                                                    .toArray();
                                                return (
                                                    <table style={style}>
                                                        <tbody>
                                                            <tr style={style}>
                                                                <th>Product</th>
                                                                <th>Min</th>
                                                                <th>Max</th>
                                                            </tr>
                                                            {renderResult(slices)}
                                                        </tbody>
                                                    </table>
                                                );
                                            }}
                                        </Execute>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Home;
