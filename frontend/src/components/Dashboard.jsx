import React from 'react';
import Chart from "./Chart";

function Dashboard() {
    return (
    <div className='flex flex-col space-y-6 py-12 px-14'>
        <h2>Dashboard</h2>

        <div className='flex space-x-8'>
            <div className='w-2/5 h-[150px] border flex flex-col justify-center p-4 text-gray-600'>
                <span>Laurence Paul Quiniano</span>
                <span className='text-gray-500'>Your Balance: ₱ 80,000</span>
            </div>
            <div className='w-2/5 h-[150px] border flex flex-col justify-center p-4 text-gray-600'>
                <span>Laurence Paul Quiniano</span>
                <span className='text-gray-500'>Your Expenses: ₱ 44,000</span>
            </div>
        </div>
        <div className='flex space-x-8 w-4/5 flex-col'>
            <h2>Expenses Chart</h2>
            <Chart className = "w-4/5"/>
        </div>
        <div className='flex space-x-8'>
            <div className='w-2/5 h-[150px] border flex flex-col justify-center p-4 text-gray-600'>
                <span>Your Activity</span>
                <li className='mt-4'>You ordered PCX 160 from Honda Philippines.</li>
            </div>
            <div className='w-2/5 h-[150px] border flex flex-col justify-center p-4 text-gray-600'>
                <span>Pending Bills</span>
                <li className='mt-4'>Housing Loan: ₱ 12,000</li>
            </div>
        </div>
    </div>
    );
}

export default Dashboard