import {Global, css, connect, styled, Head} from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import flexboxgrid from "../helpers/flexboxgrid.min.css";
// import body from "./body.css";
import Anne from "./Pages/Anne";
import Toni from "./Pages/Toni";
import Selection from "./Pages/Selection";


/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({state}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // console.log(data)

    return (
        <>
            {/* Add some metatags to the <head> of the HTML. */}
            <Title/>
            <Head>
                <meta name="description" content={state.frontity.description}/>
                <html lang="en"/>
            </Head>

            {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
            <Global styles={css(flexboxgrid)}/>
            <Global styles={globalStyles}/>
            {/*<Global styles={css(body)}/>*/}

            {/*/!* Add the header of the site. *!/*/}
            {/*<HeadContainer>*/}
            {/*  <Header />*/}
            {/*</HeadContainer>*/}

            {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
            <Main>
                <Switch>
                    <Loading when={data.isFetching}/>
                    {/*<List when={data.isArchive} />*/}
                    {/*<Post when={data.isPostType} />*/}
                    <Selection when={data.route === '/'}/>
                    <Toni when={data.route === '/toni-taloni/'}/>
                    <Anne when={data.route === '/anne-goovaerts/'}/>
                    <PageError when={data.isError}/>
                </Switch>
            </Main>
        </>
    );
};

export default connect(Theme);

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');
  
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  .no-padding {
    padding-left: 0;
    padding-right: 0;
  }

  .no-margin {
    margin-left: 0;
    margin-right: 0;
  }
  
  .mobile-wrap {
    max-width: 1440px;
    padding-left: 0;
    padding-right: 0;

    .row {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

const HeadContainer = styled.div`
  //display: flex;
  //align-items: center;
  //flex-direction: column;
  //background-color: #1f38c5;
`;

const Main = styled.div`
  //display: flex;
  //justify-content: center;
  //background-image: linear-gradient(
  //  180deg,
  //  rgba(66, 174, 228, 0.1),
  //  rgba(66, 174, 228, 0)
  //);
`;
