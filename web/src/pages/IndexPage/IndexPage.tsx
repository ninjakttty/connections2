import { useState } from 'react'

import { Center, Text, Title } from '@mantine/core'

import Header from 'src/components/Header/Header'
import Healthbar from 'src/components/Healthbar/Healthbar'

import { Welcome } from '../../components/Welcome/Welcome'
export default function IndexPage() {
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
        name: 'Boone',
        id: 'boone',
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
    ] //.sort(() => Math.random() - 0.5)
  )

  // guessed groups
  const [groups, setGroups] = useState([])

  const [count, setCount] = useState(4)

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
      setCount(count - 1)
    }
  }

  return (
    <>
      <Center style={{ margin: 32 }}>
        <Title order={3}>Make connections between words</Title>
      </Center>
      <Header groups={groups} />
      {count !== 0 && <Welcome list={list} onSubmit={handleSubmit} />}
      {count === 0 && (
        <Center style={{ margin: 32 }}>
          <Text c="red">Try again next time!</Text>
        </Center>
      )}

      <Healthbar lives={count} />
    </>
  )
}
