export default function Todo() {
  return (
    <fieldset className="border border-black p-3 rounded-lg w-full">
      <label htmlFor="checkbox" className="flex flex-row space-x-2">
        <div>
          <input type="checkbox" id="checkbox"/>
          <span />
        </div>
        <span>Learn React</span>
      </label>
    </fieldset>
    
  );
}
