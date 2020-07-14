const Index = ({posts}) => (
    <div>
         <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
        <p>Welcome to my portfolio! This is designed with Next.js!</p>
    </div>
)



export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data =    await response.json()
    return {
      props: {
          posts:data
      }, // will be passed to the page component as props
    }
  }

export default Index