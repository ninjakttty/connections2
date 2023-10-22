import { useState } from 'react'

import { SimpleGrid, Button, Flex, Chip } from '@mantine/core'

export function Welcome({ list, onSubmit: handleSubmit }) {
  // hold selected items
  const [value, setValue] = useState([])

  // let colors = ['red', 'blue', 'green', 'yellow']
  // colors = [...colors, ...colors, ...colors, ...colors].sort(
  //   () => Math.random() - 0.5
  // )

  // const handleSubmit = () => {
  //   console.log(value)
  // }

  return (
    <>
      <SimpleGrid cols={4}>
        <Chip.Group multiple value={value} onChange={setValue}>
          {list.map((item, index) => (
            <Chip key={index} value={item.id}>
              {item.name}
            </Chip>
          ))}
        </Chip.Group>
      </SimpleGrid>

      <Flex
        style={{ marginTop: '60px' }}
        mih={50}
        gap="md"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <Button
          variant="filled"
          color="blue"
          onClick={() => {
            handleSubmit(value)
            setValue([])
          }}
          disabled={value.length !== 4}
        >
          Submit
        </Button>
      </Flex>
    </>
  )
}

/*
        {list.map((item, index) => (
          <Chip
            defaultChecked
            icon={null}
            key={index}
            variant="filled"
            color={colors.pop()}
          >
            {item.name}
          </Chip>
        ))}
*/

/*
          <Button key={index} variant="filled" color={colors.pop()}>
            {item.name}
          </Button>
        <Button variant="filled">Button</Button>
        <Button variant="filled">Button</Button>
        <Button variant="filled">Button</Button>
        <div>4</div>
        <div>5</div>
*/
//
