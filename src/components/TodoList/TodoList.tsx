import React from 'react';
import { useTodoContext } from '../../context/TodoContext';

export const TodoList: React.FC = () => {
  const { filteredTodos, setSelectedTodo, selectedTodo } = useTodoContext();

  return (
    <table className="table is-fullwidth">
      <tbody>
        {filteredTodos.map(todo => (
          <tr
            key={todo.id}
            data-cy="todo"
            className="box"
            style={{ opacity: todo.completed ? 0.6 : 1 }}
          >
            <td style={{ width: 60 }}>{todo.id}</td>
            <td>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                    }}
                  >
                    {todo.title}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  {/* completed icon */}
                  {todo.completed && (
                    <span data-cy="iconCompleted">
                      <i className="fas fa-check" />
                    </span>
                  )}

                  {/* show / hide button */}
                  <button
                    data-cy="selectButton"
                    className={`button is-small ${selectedTodo && selectedTodo.id === todo.id ? 'is-danger' : 'is-info'}`}
                    onClick={() => setSelectedTodo(todo)}
                  >
                    <span className="icon">
                      <i
                        className={
                          selectedTodo && selectedTodo.id === todo.id
                            ? 'fas fa-eye-slash'
                            : 'fas fa-eye'
                        }
                      />
                    </span>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
