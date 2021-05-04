import { useAppContext } from 'context'
import Pledge from 'components/molecules/Pledge/Pledge'

const ProductList = ({ modalView = false }) => {
  const { pledges } = useAppContext()
  let displayedPledges = [...pledges]
  if (!modalView) {
    displayedPledges = pledges.slice(1)
  }
  return (
    <>
      {displayedPledges.map(product => (
        <Pledge modalView={modalView} key={product.id} {...product} />
      ))}
    </>
  )
}

export default ProductList
