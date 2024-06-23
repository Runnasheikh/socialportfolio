import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { Link as ScrollLink } from 'react-scroll'
import About from './Aboutus'

const link = [
  
    
    {
        path: "youtube",
        name: "youtube"
    },
    {
        path: "contact",
        name: "Contact"
    },
]

const Nav = ({ containerStyles, linkStyles }) => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1310px)"
    })
  return (
    <nav className={`${containerStyles}`}>
        <div>
            <Link href={'/'}>Home</Link>
        </div>
        {
            link.map((link, index) => {
                return (
                    <ScrollLink
                      key={index}
                      to={link.path}
                      className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
                      smooth={!isDesktop ?false :true}
                      spy={true}
                      offset={-50}
                      activeClass='active'
                      duration={500}
                    >
                        {link.name}
                        
                    </ScrollLink>
                )
            })
        }
        <div>
           <Link href={'/components/Aboutus'}>About us</Link>
        </div>
    </nav>
  )
}

export default Nav
