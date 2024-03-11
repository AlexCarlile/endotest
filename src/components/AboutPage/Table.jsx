import React from 'react';
import { tableData } from "./tableData";

export default function Table() {
  return (
    <section className="table">
        <div className="table-container container">
            <table className="table-content"  border = "1" cellSpacing = "0" cellPadding = "20">
                <caption className="table-title">
                    В клинике эндокринологии оказывается высокотехнологичная медицинская помощь, направлениями клинической работы являются:                      
                </caption>

                <tbody>
                    <tr className="table-first">
                        <td colSpan="2" rowSpan="1">Избыточная масса тела, метаболический синдром, ожирение</td>
                    </tr>  
                    
                    {tableData.map(data => 
                        <tr 
                        key={data.id} className="">
                            <td>
                                {data.name}
                            </td>
                            <td>
                                <ul>
                                    {data.descr.map(points =>
                                        <li key={points.id}>
                                            {points.message}
                                        </li>
                                    )}
                                </ul>
                            </td>
                        </tr>
                    )}
                </tbody>
                
            </table>


        </div>
        
    </section>
  )
}
