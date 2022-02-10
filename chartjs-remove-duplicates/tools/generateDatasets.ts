import { Dataset } from "../types/Dataset";

const getOneYearFromNow = () => {
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  return oneYearFromNow;
}

export function generateDatasets(): Array<Dataset> {
  const oneYearFromNow = getOneYearFromNow();

  const datasets: Array<Dataset> = [
    { label: 'foo', borderColor: 'rgba(255, 99, 132, 1)', backgroundColor: 'rgba(255, 99, 132, 0.2)', data: [] },
    { label: 'bar', borderColor: 'rgba(54, 162, 235, 1)', backgroundColor: 'rgba(54, 162, 235, 0.2)', data: [] },
  ]

  let currentDate = new Date();
  let fooY = 0;
  let barY = 0;
  let day = 1;
  while (currentDate < oneYearFromNow) {
    if (day % 38 == 0) fooY += 20;
    if (day === 34) barY += 30;

    datasets[0].data.push({
      x: currentDate.getTime(),
      y: fooY,
    })
    datasets[1].data.push({
      x: currentDate.getTime(),
      y: barY,
    })

    currentDate.setDate(currentDate.getDate() + 2);
    day += 1;
  }

  return datasets
}