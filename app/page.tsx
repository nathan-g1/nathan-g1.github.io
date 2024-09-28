import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import profile_ from '../public/images/profile_.jpeg'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      

      {/* Put a next js image using tailwind from source app/images/image.jpg */}

      <div className="w-32 h-32 mx-auto mb-8 relative">
        <Image
          className="rounded-full"
          src={profile_}
          alt="Nathan Lechamo"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello there!
      </h1>

      <p className="mb-4">
        {`I'm Nathan Lechamo, I am a versatile software engineer with a strong 
        background in developing robust and efficient software solutions. I have 
        experience in creating defense frameworks using TensorFlow, constructing 
        efficient re-compilers, and integrating utility functions using TypeScript 
        and Node.js. I have designed error-handling algorithms that significantly 
        reduce error resolution times, built scalable AWS Lambda functions for 
        delivering notifications across devices, and developed front-end charts 
        with D3.js and chart.js. My technical skills span various programming 
        languages and tools, including C#, .NET Core, Golang, TypeScript, and 
        JavaScript. I am recognized for delivering high-quality software solutions 
        and have been acknowledged in hackathons and awards for my innovative contributions..`}
      </p>

      <p className="mb-4">
        {`Currently, I am working on my thesis project, that focuses on the enhancement of polar region sea ice classification
        using multi-modal data. Check out our lab's `}
        <Link href="https://www.cs.utsa.edu/~sprasad/parint_lab/" legacyBehavior>
          <a className="text-blue-500 hover:underline">website</a>
        </Link>
        {` for more information on our research projects.`}
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
