import ApexChart from "./ApexChart";

const Chart = (props) => {
  const year = props.year;
  let categories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dataToShow = [];
  let filteredData = [];

  if (year === "") {
    categories = [
      ...new Set(props.data.map((ex) => ex.date.getFullYear().toString())),
    ].sort();
    categories.forEach((year) => {
      dataToShow.push(
        props.data
          .filter((ex) => ex.date.getFullYear().toString() === year)
          .map((ex) => ex.amount)
          .reduce((a, b) => a + b)
      );
    });
  } else {
    filteredData = props.data.filter(
      (expense) => expense.date.getFullYear().toString() === year
    );

    for (var i = 0; i < 12; i++) {
      let monthValues = filteredData
        .filter((ex) => ex.date.getMonth() === i)
        .map((ex) => ex.amount);
      if (monthValues.length > 0) {
        dataToShow.push(
          filteredData
            .filter((ex) => ex.date.getMonth() === i)
            .map((ex) => ex.amount)
            .reduce((a, b) => a + b)
        );
      } else dataToShow.push(0);
    }
  }

  return <ApexChart data={dataToShow} categories={categories} />;
};
export default Chart;
