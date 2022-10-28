import DayList from './DayList';

import { data } from './temp/data';

const List = () => {
  // TODO fetch data

  return (
    <div>
      {data.map((item: any, index: number) => (
        <DayList {...item} key={item.date} index={index} />
      ))}
    </div>
  );
};

export default List;
