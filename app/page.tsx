import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Lim.sh
      </h1>
      <p className="mb-4">
        {`I'm a software engineer based in Korea. I write about software engineering, productivity, and personal growth.
        I'm currently working at health-care startup in Korea.
        This blog is a place for me to share my thoughts and experiences.
        Thanks for stopping by!
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
