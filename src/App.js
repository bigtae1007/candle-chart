import logo from "./logo.svg";
import "./App.css";
import Chart1 from "./apexcharts-candle/Chart1";
import Chart2 from "./apexcharts-candle/Chart2";
import CustomChart from "./custom-candle-charts/CustomChart";
import ChartLine from "./apexcharts-line/ChartLine";

function App() {
  return (
    <div className="App">
      {/* <Chart2 /> */}
      <Chart1 />
      <ChartLine />
    </div>
  );
}

export default App;
