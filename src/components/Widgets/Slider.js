import React, { useState } from 'react'

export default function Slider() {
  const [indexTips, setIndexTips] = useState(0)
  const tips = ['jan lupa mandihh biar ga bau', `jan lupa eek'`, 'jan lupa mam']

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndexTips(indexTips + 1)
      if (indexTips === tips.length - 1) {
        setIndexTips(0)
      }
    }, 3000)
    return () => clearInterval(timer)
  }, [indexTips])

  return (
    <div className="sm:mt-20 mt-10 w-full bg-gray-600 p-4 text-white">
      <p className="font-semibold">Tau Gak Sih?</p>
      {tips.map((tip, index) => {
        return (
          <p key={index} className={`${index === indexTips ? '' : 'hidden'} text-xs mt-1`}>
            {tip}
          </p>
        )
      })}
    </div>
  )
}
