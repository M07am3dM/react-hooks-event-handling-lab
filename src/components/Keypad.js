// Code Keypad Component Here

function Keypad() {
  function handleChange(e) {
    console.log('Entering password...');
  }
  return (
    <div>
      <label htmlFor="password">Password:</label>  
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={handleChange}
      />
    </div>
  );
}

export default Keypad;
