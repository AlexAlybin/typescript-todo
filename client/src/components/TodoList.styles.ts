import {makeStyles, Theme} from "@material-ui/core/styles";

type StyleProps = {
    disabled: boolean
}

export const useStyles = makeStyles<Theme, StyleProps>(theme => ({
    header: {
        fontSize: 42
    },
    container: {
        width: "50%",
        minHeight: 450,
        backgroundColor: "#e9e9e9",
        borderRadius: 5,
        padding: 25,
        boxSizing: "border-box"
    },
    inputWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        "& input": {
            width: 200,
            borderRadius: 5,
            border: "1px solid lightgray",
            fontSize: 20,
            "&:focus": {outline: "none"}
        }
    },
    submitBtn: {
        marginLeft: 20,
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& button": {
            outline: "none",
            border: "none",
            background: "transparent",
            display: "flex",
            padding: 4,
            cursor: "pointer",
            "&:hover": {
                borderRadius: 5,
                backgroundColor: "#d7d7d7"
            },
        }
    },
    emptyContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 300
    }
}))