import {
  Line,
  LineChart,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { DataContextType, averageSessions } from "../../utils/types";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import styles from "./AverageSessionsDisplay.module.scss";
import { useState } from "react";

type AverageSessionsDisplayProps = {
  average: DataContextType<averageSessions>;
};
const AverageSessionsDisplay = ({ average }: AverageSessionsDisplayProps) => {
  const { data, isPending, error } = average;
  const [activeValue, setActiveValue] = useState<number>(6);
  const days = "LMMJVSD";

  const CustomTooltip = ({
    payload,
    active,
  }: TooltipProps<ValueType, NameType>) => {
    if (data && active && payload) {
      return (
        <div className={styles.customTooltip}>
          <p className={styles.value}>{payload[0].payload.sessionLength} min</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {isPending && <div className="isPending"></div>}
      {error && <div className="error"></div>}
      {data && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={data.sessions.map((session) => ({
              day: days[session.day - 1],
              index: session.day,
              sessionLength: session.sessionLength,
            }))}
            onMouseMove={(e) => {
              if (e.activePayload) {
                setActiveValue(e.activePayload[0].payload.index - 1);
              }
            }}
            onMouseLeave={() => setActiveValue(6)}
          >
            <text y={20} textAnchor="left" dominantBaseline="central">
              <tspan className={styles.title}>Durée moyenne des</tspan>
            </text>
            <text y={40} textAnchor="left" dominantBaseline="central">
              <tspan className={styles.title}>sessions</tspan>
            </text>

            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              tick={{ fill: "#fff" }}
              axisLine={false}
            />
            <YAxis domain={["dataMin -10", "dataMax + 30"]} hide />
            <Tooltip content={CustomTooltip} cursor={false} />
            <ReferenceArea
              fill="#cc0000"
              x1={activeValue}
              x2={days.length - 1}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#facaca"
              strokeWidth={2}
              // fill="#8884d8"
              dot={false}
              activeDot={{
                stroke: "#facaca80",
                fill: "#fff",
                strokeWidth: 10,
                r: 4,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default AverageSessionsDisplay;
