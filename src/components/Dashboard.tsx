import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Users, FileText, CheckCircle } from "lucide-react";
import Logo from "./Logo";

type TeamData = {
    name: string;
    Offers: number;
    Converted: number;
    Lost: number;
};

const Dashboard = () => {
    const [data, setData] = useState<TeamData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setTimeout(() => {
                const dummyData: TeamData[] = [
                    { name: "Nikhil V", Offers: 70, Converted: 45, Lost: 10 },
                    { name: "Priyanka Biswas", Offers: 40, Converted: 20, Lost: 10 },
                    { name: "Nishad Ali", Offers: 30, Converted: 5, Lost: 8 },
                    { name: "Tanzina Ahmed Rickty", Offers: 15, Converted: 10, Lost: 5 },
                    { name: "Ms. Sanfiya", Offers: 60, Converted: 20, Lost: 5 },
                    { name: "Jannatul Ferdous", Offers: 40, Converted: 10, Lost: 15 },
                    { name: "Ms. Rehana", Offers: 25, Converted: 5, Lost: 5 },
                    { name: "Kavya", Offers: 35, Converted: 15, Lost: 10 },
                    { name: "Mustafa", Offers: 50, Converted: 30, Lost: 10 },
                    { name: "Sadiya", Offers: 5, Converted: 1, Lost: 2 },
                    { name: "Laiba", Offers: 25, Converted: 10, Lost: 5 },
                    { name: "Sabin", Offers: 40, Converted: 5, Lost: 10 },
                    { name: "Others", Offers: 10, Converted: 5, Lost: 0 },
                ];
                setData(dummyData);
                setLoading(false);
            }, 1000);
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Header */}
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">
                    <Logo />
                </h1>
                <div className="flex items-center gap-4">
                    <div className="text-sm">admin ▾</div>
                </div>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow p-4">
                    <div className="flex items-center gap-4">
                        <CheckCircle className="text-pink-500" />
                        <div>
                            <h2 className="text-xl font-semibold">292</h2>
                            <p className="text-gray-500 text-sm">Ready to Convert</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow p-4">
                    <div className="flex items-center gap-4">
                        <FileText className="text-blue-500" />
                        <div>
                            <h2 className="text-xl font-semibold">334</h2>
                            <p className="text-gray-500 text-sm">Converted</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow p-4">
                    <div className="flex items-center gap-4">
                        <Users className="text-yellow-500" />
                        <div>
                            <h2 className="text-xl font-semibold">2885</h2>
                            <p className="text-gray-500 text-sm">Applications</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Performance Summary */}
            <div className="bg-white rounded-xl shadow p-4">
                <h3 className="text-lg font-semibold text-green-500 mb-4">
                    Team Performance Summary
                </h3>
                {loading ? (
                    <p className="text-center text-gray-500">Loading chart...</p>
                ) : (
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                            barCategoryGap={8}
                        >
                            <XAxis
                                dataKey="name"
                                angle={-40}
                                textAnchor="end"
                                interval={0}
                                height={70}
                                tick={{ fontSize: 11 }}
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36} />
                            <Bar dataKey="Offers" fill="#60A5FA" />
                            <Bar dataKey="Converted" fill="#F472B6" />
                            <Bar dataKey="Lost" fill="#FBBF24" />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
