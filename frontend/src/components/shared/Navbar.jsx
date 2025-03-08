import React from 'react'
// import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
export default function Navbar() {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#F83004]'>Portal</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className='cursor-pointer'>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <div className='flex gap-4 space-y-2'>
                                <Avatar className='cursor-pointer'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                                <div>
                                    <h4 className='font-medium'>URVI CHAVDA</h4>
                                    <p className='text-sm text-muted-foreground'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facilis harum debitis hic quaerat illum, reiciendis odit? At laborum ducimus quibusdam possimus tempore doloremque, explicabo voluptates voluptate! Accusantium, vitae. Omnis?</p>
                                </div>
                            </div>
                            <div>
                                <Button variant="link">View Profile</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
}
