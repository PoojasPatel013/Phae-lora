import { ScatterChart, XAxis, YAxis, ZAxis, Tooltip, Scatter, CartesianGrid } from "recharts";

const SymptomHeatmap = ({ symptoms }) => {
  // Process symptoms data for the scatter heatmap
  const processedData = processSymptoms(symptoms);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Symptom Heatmap</h2>
      <div style={{ height: "400px" }}>
        <ScatterChart
          width={600}
          height={400}
          margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="category" dataKey="day" name="Day" />
          <YAxis type="category" dataKey="symptom" name="Symptom" />
          <ZAxis type="number" dataKey="intensity" range={[0, 400]} name="Intensity" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Symptoms" data={processedData} fill="#3182CE" />
        </ScatterChart>
      </div>
    </div>
  );
};

const processSymptoms = (symptoms) => {
  return symptoms.map(({ type, day, intensity }) => ({
    symptom: type,
    day,
    intensity,
  }));
};

export default SymptomHeatmap;
