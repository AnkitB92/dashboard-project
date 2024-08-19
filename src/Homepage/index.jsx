import DashboardMiniGrid from "../components/DashboardMiniGrid";
import BarChart from "../components/Graph/BarChart";
import Header from "../components/Header";
import RecentOrdersList from "../components/RecentOrdersList";
import Sidebar from "../components/Sidebar";

// Import CSS
import './Homepage.css';

const Homepage = () => {

  return (
    <>
      <Header />
      <Sidebar />
      <div className="home-container">
        <div className="bg-danger justify-content-center row g-0 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
          <div className="col col-sm-7 col-md-7 col-lg-7 px-2">
            <h4 className="mt-2 ms-1">Dashboard</h4>
            <DashboardMiniGrid />
            <BarChart />
            <RecentOrdersList />
          </div>

          <div className="bg-warning col col-sm-5 col-md-5 col-lg-5"></div>
        </div>
      </div>
    </>
  );
}

export default Homepage;