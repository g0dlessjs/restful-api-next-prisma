import { Todo } from "@/generated/prisma";
import styles from "./TodoItem.module.css";
import { IoCheckbox } from "react-icons/io5";

interface Props {
  todo: Todo;
  // TODO: Acciones que quiero llamar
}

export const TodoItem = ({ todo }: Props) => {
  const { id, description, completed } = todo;
  return (
    <div className={todo.completed ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          className={`
                flex p-2 rounded-md cursor-pointer
                hover: bg-opacity-60
                 bg-blue-100
            `}
        >
          <IoCheckbox size={30} />
        </div>
      </div>
    </div>
  );
};
