import { useMemo } from 'react';
import { motion } from 'framer-motion';

const Bar = ({ name, colour, ticketCount, height }) => {
  return (
    <motion.div
      className='bar'
      style={{ backgroundColor: colour }}
      initial={{ height: 0 }}
      animate={{ height: `${height}%` }}
      exit={{ height: 0 }}
    >
      <div className='tooltip'>
        {name} - {ticketCount}
      </div>
    </motion.div>
  );
};

const BarChart = ({ data }) => {
  const maxTicketCount = useMemo(() => {
    // give arr [30,50,60,4]
    // 60
    return Math.max(...data.map((item) => item.ticketCount));
  }, []);

  return (
    <motion.div
      className='chart-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className='chart'>
        {data.map((item) => {
          return (
            <Bar
              key={item.id}
              {...item}
              height={(item.ticketCount / maxTicketCount) * 100}
            />
          );
        })}
      </div>
      <div className='y-axis-label'>Number of tickets</div>
      <div className='x-axis-label'>Departments</div>
    </motion.div>
  );
};

export default BarChart;
