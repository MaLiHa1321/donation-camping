
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell,Tooltip } from 'recharts';

const Statistics = () => {
    const [totalDonation, setTotalDonation] = useState(0);
    const [yourDonation, setYourDonation] = useState(0);
    const donation = useLoaderData();

    

    useEffect(() =>{
        const donationPrice = donation.map((card) => card.price);
        const totalDonation = donationPrice.reduce((pre, price) => pre + price,0);
        setTotalDonation(totalDonation);


        const donarItem = JSON.parse(localStorage.getItem('donate'));
        if(donarItem){
         const totalYourDonation = donarItem.reduce((pre, item) => pre + item.price, 0);
         setYourDonation(totalYourDonation)


    }
},[donation]);

const total = 100;
const totalDonationParcentage = (totalDonation / total).toFixed(2);
const yourDonationParcentage = ((yourDonation / totalDonation ) * 100).toFixed(2);

const data =[

   { name: 'Total donation', value: parseFloat(totalDonationParcentage)},
   {name: 'Your  Donation', value: parseFloat( yourDonationParcentage)}
]
const COLORS = [ '#FF0000', '#00FF00'];

return (
    <div className='mt-8'>
       

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
                     <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
            </div>
        </div>
        <div className='text-center'>
        <p>Total Donation: {totalDonationParcentage}%</p>
        <p>Your Donation: {yourDonationParcentage}%</p>

        </div>

     
    </div>
);
  }


export default Statistics;


