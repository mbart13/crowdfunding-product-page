import { useAppContext } from 'context'
import Pledge from 'components/molecules/Pledge/Pledge'

const ProductList = ({ modalView = false }) => {
  const { data } = useAppContext()
  return (
    <>
      {data.map((product) => (
        <Pledge modalView={modalView} key={product.id} {...product} />
      ))}
    </>
  )
}

export default ProductList
