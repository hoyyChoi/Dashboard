import React from 'react'
import { Card, ProgressBar} from "@tremor/react";

const DetailBar = ({data}) => {
  return (
    <Card className="max-w-sm">
        {data.map((item)=>{
            return(
                <div className='progressBar'>
                    <ProgressBar percentageValue={item[0]} color="blue" className="mt-3" tooltip={item[0]}/>
                    <div className="bar">
                        <div>{item[1]}</div>
                        <div>{item[0]}%</div>
                    </div>
                </div>
            )
        })}
    </Card>
  )
}

export default DetailBar