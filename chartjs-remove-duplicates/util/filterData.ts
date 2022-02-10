import { Dataset } from "../types/Dataset";

export function filterData(datasets: Array<Dataset>): Array<Dataset> {
  return datasets.map((dataset) => ({
    ...dataset,
    data: dataset.data.filter((d, i) => {
      const previousD = dataset.data[i - 1];
      const nextD = dataset.data[i + 1];

      if (!previousD || !nextD) return true;

      return !(previousD.y === d.y && nextD.y === d.y)
    })
  }))
}
