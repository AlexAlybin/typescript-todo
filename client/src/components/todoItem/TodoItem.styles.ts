import {makeStyles} from "@material-ui/core/styles";
import {hover} from "@testing-library/user-event/dist/hover";

export const useStyles = makeStyles({
    itemWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid lightgrey",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        boxSizing: "border-box"
    },
    titleWrapper: {
        display: "flex",
        alignItems: "center",
        fontSize: 22
    },
    button: {
        outline: "none",
        border: "none",
        cursor: "pointer",
        background: "transparent",
        display: "flex",
        padding: 4,
        "&:hover": {
            borderRadius: 5,
            backgroundColor: "#d7d7d7"
        },
    }
})