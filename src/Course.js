import dataStructureLogo from './icons/data-structures.svg';

function Course() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
      {/* First Row */}
        <div className="bg-white p-4">
          <img src={dataStructureLogo} alt="Data Structures Logo" className='w-60 h-60'/>
          <div className="flex justify-center mt-5">
            <button className='bg-white w-60 h-10 rounded mt-5 border-solid border-2'>Data Structures</button>
          </div>
        </div>
        <div className="bg-white p-4">
          <img src={dataStructureLogo} alt="Data Structures Logo" className='w-60 h-60'/>
          <div className="flex justify-center mt-5">
            <button className='bg-white w-60 h-10 rounded mt-5 border-solid border-2'>Data Structures</button>
          </div>
        </div>
        <div className="bg-white p-4">
          <img src={dataStructureLogo} alt="Data Structures Logo" className='w-60 h-60'/>
          <div className="flex justify-center mt-5">
            <button className='bg-white w-60 h-10 rounded mt-5 border-solid border-2'>Data Structures</button>
          </div>
        </div>

      {/* Second Row */}
        <div className="bg-white p-4">
          <img src={dataStructureLogo} alt="Data Structures Logo" className='w-60 h-60'/>
          <div className="flex justify-center mt-5">
            <button className='bg-white w-60 h-10 rounded mt-5 border-solid border-2'>Data Structures</button>
          </div>
        </div>
        <div className="bg-white p-4">
          <img src={dataStructureLogo} alt="Data Structures Logo" className='w-60 h-60'/>
          <div className="flex justify-center mt-5">
            <button className='bg-white w-60 h-10 rounded mt-5 border-solid border-2'>Data Structures</button>
          </div>
        </div>
        <div className="bg-white p-4">
          <img src={dataStructureLogo} alt="Data Structures Logo" className='w-60 h-60'/>
          <div className="flex justify-center mt-5">
            <button className='bg-white w-60 h-10 rounded mt-5 border-solid border-2'>Data Structures</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course;