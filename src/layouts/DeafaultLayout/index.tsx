import { LayoutContainer } from "./styles"
import { Outlet } from 'react-router-dom'
import Header from "../../components/Header"

const DefaultLayout = () => {
  // You can put Header/Footer here
  // All the content will be inside <Outlet />
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

export default DefaultLayout