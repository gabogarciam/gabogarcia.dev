import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const TadaAnimation = ({ children }) => {
  return (
    <StyledDiv
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.1, 1.1, 1.1, 1],
        rotateZ: [0, -3, 3, -3, 0]
      }}
      transition={{
        duration: 1,
        times: [0, 0.1, 0.3, 0.9, 1],
        ease: 'easeInOut',
        repeat: 1,
        repeatType: 'loop'
      }}
    >
       {children}
    </StyledDiv>
  )
}

export default TadaAnimation
