import React from 'react'

function ProgressCircle({ percent }) {
    const angle = (percent / 100) * 360;

    // Determine the progress color based on percent
    /*
    const getProgressColor = () => {
        if (percent > 70) return '#22c55e'; // green
        if (percent >= 50) return '#eab308'; // yellow
        return '#ef4444'; // red
    };
    */

    // Get main and light color based on percent
    const getColors = () => {
        if (percent >= 70) return { main: '#22c55e', light: '#14532d' }; // green
        if (percent >= 50) return { main: '#eab308', light: '#78350f' }; // yellow
        return { main: '#ef4444', light: '#7f1d1d' }; // red
    };

    const { main, light } = getColors();

    

  return (
    <div className="relative w-14 h-14 cursor-pointer rounded-full flex items-center justify-center bg-[#0f1b1d] shadow-inner  ">
      {/* Progress Ring */}
      <div
        className="absolute inset-0 rounded-full "
        style={{
          background: `conic-gradient(${main} ${angle}deg, ${light} ${angle}deg)`,
        }}
      ></div>

      {/* Inner Circle */}
      <div className="absolute inset-1 bg-[#0f1b1d] rounded-full flex items-center  justify-center">
        <span className="text-white text-xl font-bold">
          {percent}
          <sup className="text-xs align-super">%</sup>
        </span>
      </div>
    </div>
  )
}

export default ProgressCircle
