import React from 'react'
import { Card, ProgressBar} from "@tremor/react";

const DetailBar = ({data,selected}) => {
  return (
    <Card className="max-w-sm">
        {data.map((item)=>{
            return(
                <div className='progressBar'>
                    <ProgressBar percentageValue={item.percentage} color="blue" className="mt-3" tooltip={item.percentage}/>
                    <div className="bar">
                        <div>{selected!=='연령대'?item.group:item.group}</div>
                        <div>{item.percentage}%</div>
                    </div>
                </div>
            )
        })}
    </Card>
  )
}

export default DetailBar