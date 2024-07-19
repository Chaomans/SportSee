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
    1: "cardio",
    2: "energie",
    3: "endurance",
    4: "force",
    5: "vitesse",
    6: "intensité",
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
            outerRadius="80%"
            data={data.data.map((elem) => ({
              value: elem.value,
              kind: kindListFR[elem.kind],
            }))}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" tickLine={false} />
            <PolarRadiusAxis />
            <Radar
              dataKey="value"
              stroke="#FF0101B2"
              fill="#FF0101B2"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default PerformanceDisplay;
