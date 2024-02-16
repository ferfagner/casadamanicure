import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import theme from '../../theme/theme';

interface BarChartProps {
  data: dadosProps[] | null;
}

interface dadosProps{
  mes: string;
  total: number
}

function createBarChart(ctx: CanvasRenderingContext2D, data: dadosProps[]): Chart {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(item => item.mes),
      datasets: [{
        label: 'Valor Vendido',
        data: data.map(item => item.total),
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.second,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

export function BarChartMonth({ data }: BarChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!data || !data.length) {
      return; // Se os dados forem nulos ou vazios, não renderize o gráfico
    }

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        chartInstanceRef.current = createBarChart(ctx, data);
      } else {
        console.error('Failed to get 2D context for canvas');
      }
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};
