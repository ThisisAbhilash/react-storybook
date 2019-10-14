import React from 'react';
import './style.css';
import BoxComponent from './box-component';

const Markers = ({ data }) => {
  return (
    <div className="markers">
      {
        data.map((el, i) => (
         <span key={el} className="marker" style={{ left: `${i * 14}%` }}>
          { el }
         </span>
        ))
      }
    </div>
  )
}

const BarTextContent = ({ dates }) => {
  return (
    <div className="bar-text-content">
      {
        dates.map((date, i) => (
          <div key={i} className={i > 0 ? "textWithHeight" : 'textWithoutHeight'}>
            {date}
          </div>
        ))
      }
    </div>
  )
}

class Graph extends React.Component {

   renderLines() {
    const groupedData = {};
    this.props.xAxis.map(o => groupedData[o] = this.props.graphData.filter(a => a.date === o));

    return this.props.xAxis.map((el, i) => {
      const left = (i * 14), height = 12, initialTop = 88, data = groupedData[el];
      return (
        <div
          className="line"
          style={{ left: `${left}%` }}
          key={i}
        >
          {data.map((o, i) =>
            <div key={i} style={{ position: 'absolute', left: '735%', top: `${(initialTop) - (i * height)}%` }}>
              <BoxComponent amount={o.amount} description={o.description} />
            </div>
          )}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="graph-wrapper">
        <div className="graph">

          <BarTextContent dates={this.props.yAxis} />
          
          <div className="bar-lines-container">
            { this.renderLines() }
          </div>
          
          <div style={{ width: '12%' }} />
          <Markers data={this.props.xAxis}/>      
        </div>
      </div>
    )
  }
}

export default Graph;

