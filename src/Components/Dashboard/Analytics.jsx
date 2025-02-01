import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import "./Analytics.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const Analytics = () => {
    const analyticsData = {
        activeUsers: 5556,
        totalBuyers: 3480,
        totalAds: 459,
        totalSellers: 2924,
        totalEarnings: "₹12,423,48.00"
    };

    const companyGrowthData = {
        labels: Array.from({ length: 28 }, (_, i) => i + 1),
        datasets: [
            {
                label: "Company Growth",
                data: [10, 20, 30, 50, 60, 90, 100, 130, 160, 200, 230, 250, 280, 300, 340, 380, 420, 450, 480, 520, 550, 590, 620, 650, 690, 720, 750, 800],
                backgroundColor: "rgba(25, 159, 177, 0.6)",
                borderColor: "#199FB1",
                borderWidth: 2
            }
        ]
    };

    return (
        <div className="analytics-container">
            <h2>Analytics</h2>

            {/* Company Growth */}
            <div className="company-growth">
                <h3>Company Growth</h3>
                <Bar data={companyGrowthData} options={{ maintainAspectRatio: false }} />
            </div>

            {/* Total Earnings */}
            <div className="total-earnings">
                <h3>Total Earnings</h3>
                <p>{analyticsData.totalEarnings}</p>
            </div>

            {/* Analytics Cards */}
            <div className="analytics-cards">
                <div className="analytics-card">
                    <h3>Active Users</h3>
                    <p>{analyticsData.activeUsers}</p>
                </div>

                <div className="analytics-card">
                    <h3>Total Buyers</h3>
                    <p>{analyticsData.totalBuyers}</p>
                </div>

                <div className="analytics-card">
                    <h3>Total Ads</h3>
                    <p>{analyticsData.totalAds}</p>
                </div>

                <div className="analytics-card">
                    <h3>Total Sellers</h3>
                    <p>{analyticsData.totalSellers}</p>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
