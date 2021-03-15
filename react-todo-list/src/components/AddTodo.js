const AddTodo = () => {
  return (
    <form className={'add-form'}>
      <div className={'form-control'}>
        <label>Todo</label>
        <input type="text" placeholder="Add task" />
      </div>
      <div className={'form-control'}>
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" />
      </div>
      <div className={'form-control form-control-check'}>
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>

      <input type="submit" value="save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTodo;
