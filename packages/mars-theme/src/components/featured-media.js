import {connect, styled} from "frontity";
import Image from "@frontity/components/image";

/**
 * The Component that renders a featured media, typically an image. The featured
 * media can represent an individual Post, Page, or Custom Post Type.
 *
 * @param props - The state injected by {@link connect } and the ID of the
 * featured media.
 *
 * @returns A react component.
 */
const FeaturedMedia = ({state, id}) => {
    const media = state.source.attachment[id];
    // console.log(media)
    if (!media) return null;

    const srcset =
        Object.values(media.media_details.sizes)
            // Get the url and width of each size.
            .map((item) => [item.source_url, item.width])
            // Recude them to a string with the format required by `srcset`.
            .reduce(
                (final, current, index, array) =>
                    final.concat(
                        `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
                    ),
                ""
            ) || null;

    return (
        <Container className={"image-wrapper"}>
            <StyledImage className={"featured-image"}
                         alt={media.title.rendered}
                         src={media.source_url}
                         srcSet={srcset}
                         width={media?.media_details?.width}
                         height={media?.media_details?.height}
            />
        </Container>
    );
};

export default connect(FeaturedMedia);

const Container = styled.div`
  position: relative;
  padding-top: 56%;
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100%;
  object-fit: cover;
`;
