import useStyle from "./App.style";

const App = () => {
  const style = useStyle();

  return(
    <div className={style.container}>
      <h1>Olá mundo!</h1>
    </div>
  )
}

export default App