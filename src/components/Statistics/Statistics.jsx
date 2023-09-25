import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie } from 'recharts';

const Statistics = () => {
    const [donar, setDonar] = useState([])
    const [total ,setTotal] = useState(0)
    const [donTotal, setDontotal] = useState(0)
    const donation = useLoaderData();

    useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem('donate'))

        const donationPrices = donation.map((card) => card.price);
        const totalCardDonation = donationPrices.reduce((accumulator, price) => accumulator + price, 0);
        const percentTotalDonation = (totalCardDonation ) /100;

        setDontotal(percentTotalDonation)
        if(donateItem){
            const totalAmount = donateItem.reduce((accumulator, item) => accumulator + item.price, 0);
            const percentTotalAmount = (totalAmount) /100;
            setTotal(percentTotalAmount)

        setDonar(donateItem)
     }
    //  console.log(donation)
    },[])
    const data = [
        { name: 'Your Donation', value: total },
        // { name: 'Remaining Donation', value: 100 - total },
    ];

    const donTotalData = [
        { name: 'Total Donation', value: donTotal },
        // { name: 'Remaining Donation', value: 100 - donTotal },
    ]
   
    return (
        <div>
            <h1>This is statistics section</h1>

<PieChart width={730} height={250} >
  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#FF0000" />
  <Pie data={donTotalData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
            
            <p> your donation: {total}% </p>
            <p>Total : {donTotal} %</p>
        </div>
    );
};

export default Statistics;