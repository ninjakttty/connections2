import { useState } from 'react'

import { Text } from '@mantine/core'

import Header from 'src/components/Header/Header'

import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle'
import { Welcome } from '../../components/Welcome/Welcome'
/*
drag queens (food):  Jan, Pearl, Rosé, Jade

animals: Fox, bunny, cat, dog

Meagans:  Good, Garcia-McLain, Fox, Stallion

Food: Peppermint, Ginger, Chamomile, Sage
*/

const OGdata = [
  // queens
  { name: 'Jan', id: 'jan', found: false, group: 'queens' },
  { name: 'Pearl', id: 'pearl', found: false, group: 'queens' },
  { name: 'Rosé', id: 'rose', found: false, group: 'queens' },
  { name: 'Jade', id: 'jade', found: false, group: 'queens' },

  // pets
  { name: 'Fox', id: 'fox', found: false, group: 'pets' },
  { name: 'Bunny', id: 'bunny', found: false, group: 'pets' },
  { name: 'Cat', id: 'cat', found: false, group: 'pets' },
  { name: 'Dog', id: 'dog', found: false, group: 'pets' },
  // meagans
  { name: 'Good', id: 'good', found: false, group: 'Megs' },
  { name: 'Garcia-McLain', id: 'garcia-mclain', found: false, group: 'Megs' },
  { name: 'Markle', id: 'markle', found: false, group: 'Megs' },
  { name: 'Stallion', id: 'stallion', found: false, group: 'Megs' },
  // food
  { name: 'Peppermint', id: 'peppermint', found: false, group: 'food' },
  { name: 'Ginger', id: 'ginger', found: false, group: 'food' },
  { name: 'Chamomile', id: 'chamomile', found: false, group: 'food' },
  { name: 'Sage', id: 'sage', found: false, group: 'food' },
]

export default function IndexPage() {
  // const [data, setData] = useState(OGdata.sort(() => Math.random() - 0.5))
  const [list, setList] = useState(
    [
      // queens
      { name: 'Jan', id: 'jan', found: false, group: 'queens' },
      { name: 'Pearl', id: 'pearl', found: false, group: 'queens' },
      { name: 'Rosé', id: 'rose', found: false, group: 'queens' },
      { name: 'Jade', id: 'jade', found: false, group: 'queens' },
      // pets
      { name: 'Fox', id: 'fox', found: false, group: 'pets' },
      { name: 'Bunny', id: 'bunny', found: false, group: 'pets' },
      { name: 'Cat', id: 'cat', found: false, group: 'pets' },
      { name: 'Dog', id: 'dog', found: false, group: 'pets' },
      // meagans
      { name: 'Good', id: 'good', found: false, group: 'Megs' },
      {
        name: 'Garcia-McLain',
        id: 'garcia-mclain',
        found: false,
        group: 'Megs',
      },
      { name: 'Markle', id: 'markle', found: false, group: 'Megs' },
      { name: 'Stallion', id: 'stallion', found: false, group: 'Megs' },
      // food
      { name: 'Peppermint', id: 'peppermint', found: false, group: 'food' },
      { name: 'Ginger', id: 'ginger', found: false, group: 'food' },
      { name: 'Chamomile', id: 'chamomile', found: false, group: 'food' },
      { name: 'Sage', id: 'sage', found: false, group: 'food' },
    ].sort(() => Math.random() - 0.5)
  )

  // guessed groups
  const [groups, setGroups] = useState([])

  const [count, setCount] = useState(0)

  const handleSubmit = (names) => {
    const namesList = list.reduce((acc, item) => {
      if (names.includes(item.id)) {
        acc.push(item.group)
      }
      return acc
    }, [])

    const groupGuess = namesList[0]
    const isSuccess = namesList.every((val) => val === groupGuess)

    if (isSuccess) {
      console.log('success')
      //remove from list
      const newList = list.filter((item) => !names.includes(item.id))
      setList(newList)
      setGroups([...groups, groupGuess])
    } else {
      setCount(count + 1)
    }
  }

  return (
    <>
      <Header groups={groups} />
      {count < 4 && <Welcome list={list} onSubmit={handleSubmit} />}
      {count === 4 && <Text color="red">Try again next time!</Text>}
      <h4>Guesses: {count}</h4>
    </>
  )
}
