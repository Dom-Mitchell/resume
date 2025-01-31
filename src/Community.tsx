import React from 'react'
import cx from 'classnames'
import {
  sectionTitleClassNames,
  sectionTitleBorderClassNames,
  sectionBodyClassNames,
  sectionBodyBorderClassNames,
} from './styleConstants'

export function Community({
  showTitle = false,
  organization,
  description,
}: {
  showTitle?: boolean
  organization: string
  description: string
}) {
  return (
    <section className="grid grid-cols-12 my-2">
      <p
        className={cx('font-bold tracking-widest', sectionTitleClassNames, {
          [sectionTitleBorderClassNames]: showTitle,
        })}
      >
        {showTitle ? 'Community' : null}
      </p>
      <article
        className={cx(sectionBodyClassNames, {
          [sectionBodyBorderClassNames]: showTitle,
        })}
      >
        <span className="font-bold tracking-wide">{organization}</span> -{' '}
        <span>{description}</span>
      </article>
    </section>
  )
}
