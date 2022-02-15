import {useEffect} from "react";
import {connect, styled} from "frontity";
import Link from "../link";
import List from "../list";
import {Grid, Row, Col} from 'react-flexbox-grid';
import FeaturedMedia from "../featured-media";
import Header from "../header";

const Toni = ({state, actions, libraries}) => {
    // Get information about the current URL.
    // const data = state.source.get(state.router.link);
    const data = state.source.get('/toni-taloni/');
    console.log(data)
    console.log(state.source.get('/toni-taloni/'))
    // Get the data of the post.
    const post = state.source[data.type][data.id];
    // Get the data of the author.
    const author = state.source.author[post.author];
    // Get a human readable date.
    const date = new Date(post.date);

    // Get the html2react component.
    const Html2React = libraries.html2react.Component;

    // console.log(post.acf.intro_image)
    // console.log(state.router.link)
    const fmediaId = post.featured_media;
    // console.log(post)

    useEffect(() => {
        actions.source.fetch("/");
        List.preload();
    }, [actions.source]);

    // Load the post, but only if the data is ready.
    return data.isReady ? (
        <Container>
            <HeadContainer>
              <Header data={data} />
            </HeadContainer>
            <Grid className={"mobile-wrap"} fluid>
                <Row>
                    <Col className={"no-padding"} xs={12} md={6} mdOffset={6}>
                        <section className={"header-image"}>
                            <div className={"image-container"}>
                                <FeaturedMedia id={fmediaId}/>
                            </div>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <section id={"services"} className={"intro"}>
                            <h1>Onze Services test</h1>
                            {/*<Image className={"intro-image"} src={post.acf.intro_image}/>*/}
                        </section>
                    </Col>
                    <Col xs={12} md={6}>
                        <section id={"services"} className={"intro-text"}>
                            <h2>Bij Toni Taloni kan u ook terecht voor al uw schoenonderhouds-producten en kan u rekenen op professioneel advies wat betreft schoenonderhoud.</h2>
                            <p>Wij werken met de meest slijtvaste en duurzaamste materialen die er op de markt te vinden zijn.</p>
                            <button>Lees Meer</button>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <h1>Wij werken met de meest slijtvaste en duurzaamste materialen die er op de markt te vinden zijn.</h1>
                    </Col>
                </Row>
            </Grid>
        </Container>
    ) : null;
};

export default connect(Toni);

const Container = styled.div`
  section.header-image {
    width: 100%;
    //max-width: 1440px;
    position: relative;
    margin: 0 auto;
    background-color: blue;
    display: flex;
    justify-content: flex-end;

    .image-container {
      margin-top: -100px;
      width: 100%;

      @media(max-width: 600px) {
        margin-top: 0;
        width: 100%;
      }
      //
      //img {
      //  width: 100%;
      //}
    }
  }
  
  section.intro {
    margin-top: -200px;
    
    .intro-image {
      width: calc((100% / 6) * 5);
    }
   
    img {
      width: 100%;
    }
  }
`;

const Wrapper = styled.div`
  background-color: red;
  padding: 2rem;
`;

const Image = styled.img`
  width: 100%;
`;

const HeadContainer = styled.div`
  //display: flex;
  //align-items: center;
  //flex-direction: column;
  //background-color: #1f38c5;
`;
