import React, {FC} from "react"
import DeleteIcon from '@material-ui/icons/HighlightOff';
import Checkbox from '@material-ui/core/Checkbox';
import {ITodoItem} from "../../types";
import {useStyles} from "./TodoItem.styles";

const TodoItem: FC<ITodoItem> = ({title, completed, onToggle, onDelete, _id}) => {
    const styles = useStyles()

    const toggleItem = () => onToggle && onToggle(_id)
    const deleteItem = () => onDelete && onDelete(_id)

    return <div className={styles.itemWrapper}>
        <div className={styles.titleWrapper}>
            <Checkbox checked={completed} onChange={toggleItem} color="default"/>
            <span>{title}</span>
        </div>
        <button className={styles.button} onClick={deleteItem}>
            <DeleteIcon/>
        </button>
    </div>
}

export default TodoItem