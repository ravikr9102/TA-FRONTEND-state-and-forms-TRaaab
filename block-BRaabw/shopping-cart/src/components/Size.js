function Sizes(props) {
  return (
    <aside className="sidebar">
      {/* <p>Sizes Available:</p> */}
      <ul className="sizes">
        {props.sizes.map((size,i) => (
          <li onClick={() => {props.handleSize(size)}}>{size}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sizes;
