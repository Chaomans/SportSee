import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { DataContextType, performance } from "../../utils/types";

type PerformanceDisplayProps = {
  performance: DataContextType<performance>;
};

const PerformanceDisplay = ({ performance }: PerformanceDisplayProps) => {
  const { data, isPending, error } = performance;
  const kindListFR: { [key: number]: string } = {
    1: "Cardio",
    2: "Énergie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };
  return (
    <>
      {isPending && <div className="isPending"></div>}
      {error && <div className="error"></div>}
      {data && (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="75%"
            data={data.data
              .map((elem) => ({
                value: elem.value,
                kind: kindListFR[elem.kind],
              }))
              .reverse()}
          >
            <PolarGrid strokeWidth={1.5} />
            <PolarAngleAxis
              dataKey="kind"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#fff" }}
              tickSize={15}
              fontSize={14}
            />
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default PerformanceDisplay;
