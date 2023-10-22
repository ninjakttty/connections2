import { Center, Flex, ThemeIcon } from '@mantine/core'
import { IconHeart } from '@tabler/icons-react'
const Healthbar = ({ lives }) => {
  const arr = []

  for (let i = 0; i < 4; i++) {
    let from = 'red'
    let to = 'red'

    if (i < lives) {
      from = 'green'
      to = 'green'
    }

    if (i === 0) {
      if (lives === 1) {
        from = 'green'
        to = 'red'
      }
    }

    arr.push(
      <ThemeIcon
        variant="gradient"
        size="xl"
        aria-label="Gradient action icon"
        gradient={{ from, to, deg: 90 }}
      >
        <IconHeart />
      </ThemeIcon>
    )
  }

  return (
    <Center style={{ margin: 32 }}>
      <Flex
        mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        {arr}
      </Flex>
    </Center>
  )
}

export default Healthbar
