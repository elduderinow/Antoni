import {useEffect} from "react";
import {connect, styled} from "frontity";
import Link from "../link";
import List from "../list";
import {Grid, Row, Col} from 'react-flexbox-grid';
import anneLogo from '../../images/anne.svg';


/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Anne = ({state, actions, libraries}) => {
    // Get information about the current URL.
    const data = state.source.get(/anne-goovaerts/);
    // Get the data of the post.
    const post = state.source[data.type][data.id];
    // Get the data of the author.
    const author = state.source.author[post.author];
    // Get a human readable date.
    const date = new Date(post.date);

    // Get the html2react component.
    const Html2React = libraries.html2react.Component;

    // console.log(post.acf.intro_image)
    // console.log(data.route)

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch("/");
        List.preload();
    }, [actions.source]);

    // Load the post, but only if the data is ready.
    return data.isReady ? (
        <Grid className={"mobile-wrap"} fluid>
            <Row>
                <Col className={"no-padding"} xs={12}>
                    <Wrapper>
                        <Image src={anneLogo}/>
                        <h1 className={"intro-title"}>Binnenkort Online</h1>
                        <div><a href={"https://www.instagram.com/goovaertsanne/"}>Instagram</a> | <a href={"mailto:ga@annegoovaerts.be"}>ga@annegoovaerts.be</a></div>
                    </Wrapper>
                </Col>
            </Row>

            {/*{data.isAttachment ? (*/}
            {/*    <div dangerouslySetInnerHTML={{__html: post.description.rendered}}/>*/}
            {/*) : (*/}
            {/*    <Html2React html={post.content.rendered}/>*/}
            {/*)}*/}
        </Grid>
    ) : null;
};

export default connect(Anne);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    margin: 0 auto;
    width: 400px;
  }

  h1 {
    margin: 4rem 0 2rem 0;
    text-align: center;
    font-weight: 400;
    color: gray;
    font-size: 2rem;
  }

  div {
    color: gray;

    a {
      color: gray;

      &:hover {
        color: #a15717;
      }
    }
  }

`;

const Image = styled.img`
  width: 100%;
`;
