import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className=' w-full h-screen bg-black flex justify-center items-center p-4'>
            <form method='POST' action='https://getform.io/f/0f62fa35-34fd-4175-a8b9-b8ec2c5b1800' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0F9D58] text-white'>Contact</p>
                    <p className='text-blue-400 py-4'>Submit the form below or shoot me an email - tcolson10@gmail.com</p>
                </div>
                <input className='bg-white p-2' type='text' placeholder='Name' name='name'></input>
                <input className='my-4 p-2 bg-white' type='email' placeholder='Email' name='email'></input>
                <textarea className='bg-white p-2' name='message' rows='10' placeholder='Message' ></textarea>
                <button className='text-white border-2 hover:bg-gray-600 hover:border-gray-600 px-10 py-3 my-8 mx-auto flex items-center'>Send</button>
            </form>
        </div>
    )
}

export default Contact