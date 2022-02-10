import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Legend,
  Title,
  Tooltip,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Dataset } from "../types/Dataset";

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Legend,
  Title,
  Tooltip
);

const getTotalDataPoints = (datasets: Array<Dataset>) =>
  datasets.reduce((a, c) => a += c.data.length, 0)

type DisplayChartProps = {
  title: string; datasets: Array<Dataset>; description?: string
}

export default function DisplayChart({ title, datasets, description }: DisplayChartProps) {
  const options: ChartOptions = {
    normalized: true,
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          displayFormats: {
            quarter: 'MMM YYYY'
          },
        },
      },
      y: {
        type: 'linear',
      }
    },
  };

  const data = {
    datasets,
  }


  return (
    <>
      <div className="card card-bordered">
        <figure>
          {/* @ts-ignore-next-line */}
          <Line options={options} data={data} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}
          </h2>
          <p>{description}</p>
          <div className="shadow stats">
            <div className="stat">
              <div className="stat-title">Total Data Points</div>
              <div className="stat-value">
                {getTotalDataPoints(datasets)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}