import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className=' w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action='https://getform.io/f/0f62fa35-34fd-4175-a8b9-b8ec2c5b1800' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-300 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - tcolson10@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'></input>
                <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'></input>
                <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message' ></textarea>
                <button className='text-white border-2 hover:bg-green-300 hover:border-green-300 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
            </form>
        </div>
    )
}

export default Contact