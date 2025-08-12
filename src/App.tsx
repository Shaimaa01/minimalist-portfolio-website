function App() {
  const unusedVariable = 'hello' // This is a linting error

  // This has formatting errors (extra spaces, bad quotes, wrong class order)
  return <h1 className={'  text-3xl   underline   font-bold '}>Hello world!</h1>
}

export default App
