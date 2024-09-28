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
        {`I'm Nathan Lechamo, a skilled software engineer with experience in machine learning, 
        computer vision, and blockchain technologies. During my work as a Graduate Research 
        Assistant, I developed a robust defense framework using TensorFlow to detect and mitigate 
        adversarial patch attacks on deep learning models. This work leveraged GPU-based parallel 
        infrastructure and Apache Spark, resulting in significant improvements in computer vision 
        tasks. My research demonstrated better performance in patch detection and image restoration.`}
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
