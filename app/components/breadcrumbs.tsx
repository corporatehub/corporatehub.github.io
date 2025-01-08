'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  // Don't render breadcrumbs if there's only one or zero segments
  if (pathSegments.length <= 1) {
    return null
  }

  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-4">
      <ol className="list-none p-0 inline-flex">
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`
          const isLast = index === pathSegments.length - 1
          const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')

          return (
            <li key={segment} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />}
              {isLast ? (
                <span className="text-gray-700" aria-current="page">{title}</span>
              ) : (
                <Link href={href} className="text-gray-500 hover:text-gray-700">
                  {title}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

