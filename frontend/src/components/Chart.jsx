import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    tension: 0.4,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Monthly Expenses Data",
        },
    },
};

const labels = [
    "Jul",
    "Aug",
    "Sep",
    "Oct"
];

export const data = {
    labels,
    datasets: [
        {
            label: "Spendings",
            data: [80000, 36000, 24000, 50000],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        }
    ],
};

export default function App() {
    return <Line options={options} data={data} />;
}