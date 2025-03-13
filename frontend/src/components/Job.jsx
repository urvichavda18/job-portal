import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

function Job() {
  const navigate = useNavigate();
  const jobId = "naamjoonjinjhopejiminthvjk"
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
      </div>
      <div className='flex items-center gap-5 my-2'>
        <Button className='p-6' variant='outline' size='icon'>
          <Avatar>
            <AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnNwtjy7XtgFppO1YTK7xs041HzLoSe5C6Nsm0-zw8FOxDhAMT2IPz58_hloY3w4oIRY&usqp=CAU' />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>Company Name</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus adipisci laboriosam, nisi nihil architecto provident ipsam. Odit odio assumenda aut!</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button  onClick={()=>navigate(`/description/${jobId}`)} variant='outline'>Details</Button>
        <Button className='bg-[#6A69C2] hover:bg-[#3e3d8f]'>Save for Later</Button>
      </div>
    </div>
  )
}

export default Job
