import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material'
import { ComponentProps, FC } from 'react'

type Props = ComponentProps<typeof NextLink> & ComponentProps<typeof MUILink>

const Link: FC<Props> = ({
  href,
  as,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  ...props
}) => {
  return (
    <NextLink
      href={href}
      as={as}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      passHref
    >
      <MUILink {...props} />
    </NextLink>
  )
}

export default Link
