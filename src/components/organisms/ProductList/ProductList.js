import { useAppContext } from 'context'
import Pledge from 'components/molecules/Pledge/Pledge'

const ProductList = ({ modalView = false }) => {
  const { rewards } = useAppContext()
  let displayedPledges = [...rewards]
  if (!modalView) {
    displayedPledges = rewards.slice(1)
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
