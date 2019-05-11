import Link from 'next/link'

const Index = () => (
    <section>
      <h1>Urban Farmers</h1>
      <Link href="/about">
        <a title = "About us">About us</a>
      </Link>
    </section>
)

export default Index;