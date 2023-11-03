// const measurements = [
//     {
//         heartRate: 40,
//         bodyTemperature: 34,
//         patientId: 2
//     },
//     {
//         heartRate: 54,
//         bodyTemperature: 33.8,
//         patientId: 2
//     },
//     {
//         heartRate: 65,
//         bodyTemperature: 39.3,
//         patientId: 2
//     },
//     {
//         heartRate: 76.2,
//         bodyTemperature: 32.7,
//         patientId: 2
//     },
//     {
//         heartRate: 70.5,
//         bodyTemperature: 35.5,
//         patientId: 2
//     },
//     {
//         heartRate: 67.3,
//         bodyTemperature: 39.1,
//         patientId: 2
//     },
//     {
//         heartRate: 56.5,
//         bodyTemperature: 38.3,
//         patientId: 2
//     },
//     {
//         heartRate: 65.3,
//         bodyTemperature: 36.6,
//         patientId: 2
//     },
//     {
//         heartRate: 72.5,
//         bodyTemperature: 35.5,
//         patientId: 2
//     }
// ]

// const createNewResource = async (obj) => {
//     fetch('http://localhost:4000/api/sensors', {
//         method: 'POST',
//         body: JSON.stringify(obj),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }

// const bulkCreateNewResources = (arr) => {
//     let idx = 0;

//     setInterval(async() => {
//         await createNewResource(arr[idx])
//         idx +=1
//     }, 20000)
// }

// bulkCreateNewResources(measurements)

const deleteResource = async(id) => {
    fetch(`http://localhost:4000/api/sensors/${id}?patientId=1`, {
        method: 'DELETE'
    })
}

deleteResource(275)
