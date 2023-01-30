import {makeStyles, Theme} from "@material-ui/core/styles";
import {hover} from "@testing-library/user-event/dist/hover";

export const useStyles = makeStyles<Theme, { completed: boolean }>({
    itemWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 7,
        boxSizing: "border-box",
        height: 56
    },
    titleWrapper: {
        display: "flex",
        alignItems: "center",
        fontSize: 32
    },
    crossed: {
        textDecoration: "line-through"
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