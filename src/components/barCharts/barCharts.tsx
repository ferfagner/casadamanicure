import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import theme from '../../theme/theme';
import { DadosFuncionario } from '../../dto/funcDTO';

interface BarChartProps {
  data: DadosFuncionario[] | null;
}

function createBarChart(ctx: CanvasRenderingContext2D, data: DadosFuncionario[]): Chart {
  return new Chart(ctx, {
    type: 'bar',
    data: {
    
      labels: data.map(item => item.loginfuncionario),
      datasets: [{
        label: 'Valor Vendido',
        data: data.map(item => item.vl_total_nf),
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
    },
    
  });
}

export function BarChart({ data }: BarChartProps) {
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
