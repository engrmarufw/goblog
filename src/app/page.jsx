import Image from 'next/image'

export default function Home() {
  return (
    <div>
  <div className="flex items-center justify-between gap-28">
  <div>
      <h1 className="text-5xl font-bold">Better design for your digital products.</h1>
      <p className='my-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, provident? Natus, quisquam voluptates.</p>
      <button className="btn btn-success">See our works</button>
      </div>
      <div className="a">
        <Image src="/hero.png" width={700} className='w-100' height={500} />
      </div>

  </div>
    </div>
  )
}
