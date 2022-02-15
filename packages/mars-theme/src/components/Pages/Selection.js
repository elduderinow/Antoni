import {useEffect} from "react";
import {connect, styled} from "frontity";
import Link from "../link";
import List from "../list";
import {Grid, Row, Col} from 'react-flexbox-grid';
import FeaturedMedia from "../featured-media";
import Header from "../header";


const Selection = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/");
        List.preload();
    }, [actions.source]);

    return (
        <Container>
            <Grid className={"mobile-wrap"} fluid>
                <Row>
                    <Col className={""} xs={12} md={6}>
                        <section className={"toni-taloni"}>
                            <Link link={'/toni-taloni/'}>
                               Toni Taloni
                            </Link>
                        </section>
                    </Col>
                    <Col className={""} xs={12} md={6}>
                        <section className={"anne-goovaerts"}>
                            <Link link={'/anne-goovaerts/'}>
                                Anne Goovaerts
                            </Link>
                        </section>
                    </Col>
                </Row>
            </Grid>
        </Container>
    )
};

export default connect(Selection);

const Container = styled.div`
  section {
    height: 100vh;
    
    &.toni-taloni {
      background-color: red;
    }
    
    &.anne-goovaerts {
      background-color: pink;
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
