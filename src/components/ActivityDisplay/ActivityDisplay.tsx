import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { DataContextType, activity } from "../../utils/types";
import styles from "./ActivityDisplay.module.scss";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

type ActivityDisplayProps = {
  activity: DataContextType<activity>;
};

const ActivityDisplay = ({ activity }: ActivityDisplayProps) => {
  const { data, isPending, error } = activity;
  const radius: [number, number, number, number] = [20, 20, 0, 0];
  const red = "#E60000";
  const axisStyle = {
    color: "#9B9EAC",
    fontSize: "14px",
    fontWeight: 500,
  };

  const CustomTooltip = ({
    label,
    active,
  }: TooltipProps<ValueType, NameType>) => {
    if (data && active) {
      return (
        <div className={styles.customTooltip}>
          <p className={styles.value}>
            {data.sessions[parseInt(label)].kilogram} kg
          </p>
          <p className={styles.value}>
            {data.sessions[parseInt(label)].calories} kCal
          </p>
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
          <BarChart
            data={data.sessions.map((session, index) => ({
              day: index,
              calories: session.calories,
              kilogram: session.kilogram,
            }))}
            barGap={7}
            barCategoryGap={0}
          >
            <text
              y={15}
              fill="#20253a"
              textAnchor="left"
              dominantBaseline="central"
            >
              <tspan className={styles.title}>Activité quotidienne</tspan>
            </text>
            <CartesianGrid vertical={false} strokeDasharray="3" />
            <XAxis
              dataKey="day"
              tickMargin={15}
              tickLine={false}
              style={axisStyle}
            />
            <YAxis
              yAxisId="left"
              orientation="right"
              stroke="#282D30"
              domain={["dataMin - 2", "dataMax + 1"]}
              axisLine={false}
              tickLine={false}
              tickCount={3}
              tickMargin={20}
              style={axisStyle}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke={red}
              domain={["dataMin - 100", "dataMax + 100"]}
              hide
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              align="right"
              height={36}
              margin={{ right: 200 }}
              iconType="circle"
              iconSize={9}
              formatter={(value, entry, index) => (
                <span className={styles.legendTitle}>{value}</span>
              )}
            />
            <Bar
              barSize={7}
              yAxisId="left"
              dataKey="kilogram"
              fill="#282D30"
              radius={radius}
              name={"Poids (kg)"}
            />
            <Bar
              barSize={7}
              yAxisId="right"
              dataKey="calories"
              fill={red}
              radius={radius}
              name={"Calories brûlées (kCal)"}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default ActivityDisplay;
