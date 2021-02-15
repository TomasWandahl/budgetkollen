import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];


class ChartPie extends React.Component {

  render() {

    let gotData = (this.props.data[0].value )

    let data = [
      { name: 'Group A', value: (this.props.data[0].value > 0 ? this.props.data[0].value : 0.001)},
      { name: 'Group B', value: (this.props.data[1].value > 0 ? this.props.data[1].value : 0.001) },
      { name: 'Group C', value: (this.props.data[2].value > 0 ? this.props.data[2].value : 0.001) },
    ];

    return (
      <div className="piechart-wrapper">
        <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
    );
  }
}

export default ChartPie;
