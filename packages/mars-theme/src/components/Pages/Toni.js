import {useEffect} from "react";
import {connect, styled} from "frontity";
import Link from "../link";
import List from "../list";
import {Grid, Row, Col} from 'react-flexbox-grid';
import FeaturedMedia from "../featured-media";
import Header from "../header";
import Button from '../partials/button';
// import { Swiper, SwiperSlide } from 'swiper/react';

const Toni = ({state, actions, libraries}) => {
    // Get information about the current URL.
    // const data = state.source.get(state.router.link);
    const data = state.source.get('/toni-taloni/');
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
    console.log(post)

    useEffect(() => {
        actions.source.fetch("/");
        List.preload();
    }, [actions.source]);

    // Load the post, but only if the data is ready.
    return data.isReady ? (
        <Container>
            <HeadContainer>
                <Header data={data}/>
            </HeadContainer>
            <Grid className={"no-padding"} fluid>
                <Row className={"no-margin"}>
                    <Col className={"no-padding"} xs={12} md={6} mdOffset={6}>
                        <section className={"header-image"}>
                            <div className={"image-container"}>
                                <FeaturedMedia id={fmediaId}/>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Grid>
            <Grid className={"mobile-wrap"} fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <section id={"services"} className={"intro"}>
                            <h1>{post.acf.intro_title}</h1>
                            <Image className={"intro-image"} src={post.acf.intro_image}/>
                        </section>
                    </Col>
                    <Col classNam={"no-padding"} xs={12} md={6}>
                        <section id={"services"} className={"intro-text"}>
                            <h2>{post.acf.intro_text}</h2>
                            <p>{post.acf.intro_subtext}</p>
                            <Button style={"secondary"} text={'lees meer'} url={"/"} type={"url"}/>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <h1>Wij werken met de meest slijtvaste en duurzaamste materialen die er op de markt te vinden
                            zijn.</h1>
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
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;

    .image-container {
      margin-top: 0;
      width: 100%;

      @media (min-width: 992px) {
        margin-top: -100px;
        width: 100%;
      }
    }
  }

  section.intro {
    margin-top: -200px;

    h1 {
      font-family: 'Marcellus', serif;
      font-size: 2rem;
      color: #aaaaaa;
      margin-bottom: 4rem;
    }

    .intro-image {
      width: calc((100% / 6) * 5);
    }

    img {
      width: 100%;
    }
  }

  section.intro-text {
    h2 {
      font-family: 'Lato', sans-serif;
      color: gray;
      font-weight: 400;
      font-style: normal;
      margin-top: 6rem;
      font-size: 2rem;
      line-height: 3rem;
    }

    p {
      font-family: 'Lato', sans-serif;
      color: gray;
      font-weight: 400;
      font-style: normal;
      margin-top: 2rem;
      font-size: 1.3rem;
      line-height: 2rem;
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
