import ReactWordcloud from "react-wordcloud";

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: false,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [30, 70],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
};

const SimpleWordcloud = ({ props }) => {
  return (
    <div className="bg-white rounded-md shadow-md flex flex-col justify-center py-1 h-full">
      <ReactWordcloud words={props.data} options={options} />
    </div>
  );
};

export default SimpleWordcloud;
