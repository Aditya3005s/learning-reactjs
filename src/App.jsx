import React, { useEffect, useRef, useState } from 'react'
import Canvas from './Canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  const [showCanvas, setShowCanvas] = useState(false)
  const headingref=useRef(null)
  const growingspan=useRef(null)

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll()
  }, [])

  // useGSAP(()=>{
  //   headingref.current.addEventListener("click",(e)=>{
  //     setShowCanvas(!showCanvas)
  //     gsap.set(growingspan.current,{
  //       top:e.clientY,
  //       left:e.clientX,
  //     })
  //   })
  //   gsap.to(growingspan.current,{
  //       scale:10,
  //       duration:1,
  //       ease:"power2.inOut"
  //     })
  // },[showCanvas])

  

  return (
    <>
    <span
  ref={growingspan}
  className='growing block fixed top-[-10%] left-[-10] w-5 h-5 bg-white rounded-full pointer-events-none'
></span>
    <div className='w-full relative min-h-screen font-["Helvetica_Now_Display"] '> 
          {showCanvas && data[0].map((canvasdets,index)=>(
            <Canvas details={canvasdets}/>
          ))}

          <div className='w-full  z-1 h-screen relative'>
          <nav className="w-full p-5 flex justify-between z-50">
            <div className="brand text-2xl font-md">thirtysixstudios</div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
              <div className='textcontainer w-full px-[25%]'>
                <div className='text w-[50%]'>
                <h3 className='text-3xl leading-[1.1]'>At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.</h3>
                <p className='text-base mt-6 w-[80%] font-normal'>We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.</p>
                <p className='text-base mt-5'>Scroll</p>

              </div>
              </div>

              <div className='w-full absolute bottom-0 left-0'>
                <h1
  ref={headingref}
  onClick={(e) => {
    const nextState = !showCanvas
    setShowCanvas(nextState)

    // Set circle position
    gsap.set(growingspan.current, {
      top: e.clientY,
      left: e.clientX,
      scale: 0,
    })

    if (nextState) {
      // 🔴 TURN RED
      gsap.to("body", {
        backgroundColor: "#fd2c2a",
        color: "#000",
        duration: 1.2,
        ease: "power2.inOut",
      })

      gsap.to(growingspan.current, {
        scale: 1000,
        duration: 1.5,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(growingspan.current, {
            scale: 0,
            clearProps: "all",
          })
        }
      })

    } else {
      // ⚪ RETURN TO ORIGINAL
      gsap.to("body", {
        backgroundColor: "#ffffff",
        color: "#000",
        duration: 1.2,
        ease: "power2.inOut",
      })

      gsap.to(growingspan.current, {
        scale: 1000,
        duration: 1.5,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(growingspan.current, {
            scale: 0,
            clearProps: "all",
          })
        }
      })
    }
  }}
  className='text-[16.5rem] font-normal leading-none tracking-tight'
>
  Thirtysixstudio
</h1>
              </div>



          </div>

        </div>

        <div className='w-full relative h-screen mt-32 px-10'>
          {data[1].map((canvasdets,index)=>(
            <Canvas details={canvasdets}/>
          ))}
          
              <h1 className='text-8xl tracking-tighter'>About the brand</h1>
              <p className='text-4xl leading-[1.2] mt-6 w-[80%] font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas itaque adipisci recusandae quae unde hic, accusamus quam neque sequi saepe, officia nulla eveniet! Maiores numquam magnam dolores aliquam labore harum veritatis, molestias tempora velit doloremque.</p>
{/* 
              <img src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400" className='w-[80] mt-10' /> */}

              {data[2].map((canvasdets,index)=>(
            <Canvas details={canvasdets}/>
          ))}
          
        </div>
        
    </>
  )
}

export default App
