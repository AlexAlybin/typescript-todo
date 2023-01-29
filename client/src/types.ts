export interface ITodoItem {
    _id: string,
    title: string,
    completed?: boolean
    onToggle?: (id: string) => void
    onDelete?: (id: string) => void
}