import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { Link as ScrollLink } from 'react-scroll'

const link = [
    {
        path: "home",
        name: "Home"
    },
    {
        path: "tours",
        name: "Tours"
    },
    {
        path: "discography",
        name: "Discography"
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
    </nav>
  )
}

export default Nav
