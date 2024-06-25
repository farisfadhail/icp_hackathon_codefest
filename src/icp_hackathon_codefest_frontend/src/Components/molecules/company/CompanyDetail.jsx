import React from 'react'

const CompanyDetail = () => {
  return (
    <>
    <img src="/assets/building-asset.svg" className="w-72 mx-auto absolute top-20 inset-x-0 -z-[1]" />
          <div className="rounded-md p-6 bg-indigo-900 w-3/5 mx-auto space-y-6 mt-60 border-2 border-indigo-700">
            <div className="text-center">
              <p className="text-yellow-500 font-semibold text-2xl">Company Name</p>
              <p className="text-4xl text-white">Galaxy Store</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 font-semibold text-2xl">Company City</p>
              <p className="text-4xl text-white">Galaxy Store</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 font-semibold text-2xl">Company Nation</p>
              <p className="text-4xl text-white">Galaxy Store</p>
            </div>
          </div>
        </div>
        <div className="my-12">
          <p className="text-yellow-500 font-semibold text-3xl text-center">About Company</p>
          <p className="text-center text-white text-xl w-4/5 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fugit, veniam fugiat ex commodi a odit deleniti possimus quasi dolore praesentium ducimus rerum, ratione maxime molestiae repudiandae tenetur dolorem totam delectus
            quam natus exercitationem. Debitis delectus commodi cum labore illo.
          </p>
        </div>
        
    </>
  )
}

export default CompanyDetail