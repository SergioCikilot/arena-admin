import React from 'react'
import { format } from 'date-fns'

import addDays from 'date-fns/addDays'

export default function ReservationPage() {
 
    return (
        <div>
            <table >
                <thead>
                    <tr className='mx-40'>
                        {[...Array(10)].map((day, i) => 
                        <th className='text-emerald-800 s'
                          key={i}
                        >
                          {format( addDays(new Date(),i),"yyyy-MM-dd")} 
                        </th>)}
                    </tr>
                </thead>

                <tbody>
                {[...Array(10)].map((day, i) => 
                        <td key={i} className='w-32 h-32 mx-10 bg-red-600'>

                        </td>)}
                </tbody>
            </table>
        </div>
    )
}
