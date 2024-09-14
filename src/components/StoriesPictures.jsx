import React from 'react'

const StoriesPictures = () => {
  const data = [{
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/338e3b9e44aafd547093d290dca862bb8ce7250a-4222x2812.jpg/_DSC6242.jpg?rect=188,0,2516,2812&fp-x=0.3424657534246574&fp-y=0.5&w=640&h=853&fit=crop&crop=focalpoint&auto=format",
    head: "What Will It Take To See Domestic Violence Stats Drop?"
  },
  {
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/338e3b9e44aafd547093d290dca862bb8ce7250a-4222x2812.jpg/_DSC6242.jpg?rect=188,0,2516,2812&fp-x=0.3424657534246574&fp-y=0.5&w=640&h=853&fit=crop&crop=focalpoint&auto=format",
    head: "What Will It Take To See Domestic Violence Stats Drop?"
  },
  {
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/338e3b9e44aafd547093d290dca862bb8ce7250a-4222x2812.jpg/_DSC6242.jpg?rect=188,0,2516,2812&fp-x=0.3424657534246574&fp-y=0.5&w=640&h=853&fit=crop&crop=focalpoint&auto=format",
    head: "What Will It Take To See Domestic Violence Stats Drop?"
  },
  {
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/338e3b9e44aafd547093d290dca862bb8ce7250a-4222x2812.jpg/_DSC6242.jpg?rect=188,0,2516,2812&fp-x=0.3424657534246574&fp-y=0.5&w=640&h=853&fit=crop&crop=focalpoint&auto=format",
    head: "What Will It Take To See Domestic Violence Stats Drop?"
  },
  {
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/338e3b9e44aafd547093d290dca862bb8ce7250a-4222x2812.jpg/_DSC6242.jpg?rect=188,0,2516,2812&fp-x=0.3424657534246574&fp-y=0.5&w=640&h=853&fit=crop&crop=focalpoint&auto=format",
    head: "What Will It Take To See Domestic Violence Stats Drop?"
  },
  {
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/338e3b9e44aafd547093d290dca862bb8ce7250a-4222x2812.jpg/_DSC6242.jpg?rect=188,0,2516,2812&fp-x=0.3424657534246574&fp-y=0.5&w=640&h=853&fit=crop&crop=focalpoint&auto=format",
    head: "What Will It Take To See Domestic Violence Stats Drop?"
  },
  {
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/338e3b9e44aafd547093d290dca862bb8ce7250a-4222x2812.jpg/_DSC6242.jpg?rect=188,0,2516,2812&fp-x=0.3424657534246574&fp-y=0.5&w=640&h=853&fit=crop&crop=focalpoint&auto=format",
    head: "What Will It Take To See Domestic Violence Stats Drop?"
  },
  {
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/338e3b9e44aafd547093d290dca862bb8ce7250a-4222x2812.jpg/_DSC6242.jpg?rect=188,0,2516,2812&fp-x=0.3424657534246574&fp-y=0.5&w=640&h=853&fit=crop&crop=focalpoint&auto=format",
    head: "What Will It Take To See Domestic Violence Stats Drop?"
  },
  {
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/338e3b9e44aafd547093d290dca862bb8ce7250a-4222x2812.jpg/_DSC6242.jpg?rect=188,0,2516,2812&fp-x=0.3424657534246574&fp-y=0.5&w=640&h=853&fit=crop&crop=focalpoint&auto=format",
    head: "What Will It Take To See Domestic Violence Stats Drop?"
  },
  {
    img: "https://cdn.sanity.io/images/w8f1ak3c/production/338e3b9e44aafd547093d290dca862bb8ce7250a-4222x2812.jpg/_DSC6242.jpg?rect=188,0,2516,2812&fp-x=0.3424657534246574&fp-y=0.5&w=640&h=853&fit=crop&crop=focalpoint&auto=format",
    head: "What Will It Take To See Domestic Violence Stats Drop?"
  },]
  return (
    <section className='w-full grid grid-cols-1 lg:grid lg:grid-cols-3 lg:gap-x-5  px-3 mt-5 '>

      {data.map((item, index) => (
        <div>
          <div key={index}><img className={`h-[400px] w-[400px] object-cover ${index === 3 && 'w-[600px]'}`} src={item.img} alt="" />
            <h1 className='font-bold lg:text-[2vw] lg:leading-[2vw] mb-3 mt-2 text-[5vw] leading-[4vw]'>{item.head}</h1></div>
        </div>
      ))}
    </section>
  )
}

export default StoriesPictures