import { Button, Link } from '@sushiswap/ui'
import { FC } from 'react'

import { PairWithAlias } from '../../types'

interface PoolButtonsProps {
  pair: PairWithAlias
}

export const PoolButtons: FC<PoolButtonsProps> = ({ pair }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Link.Internal href={`/${pair.id}/earn`} passHref={true}>
        <Button as="a">Earn</Button>
      </Link.Internal>
      <Button variant="outlined" as="a" href={`/swap/srcToken=${pair.id}&srcChainId=${pair.chainId}`}>
        Trade
      </Button>
    </div>
  )
}