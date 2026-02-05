import Link from 'next/link'

type CardProps = {
  title: string
  description: string
  hrefMessage: string
  href?: string
  price?: string
}

export function Card({ title, description, hrefMessage, href, price}: CardProps) {
  const content = (
    <article className="mb-4 group rounded-2xl border border-neutral-200/70 bg-transparent p-5 transition hover:border-neutral-300 dark:border-neutral-800/70 dark:hover:border-neutral-700">
      <div className="column items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        {price ? (
          <span className="text-xs text-neutral-500 dark:text-neutral-200">
            {price}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-200">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center text-xs font-medium text-neutral-500 transition group-hover:text-neutral-800 dark:text-neutral-500 dark:group-hover:text-neutral-200">
        {hrefMessage} →
      </span>
    </article>
  )

  return href ? (
    <Link href={href} className="block focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700">
      {content}
    </Link>
  ) : (
    content
  )
}