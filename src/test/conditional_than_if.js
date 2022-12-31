function App() {
  const name = '리엑트';
  return (
      <div>
        {name === '리엑트' ? (
            <h1>리엑트입니다.</h1>
        ) : (
            <h2>리엑트가 아닙니다.</h2>
        )}
      </div>
  );
}

export default App;