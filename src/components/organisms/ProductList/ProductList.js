import { useAppContext } from 'context'
import Pledge from 'components/molecules/Pledge/Pledge'

const ProductList = () => {
  const { data } = useAppContext()
  return (
    <>
      {data.map((product) => (
        <Pledge {...product} />
      ))}
    </>
  )
}

export default ProductList
