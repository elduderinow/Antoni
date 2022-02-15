import {connect, styled} from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import {Col, Grid, Row} from "react-flexbox-grid";

const Header = ({state,data}) => {
    // const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    console.log(post)
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
                        <section className={"header"}>
                            <Nav/>
                            <h1>{name}</h1>
                            <p>{post.acf.header_intro}</p>
                            <button>{post.acf.header_button}</button>
                        </section>
                    </Col>
                </Row>
            </Grid>
        </Container>
    ) : null;
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  background-color: #192eb4;

  section.header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5rem 2rem;
    color: white;

    h1 {
      font-size: 9rem;
      margin: 4rem 0 1rem 0;
      font-family: 'Marcellus', serif;
      font-weight: normal;
    }

    button {
      width: 200px;
      background-color: white;
      border: none;
      padding: 1rem 0;
      border-radius: 100px;

      &:hover {
        background-color: pink;
      }
    }
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 1440px;
  background-color: pink;
  padding: 2rem;
  position: relative;
`;

const Title = styled.h1`
  //margin: 0;
  //margin-bottom: 16px;
  //background-color: red;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
