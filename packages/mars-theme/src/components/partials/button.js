import {connect, styled} from "frontity";

const Button = ({text, url, type, style}) => {

    let goToLink = (id) => {
        if (type === "anchor") {
            let target = document.getElementById(id);
            target.scrollIntoView()
        } else if (type === "url") {
            window.open(id, "_blank")
        }
    }

    if (style === "primary") {
        return (
            <PrimaryButton onClick={() => goToLink(url)}>
                {text}
            </PrimaryButton>
        );
    } else if (style === "secondary") {
        return (
            <SecondaryButton onClick={() => goToLink(url)}>
                {text}
            </SecondaryButton>
        );
    }
};

export default connect(Button);

const Btn = styled.a`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  margin: 2rem 0;
  background-color: green;
  color: white;
  transition: background-color 0.3s;
`;

const PrimaryButton = styled(Btn)`
  background-color: white;
  color: #393939;

  &:hover {
    background-color: #d7d7d7;
  }
`;

const SecondaryButton = styled(Btn)`
  background-color: #56614d;
  color: white;

  &:hover {
    background-color: #434e3a;
  }
`;
