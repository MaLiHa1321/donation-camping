// import { PieChart, Pie } from 'recharts';
// import { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';


// const Statistics = () => {
//     const [donar, setDonar] = useState([])
//     const [total ,setTotal] = useState(0)
//     const [donTotal, setDontotal] = useState(0)
//     const donation = useLoaderData();

//     useEffect(()=>{
//         const donateItem = JSON.parse(localStorage.getItem('donate'))

//         const donationPrices = donation.map((card) => card.price);
//         const totalCardDonation = donationPrices.reduce((accumulator, price) => accumulator + price, 0);
//         const percentTotalDonation = parseFloat(totalCardDonation ) /100;

//         setDontotal(percentTotalDonation)
//         if(donateItem){
//             const totalAmount = donateItem.reduce((accumulator, item) => accumulator + item.price, 0);
//             // const percentTotalAmount = parseFloat(totalAmount / totalCardDonation) * 100
//             setTotal(totalAmount)

//         setDonar(donateItem)
//      }
//     //  console.log(donation)
//     },[])


    
//     const yourDonation = (donTotal / total) *100 ;

//     const data = [
//         { name: 'Your Donation', value: yourDonation },
//         { name: 'Remaining Donation', value: 100-  yourDonation },
      
//     ];

//     const donTotalData = [
//         { name: 'Total Donation', value: donTotal },
//         { name: 'Remaining Donation', value: 100- donTotal },
      
//     ];
   
//     return (
//         <div>
//             <h1>This is statistics section</h1>

// {/* <PieChart width={730} height={250} >
//   <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%"  fill="#FF0000" />
//   <Pie data= {donTotalData} dataKey="value" nameKey="name" cx="50%" cy="50%"  fill="#82ca9d" label />
// </PieChart> */}
            
           
//             <div className="container mx-auto p-4">
//                 <div style={{ maxWidth: '100%' }}> {/* Set maxWidth to prevent scrollbars */}
//                     <PieChart width={window.innerWidth <= 768 ? 200 : 630} height={250}>
//                         <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#FF0000" innerRadius={60} label />
//                         <Pie data={donTotalData} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#00FF00" label />
//                     </PieChart>
//                 </div>
//             </div>

//             {/* <p>Your donation: {(yourDonation * 100).toFixed(2)}%</p>
//             <p>Total : {(donTotal / totalPercentage * 100).toFixed(2)}%</p> */}
//         </div>
//     );
// };

// export default Statistics;







import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const [totalDonation, setTotalDonation] = useState(0);
    const [localStorageDonation, setLocalStorageDonation] = useState(0);
    const donation = useLoaderData();

    useEffect(() => {
        const donationPrices = donation.map((card) => card.price);
        const totalCardDonation = donationPrices.reduce((accumulator, price) => accumulator + price, 0);
        setTotalDonation(totalCardDonation);

        const donateItem = JSON.parse(localStorage.getItem('donate'));
        if (donateItem) {
            const totalLocalStorageDonation = donateItem.reduce((accumulator, item) => accumulator + item.price, 0);
            setLocalStorageDonation(totalLocalStorageDonation);
        }
    }, [donation]);

    const totalPercentage = 100;
    const totalDonationPercentage = (totalDonation / totalPercentage).toFixed(2);
    const localStorageDonationPercentage = (localStorageDonation / totalPercentage).toFixed(2);

    const data = [
        { name: 'Total Donation', value: parseFloat(totalDonationPercentage) },
        { name: 'Local Storage Donation', value: parseFloat(localStorageDonationPercentage) },
    ];

    const COLORS = [ '#FF0000', '#00FF00'];

    return (
        <div>
           

            <div className="container mx-auto p-4">
                <div style={{ maxWidth: '100%' }}>
                    <PieChart width={window.innerWidth <= 768 ? 200 : 630} height={250}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>

            <p>Total Donation: {totalDonationPercentage}%</p>
            <p>Your Donation: {localStorageDonationPercentage}%</p>
        </div>
    );
};

export default Statistics;
