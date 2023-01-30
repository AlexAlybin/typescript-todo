import {makeStyles, Theme} from "@material-ui/core/styles";
import Paper from "../assets/paper.png";

type StyleProps = {
    disabled: boolean
}

export const useStyles = makeStyles<Theme, StyleProps>(theme => ({
    header: {
        fontSize: 72,
        color: "#1a1a95",
        textAlign: "center"
    },
    formWrapper: {
        width: "50%",
        borderRadius: 5,
        padding: 15,
        marginBottom: 25,
        boxSizing: "border-box"
    },
    paperWrapper: {
        width: "60%",
        minHeight: 400,
        padding: "0px 20px 10px 170px",
        boxSizing: "border-box",
        borderRadius: 5,
        backgroundImage: `url(${Paper})`,
        backgroundPosition: 'initial',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y',
    },
    inputWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        "& input": {
            width: 380,
            border: "none",
            borderRadius: 5,
            height: 30,
            fontSize: 24,
            padding: 3,
            backgroundColor: "#fff",
            "&:focus": {outline: "none"}
        }
    },
    submitBtn: {
        margin: "0px 20px",
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