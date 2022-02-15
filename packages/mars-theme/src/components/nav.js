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
            <ul>
                <li>
                    <Link link={otherLink}>
                        {otherName}
                    </Link>
                </li>
                <li>
                    <a className={"link"} onClick={() => goAnchor('services')}>services</a>
                </li>
                <li>
                    <a className={"link"} onClick={() => goAnchor('services')}>services</a>
                </li>
                <li>
                    <a className={"link"} onClick={() => goAnchor('services')}>services</a>
                </li>
                <li>
                    <a className={"link"} onClick={() => goAnchor('services')}>services</a>
                </li>
            </ul>
        </Navigation>
    )
}

export default connect(Nav);

const Navigation = styled.nav`
  text-align: right;
  width: 100%;
  margin-top: 4rem;
  
  ul {
    padding-left: 0;
    li {
      display: inline-block;
      list-style-type: none;
    }
  }
  a {
    margin-left: 2rem;
    cursor: pointer;
    color: white;
    padding-bottom: 0.5rem;
    
    &:hover {
      border-bottom: 1px solid white;
    }
  }
`;

// const a = styled.nav`
//   display: inline;
// `;
