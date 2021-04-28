import styled from 'styled-components'

const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
`

export default ViewWrapper
