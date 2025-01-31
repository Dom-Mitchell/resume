import React from 'react'
import cx from 'classnames'
import {
  sectionTitleClassNames,
  sectionTitleBorderClassNames,
  sectionBodyClassNames,
  sectionBodyBorderClassNames,
} from './styleConstants'

export function OpenSource({
  showTitle = false,
  packageName,
  description,
}: {
  showTitle?: boolean
  packageName: string
  description: string
}) {
  return (
    <section className="grid grid-cols-12 my-0">
      <p
        className={cx('font-bold tracking-widest', sectionTitleClassNames, {
          [sectionTitleBorderClassNames]: showTitle,
        })}
      >
        {showTitle ? 'Open Source' : null}
      </p>
      <article
        className={cx(sectionBodyClassNames, {
          [sectionBodyBorderClassNames]: showTitle,
        })}
      >
        <span className="font-bold tracking-wide">{packageName}</span> -{' '}
        <span>{description}</span>
      </article>
    </section>
  )
}
