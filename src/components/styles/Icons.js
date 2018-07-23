import styled, { css } from 'styled-components'
import { Calendar } from 'styled-icons/octicons/Calendar'
import { Timer } from 'styled-icons/material/Timer'
import { Email } from 'styled-icons/material/Email'
import { Create } from 'styled-icons/material/Create'

const defaultHeight = css`
  height: ${props => props.size || '1rem'};
  width: ${props => props.size || '1rem'};
`

export const DateIcon = styled(Calendar)`
  ${defaultHeight}
`

export const TimeIcon = styled(Timer)`
  ${defaultHeight}
`

export const EmailIcon = styled(Email)`
  ${defaultHeight}
`

export const CreateIcon = styled(Create)`
  ${defaultHeight}
`