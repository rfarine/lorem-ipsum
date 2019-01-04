import { withRouter } from 'next/router'
import 'isomorphic-unfetch'

const LoremIpsum = ({ response, router: { query: { id } } }) => {
  console.log('response', response)
  return (
    <div>
      <h1>ID: {id}</h1>
      <p>This is the lorem ipsum content.</p>
    </div>
  )
}

LoremIpsum.getInitialProps = async ({ req }) => {
  const url = `https://${req.headers.host}/api/lorem-ipsum`
  const response = await fetch(url)

  return { response }
}

export default withRouter(LoremIpsum)
