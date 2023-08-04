import "./TopProducts.scss";
import { GoSearch } from "react-icons/go";
import { BsChevronDown } from "react-icons/bs";
import { MdComputer } from "react-icons/md";

const TopProducts = () => {
  return (
    <div className="topProducts">
      <header className="between">
        <div className="title">Top products</div>
        <div className="right between">
          <div className="search">
            <GoSearch className="searchIcon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="select between">
            <span>This week</span>
            <BsChevronDown className="arrowIcon" />
          </div>
        </div>
      </header>
      <table>
        <tbody>
          <tr>
            <th>Product name</th>
            <th>Order ID</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Sales</th>
          </tr>
          <tr>
            <td className="productName">
              <MdComputer className="computerIcon" />
              <span>MacBook Air AAPL</span>
            </td>
            <td>#719261</td>
            <td>$1,846</td>
            <td>9,971</td>
            <td>$15,308,94</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;
