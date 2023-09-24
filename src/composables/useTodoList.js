import { ref } from 'vue';

export const useTodoList = () => {
  //ローカルストレージにtodoListが存在していればparseし、
  //無ければundifinedになるため空配列をセットする。
  const Is = localStorage.todoList;
  const todoListRef = ref([]);
  todoListRef.value = Is ? JSON.parse(Is) : [];

  const add = (task) => {
    const id = new Date().getTime();
    todoListRef.value.push({ id: id, task: todoRef.value });
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  //TODOリストからIDを元にTODO情報を取得
  const findById = (id) => {
    return todoListRef.value.find((todo) => todo.id === id);
  };

  //TODOリストからIDを元にそのインデックスを取得
  const findIndexById = (id) => {
    return todoListRef.value.findIndex((todo) => todo.id === id);
  };

  //編集ボタンが押されたとき
  const editId = ref(-1);
  const show = (id) => {
    const todo = findById(id);
    editId.value = id;
    return todo.task;
  };

  //変更ボタンが押されたとき
  const edit = (task) => {
    const todo = findById(editId.value);
    const idx = findIndexById(editId.value);
    todo.task = task;
    todoListRef.value.splice(idx, 1, todo);
    localStorage.todoList = JSON.stringify(todoListRef);
    editId.value = -1;
  };

  //削除ボタンが押されたとき
  const del = (id) => {
    const todo = findById(id);
    const delMsg = '「' + todo.task + '」を削除しますか？';
    if (!confirm(delMsg)) return;

    const idx = findIndexById(id);
    todoListRef.value.splice(idx, 1);
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  //チェックボックスが押されたとき
  const check = (id) => {
    const todo = findById(id);
    const idx = findIndexById(id);
    todo.checked = !todo.checked;
    todoListRef.value.splice(idx, 1, todo);
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  return { todoListRef, add, show, edit, del, check };
};
