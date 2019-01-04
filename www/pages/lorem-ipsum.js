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
  const baseUrl = `http://${req.headers.host}/api/index`
  const response = await fetch(baseUrl)

  return { response }
}

export default withRouter(LoremIpsum)
