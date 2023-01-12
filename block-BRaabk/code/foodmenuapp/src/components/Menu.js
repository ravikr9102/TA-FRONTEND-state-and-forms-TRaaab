function Menu(props) {
  return (
    <ul>
      {props.allData.map((item, i) => {
        return (
          <li key={i}>
          <div>
          <figure>
            <img src={item.img} />
          </figure>
            <div>
              <h2>{item.title}</h2>
              <span>{item.price}</span>
            </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
