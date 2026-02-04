import { BlogPosts } from 'app/components/posts'
import { Card } from 'app/components/card'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-6xl font-semibold tracking-tighter">
        luismibm
      </h1>
      <p>
        {"Creo que el valor del software reside en la capacidad de soluciónar problemas reales."}
      </p>
      <p className="mb-8">
        {"Por eso, decidí estudiar para convertirme en la persona capaz de construir esas soluciones."}
      </p>

      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
        Servicios
      </h2>
      <Card
          title="Creación y mantenimiento de sitios web"
          description="Me ocupo de tu presencia online."
          hrefMessage='Más información'
          href="/blog"
          price="desde 99€"
      />
      <Card
          title="MVP (Minimum Viable Product)"
          description="Convierto tu idea en una realidad en menos de un mes."
          hrefMessage='Más información'
          href="/blog"
          price="desde 990€"
      />
      <h2 className="mt-8 mb-2 text-2xl font-semibold tracking-tighter">
        Contacto
      </h2>
      <p>
        {"Crees que hay otra forma en la que puedo ayudarte?"}
      </p>
      <p>
        {"Mándame un correo a "} <a className='text-decoration-line: underline' href="mailto:luibenmor@gmail.com">luibenmor@gmail.com</a>
      </p>
      {/*
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
      */}
    </section>
  )
}
