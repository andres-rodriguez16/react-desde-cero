const Formularios = () => {
  return (
    <>
      <form action='' id='form__header'>
        <label> header</label>
        <input type='text' />
        <button type='submit'>Enviar</button>
      </form>
      <form id='form__footer'>
        <label> footer</label>
        <input type='text' />
        <button type='submit'>Enviar</button>
      </form>
    </>
  );
};

export default Formularios;
