import React from 'react';
import Card from '../ui/dashboard/card/page';
import Chart from '../ui/dashboard/chart/page';
import Rightbar from '../ui/dashboard/rightbar/page';
import Transactions from '../ui/dashboard/transactions/page';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3 px-2">
        <div className="flex flex-col md:flex-row gap-5">
          <Card />
          <Card />
          <Card />
        </div>

        {/* Transactions and Chart Aspect */}        
        <Transactions/>
        <Chart />        
      </div>

      {/* RightBar */}
      <div className="md:w-1/3 mt-4 md:mt-0">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
