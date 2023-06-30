import TaskForm from '../../components/TaskForm';

const Add = () => {
  return (
    <>
      <TaskForm
        onAdd={true}
        onReset={true}
      />
    </>
  );
};

export default Add;
