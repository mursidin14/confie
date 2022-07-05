import BasicCard from 'components/Widgets/BasicCard'
import React, {useState, useEffect} from 'react'

export default function CurriculumVitaeModel() {
  const [model, setModel] = useState({
    model: 'simple'
  })
  useEffect(() => {
    if (!localStorage.getItem('modelCV')) {
      localStorage.setItem('modelCV', JSON.stringify(model))
      return   
    }
    setModel(JSON.parse(localStorage.getItem('modelCV')))
  }, [])
  const handleChange = (e) => {
    setModel({
      [e.target.name]: e.target.value
    })
    localStorage.setItem('modelCV', JSON.stringify({
      [e.target.name]: e.target.value
    }))
  }
  return (
    <BasicCard>
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold ">CV Layout</h3>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <section className="md:flex items-center gap-28 px-8">
        <div>
          <div className="space-x-3 text-left">
            <input
              onChange={handleChange}
              type="radio"
              name="model"
              id="simple"
              value="simple"
              checked={
                model.model === 'simple' ? true : false
              }
            />
            <label htmlFor="simple">Simple</label>
          </div>
          <label htmlFor="simple">
            <img className='relative left-7 mt-2 cursor-pointer' src="/model_one.png" alt="" />
          </label>
        </div>
        <div>
          <div className="space-x-3 text-left md:mt-0 mt-2">
            <input onChange={handleChange} type="radio" name="model" id="complete" value="complete" checked={
              model.model === 'complete' ? true : false
            }/>
            <label htmlFor="complete">Complete</label>
          </div>
          <label htmlFor="complete">
          <img className='relative left-7 mt-2 cursor-pointer' src="/model_two.png" alt="" />
          </label>
        </div>
      </section>
    </BasicCard>
  )
}
