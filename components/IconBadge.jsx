import CircleButton from "./circleButton"
import {Badge} from 'react-bootstrap'

function IconBadge({icon}) {
  return (
    <CircleButton>{icon}<Badge bg="success"className="">0</Badge></CircleButton>
  )
}

export default IconBadge