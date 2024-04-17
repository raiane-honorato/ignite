import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  const summary = useMemo(
    () =>
      transactions.reduce(
        (accum, transaction) => {
          if (transaction.type === 'income') {
            accum.income += transaction.price
            accum.total += transaction.price
          } else {
            accum.outcome += transaction.price
            accum.total -= transaction.price
          }
          return accum
        },
        {
          income: 0,
          outcome: 0,
          total: 0,
        },
      ),
    [transactions],
  )

  return summary
}
