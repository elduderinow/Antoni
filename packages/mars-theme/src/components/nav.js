import React from "react"
import {connect, styled} from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Nav = ({state}) => {
    const data = state.source.get(state.router.link);
    const res = state.theme.menu.filter(([name, link]) => {
        return data.route !== link + "/"
    })
    let otherName = res[0][0];
    let otherLink = res[0][1];

    let goAnchor = (id) => {
        let target = document.getElementById(id);
        target.scrollIntoView()
    }

    return (
        <Navigation>
            {/* If link url is the current page, add `aria-current` for a11y */}
            <Link link={otherLink}>
                {otherName}
            </Link>
            <a className={"link"} onClick={() => goAnchor('services')}>services</a>
            <a className={"link"} onClick={() => goAnchor('services')}>Info</a>
            <a className={"link"} onClick={() => goAnchor('services')}>Webshop</a>
            <a className={"link"} onClick={() => goAnchor('services')}>Contact</a>
        </Navigation>
    )
}

export default connect(Nav);
// export default Nav;

const Navigation = styled.nav`
  display: inline;
  text-align: right;
  a {
    margin-left: 2rem;
    cursor: pointer;
    
    &:hover {
      border-bottom: 1px solid white;
    }
  }
`;

// const a = styled.nav`
//   display: inline;
// `;
