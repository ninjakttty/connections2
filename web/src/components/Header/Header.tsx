import { Box, Center } from '@mantine/core'

const Header = ({ groups }) => {
  // console.log(`groups:`, groups)
  const rows = [
    { str: 'Drag Queens Names', id: 'queens' },
    { str: 'Furry Friends', id: 'pets' },
    { str: 'Megs!', id: 'Megs' },
    { str: 'Herbs', id: 'food' },
  ].filter((item) => groups.includes(item.id))

  const colors = ['red', 'blue', 'green', 'yellow']

  return (
    <div>
      {rows.map((item, index) => (
        <Box key={index} bg={colors[index]}>
          <Center>
            <h1>{item.str}</h1>
          </Center>
          <br />
        </Box>
      ))}
    </div>
  )
}

export default Header
