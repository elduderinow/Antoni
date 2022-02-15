import {connect, styled} from "frontity";
import {Col, Grid, Row} from "react-flexbox-grid";
import Nav from "./nav";
import Button from './partials/button';

const Header = ({state, data}) => {
    const post = state.source[data.type][data.id];

    let name;
    if (post.slug === 'anne-goovaerts') {
        name = 'Anne Goovaerts'
    }
    if (post.slug === 'toni-taloni') {
        name = 'Toni Taloni'
    }

    return data.isReady ? (
        <Container>
            <Grid className={"mobile-wrap"} fluid>
                <Row className={""}>
                    <Col className={""} xs={12}>
                        <Section>
                            <Nav/>
                            <Title>{name}</Title>
                            <p>{post.acf.header_intro}</p>
                            <div className={"button-wrapper"}>
                                <Button style={"primary"} text={'lees meer'} url={"services"} type={"anchor"}/>
                                <Button style={"secondary"} text={'Herstellingen'} url={"services"} type={"anchor"}/>
                            </div>
                        </Section>
                    </Col>
                </Row>
            </Grid>
        </Container>
    ) : null;
};

export default connect(Header);

const Container = styled.div`
  background-color: #798B6B;

`;

const Section = styled.section`
  padding: 0 0 5rem 0;

  .button-wrapper {
    display: flex;
    gap: 20px;
  }

  p {
    color: white;
    font-size: 1.5rem;
    width: 100%;
    line-height: 2.3rem;
    font-weight: 300;

    @media (min-width: 992px) {
      width: 60%;
    }
  }
`;

const Title = styled.h1`
  font-size: 8rem;
  margin: 4rem 0 1rem 0;
  font-family: 'Marcellus', serif;
  font-weight: normal;
  color: white;
`;
