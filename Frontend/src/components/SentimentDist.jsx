import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#C3E855", "#C9839D", "#6AC7F5"];

const SentimentDist = ({ props }) => {
  return (
    <div className="bg-white rounded-md shadow-md">
      <h1 className="mx-3 text-lg text-center mt-2 mb-16 ">감성 분포 (%)</h1>
      {/* recharts에서 가운데 정렬하고 싶으면 responsivecontainer를 사용하기 */}
      <ResponsiveContainer height={300}>
        <PieChart>
          <Pie
            data={props.sentiment_dist}
            dataKey={"value"}
            outerRadius={100}
            label
          >
            {props.sentiment_dist.map((entry, index) => {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              );
            })}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default SentimentDist;
