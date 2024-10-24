import React from 'react'

const ChartTable = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="mb-4">
        <h3 className="text-4xl font-bold text-center mt-5">Chart Table</h3>
      </div>
      <div className="flex gap-10 mt-5 mb-10">
        {/* Rasi Chart */}
        <div className="flex flex-col items-center">
          <h1 className="font-bold">Rasi Chart</h1>

          {/* Row 1 */}
          <div className="flex">
            {[12, 1, 2, 3].map((num) => (
              <div key={num} className="w-24 h-24 bg-blue-300 border border-black flex items-center justify-center relative">
                <span className="absolute top-1 left-1 text-xs font-bold">{num}</span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex">
            {[11, null, null, 4].map((num, i) => (
              <div key={i} className={`w-24 h-24 ${num ? 'bg-blue-300 border border-black relative' : ''} flex items-center justify-center`}>
                {num && <span className="absolute top-1 left-1 text-xs font-bold">{num}</span>}
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex">
            {[10, null, null, 5].map((num, i) => (
              <div key={i} className={`w-24 h-24 ${num ? 'bg-blue-300 border border-black relative' : ''} flex items-center justify-center`}>
                {num && <span className="absolute top-1 left-1 text-xs font-bold">{num}</span>}
              </div>
            ))}
          </div>

          {/* Row 4 */}
          <div className="flex">
            {[9, 8, 7, 6].map((num) => (
              <div key={num} className="w-24 h-24 bg-blue-300 border border-black flex items-center justify-center relative">
                <span className="absolute top-1 left-1 text-xs font-bold">{num}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navamsa Chart */}
        <div className="flex flex-col items-center">
          <h1 className="font-bold">Navamsa Chart</h1>

          {/* Row 1 */}
          <div className="flex">
            {[12, 1, 2, 3].map((num) => (
              <div key={num} className="w-24 h-24 bg-blue-300 border border-black flex items-center justify-center relative">
                <span className="absolute top-1 left-1 text-xs font-bold">{num}</span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex">
            {[11, null, null, 4].map((num, i) => (
              <div key={i} className={`w-24 h-24 ${num ? 'bg-blue-300 border border-black relative' : ''} flex items-center justify-center`}>
                {num && <span className="absolute top-1 left-1 text-xs font-bold">{num}</span>}
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex">
            {[10, null, null, 5].map((num, i) => (
              <div key={i} className={`w-24 h-24 ${num ? 'bg-blue-300 border border-black relative' : ''} flex items-center justify-center`}>
                {num && <span className="absolute top-1 left-1 text-xs font-bold">{num}</span>}
              </div>
            ))}
          </div>

          {/* Row 4 */}
          <div className="flex">
            {[9, 8, 7, 6].map((num) => (
              <div key={num} className="w-24 h-24 bg-blue-300 border border-black flex items-center justify-center relative">
                <span className="absolute top-1 left-1 text-xs font-bold">{num}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartTable
