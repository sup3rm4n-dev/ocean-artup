import Typography from 'typography'
import noriega from 'typography-theme-noriega'

noriega.overrideThemeStyles = () => ({
  'a': {
    textDecoration: 'none'
  }
})

const typography = new Typography(noriega)

export default typography
