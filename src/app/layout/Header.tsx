import Wrapper from '../components/shared/Wrapper'
import Image from 'next/image'
import logoImg from "@/app/assests/images/airbnb-logo.png"

const Header = () => {
  return (
    <header className="shadow-md">
      <Wrapper>
        <div className='py-8 px-4 font-bold '>
          <Image src={logoImg} alt='logo' className='max-w-[100px]' />
        </div>
        </Wrapper>
  
    </header>
  )
}

export default Header
