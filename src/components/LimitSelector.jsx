const LimitSelector = ({ limit, onLimitChange }) => {
  return (
    <div className='controls'>
      <label htmlFor='limit'>Show: </label>
      <select
        value={limit}
        id='limit'
        onChange={(e) => onLimitChange(Number(e.target.value))}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
    </div>
  );
};

export default LimitSelector;
