import { useLocation } from 'react-router-dom'
import { parse } from 'src/utils/qs'

export default () => {
  const search = useLocation().search
  const query = parse(search)
  return {
    raw: search,
    query,
  }
}
