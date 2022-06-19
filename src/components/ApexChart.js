import Chart from "react-apexcharts";

const ApexChart = (props) => {
  console.log("Apex");

  const state = {
    options: {
      chart: {
        id: "expenses-chart",
      },
      xaxis: {
        categories: props.categories
      },
    },
    series: [
      {
        name: "Expenses total",
        data: props.data,
      },
    ],
  };
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
  
};
export default ApexChart
