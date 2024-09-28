import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import profile_ from '../public/images/profile_.jpeg'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>

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

      <p className="mb-4">
        {`I'm Nathan Lechamo, a skilled software engineer with experience in machine learning, 
        computer vision, and blockchain technologies. During my work as a Graduate Research 
        Assistant, I developed a robust defense framework using TensorFlow to detect and mitigate 
        adversarial patch attacks on deep learning models. This work leveraged GPU-based parallel 
        infrastructure and Apache Spark, resulting in significant improvements in computer vision 
        tasks. My research demonstrated better performance in patch detection and image restoration.`}
      </p>

      <p className="mb-4">
      {`
        In my professional career, I have made significant contributions 
        to various organizations. At SpaceShard, I implemented optimal 
        approaches to integrate blockchain utility functions into the 
        Starknet-hardhat-plugin and constructed an efficient smart contract 
        re-compiler with caching capabilities. My meticulous design and 
        execution of over 100 unit tests and 30 integration tests ensured 
        a seamless product rollout with approximately 90% code coverage. 
        My diverse skill set includes Python, TypeScript, Node.js, and 
        AWS, making me a versatile and valuable asset to any team.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
