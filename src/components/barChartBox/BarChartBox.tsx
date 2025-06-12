import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

type propsType = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

export const BarChartBox = (props: propsType) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="child">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart  data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
