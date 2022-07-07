import { styled } from "../stitches.config";
import { Application } from "../types/application";

interface IApplicationButtonProps {
    application: Application
};

const StyledImg = styled("img", {
    width: "300px",
    height: "auto",
})

const StyledDiv = styled("div", {
    border: "1px solid black",
    borderRadius: "5px",
    width: "350px",
    margin: "15px",
    display: "grid",
    placeItems: "center",
    "&:hover": {
        cursor: "pointer",
        transform: "translateY(-5px)"

    },
    transition: "all .2s ease-in-out",
})

export const ApplicationButton = (props: IApplicationButtonProps) => {
    return (
        <StyledDiv onClick={() => {
            props.application.open()
        }}>
            <StyledImg src={props.application.image} alt={props.application.name} />
        </StyledDiv>
    );
}
