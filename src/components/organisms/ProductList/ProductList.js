import { useAppContext } from 'context'
import Pledge from 'components/molecules/Pledge/Pledge'

const ProductList = () => {
  const { data } = useAppContext()
  return (
    <>
      {data.map((product) => (
        <Pledge key={product.id} {...product} />
      ))}
    </>
  )
}

export default ProductList
