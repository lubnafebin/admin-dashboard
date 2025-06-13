import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export const Single = () => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img
              src="https://imgs.search.brave.com/fyO2n0KdOq_TXvQaxoaUW65Z_KGzAJp4SGCXUrnGpkQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTky/MzU0NDg5NS9waG90/by93b21hbi1jb250/ZW1wbGF0aW5nLWlu/LWZvcmVzdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dHR3/V3FsemhZZFN4Q3g5/bi1CdTRGUTdPRWNM/enJlQmJvblBpc253/ZDh2WT0"
              alt=""
            />
            <h1>Jhon Doe</h1>
            <button>Update</button>
          </div>
          <div className="details">
            <div className="item">
              <span className="itemTitle">Username:</span>
              <span className="itemValue">johndoe</span>
            </div>
            <div className="item">
              <span className="itemTitle">Email:</span>
              <span className="itemValue">johndoe@example.com</span>
            </div>
            <div className="item">
              <span className="itemTitle">Phone:</span>
              <span className="itemValue">+1234567890</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        <ul>
          <li>
            <div>
              <p>Jhon Doe Purchased 5 Digital Editions</p>
              <span>1 hour ago</span>
            </div>
          </li>
          <li>
            <div>
              <p>Jhon Doe Purchased 5 Digital Editions</p>
              <span>1 hour ago</span>
            </div>
          </li>
          <li>
            <div>
              <p>Jhon Doe Purchased 5 Digital Editions</p>
              <span>1 hour ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
