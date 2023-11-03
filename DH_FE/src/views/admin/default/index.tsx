import TotalSpent from "src/views/admin/default/components/TotalMeasurements";
import HeartBeat from "./components/HeartBeat";
import AllMeasurements from "./components/AllMeasurements";
import Banner from "../profile/components/Banner";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import TemperatureRecords from "./components/TemperatureRecords";
import { io } from "socket.io-client";

const getAllPatientStats = async (patientId: string) => {
  const response = await fetch(`http://localhost:4000/api/sensors/?patientId=${patientId}`)
  const data = response.json()
  return data;
}

const Dashboard = () => {
  const { userId } = useParams()
  const [patientStats, setPatientStats] = useState<PatientStat[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const { patientName, patientNationalID, frequentSickness } = location.state
  
  const socket = io('http://localhost:4000')

  useEffect(()=> {
    getAllPatientStats(userId).then(data => {
      setPatientStats(data)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    socket.on('send-sensor-data', (sensorData) => {
      setPatientStats(sensorData)
      console.log(sensorData)
    })
  }, [userId])

  if (isLoading) return <div className="w-full h-full ">Loading...</div>

  return (
    <div className="w-full h-fit grid grid-cols-[40%_20%_35%] grid-rows-[40rem_30rem] gap-6 mt-8">
      <AllMeasurements patientStats={patientStats} />
      <Banner patientInfo={{ patientName, patientNationalID, frequentSickness }} />
      <TemperatureRecords patientStats={patientStats} />
      <HeartBeat patientStats={patientStats} />
    </div>
  );
};

export default Dashboard;
