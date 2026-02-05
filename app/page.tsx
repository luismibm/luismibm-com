import { BlogPosts } from 'app/components/posts'
import { Card } from 'app/components/card'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-6xl font-semibold tracking-tighter">
        luismibm
      </h1>
      <p>
        {"El valor del software reside en la capacidad de solucionar problemas reales."}
      </p>
      <p className="mb-8">
        {"Por eso, decidí estudiar para ser la persona capaz de construir esas soluciones."}
      </p>

      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
        Servicios
      </h2>
      <Card
          title="Creación y mantenimiento de sitios web"
          description="Me ocupo de tu presencia online."
          hrefMessage='Más información'
          href="/blog"
          price="desde 129€"
      />
      <Card
          title="MVP (Minimum Viable Product)"
          description="Tu idea hecha realidad en menos de un mes."
          hrefMessage='Más información'
          href="/blog"
          price="desde 1399€"
      />
      <h2 className="mt-8 mb-2 text-2xl font-semibold tracking-tighter">
        Contacto
      </h2>
      <p>
        {"Crees que hay otra forma en la que puedo ayudarte?"}
      </p>
      <p>
        {"Mándame un correo a "} <a className='text-decoration-line: underline' href="mailto:contacto@luismibm.com">contacto@luismibm.com</a>
      </p>
      {/*
      <div className="my-8">
        <BlogPosts />
      </div>
      */}
    </section>
  )
}
