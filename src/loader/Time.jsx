import React from 'react'
import moment from "moment"

export default function Time({time}) {
    const videoTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  return (
    <div>
        <span className=' absolute bottom-2 right-2 bg-black text-white px-2 py-1 rounded-md'>{videoTime}</span>
    </div>
  )
}
