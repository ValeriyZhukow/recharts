'use strict';

import React from 'react/addons';
import {BarChart, BarItem, XAxis, YAxis} from 'recharts';

export default React.createClass({
  render () {
    const data = [{name: '上海', uv: 400, pv: 2400}, {name: '北京', uv: 300, pv: 4567},
                  {name: '杭州', uv: 300, pv: 1398}, {name: '上饶', uv: 200, pv: 9800},
                  {name: '台湾', uv: 278, pv: 3908}, {name: '香港', uv: 189, pv: 4800}];

    return (
      <div className='line-charts'>
        <p>最简单的柱图</p>
        <div className='line-chart-wrapper'>
          <BarChart width={400} height={400} data={data}>
            <XAxis dataKey='name'/>
            <BarItem dataKey='uv' fill='#ff7300'/>
            <BarItem dataKey='pv' fill='#387908'/>
          </BarChart>
        </div>

        <p>水平朝向的柱图</p>
        <div className='line-chart-wrapper'>
          <BarChart width={400} height={400} data={data} layout='vertial'>
            <XAxis type='number'/>
            <YAxis dataKey='name' type='category'/>
            <BarItem dataKey='uv' fill='#ff7300'/>
            <BarItem dataKey='pv' fill='#387908'/>
          </BarChart>
        </div>
      </div>
    );
  }
});
