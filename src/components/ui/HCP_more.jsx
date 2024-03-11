import React from 'react';
import { HCP_descr } from '../HCPPage/HCP_descr';

export default function HCP_more(props) {
    let info = props;
    let obj = HCP_descr.find(spec => spec.id === info.id);
    let massive = obj[info.directory]
    // let achievments = HCP_descr.find(spec => spec.id === info.id).achievments;
    // let about = HCP_descr.find(spec => spec.id === info.id).about;

    return (
        <div className='hcp-more-comp'>
            <div className='hcp-more-content'>
                <h3>{info.title}</h3>
                {massive.map((spec =>
                <ul key={spec.id}>
                    <li>
                        {spec}
                    </li>
                </ul>
                ))}
            </div>                     
        </div>
    )
}
