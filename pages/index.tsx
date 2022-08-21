import Head from 'next/head'
import { GetStaticProps } from 'next'
import { PostCard, PostWidget, Categories } from '../components/index';
import { getPosts } from '../services/';
import { Post } from '../interfaces/Post';

interface PostProps extends Post {
  node: Post;
}
interface HomeProps {
  posts: PostProps[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div className='container m-auto pb-8 px-15'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map(post => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='relative lg:sticky top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>

      </main>

    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts() || []);
  return {
    props: { posts }
  }
}