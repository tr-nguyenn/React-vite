import "./style.css";

const MyComponent = () => {
  return (
    <div>
      <div>Trung Nguyên</div>
      <div className="child" style={{borderRadius: "10px"}}>
        child
      </div>
    </div>
  );
};

export default MyComponent;
