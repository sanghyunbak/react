function AppAddStyle() {
  const name = "리엑트";
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px", // font-size -> fontSize
    fontWeight: "bold", // font-weight -> fontWeight
    padding: 16, // 단위 생략 시 px로 자동 지정
  };
  return <div style={style}>{name}</div>;
}
