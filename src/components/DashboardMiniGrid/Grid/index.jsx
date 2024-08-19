import './Grid.css';
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const Grid = (props) => {
  const { icon, title, value, status, change } = props.data;

  const isAmount = value.amount !== undefined;
  const formattedValue = isAmount ? `$${value.amount}k` : value.count;

  return (
    <div id='dash-col' className="col-lg-3">
      <div className="dash-card">
        <div className="card-header border-0 p-0">
          <img src={icon} className="mini-card-img" alt={title} />
          <p className="title">{title}</p>
        </div>

        <div className="card-footer p-0 border-0">
          <div className="footer-text">
            <p className="value">
              {formattedValue}
            </p>
            <div className={`stats ${status}`}>
              {
                status === 'up' ?
                  <FaCaretUp />
                  : <FaCaretDown />
              }
              <span className='ms-1'>{change}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid;